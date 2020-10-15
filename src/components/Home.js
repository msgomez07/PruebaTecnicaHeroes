import React, { Component } from 'react'
import Heroe from './Heroe';
import {Mostrar} from './Mostrar';

export default class Home extends Component {

    state = {
        results: []
      }
    
      _handleResults = (results) => {
        this.setState({ results })
      }
    
      _renderResults (){
        const {results} = this.state
        return results.map(heroe => {
       
            return (
              <Heroe
                key={heroe.id}
                id={heroe.id}
                name={heroe.name}
                description={heroe.work.occupation}
                editor={heroe.biography.publisher}
                url={heroe.image.url}
              />
            );
    
    
        })
      }



    render() {
        return (
            <div>
                 <Mostrar onResults={this._handleResults}/>

{this.state.results.length === 0
?<p>sin resultados ...</p>
: <div className="row row-cols-1 row-cols-md-3 row-cols-sm-2  row-cols-lg-4  m-3">{this._renderResults()}</div>
}

            </div>
        )
    }
}
