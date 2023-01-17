import { useState } from "react";

const Dots = ({imageIndex, handleDot, currentIndex}) => {

    const [isActive, setISActive] = useState(false)
    console.log(currentIndex)
    console.log(imageIndex)

    // if (currentIndex === 3) {
    //     setISActive(true)
    // } else {
    //     setISActive(false)
    // };

    return (
        <div key={imageIndex} >
            <i class={`fa-sharp fa-solid fa-circle border-slate-500 border-2 rounded-full hover:cursor-pointer hover:text-teal-400 ${isActive ? "active" : "passive"} `} onClick={() => handleDot(imageIndex)}></i>
        </div>
    );
}
 
export default Dots;