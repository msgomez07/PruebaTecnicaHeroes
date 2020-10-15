import React, { Component } from 'react'
import {Link} from 'react-router-dom'



export default class Heroe extends Component {
    render() {
        const {id, name, description, editor, url} = this.props

        return (
          <Link to={`/heroe/${id}`}>
            <div className="" >
                <div className="card m-2">
                
                <img src={url} className="img-thumbnail" alt={name} id="imghero"/>
                
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-title">{editor}</h6>
                    <p className="card-text">{description}</p>
                  </div>

                </div>
              </div>
           </Link>
          
        );
    }
}



