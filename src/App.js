import React, { Component } from 'react';
import './App.css';

let defaulttextcolor = "red";
let defaultStyle = {
 color: defaulttextcolor 
};
let fakeServerData = {
  user: {
    name: 'David',
    playlists: [
      {
        name: 'My favourites',
        songs: [{name: 'nice', duration: 1324},
                {name: 'happy bday', duration: 4251},
                {name: 'huh', duration: 2321}
        ]
      },
      {
        name: 'My Worst',
        songs: [{name: 'nice', duration: 1324},
                {name: 'happy bday', duration: 4251},
                {name: 'huh', duration: 2321}
        ]
      },
      {
        name: 'My Another one',
        songs: [{name: 'nice', duration: 1324},
                {name: 'happy bday', duration: 4251},
                {name: 'huh', duration: 2321}
        ]
      }
    ]
  } 
};


class PlaylistCounter extends Component {
  render() {
    console.log(this.props.playlists)
    return(
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{this.props.playlists.length} Playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    console.log(this.props.playlists)
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let  totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return(
      <div style={{...defaultStyle, width: "40%", display: "inline-block"}}>
        <h2>{Math.round(totalDuration/60)} Hours</h2>
      </div>
    );
  }
}

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


class App extends Component {
  constructor(){
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => {
    this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render() {
    return (
      <div className="App">
        {this.state.serverData.user ?
          <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlists
          </h1>
          <PlaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HoursCounter playlists={this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1 style={defaultStyle}>'Loading...'</h1>
      }
      </div>
    );
  }
}

export default App;
