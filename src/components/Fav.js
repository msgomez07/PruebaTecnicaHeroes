import React, { Component } from 'react'
import axios from 'axios'
// import {Link} from 'react-router-dom'


export default class Fav extends Component {


    
    state = {
        valor : true,
        id: ""

    }
    
// handleClick = () =>{
//  if(this.state.valor === false){
//       this.setState({valor : true})
//  }else{
//     this.setState({valor : false})

//  }
//  console.log(this.state.valor)
// }

// async componentDidMount(){
//     if(this.state.valor === true){
//         await axios.post(baseUrl, {
//         ...this.state
//       })
//       .then((response) => {
//         console.log(response);

//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     }
// }





handleSubmit = event => {
    event.preventDefault();
    
    const {id} = this.props
    // const id = {
    //   name: this.state.id
    // };
    
    axios.post(`https://5f870c6549ccbb0016176e97.mockapi.io/api/v1/hero`, { id })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })


  }



    render() {
        

        return (
          <div>
              {/* <Link to="./favoritos"> */}
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              onClick={this.handleSubmit}
            >
              {/* {this.state.valor === false ? (
                <span>Agregar a favoritos</span>
              ) : (
                <span>Quitar de favoritos</span>
              )} */}
              Agregar a Favoritos
            </button>
            {/* </Link> */}
          </div>
        );
    }
}
