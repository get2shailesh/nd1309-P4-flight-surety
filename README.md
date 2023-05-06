

----------------------FLIGHT SURETY DAPP PROJECT – INTRODUCTION----------------------


Flight Surety Decentralized application is a great way to connect the airlines and passengers to trade insurance and create a business model for airlines to register as well as for passengers to get a market place for their surety.

This project uses solidity contracts, node.js, truffle, Ganache, visual studio Code and other web3 tools.

This project uses the next libraries and versions. A brief description of its use is provided:

$ truffle -v
Truffle v5.8.1 (core: 5.8.1) - Smart contract development environment
Ganache v7.7.7 - Local Ethereum blockchain emulator.
Solidity - ^0.6 (solc-js) - Object-oriented, high-level language for implementing smart contracts
Node v14.17.3 - JavaScript runtime that allow to develop different type de applications
Web3.js v1.8.2 - Collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
Webpack v4.46.0 - Allow to create the Dapp UI and simulate Oracles server.
Infura - Allow the developers to connect to Ethereum networks without to store the full Ethereum blockchain.


----------------------INSTALLATION----------------------

STEP1: Execute ganache-cli with following parameters (This command is required to be executed before compiling, running tests or deploy the smart contracts). Per guidance, setting up 20 accounts. 

$ ganache-cli -a 20 -l 9999999 -m "candy maple cake sugar pudding cream honey rich smooth crumble sweet treat"
ganache v7.7.7 (@ganache/cli: 0.8.6, @ganache/core: 0.8.6)
Starting RPC server

Available Accounts
==================
(0) 0x627306090abaB3A6e1400e9345bC60c78a8BEf57 (1000 ETH)
(1) 0xf17f52151EbEF6C7334FAD080c5704D77216b732 (1000 ETH)
(2) 0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef (1000 ETH)
(3) 0x821aEa9a577a9b44299B9c15c88cf3087F3b5544 (1000 ETH)
(4) 0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2 (1000 ETH)
(5) 0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e (1000 ETH)
(6) 0x2191eF87E392377ec08E7c08Eb105Ef5448eCED5 (1000 ETH)
(7) 0x0F4F2Ac550A1b4e2280d04c21cEa7EBD822934b5 (1000 ETH)
(8) 0x6330A553Fc93768F612722BB8c2eC78aC90B3bbc (1000 ETH)
(9) 0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE (1000 ETH)
(10) 0xE44c4cf797505AF1527B11e4F4c6f95531b4Be24 (1000 ETH)
(11) 0x69e1CB5cFcA8A311586e3406ed0301C06fb839a2 (1000 ETH)
(12) 0xF014343BDFFbED8660A9d8721deC985126f189F3 (1000 ETH)
(13) 0x0E79EDbD6A727CfeE09A2b1d0A59F7752d5bf7C9 (1000 ETH)
(14) 0x9bC1169Ca09555bf2721A5C9eC6D69c8073bfeB4 (1000 ETH)
(15) 0xa23eAEf02F9E0338EEcDa8Fdd0A73aDD781b2A86 (1000 ETH)
(16) 0xc449a27B106BE1120Bd1Fd62F8166A2F61588eb9 (1000 ETH)
(17) 0xF24AE9CE9B62d83059BD849b9F36d3f4792F5081 (1000 ETH)
(18) 0xc44B027a94913FB515B19F04CAf515e74AE24FD6 (1000 ETH)
(19) 0xcb0236B37Ff19001633E38808bd124b60B1fE1ba (1000 ETH)

