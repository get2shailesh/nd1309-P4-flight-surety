import FlightSuretyApp from '../../build/contracts/FlightSuretyApp.json';
import Config from './config.json';
import Web3 from 'web3';
import express from 'express';
import "babel-polyfill";


let config = Config['localhost'];
let web3 = new Web3(new Web3.providers.WebsocketProvider(config.url.replace('http', 'ws')));
web3.eth.defaultAccount = web3.eth.accounts[0];
let flightSuretyApp = new web3.eth.Contract(FlightSuretyApp.abi, config.appAddress);
//SD: Adding statuses for randomization, with 20 status first..
//SD: so it can be selected in a loop differently from the rest.
const statuses = [20, 0, 10, 30, 40, 50];

//SD: function to register Oracles
async function registerOracles() {
	const fee = await flightSuretyApp.methods.getRegistrationFee().call()
	const accounts = await web3.eth.getAccounts();
	for (const account of accounts) {
		console.log('account=', account)
		await flightSuretyApp.methods.registerOracle().send({
			from: account,
			value: fee,
			gas: 6721900
		});
	}
	console.log('[', accounts.length, '] Oracles registered');
}

//SD: Create a random status generator function
const gerRandomFlightStatusCode = () =>{
    let index = Math.floor(Math.random() * Math.floor(10));
    if (index <= 7)
        return statuses[0];
    else {
        return statuses[Math.floor(Math.random() * Math.floor(5)) + 1];
    }    
};

//SD: function to mimic Oracle response as if it is coming from outside.
async function simulateOracleResponse(requestedIndex, airline, flight, timestamp) {
	const accounts = await web3.eth.getAccounts();
	for (const account of accounts) {
		var indexes = await flightSuretyApp.methods.getMyIndexes().call({ from: account });
		console.log("Oracles indexes: " + indexes + " for account: " + account);
		for (const index of indexes) {
			try {
				if (requestedIndex == index) {
					let statusCode = gerRandomFlightStatusCode();
					console.log("Submitting Oracle response For Flight: " + flight + " at Index: " + index);
					await flightSuretyApp.methods.submitOracleResponse(
						index, airline, flight, timestamp, statusCode
					).send({ from: account, gas: 6721900 });

				}
			} catch (e) {
				console.log(e);
			}
		}
	}
}

registerOracles();

flightSuretyApp.events.OracleRequest({}).on('data', async (event, error) => {
	if (!error) {
		await simulateOracleResponse(
			event.returnValues[0],
			event.returnValues[1],
			event.returnValues[2],
			event.returnValues[3] 
		);
	}
});

flightSuretyApp.events.FlightStatusInfo({}).on('data', async (event, error) => {
	console.log("event=", event);
	console.log("error=", error);
});

const app = express();
app.get('/api', (req, res) => {
	res.send({
		message: 'An API for use with your Dapp!'
	})
})

export default app;


