import React from 'react';
import './App.css';

function Aggregate() {
  return (
    <div style={{ display: 'inline-block', width: '20%' }}>
      <h2>Some More Stuff</h2>
    </div>
  );
}

function Filter() {
  return (
    <div>
      <img />
      <input type="text" />
    </div>
  );
}

function Playlist() {
  return (
    <div style={{ width: '25%', display: 'inline-block' }}>
      <img />
      <h3>Playlist Name</h3>
      <ul><li>Song1</li><li>Song2</li><li>Song3</li></ul>
    </div>
  );
}

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Will's Playlists</h1>
      <Aggregate />
      <Aggregate />
      <Filter />
      <div className="playlist-container">
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
