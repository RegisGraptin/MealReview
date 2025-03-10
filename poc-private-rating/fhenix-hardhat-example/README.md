# Fhenix Hardhat Example [![Open in Gitpod][gitpod-badge]][gitpod]

[gitpod]: https://gitpod.io/#https://github.com/fhenixprotocol/fhenix-hardhat-example
[gitpod-badge]: https://img.shields.io/badge/Gitpod-Open%20in%20Gitpod-FFB45B?logo=gitpod

This repository contains a sample project that you can use as the starting point
for your Fhenix project. It's also a great fit for learning the basics of
Fhenix smart contract development.

This project is intended to be used with the
[Fhenix Hardhat Beginners Tutorial](TODO), but you should be
able to follow it by yourself by reading the README and exploring its
`contracts`, `tests`, `deploy` and `tasks` directories.

It comes with two fhenix-specific hardhat plugins:

- `fhenix-hardhat-plugin`: The main plugin for fhenix development in hardhat. It injects `fhenixjs` into the hardhat runtime environment, which allows you to interact with encrypted data in your tests and tasks.
- `fhenix-hardhat-docker`: A plugin that allows you to run a local Fhenix testnet in a docker container. This is useful for testing your contracts in a sandbox before deploying them on a testnet or on mainnet.

## Quick start

The first things you need to do are cloning this repository and installing its dependencies:

```sh
git clone https://github.com/FhenixProtocol/fhenix-hardhat-example.git
cd fhenix-hardhat-example
pnpm install
```

Next, you need an .env file containing your mnemonics or keys. You can use .env.example that comes with a predefined mnemonic, or use your own

```sh
cp .env.example .env
```

Once the file exists, let's run a LocalFhenix instance:

```sh
pnpm localfhenix:start
```

This will start a LocalFhenix instance in a docker container. If this worked you should see a `Started LocalFhenix successfully` message in your console.

If not, please make sure you have `docker` installed and running on your machine. You can find instructions on how to install docker [here](https://docs.docker.com/get-docker/).

Now that we have a LocalFhenix instance running, we can deploy our contracts to it:

```sh
npx hardhat deploy
```

Note that this template defaults to use the `localfhenix` network, which is injected into the hardhat configuration.

Finally, we can run the tasks with:

```sh
pnpm task:getCount # => 0
pnpm task:addCount
pnpm task:getCount # => 1
pnpm task:addCount --amount 5
pnpm task:getCount # => 6
```

## Troubleshooting

If Localfhenix doesn't start this could indicate an error with docker. Please verify that docker is running correctly using the `docker run hello-world` command, which should run a basic container and verify that everything is plugged in.

For example, if the docker service is installed but not running, it might indicate you need to need to start it manually.

## More Info

To learn more about the Fhenix Hardhat plugin, check out the [Fhenix Hardhat Plugin Repository](https://github.com/FhenixProtocol/fhenix-hardhat-plugin).



sudo docker run -d --rm -p "42069":8547 -p "42070":8548 -p "42000":3000 --name "localfhenix_hh_plugin" "ghcr.io/fhenixprotocol/localfhenix:v0.2.3"


pnpm hardhat deploy
Nothing to compile
No need to generate any newer typings.
deploying "RestaurantRating" (tx: 0xe2347c5f7dd7baba1ea1cf17eea0f69ce905bd95161c92785f244c1f20208de6)...: deployed at 0xbeb4eF1fcEa618C6ca38e3828B00f8D481EC2CC2 with 890579 gas
RestaurantRating contract:  0xbeb4eF1fcEa618C6ca38e3828B00f8D481EC2CC2



pnpm hardhat deploy --network testnet
No need to generate any newer typings.
deploying "RestaurantRating" (tx: 0xf086960bad63b3d6b55e1b04ea17340b959d349a17ac2477399f9b70b17be9d1)...: deployed at 0x325ddaD74e34690E3E477278296cb9FCcb863A3D with 43612217 gas
Deployed contract at: 0x325ddaD74e34690E3E477278296cb9FCcb863A3D