Private Keys
==================
(0) 0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3
(1) 0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f
(2) 0x0dbbe8e4ae425a6d2687f1a7e3ba17bc98c673636790f1b8ad91193c05875ef1
(3) 0xc88b703fb08cbea894b6aeff5a544fb92e78a18e19814cd85da83b71f772aa6c
(4) 0x388c684f0ba1ef5017716adb5d21a053ea8e90277d0868337519f97bede61418
(5) 0x659cbb0e2411a44db63778987b1e22153c086a95eb6b18bdf89de078917abc63
(6) 0x82d052c865f5763aad42add438569276c00d3d88a2d062d36b2bae914d58b8c8
(7) 0xaa3680d5d48a8283413f7a108367c7299ca73f553735860a87b08f39395618b7
(8) 0x0f62d96d6675f32685bbdb8ac13cda7c23436f63efbb9d07700d8669ff12b7c4
(9) 0x8d5366123cb560bb606379f90a0bfd4769eecc0557f1b362dcae9012b548b1e5
(10) 0xdbb9d19637018267268dfc2cc7aec07e7217c1a2d6733e1184a0909273bf078b
(11) 0xaa2c70c4b85a09be514292d04b27bbb0cc3f86d306d58fe87743d10a095ada07
(12) 0x3087d8decc5f951f19a442397cf1eba1e2b064e68650c346502780b56454c6e2
(13) 0x6125c8d4330941944cc6cc3e775e8620c479a5901ad627e6e734c6a6f7377428
(14) 0x1c3e5453c0f9aa74a8eb0216310b2b013f017813a648fce364bf41dbc0b37647
(15) 0xea9fe9fd2f1761fc6f1f0f23eb4d4141d7b05f2b95a1b7a9912cd97bddd9036c
(16) 0xfde045729ba416689965fc4f6d3f5c8de6f40112d2664ab2212208a17842c5c9
(17) 0xd714e4a16a539315abb2d86401e4ceae3cf901849769345e3ab64ee46d998b64
(18) 0x737f5c61de545d32059ce6d5bc72f7d34b9963310adde62ef0f26621266b65dc
(19) 0x49b2e2b48cfc25fda1d1cbdb2197b83902142c6da502dcf1871c628ea524f11b

HD Wallet
==================
Mnemonic:      candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
Base HD Path:  m/44'/60'/0'/0/{account_index}

Default Gas Price
==================
2000000000

BlockGas Limit
==================
9999999

Call Gas Limit
==================
50000000

Chain Id
==================
1337

RPC Listening on 127.0.0.1:8545

STEP2: Compiling solidity contracts and testing it using test cases:

$ truffle compile

Compiling your contracts...
===========================
> Compiling .\contracts\FlightSuretyApp.sol Attempt #1
> Compiling .\contracts\FlightSuretyData.sol
> Compiling .\contracts\Migrations.sol
> Compiling .\node_modules\@openzeppelin\contracts\math\SafeMath.sol
> Compilation warnings encountered:

    project:/contracts/FlightSuretyApp.sol:221:9: Warning: Using ".value(...)" is deprecated. Use "{value: ...}" instead.
        flightSuretyData.fundAirline.value(msg.value)(airlineAddress, msg.value);
        ^--------------------------------^
,project:/contracts/FlightSuretyApp.sol:238:9: Warning: Using ".value(...)" is deprecated. Use "{value: ...}" instead.
        flightSuretyData.buy.value(msg.value)(flightKey, msg.sender, msg.value);
        ^------------------------^

> Artifacts written to C:\Users\blunionsolutions\Documents\02-CRYPTO-DEFI\Blockchain Developer\project-code\flight-surety-SD2\build\contracts
> Compiled successfully using:
   - solc: 0.6.12+commit.27d51765.Emscripten.clang
⠸ Fetching solc version list from solc-bin. Attempt #1

  Contract: Flight Surety Testsom solc-bin. Attempt #1
    ✔ (multiparty) has correct initial isOperational() value
    ✔ (multiparty) can block access to setOperatingStatus() for non-Contract Owner account (90ms)
    ✔ (multiparty) can allow access to setOperatingStatus() for Contract Owner account (42ms)
    ✔ (multiparty) can block access to functions using requireIsOperational when operating status is false (98ms)
    ✔ (airline) cannot register an Airline using registerAirline() if it is not funded (111ms)
    ✔ (airline) can not be funded with less then 10 ether (128ms)
    ✔ (airline) can be funded with 10 or more ether only (115ms)
    ✔ Funded Airline can register other airline (125ms)
    ✔ Fifth and above airline registered require registration consensus (422ms)
    ✔ Fifth airline waiting to be registered requires at least 50% consensus votes (194ms)
    ✔ (insurence) Pessanger purchase insurence paying 1 ether max (306ms)
