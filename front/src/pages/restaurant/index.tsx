import { ConnectButton } from '@rainbow-me/rainbowkit';

import type { NextPage } from 'next';

import { Header } from '../../components/header';
import { RestaurantCard } from '../../components/restaurant_card';
import { NewRestaurantCard } from '../../components/new_restaurant_card';

const Home: NextPage = () => {
  return (

    <div>
      <Header />
      <section className="bg-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">

            <RestaurantCard />
            <RestaurantCard />

            <NewRestaurantCard />

        </div>
      </section>


    </div>
  );
};

export default Home;
