import { useState } from "react";

const Dots = ({image, imageIndex, handleDot, currentIndex}) => {

    // const [isActive, setISActive] = useState('')
    // console.log(currentIndex)
    // console.log(imageIndex)

    // if (currentIndex === imageIndex) {
    //     setISActive(true)
    // } else {
    //     setISActive(false)
    // }

    return (
        <div key={imageIndex} className=" ">
            <i class={` fa-sharp fa-solid fa-circle border-slate-500 border-2 rounded-full hover:cursor-pointer hover:text-teal-400`} onClick={() => handleDot(imageIndex)}></i>
        </div>
    );
}
 
export default Dots;