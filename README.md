

## Meal Review

Experiment, Share and get reward.




## Points Fhenix

- Hardhat template not updated - Old version of testnet 
> https://github.com/FhenixProtocol/fhenix-hardhat-example/blob/main/hardhat.config.ts
> "https://api.testnet.fhenix.zone:7747" => "https://api.helium.fhenix.zone" ?

- Link to the hardhat template dead: https://github.com/fhenixprotocol/hardhat-template (In `The template is available here.`) And here https://github.com/fhenixprotocol/hardhat-template

- In the getting started, unaccessible docker version (`ghcr.io/fhenixprotocol/nitro/localfhenix:latest` not accessible). Defined here: https://docs.fhenix.zone/getting-started


- In https://github.com/FhenixProtocol/fhenix-hardhat-example/ project, the frontend does not contain all the elements to work. Especially those issues: 
```
Compiled with problems:

ERROR in ./src/components/Dapp.js 9:0-52

Module not found: Error: Can't resolve '../contracts/Token.json' in '/home/rere/Project/ETH-Global-Brussels/poc-private-rating/fhenix-hardhat-example/frontend/src/components'


ERROR in ./src/components/Dapp.js 10:0-65

Module not found: Error: Can't resolve '../contracts/contract-address.json' in '/home/rere/Project/ETH-Global-Brussels/poc-private-rating/fhenix-hardhat-example/frontend/src/components'
```

Missing 
- contracts/Token.json
- contracts/contract-address.json

=> What are those files ? Previous token contract ? Now it is called `counter`, maybe need an update ? 



- Update on this project (https://github.com/FhenixProtocol/fhenix-nuxt3-template) the used RPC for testnet.
