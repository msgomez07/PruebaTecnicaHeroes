import React, { Component } from 'react'
import { Link } from 'react-router-dom'




const api_key = "10217149396502807"

export class Mostrar extends Component {

state = {
    inputcampo: ""
}

 _handleChange = (e) =>{
    this.setState({inputcampo : e.target.value})
    
    }
    


 _handleSumbit = (e) =>{
    e.preventDefault()

    const {inputcampo} = this.state

    fetch(`https://superheroapi.com/api.php/${api_key}/search/${inputcampo}`)
    .then(res => res.json())
    .then(result =>{
        const {results = []} = result
        console.log({ results })
        this.props.onResults(results)
        
    })

}


componentDidMount


render (){

 

    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <h1 className="navbar-brand">Buscar Heroes</h1>
          <form className="form d-flex" onSubmit={this._handleSumbit}>
            <input
              className="form-control mr-sm-2"
              onChange={this._handleChange}
              type="search"
              placeholder="Buscar...."
              aria-label="Search"
              
            />
            <button className="btn btn-outline-success my-1 my-sm-0">Buscar</button>
          </form>
          <Link to="./favoritos">
          <button className="btn btn-outline-success my-2 my-sm-0">
              Favoritos
            </button>
            </Link>
        </nav>
      </div>
    );

}
}




