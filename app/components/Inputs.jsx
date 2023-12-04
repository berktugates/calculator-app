const Inputs = ({inputValue}) => {
    return (
        <>
            <input type="text" value={inputValue} name="input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5" ></input>
            <input type="text" name="result" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 mt-2 border-b-red-700 focus-outline"></input>
        </>
    )
}

export default Inputs