import { useState } from "react";
import Dots from "./Dots";

const Carousel = ({imagelist}) => {

    const [currentIndex, setCurrentIndex] = useState(0)


    //--------------- Functions for left and right arrow--------------------------
    const handleLeftArrow =  () => {
        const firstimage = currentIndex === 0
        const newIndex = firstimage ? imagelist.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const handleRightArrow = () => {
        const lastimage = currentIndex === imagelist.length - 1
        const newIndex = lastimage ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    // --------Function for dots-------------------------
    const handleDot = (imageindex) => {
        setCurrentIndex(imageindex)
    }


    return ( 
        <div className="relative">
        {/* ------------------arroes for navigation------------------- */}
            <div className="flex justify-between">
                <div onClick={handleLeftArrow} className="leftarrow inline absolute z-10 left-3 top-64 bg-slate-300 bg-opacity-10 hover:bg-opacity-40 hover:cursor-pointer rounded-full text-align-center text-white text-5xl p-6">
                    <i className="fa-solid fa-arrow-left"></i>
                </div>
                <div onClick={handleRightArrow} className="rightarrow  inline absolute z-10 top-64 right-3 text-end bg-slate-300 rounded-full bg-opacity-10 hover:bg-opacity-40 hover:cursor-pointer text-align-center text-white text-5xl p-6">
                    <i className="fa-solid fa-arrow-right"></i>
                </div>
            </div>

        {/* ---------------carousel of places to travel---------------------- */}
            <div style={{backgroundImage: `url(${imagelist[currentIndex].url})`}} className="imagedisplay min-h-[550px] bg-center bg-no-repeat bg-cover w-full rounded-md"  >
                <h6 className="destinationname capitalize text-right text-white text-4xl p-7 font-bold text-opacity-70 drop-shadow-md"> 
                    {imagelist[currentIndex].name}
                </h6>
            </div>

        {/* ----------dots to navigate-------------- */}

            <div className="dots flex justify-center gap-5 pt-2 text-slate-400">
                {imagelist.map((image, imageIndex) => (
                    <Dots
                        imageIndex={imageIndex}
                        handleDot={handleDot}
                        active={imageIndex === currentIndex}
                    />
                ))}
            </div>
            
        </div>
     );
}
 
export default Carousel;