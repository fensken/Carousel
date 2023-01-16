import { useState } from "react";

const Carousel = ({imagelist}) => {

    const [currentIndex, setCurrentIndex] = useState(0)
    console.log(imagelist)

    return ( 
        <div className="h-full">
        
        {/* ------------------arroes for navigation------------------- */}
            <div className="leftarrow inline absolute z-10 left-80 top-96 bg-slate-300 bg-opacity-10 hover:bg-opacity-40 hover:cursor-pointer rounded-full text-align-center text-white text-5xl p-6">
                <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className="rightarrow inline absolute z-10 top-96 right-80 bg-slate-300 rounded-full bg-opacity-10 hover:bg-opacity-40 hover:cursor-pointer text-align-center text-white text-5xl p-6">
                <i class="fa-solid fa-arrow-right"></i>
            </div>


        {/* ---------------carousel of places to travel---------------------- */}
            <div style={{backgroundImage: `url(${imagelist[currentIndex].url})`}} className="imagedisplay bg-center bg-no-repeat bg-cover w-full h-full rounded-sm" >

                <h6 className="destinationname capitalize text-right text-white text-6xl p-7 font-bold text-opacity-70 drop-shadow-md"> 
                    {imagelist[currentIndex].name}
                </h6>
            </div>

        {/* ----------dots to navigate-------------- */}
            <div className="dots flex justify-center gap-5 pt-2 text-slate-300">
                {imagelist.map((image,imageIndex) => (
                    <div><i class="fa-sharp fa-solid fa-circle border-slate-500 border-2 rounded-full hover:cursor-pointer "></i></div>
                ))}
            </div>
            
        </div>
     );
}
 
export default Carousel;