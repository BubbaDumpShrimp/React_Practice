import React from 'react';
import './App.css';

let defaulttextcolor = "red";
let defaultStyle = {
 color: defaulttextcolor 
};


function Aggregate() {
  return(
    <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
      <h2>Number Text</h2>
    </div>
  );
}

yepcock


function Filter() {
  return(
    <div style={defaultStyle}>
      <input type="text"/>
    </div>
  );
}

function Playlist(){
  return(
    <div style={{...defaultStyle, display: "inline-block", width: "30%"}}>
      <h3>Playlist Name</h3>
      <ul><li>Song1</li><li>Song3</li><li>Song1</li></ul>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
      <Playlist/>
    </div>
  );
}

export default App;
