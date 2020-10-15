import React, { Component } from 'react'
import HeroeFav from './HeroeFav'
import {Link} from 'react-router-dom'


export default class HomeFav extends Component {

    state = {
        perso: []
    }


async componentDidMount(){

    //    await axios.get(`https://apifakeserver-j1fvaqi38.vercel.app/users`)
    //    .then(res => {
    //     const perso = res.data;

    //     console.log(perso)
    //     this.setState({ perso: perso });

    //   })
    this.getMoreHero()

}

getMoreHero() {
    fetch("https://5f870c6549ccbb0016176e97.mockapi.io/api/v1/hero")
    .then(response => response.json())
    .then(data => {
 
        this.setState({
            perso : data
        })

    }
    )
}


_renderResults (){
    const {perso} = this.state

    
    return perso.map(heroe => {
   
        return (
          <HeroeFav
            key={heroe.prueb}
            id={heroe.id}
            prueb={heroe.prueb}
          />
        );


    })
  }




    render() {
        return (
            <div>
                <nav className="navbar navbar-light bg-light">
              <Link to="/">
                <span className="navbar-brand">Volver a inicio</span>
              </Link>
            </nav>

          <div className="row row-cols-3 mt-3">
            {this._renderResults()}
          </div>
          </div>
        );
    }
}
