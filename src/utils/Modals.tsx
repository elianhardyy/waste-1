import React from 'react'

const Modals:React.FC|any = (props:any) => {
  return (
    <div className="static" >
        <div
        className="fixed h-screen w-screen bg-black z-10 top-0 opacity-75"
      ></div>
      { /** Just added */}
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center mt-10 ">
        <div className="mx-4 my-4 bg-white">
            <div className="flex justify-end">
                <button 
                    onClick={() => props.toggler()}
                    className="border-2 text-red-900 px-2 m-2"
                >
                    X
                </button>
            </div>
            <div className=" bg-white">
                <img
                    className="w-full"
                    src="https://cdn.shopify.com/s/files/1/1626/8507/products/classic-dad-hat-pink-front-620a928e93e58_345x550.jpg?v=1644860054"
                    alt="Sunset in the mountains"
                />
                <div className="flex justify-between px-6 py-1">
                    <div className="font-bold text-xl">The Coldest Sunset</div>
                    <div className="font-bold font-mono text-xl text-red-700">$35</div>
                </div>
                <div className="flex justify-around items-center px-2 py-1">
                    <button className="border-2 px-2">-</button>
                    <div className="font-bold font-mono text-xl text-red-700">Quanity: 1</div>
                    <button className="border-2 px-2">+</button>
                </div>
                <div className="flex justify-around items-center px-2 py-1">
                    <button className="border-2 px-2 py-1 rounded bg-green-500 text-white font-bold font-mono text-lg">Add to Cart</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modals