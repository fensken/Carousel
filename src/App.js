import Carousel from "./Carousel";


function App() {


  const imagelist = [
    {name: 'bali', url: 'http://localhost:3000/Images/bali.jpg'},
    {name: 'egypt', url: 'http://localhost:3000/Images/egypt.jpg'},
    {name: 'newyork', url: 'http://localhost:3000/Images/newyork.jpg'},
    {name: 'paris', url: 'http://localhost:3000/Images/paris.jpg'},
    {name: 'tokyo', url: 'http://localhost:3000/Images/tokyo.jpg'},
    {name: 'venice', url: 'http://localhost:3000/Images/venice.jpg'}
  ]


  return (
    <div className="App h-screen bg-indigo-50 m-0">
      <h1 className="heading text-black shadow-md text-6xl text-center py-5 mb-10 font-bold capitlize">Travel Destinations</h1>

      <div className="w-8/12 mx-auto my-2" style={{height: '60%'}}>
        <Carousel imagelist={imagelist} />
      </div>
      
    </div>
  );
}

export default App;
