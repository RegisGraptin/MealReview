
// import { writeContract } from '@wagmi/core'

import { abi } from '../abi/restaurant_abi.json';

import React, { useState } from 'react';

import { useWriteContract } from 'wagmi'


export const NewRestaurantCard = () => {
    
    const { data: hash, writeContract } = useWriteContract()

    async function createNewRestaurant() {

                
        writeContract({
            address: '0x325ddaD74e34690E3E477278296cb9FCcb863A3D',
            abi: {
                "inputs": [
                  {
                    "internalType": "string",
                    "name": "tokenURI",
                    "type": "string"
                  }
                ],
                "name": "createRestaurant",
                "outputs": [
                  {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                  }
                ],
                "stateMutability": "nonpayable",
                "type": "function"
              },
            functionName: 'createRestaurant',
            args: [],
          });
         

    };

    const [formData, setFormData] = useState({
        name: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const [showModal, setShowModal] = React.useState(false);


    return (
        <>
            <div>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>

                        <button
                            className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => 
                                setShowModal(true) 
                            }
                        >
                            Open regular modal
                        </button>
                        {showModal ? (
                            <>

                                <div
                                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                >
                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                        {/*content*/}
                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                            {/*header*/}
                                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                                <h3 className="text-3xl font-semibold">
                                                    Create a new restaurant
                                                </h3>
                                                <button
                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                                        ×
                                                    </span>
                                                </button>
                                            </div>

                                            <form action="#">

                                                <div className="relative p-6 flex-auto">
                                                    <div>

                                                        <label htmlFor="name" className="block mb-2 text-sm font-medium">
                                                            Restaurant name
                                                        </label>
                                                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                                            required
                                                            value={formData.name}
                                                            onChange={handleChange}
                                                        />

                                                    </div>
                                                    <div>
                                                        <label htmlFor="address" className="block mb-2 text-sm font-medium">
                                                            Restaurant address
                                                        </label>
                                                        <input type="text" name="address" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                                                            required
                                                            value={formData.address}
                                                            onChange={handleChange}
                                                        />
                                                    </div>

                                                </div>
                                            </form>


                                            {/*footer*/}
                                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                                <button
                                                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => setShowModal(false)}
                                                >
                                                    Close
                                                </button>
                                                <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="button"
                                                    onClick={() => {
                                                        setShowModal(false);
                                                        createNewRestaurant();
                                                    }}
                                                >
                                                    Create
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                            </>
                        ) : null}

                    </div>

                </div>


            </div>
        </>

    )
}
function usePrepareContractWrite(arg0: { address: string; abi: { name: string; type: string; stateMutability: string; inputs: { internalType: string; name: string; type: string; }[]; outputs: never[]; }[]; functionName: string; args: number[]; enabled: boolean; }): { config: any; } {
    throw new Error('Function not implemented.');
}

