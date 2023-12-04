import React from 'react'

const Operators = ({inputValue, setInputValue}) => {
  return (
    <>
        <div className="flex mt-3">
                <button type="button" value={"C"} onClick={()=>{setInputValue("")}} className="text-orange-500 hover:text-white border border-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 me-2">
                    C
                </button>
                <button type="button" value={"+"} onClick={(e)=>{setInputValue(inputValue + e.target.value)}}  className="text-orange-500 hover:text-white border border-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 me-2">
                    +
                </button>
                <button type="button" value={"-"} onClick={(e)=>{setInputValue(inputValue + e.target.value)}}  className="text-orange-500 hover:text-white border border-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 me-2">
                    -
                </button>
                <button type="button" value={"*"} onClick={(e)=>{setInputValue(inputValue + e.target.value)}} className="text-orange-500 hover:text-white border border-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 me-2">
                    *
                </button>
                <button type="button" value={"/"} onClick={(e)=>{setInputValue(inputValue + e.target.value)}} className="text-orange-500 hover:text-white border border-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 me-2">
                    /
                </button>
            </div>
            <div>
            <button type="button" onClick={(e)=>{setInputValue(eval(inputValue))}} className="text-orange-500 hover:text-white border border-orange-800 hover:bg-orange-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 me-2">
                    =
                </button>
            </div>
    </>
  )
}

export default Operators