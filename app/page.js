"use client"

import { useState } from "react"
import Inputs from "./components/Inputs"
import Operators from "./components/Operators"
import Accounts from "./components/Accounts"

const page = () => {
  const [inputValue, setInputValue] = useState("")
  const handleClick = (e) => {
    setInputValue(inputValue + e.target.value)
  }
  let numbers = []
  for(let i=0; i<=9; i++){
    numbers.push(<button value={i} type="button" onClick={handleClick} key={i} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
    {i}
    </button>)
  }
  return (
    <>
      <div className="h-screen flex flex-col justify-center items-center">
        <div id="whoiam">
          <Accounts/>
        </div>
        <div id="inputs" className="mb-2 mt-20 flex flex-col">
          <Inputs
            inputValue = {inputValue}
          />
        </div>
        <div id="numbers" className="grid grid-cols-3 gap-4">
          {numbers}
        </div>
        <div id="operators">
            <Operators
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
        </div>
      </div>
    </>
  )
}

export default page