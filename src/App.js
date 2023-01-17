import Carousel from "./Carousel";
import bali from "../src/Images/bali.jpg"
import egypt from "../src/Images/egypt.jpg"
import newyork from "../src/Images/newyork.jpg"
import paris from "../src/Images/paris.jpg"
import tokyo from "../src/Images/tokyo.jpg"
import venice from "../src/Images/venice.jpg"


function App() {


  const imagelist = [
    {name: 'bali', url: `${bali}`},
    {name: 'egypt', url: `${egypt}`},
    {name: 'new york', url: `${newyork}`},
    {name: 'paris', url: `${paris}`},
    {name: 'tokyo', url: `${tokyo}`},
    {name: 'venice', url: `${venice}`}
  ]


  return (
    <div className="App min-h-screen bg-indigo-50 my-0 mx-auto">
      <h1 className="heading text-black shadow-md text-6xl text-center py-5 mb-10 font-bold capitlize">Travel Destinations</h1>

      <div className="w-8/12 mx-auto my-2">
        <Carousel imagelist={imagelist} />
      </div>
      
    </div>
  );
}

export default App;
