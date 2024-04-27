import React, { useEffect, useState } from 'react'
import { wasteData } from '../data/typeWaste'
//dibaut array nanti di includes
const Modals:React.FC|any = (props:any) => {
  const [waste, setWaste]:any = useState();
  var index = wasteData.findIndex(item => item.type === props.type);
  useEffect(()=>{
    setWaste(wasteData[index])
  },[])
  return (
    <div className="static" >
        <div
        className="fixed h-screen w-screen bg-black z-99999 top-0 opacity-75"
      ></div>
      { /** Just added */}
      <div className="fixed top-0 right-0 left-0 z-999999 flex justify-center mt-10 ">
        <div className="mx-4 my-4 bg-white">
            <div className="flex justify-end">
                <button 
                    onClick={() => props.toggler()}
                    className="border-2 text-red-900 px-2 m-2"
                >
                    X
                </button>
            </div>
            
            <div className=" bg-white overflow-y-auto max-h-80">
                
                <div className="flex justify-between px-6 py-1">
                    <div className="font-bold text-xl">{waste?.title}</div>
                    <img src={waste?.url} alt={waste?.title} />
                </div>
                <div className="flex justify-around items-center px-2 py-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est quidem ad numquam repudiandae distinctio eveniet aperiam. Quis vel optio unde ex deleniti, et illum! Quisquam fugiat consequatur optio. Quia nam quas voluptas ratione natus aspernatur facere facilis dignissimos non minus! Delectus quibusdam ducimus ut laboriosam accusamus! Repudiandae, labore numquam! Fuga dolorum, maxime illum quas magni illo repellendus delectus deleniti, totam cupiditate mollitia deserunt, perspiciatis velit nesciunt! Corporis natus ullam laboriosam veritatis. Natus quae eius maiores libero voluptatem impedit soluta corrupti, eveniet quia reiciendis. Reiciendis nemo esse nesciunt exercitationem voluptatem aliquid animi numquam non, ducimus, atque, magni dolorem sed facere.
                </div>
                <div className="flex justify-between px-6 py-1">
                    <div className="font-bold text-xl">Pemanfaatan Sampah Organik</div>
                    
                </div>
                <div className="flex justify-around items-center px-2 py-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni est quidem ad numquam repudiandae distinctio eveniet aperiam. Quis vel optio unde ex deleniti, et illum! Quisquam fugiat consequatur optio. Quia nam quas voluptas ratione natus aspernatur facere facilis dignissimos non minus! Delectus quibusdam ducimus ut laboriosam accusamus! Repudiandae, labore numquam! Fuga dolorum, maxime illum quas magni illo repellendus delectus deleniti, totam cupiditate mollitia deserunt, perspiciatis velit nesciunt! Corporis natus ullam laboriosam veritatis. Natus quae eius maiores libero voluptatem impedit soluta corrupti, eveniet quia reiciendis. Reiciendis nemo esse nesciunt exercitationem voluptatem aliquid animi numquam non, ducimus, atque, magni dolorem sed facere.
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}

export default Modals