import React from 'react';
import './App.scss';
import SimpleSlider from './Components/slider';
import FadeSlider from './Components/fade-slider'
function App() {
  return (
   <div>
     <h2>The Puppy Club  <img className="logo" src="Brooklyn-Bagels-white.png"alt="bagels-logo" /></h2>
     <div className="hero">
     {/* <h1 className="hero-text">Brooklyn Bagels</h1> */}
       
     </div>
    <SimpleSlider/>
    <div className="bagels-intro">
      <p><span>Brooklyn Bagels</span> is a black lab mix born on January 7th 2020. 
        She loves chewing on sticks and bones in her free time, but if she had a choice, carrots and peanut butter are her go to snacks!
        Bagels is one of the sweetest dogs you will ever meet and just wants to play and make new friends.


      </p>
      <img className="intro-pic" src="Brooklyn-Bagels-white.png" alt="bagels" />
    </div>
    <FadeSlider />
   </div>
  );
}

export default App;