⠹ Fetching solc version list from solc-bin. Attempt #1
  Contract: Oracles
    ✔ can register oracles (8412ms)olc-bin. Attempt #1
    ✔ can request flight status (2979ms)in. Attempt #1
  13 passing (14s)

STEP3: Migrating the contracts to development network:

$ truffle migrate --network development

<Log for compilation of code is omitted since it is the same as above>

Starting migrations...
======================
> Network name:    'development'
> Network id:      1683380835531
> Block gas limit: 9999999 (0x98967f)


1_initial_migration.js
======================
⠼ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x38f23da8a1f4e69e69427527b3208682ddd55d07cb7088eb00e2f0fe519944b6
   > Blocks: 0            Seconds: 0
   > contract address:    0xFB88dE099e13c3ED21F80a7a1E49f8CAEcF10df6
   > block number:        85
   > block timestamp:     1683381241
   > account:             0x627306090abaB3A6e1400e9345bC60c78a8BEf57
   > balance:             999.967147617408841104
   > gas used:            221335 (0x36097)
   > gas price:           2.500017834 gwei
   > value sent:          0 ETH
   > total cost:          0.00055334144728839 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00055334144728839 ETH

⠦ Fetching solc version list from solc-bin. Attempt #1
2_deploy_contracts.js
=====================
⠇ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'FlightSuretyData'
   ----------------------------
   > transaction hash:    0x797ae687a7af3506466ec65ef46510ce7c9d199dae86d323114c2ae604e224b2
   > Blocks: 0            Seconds: 0
   > contract address:    0xf204a4Ef082f5c04bB89F7D5E6568B796096735a
   > block number:        87
   > block timestamp:     1683381241
   > account:             0x627306090abaB3A6e1400e9345bC60c78a8BEf57
   > balance:             999.962528761899645116
   > gas used:            1801772 (0x1b7e2c)
   > gas price:           2.500013759 gwei
   > value sent:          0 ETH
   > total cost:          0.004504454790580948 ETH

⠏ Fetching solc version list from solc-bin. Attempt #1
   Deploying 'FlightSuretyApp'
   ---------------------------
   > transaction hash:    0xf643dc4b6e05d30f709f790217eb8ea811b0273d64f666ef00337eac8fb99ff0
   > Blocks: 0            Seconds: 0
   > contract address:    0x75c35C980C0d37ef46DF04d31A140b65503c0eEd
   > block number:        88
   > block timestamp:     1683381241
   > account:             0x627306090abaB3A6e1400e9345bC60c78a8BEf57
   > balance:             999.954326857868694161
   > gas used:            3280745 (0x320f69)
   > gas price:           2.500012659 gwei
   > value sent:          0 ETH
   > total cost:          0.008201904030950955 ETH

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.012706358821531903 ETH

Summary
=======
> Total deployments:   3
> Final cost:          0.013259700268820293 ETH

STEP4: As a result, config.json file for both dapp and server gets automatically updated with the deployment addresses as follows:

{
	"localhost": {
		"url": "http://localhost:8545",
		"dataAddress": "0xf204a4Ef082f5c04bB89F7D5E6568B796096735a",
		"appAddress": "0x75c35C980C0d37ef46DF04d31A140b65503c0eEd"
	}
}

STEP5: version related adjustments. 
One of the things that I ran into is the version control - I originally had node v18.x. I had to downgrade the version to v14. Also, multiple node modules needed to be adjusted to prior versions to make the code work. Please review package.json for further details in the DevDependecies section. 

