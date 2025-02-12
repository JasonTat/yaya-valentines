'use client';
import Image from "next/image";
import React from 'react'

import { Geist, Geist_Mono, Oooh_Baby } from "next/font/google";
import { useState, useEffect } from 'react';

//images
import Brim from "../../public/myphotos/476593795_923259099923893_5547219324307686282_n.jpg"
import Omen from "../../public/myphotos/lzytrgtqgbbd1.jpg"
import Kuromi from "../../public/myphotos/my-melody-and-kuromi-valentines-day-hearts-peppeq-lough.jpg"

//my components
import ValentinesTitle from "../components/ValentinesTitle";
import NoButton from "../components/NoButton";
import YesButton from "../components/YesButton";


const ooohBaby = Oooh_Baby({
  variable: "--font-oooh-baby",
  subsets: ["latin"],
  weight: "400"
});



export default function Home() {
  const [answer, setAnswer] = useState('');

  function handleNoClick () {
    setAnswer('no');
  }
  
  function handleYesClick(){
    setAnswer('yes');
  }
  
  function handleResetClick(){
    setAnswer('');
  }
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="">
        <Image src={Kuromi} alt="Kuromi" width={200} height={200}
          className="mb-6"
        />
      </div>

      <div className="mb-4 relative">
        <ValentinesTitle />
      </div>

      <div className="mb-6">
          <div>
              <button 
                  className="text-white text-xl bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mr-3"
                  onClick={()=>{
                    handleYesClick()
                  }}
              >
                  YES BABYYY YESSSSSS
              </button>
              
              <button 
                className="text-white text-xl bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={()=>{
                  handleNoClick()
                }}
              >
                  WHAT THE HECK NO!! GRRR!!!
              </button> 

              <button 
                className="text-white text-xl bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 ml-3 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                onClick={()=>{
                  handleResetClick()
                }}
              >
                  reset
              </button> 
          </div>
      </div>

      <div className="">
        {
          answer === 'yes' ? 
          
          <div className="flex flex-col w-full items-center justify-center ">
            <h1 className="text-7xl mb-6"> I LOVE YOUUUUUUUUUUUUUUU </h1>
            <div className="flex flex-row items-center justify-center">

              <Image src={Brim} alt="Brim" className="w-1/6 mr-8" />
              <img 
                  src="https://media.tenor.com/008My4n0eLYAAAAi/tkthao219-bubududu.gif" alt="hug" 
                  className="m-14"
              />
              <Image src={Omen} alt="Omen" className="w-1/6 mr-8" />
              
              
            </div>
            




          </div>
          :
          answer === 'no' ?
          <img src="https://i.pinimg.com/originals/43/ff/e1/43ffe16a0deb6681d0e4074dfda2dc0b.gif" alt="sad" />
          :
          <p className="font-bold text-black plsanswer">pls answer :c </p>
        }
      </div>
    </div>
  );
}
