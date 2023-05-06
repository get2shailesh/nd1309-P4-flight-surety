import FlightSuretyApp from '../../build/contracts/FlightSuretyApp.json';
import Config from './config.json';
import Web3 from 'web3';

export default class Contract {
    constructor(network, callback) {

        let config = Config[network];
        this.web3 = new Web3(new Web3.providers.HttpProvider(config.url));
        this.flightSuretyApp = new this.web3.eth.Contract(FlightSuretyApp.abi, config.appAddress);
        this.initialize(callback);
        this.owner = null;
        this.airlines = [];
        this.passengers = [];
    }

    initialize(callback) {
        this.web3.eth.getAccounts((error, accts) => {

            this.owner = accts[0];

            let counter = 1;

            while (this.airlines.length < 5) {
                this.airlines.push(accts[counter++]);
            }

            while (this.passengers.length < 5) {
                this.passengers.push(accts[counter++]);
            }

            callback();
        });
    }

    isOperational(callback) {
        let self = this;
        self.flightSuretyApp.methods
            .isOperational()
            .call({ from: self.owner }, callback);
    }
//SD: registration of the airline
    registerAirline(airlineName, airlineAddress, callback) {
        let self = this;
        self.flightSuretyApp.methods
            .registerAirline(airlineName, airlineAddress)
            .send({ from: self.owner, gas: 6721900 }, callback);
    }
//SD: funding process by paying 10 ether.
    fundAirline(airlineAddress, callback) {
        let self = this;
        const fee = this.web3.utils.toWei('10', 'ether');
        self.flightSuretyApp.methods
            .fundAirline(airlineAddress)
            .send({ from: airlineAddress, value: fee }, callback);
    }
//SD: voting to add airline in the mix.
    voteForAirline(airlineAddress, callback) {
        let self = this;
        self.flightSuretyApp.methods
            .voteForAirline(airlineAddress)
            .send({ from: self.owner, gas: 6721900 }, callback);
    }
//SD: Code to confirm if the airline is registered.
    isAirlineRegistered(airlineAddress, callback) {
        let self = this;
        self.flightSuretyApp.methods
            .isAirlineRegistered(airlineAddress)
            .call({ from: self.owner }, callback);
    }
//SD: Code to confirm if the airline is funded.
    isAirlineFunded(airlineAddress, callback) {
        let self = this;
        self.flightSuretyApp.methods
            .isAirlineFunded(airlineAddress)
            .call({ from: self.owner }, callback);
    }
//SD: Code to check if the airline is pending
    isAirlinePending(airlineAddress, callback) {
        let self = this;
        self.flightSuretyApp.methods
            .isAirlinePending(airlineAddress)
            .call({ from: self.owner }, callback);
    }
//SD: Process to buy insurance.
    buy(flightName, airlineAddress, timestamp, amount, callback) {
        let self = this;
        const insuredAmount = this.web3.utils.toWei(amount, 'ether');
        self.flightSuretyApp.methods
            .buy(flightName, airlineAddress, timestamp)
            .send({ from: self.owner, gas: 6721900, value: insuredAmount }, callback);
    }
//SD: Code to get the status of the flight
    fetchFlightStatus(flightName, airlineAddress, timestamp, callback) {
        let self = this;
        let payload = {
            airline: airlineAddress,
            flight: flightName,
            timestamp: timestamp
        }
        self.flightSuretyApp.methods
            .fetchFlightStatus(payload.airline, payload.flight, payload.timestamp)
            .send({ from: self.owner }, (error, result) => {
                callback(error, payload);
            });
    }
//SD: Code to get passanger's credit.
    getPassengerCredit(passangerAddress, callback) {
        let self = this;
        self.flightSuretyApp.methods
            .getPassengerCredit(passangerAddress)
            .call({ from: self.owner }, callback);
    }
//SD: Code to withdraw ether from passanger's address
    withdrawCredit(pessangerAddress, callback) {
        let self = this;
        self.flightSuretyApp.methods
            .withdrawCredit(pessangerAddress)
            .send({ from: self.owner }, (error, result) => {
                callback(error, result);
            });
    }
}