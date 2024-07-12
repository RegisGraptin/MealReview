import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Header } from '../components/header';

const Home: NextPage = () => {
  return (

    <div>
      
      <Header />

      <div>
          <section>
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                  Meal Review
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                  Share your experiences of your culinary adventures and get rewarded for your feedback. Whether you're dining at a chic bistro, a cozy café, or a popular chain restaurant, Meal Review is your go-to platform for sharing honest reviews and earning exciting rewards.
                </p>
                <a href="/restaurant" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                  Get started
                  <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
              </div>
              <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img className='rounded-lg' src="/images/plate.jpg" alt="mockup" />
              </div>
            </div>
          </section>


          <section className="bg-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

              <div className="grid mt-6">
                <img className='rounded-lg' src="/images/place.jpg" alt="mockup" />
              </div>

              <div className="font-light text-gray-500 sm:text-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                  Discover, Enjoy and Share
                </h2>
                <p className="mb-4">
                  
                  Discover and enjoy meals at any participating restaurant. With Meal Review, you can explore a variety of dining options, from popular chains to hidden gems, ensuring every meal is a delightful experience. 
                </p>

                <hr />

                <p className="mb-4 pt-4">

                  After dining, easily add your review by rating your experience, sharing photos, and providing detailed feedback on food quality, service, ambiance, and more. Your insights not only help others make informed dining choices but also contribute to a vibrant community of food enthusiasts.
                  
                </p>
              </div>

            </div>
          </section>



          <section className="bg-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

              <div className="font-light text-gray-500 sm:text-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                  Get Reward
                </h2>
                <p className="mb-4">
                  
                  The more you contribute to Meal Review, the greater your chances of unlocking exclusive rewards! Each review you submit not only enhances our community but also brings you closer to special perks. Frequent reviewers can gain access to exclusive events hosted by top restaurants, enjoy complimentary meals, and receive other exciting rewards. By sharing your dining experiences regularly, you become a valued member of our foodie community, reaping the benefits of your honest feedback.

                </p>
              </div>

              <div className="grid mt-6">
                <img className='rounded-lg' src="/images/reward.jpg" alt="mockup" />
              </div>
            </div>
          </section>


          <section className="bg-white">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

              <div className="grid mt-6">
                <img className='rounded-lg' src="/images/manage.jpg" alt="mockup" />
              </div>

              <div className="font-light text-gray-500 sm:text-lg">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
                  Manage and engage your local community
                </h2>
                <p className="mb-4">
                
                  With Meal Review, restaurant owners can effectively manage their chain and engage with the local community. By creating a profile for each location, you can respond to reviews, share updates, and showcase special offers. Encourage customer participation by rewarding reviewers with discounts, exclusive event invitations, and loyalty points. This not only builds a loyal customer base but also fosters a sense of community around your brand. Additionally, use feedback to improve service quality and menu offerings, ensuring that every dining experience is exceptional. Empower your restaurant chain to thrive through meaningful connections and active engagement with diners.
                  
                </p>
              </div>

            </div>
          </section>


          <hr />

          <section className="bg-white">
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
              <div className="mx-auto max-w-screen-sm text-center">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold leading-tight">Get Started</h2>
                <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
                  Review a restaurant.
                </p>
                <a href="/restaurant" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                  Get started
                </a>
              </div>
            </div>
          </section>


          <footer className="bg-white sm:p-6 dark:bg-gray-200">
            <div className="mx-auto max-w-screen-xl">
              <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                  <a href="/" className="flex items-center">
                    <img src="/images/logo.svg" className="mr-3 h-6 sm:h-16" alt="Meal Review Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap">Meal Review</span>
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

                </div>
              </div>
              <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
              <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" className="hover:underline">Meal Review™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                </div>
              </div>
            </div>
          </footer>
      </div>
    </div>

  );
};

export default Home;