Changed webpack.config.server.js to use allowlist instead whitelist, commented following line of code due to versioning issue:
//new webpack.NamedModulesPlugin()

For webpack.config.dapp.js - commented following line of code due to versioning issue:
//stats: "minimal" -- SD: commented this.



----------------------STARTING THE SERVER AND REGISTERING THE ORACLES----------------------

Starting the server by issuing following command. 

$ npm run server

> flight-surety@1.0.0 server C:\Users\blunionsolutions\Documents\02-CRYPTO-DEFI\Blockchain Developer\project-code\flight-surety-SD2> webpack --config webpack.config.server.js


webpack is watching the files…

Hash: 5a04b003d87a1b99e8cf
Version: webpack 4.46.0
Time: 11035ms
Built at: 05/06/2023 10:50:35 AM
    Asset     Size  Chunks             Chunk Names
server.js  560 KiB       0  [emitted]  main
Entrypoint main = server.js
 [0] ./src/server/server.js 21.2 KiB {0} [built]
 [1] external "web3" 42 bytes {0} [built]
 [2] (webpack)/hot/log.js 1.34 KiB {0} [built]
 [3] external "http" 42 bytes {0} [built]
 [4] ./build/contracts/FlightSuretyApp.json 1.23 MiB {0} [built]
 [5] ./src/server/config.json 180 bytes {0} [built]
 [6] external "express" 42 bytes {0} [built]
 [7] multi webpack/hot/poll?1000 ./src/server/index 40 bytes {0} [built]
 [8] (webpack)/hot/poll.js?1000 1.12 KiB {0} [built]
 [9] (webpack)/hot/log-apply-result.js 1.27 KiB {0} [built]
[10] ./src/server/index.js 307 bytes {0} [built]
[11] external "babel-polyfill" 42 bytes {0} [built]

WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' option to 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/configuration/mode/
account= 0x627306090abaB3A6e1400e9345bC60c78a8BEf57
account= 0xf17f52151EbEF6C7334FAD080c5704D77216b732
account= 0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef
account= 0x821aEa9a577a9b44299B9c15c88cf3087F3b5544
account= 0x0d1d4e623D10F9FBA5Db95830F7d3839406C6AF2
account= 0x2932b7A2355D6fecc4b5c0B6BD44cC31df247a2e
account= 0x2191eF87E392377ec08E7c08Eb105Ef5448eCED5
account= 0x0F4F2Ac550A1b4e2280d04c21cEa7EBD822934b5
account= 0x6330A553Fc93768F612722BB8c2eC78aC90B3bbc
account= 0x5AEDA56215b167893e80B4fE645BA6d5Bab767DE
account= 0xE44c4cf797505AF1527B11e4F4c6f95531b4Be24
account= 0x69e1CB5cFcA8A311586e3406ed0301C06fb839a2
account= 0xF014343BDFFbED8660A9d8721deC985126f189F3
account= 0x0E79EDbD6A727CfeE09A2b1d0A59F7752d5bf7C9
account= 0x9bC1169Ca09555bf2721A5C9eC6D69c8073bfeB4
account= 0xa23eAEf02F9E0338EEcDa8Fdd0A73aDD781b2A86
account= 0xc449a27B106BE1120Bd1Fd62F8166A2F61588eb9
account= 0xF24AE9CE9B62d83059BD849b9F36d3f4792F5081
account= 0xc44B027a94913FB515B19F04CAf515e74AE24FD6
account= 0xcb0236B37Ff19001633E38808bd124b60B1fE1ba
[ 20 ] Oracles registered

Server is started successfully and 20 Oracles registered. 



----------------------STARTING THE DAPP AND RUNNING THE UI FUNCTIONALITY----------------------

Starting the dapp by issuing following command. 

$ npm run dapp

> flight-surety@1.0.0 dapp C:\Users\blunionsolutions\Documents\02-CRYPTO-DEFI\Blockchain Developer\project-code\flight-surety-SD2
> webpack-dev-server --mode development --config webpack.config.dapp.js

