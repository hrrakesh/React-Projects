import './App.css';
import StarRating from './components/star-slider';
// import Accordion from './components/accordion';
// import RandomColor from './components/random-color';

function App() {
  return (
    <div className="App">
     
      {/* Accordion component */}
      {/* <Accordion/> */}
      {/* Random color component  */}
      {/* <RandomColor /> */}

      {/* star slider  */}
      <StarRating noOfStars={5}/>
    </div>
  );
}

export default App;
