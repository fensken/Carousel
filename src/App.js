import Carousel from "./Carousel";


function App() {


  const imagelist = [
    {name: 'bali', url: 'https://images.pexels.com/photos/5992583/pexels-photo-5992583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name: 'egypt', url: 'https://images.pexels.com/photos/13420332/pexels-photo-13420332.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name: 'new york', url: 'https://images.pexels.com/photos/1239162/pexels-photo-1239162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name: 'paris', url: 'https://images.pexels.com/photos/1446624/pexels-photo-1446624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name: 'santorini', url: 'https://images.pexels.com/photos/6174897/pexels-photo-6174897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
    {name: 'tokyo', url: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}
    
  ]


  return (
    <div className="App min-h-screen bg-indigo-100 bg-opacity-90 my-0 mx-auto">
      <h1 className="heading text-black shadow-md text-6xl text-center py-5 mb-10 font-bold capitlize">Travel Destinations</h1>

      <div className="w-8/12 mx-auto my-2">
        <Carousel imagelist={imagelist} />
      </div>
      
    </div>
  );
}

export default App;