i ｢wds｣: Project is running at http://localhost:8000/
i ｢wds｣: webpack output is served from /
i ｢wds｣: Content not from webpack is served from C:\Users\blunionsolutions\Documents\02-CRYPTO-DEFI\Blockchain Developer\project-code\flight-surety-SD2\dapp
i ｢wdm｣: Hash: 364bf91c2141838e0269
Version: webpack 4.46.0
Time: 12724ms
Built at: 05/06/2023 12:23:50 PM
                               Asset      Size  Chunks             Chunk Names
                           bundle.js  2.73 MiB    main  [emitted]  main
e0ac53b168d88f5eaa10b1cda2c19a09.jpg   245 KiB          [emitted]
                          index.html  4.04 KiB          [emitted]
Entrypoint main = bundle.js
[0] multi (webpack)-dev-server/client?http://localhost:8000 babel-polyfill ./src/dapp 52 bytes {main} [built]
[./node_modules/babel-polyfill/lib/index.js] 833 bytes {main} [built]
[./node_modules/babel-polyfill/node_modules/regenerator-runtime/runtime.js] 23.9 KiB {main} [built]
[./node_modules/core-js/fn/regexp/escape.js] 108 bytes {main} [built]
[./node_modules/core-js/shim.js] 8.03 KiB {main} [built]
[./node_modules/strip-ansi/index.js] 161 bytes {main} [built]
[./node_modules/webpack-dev-server/client/index.js?http://localhost:8000] (webpack)-dev-server/client?http://localhost:8000 4.29 KiB {main} [built]
[./node_modules/webpack-dev-server/client/overlay.js] (webpack)-dev-server/client/overlay.js 3.52 KiB {main} [built]
[./node_modules/webpack-dev-server/client/socket.js] (webpack)-dev-server/client/socket.js 1.53 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/createSocketUrl.js] (webpack)-dev-server/client/utils/createSocketUrl.js 2.91 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/log.js] (webpack)-dev-server/client/utils/log.js 964 bytes {main} [built]
[./node_modules/webpack-dev-server/client/utils/reloadApp.js] (webpack)-dev-server/client/utils/reloadApp.js 1.59 KiB {main} [built]
[./node_modules/webpack-dev-server/client/utils/sendMessage.js] (webpack)-dev-server/client/utils/sendMessage.js 402 bytes {main} [built]
[./node_modules/webpack/buildin/global.js] (webpack)/buildin/global.js 472 bytes {main} [built]
[./src/dapp/index.js] 20.4 KiB {main} [built]
    + 366 hidden modules
Child html-webpack-plugin for "index.html":
     1 asset
    Entrypoint undefined = index.html
    [./node_modules/html-webpack-plugin/lib/loader.js!./src/dapp/index.html] 4.31 KiB {0} [built]
i ｢wdm｣: Compiled successfully.



----------------------FLIGHT SURETY DAPP CAPABILITIES----------------------

STEP1:  Operational status: shows if the smart contracts are operative or locked.

https://github.com/get2shailesh/nd1309-P4-flight-surety/blob/main/images/step1-operational-status.png
 
STEP2:  Airline registration: This capability allows to execute actions relative to the airlines such as funding, voting, and validation of registration, funding etc.

https://github.com/get2shailesh/nd1309-P4-flight-surety/blob/main/images/step2-airline-registration.png 

STEP3:  Insure Flight: Allows a passenger to buy an insurance for a specific flight using BUY capability and fetch flight status in a simulated way from oracle using fetch slight status capability.

https://github.com/get2shailesh/nd1309-P4-flight-surety/blob/main/images/step3-flight-insurance.png 

STEP4:  Passenger Details: Allow a passenger verify his/her accredited amount when a flight is delayed. Also allow him/her to withdraw the credit.

https://github.com/get2shailesh/nd1309-P4-flight-surety/blob/main/images/step4-passanger-details.png
 
----------------------END-----------------------
