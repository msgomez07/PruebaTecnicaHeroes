import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const api_key = "10217149396502807"

export default class HeroeFav extends Component {
    state = {
        name: "",
        id: "",
        appearance: {},
        biography: {},
        image: {},
        powerstats: {},
        work: {},
        prueb: ""
    }

componentDidMount(){

    const {id , prueb} = this.props

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
     this.setState({prueb : prueb})

})
}


 handleSubmit = event => {
    event.preventDefault();
 
    axios.delete(`https://5f870c6549ccbb0016176e97.mockapi.io/api/v1/hero/${this.state.prueb}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

this.volver()

  }

  volver = () =>{
    window.location.href='./';
  }


    render() {
        const {id, name, biography, work, image} = this.state

        return (
          <div className="container">
            <div className="container w-50 p-3">
              <div className="">
                <img src={image.url} className="card-img shadow-lg mb-5 bg-white rounded" alt={name} />
              </div>
              <div className="">
                <div className="">
                  <Link to={`/heroe/${id}`}>
                    <h5 className="">{name}</h5>
                  </Link>
                  <p className="">{work.occupation}</p>
                  <p className="">
                    <small className="">{biography.publisher}</small>
                  </p>
                </div>
              </div>
              <button className="btn btn-danger" onClick={this.handleSubmit}>Eliminar de favoritos</button>
            </div>
          </div>
        );
    }
}
