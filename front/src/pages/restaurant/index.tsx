

import restaurant_abi from '../../abi/restaurant_abi.json';

import { useReadContract } from 'wagmi'

import type { NextPage } from 'next';

import { Header } from '../../components/header';
import { RestaurantCard } from '../../components/restaurant_card';
import { NewRestaurantCard } from '../../components/new_restaurant_card';

const Home: NextPage = () => {

  const { data: n_restaurants } = useReadContract({
    address: "0xdB3B75E1e96a025cb86Ff105EA6711e5648671B5",
    abi: restaurant_abi.abi,
    functionName: 'n_restaurants',
    args: [],
  })

  console.log(n_restaurants);

  return (

    <div>

      <div>{n_restaurants?.toString()}</div>
      <Header />
      <section className="bg-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">

            <RestaurantCard />

            <NewRestaurantCard />

        </div>
      </section>


    </div>
  );
};

export default Home;
