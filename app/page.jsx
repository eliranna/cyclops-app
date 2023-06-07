"use client"

import { useState } from 'react'
import { useMenu } from "./hooks/useMenu"
import MenuInput from "./components/MenuInput"
import Note from './shared/Note'
import Header from './shared/Header';
import Button from './shared/Button';

export default function Home() {

  const menu = useMenu()
  const [selectedItems, setSelectedItems] = useState()

  const githubNote = (
    <Note link={"https://github.com/eliranna/cyclops-app"}>
        This is Open Source on {" "}
        <span className="font-semibold text-zinc-200">
          GitHub <span aria-hidden="true">&rarr;</span>
        </span>          
    </Note>
  )

  const greetings = (
    <div>
      <Header>
        Get Your Favoraite Dish & Extras
      </Header>
      <p className="text-lg mt-6 leading-5 text-zinc-600 sm:text-center">
        Elevate your dining experience and savor every bite with our awesome app - the ultimate companion for finding your favorite dish with a delectable twist!
      </p>        
    </div>
  )

  const menuInput = (
    <div className="flex flex-col justify-center gap-4 mx-auto mt-8 sm:flex-row sm:max-w-lg ">
      <MenuInput menu={menu} onChange={items => setSelectedItems(items)}/>
    </div>
  )

  const payAndCheck = selectedItems && selectedItems.length > 0 && (
    <div>
      <div className="flex text-white flex-col justify-between">
        <div className="text-center p-5">
          We will get you: {selectedItems.map(item => `${item.title} ($${item.price})`).join(", ")}
        </div>
        <Button>
          Pay ${selectedItems.reduce((accumulator, object) => {
              return accumulator + object.price;
              }, 0)} 
        </Button>                
      </div>                         
    </div>
  )
  
  return (
    <div className="flex flex-col gap-8 pb-8 md:gap-16 md:pb-16 xl:pb-24">
      <div className="flex flex-col items-center justify-center max-w-3xl px-8 mx-auto mt-8 sm:min-h-screen sm:mt-0 sm:px-0">
        {githubNote}
        <div className="space-y-10">
          <div>
            {greetings}
            {menuInput}
          </div>
          {payAndCheck}
        </div>
      </div>
    </div>
  );
}
