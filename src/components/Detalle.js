import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {ProgressBar} from 'react-bootstrap'
import Fav from './Fav'


const api_key = "10217149396502807"


export default class Detalle extends Component {


    state = {
        name: "",
        id: "",
        appearance: {},
        biography: {},
        image: {},
        powerstats: {},
        work: {}
    }

    componentDidMount(){

        const {id} = this.props.match.params
           

        fetch(`https://superheroapi.com/api.php/${api_key}/${id}/`)
        .then(res => res.json())
        .then(result =>{
         this.setState({name : result.name})
         this.setState({id : result.id})
         this.setState({appearance : result.appearance})
         this.setState({biography : result.biography})
         this.setState({image : result.image})
         this.setState({powerstats : result.powerstats})
         this.setState({work : result.work})

        //  console.log(result)
         
    })
    }



    render() {
        
        
        return (
          <div>
            <nav className="navbar navbar-light bg-light">
              <Link to="/">
                <span className="navbar-brand mb-0 h1">HOME</span>
              </Link>

              <Fav id={this.state.id}/>

              <Link to="../favoritos">
              <button className="btn btn-outline-success my-2 my-sm-0">
                Favoritos
              </button>
              </Link>
            </nav>
            <div className="d-flex">
              <div className="container-fluid">
                <img
                  className="w-75"
                  src={this.state.image.url}
                  alt={this.state.name}
                />
              </div>

              <div className="container-fluid">
                <h2>Powerstats</h2>
                <h5>Combat</h5>
                <ProgressBar
                  variant="success"
                  now={this.state.powerstats.combat}
                />
                <h5>Durability</h5>
                <ProgressBar
                  variant="success"
                  now={this.state.powerstats.durability}
                />
                <h5>Intelligence</h5>
                <ProgressBar
                  variant="success"
                  now={this.state.powerstats.intelligence}
                />
                <h5>Power</h5>
                <ProgressBar
                  variant="success"
                  now={this.state.powerstats.power}
                />
                <h5>Speed</h5>
                <ProgressBar
                  variant="success"
                  now={this.state.powerstats.speed}
                />
                <h5>Strength</h5>
                <ProgressBar
                  variant="success"
                  now={this.state.powerstats.strength}
                />
              </div>

              <div className="container-fluid">
                <h5>Appearance</h5>
                <ul>
                  <li className="d-flex">
                    <h6>Gender: &nbsp;</h6>{" "}
                    <p>{this.state.appearance.gender}</p>
                  </li>
                  <li className="d-flex">
                    <h6>Race:&nbsp; </h6> <p>{this.state.appearance.race}</p>
                  </li>
                  <li className="d-flex">
                    <h6>Height: &nbsp;</h6>{" "}
                    <p>{this.state.appearance.height}</p>
                  </li>
                  <li className="d-flex">
                    <h6>Weight: &nbsp;</h6>
                    <p>{this.state.appearance.weight}</p>
                  </li>
                  <li className="d-flex">
                    <h6>Eye-color:&nbsp; </h6>
                    <p>{this.state.appearance.ojo}</p>
                  </li>
                  <li className="d-flex">
                    <h6>Hair-color: &nbsp;</h6>
                    <p>{this.state.appearance.hair}</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
    }
}
