

# Meal Review
> Experiment, Share and get reward.

Discover and enjoy meals at any participating restaurant. With Meal Review, you can explore a new culinary adventures. After dining, easily add your review by rating your experience, sharing photos, and providing detailed feedback on food quality, service, ambiance, and more. Those insights, done on chain, not only help others make informed dining choices but also contribute to a vibrant community of food enthusiasts.

## Implementation

We deployed our smart contract on Base, which allow us to have low fee price which could be interesting as we could have a large number of transaction for all the new review we will received. And it will allow us to have cheaper fee for our end user.

To encentivize people to participate by reviewing restaurant, we were thinking on a lottery system, allowing people to win a dinner. To ensure the lottery is fair, we need a reliable source of randomness, which can be challenging to generate on-chain. This is for this reason we are using Pyth Network, to request random number and use it to choose the winner.

Another aspect we wanted to integrate was private voting. Indeed, we wanted to encourage user participation in our review system. Our goal is to maintain fairness and avoid bias based on individual votes. We also want to give users the option to hide their votes. To achieve this, we are using Fully Homomorphic Encryption (FHE) with Fhenix. We are aggregating all votes and based on a threshold, we will recalculate the average rating. The final rating of the restaurant will not be updated with each vote but rather after every n-th new vote. This ensures that individual votes remain confidential and cannot be analyzed.

Finally, to embrace a maximum of users, we wanted to facilitate user embording. For that we added the possibility to connect with social login system as Google. We are using Web3Auth, to allow users to create an account and have a wallet to do on chain operation without having to manage wallet system.

## Smart contract deployed on Based

- https://base-sepolia.blockscout.com/address/0xdB3B75E1e96a025cb86Ff105EA6711e5648671B5#code
- Fhenix smart contract address: 0x325ddaD74e34690E3E477278296cb9FCcb863A3D
