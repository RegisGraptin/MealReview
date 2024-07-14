import React from "react";
import { parseAbi } from "viem";
import { useWriteContract } from "wagmi";

export const RestaurantCard = () => {


    const restaurantID = 0; 

    const [rating, setRating] = React.useState(0);


    const { data: hash, writeContract } = useWriteContract()

    async function validateReview() {
        writeContract({
            address: "0xdB3B75E1e96a025cb86Ff105EA6711e5648671B5",
            abi: parseAbi(['function addReview(uint256,uint256,string)']),
            functionName: 'addReview',
            args: [BigInt(restaurantID), BigInt(rating), "empty message"]
        });
    }


    return (
        <>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src="/images/manage.jpg" alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">Le Bistro</div>
                    <p className="text-gray-700 text-base">
                        Bd de Waterloo 138
                    </p>


                        <div className="grid w-full sm:col-span-3 sm:grid-cols-10 pt-3">

                            {Array.from({ length: 5 }, (_, k) => k + 1).map((item) => (
                                <button
                                    key={`buttonItem${item}`}
                                    type="button"
                                    onClick={() => {
                                        setRating(item);
                                    }}
                                    className={
                                        (rating !== item ? 'bg-white' : 'bg-yellow-400') +
                                        ' mr-4 mt-2 lg:mt-0 rounded-md text-lg font-semibold text-gray-500 shadow-sm hover:text-white hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                                    }
                                >
                                    {item}
                                </button>
                            ))}
                        </div>

                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            onClick={() => validateReview()}
                        >
                            Add a review
                        </button>
                    
                </div>
            </div>

        </>
    )
}
