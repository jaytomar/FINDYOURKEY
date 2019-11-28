import React from 'react';
import Interface from './Interface.js'
import ScaleSearch from './scalesearch.js'
import Scales from './scales.js'
import Home from './home'
import Chords from './chords'
import SongID from './songid'
import SongKey from './songkey'
import {  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { scale } from 'tonal';
import NavBar from './navbar'

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route path='/scales/:scale' component={ScaleSearch} />
      <Route path='/scales' component={Scales} />
      <Route exact path='/song/' component={SongID}/>
      <Route path='/song/:id' component={SongKey}/>
      <Route path='/chords' component={Chords}/>
      <Route exact path='/tool' component={Interface} />

    </div>
    </Router>

  );
}

export default App;
