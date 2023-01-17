

const Dots = ({ imageIndex, handleDot, active = false }) => {
    return (
      <i
        key={imageIndex}
        className={`fa-sharp fa-solid fa-circle hover:cursor-pointer border-slate-400 border-1 rounded-full ${
          active ? "text-teal-400 border-slate-500 border-2 rounded-full " : ""
        } `}
        onClick={() => handleDot(imageIndex)}
      ></i>
    );
  };
  
export default Dots;