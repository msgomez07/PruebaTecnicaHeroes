import React, {Component} from 'react';
import './App.css';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detalle from './components/Detalle';
import HomeFav from './components/HomeFav';




class App extends Component {


  render(){
  return (
    <Router>
    <div className="App">
      <Switch >
           <Route exact path="/" component= {Home}/>
           <Route path='/heroe/:id' exact component={Detalle}/>
           <Route path="/favoritos" exact component={HomeFav}/>
     </Switch>
    </div>
    </Router>
  );
}
}

export default App;
