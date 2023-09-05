import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  state={
    posts: [
      {
        id:1,
        titulo:'Matricula 1',
        conteudo:'5498761231548-0'
      },

      {
        id:2,
        titulo:'Matricula 2',
        conteudo:'1254637894562-9'
      },

      {
        id:3,
        titulo:'Matricula 3',
        conteudo:'3578946125487-5'
      }
    ]
  } 
  render(){

    const { posts } = this.state; //Atribuição via desestruturação
    return(
      <div className="App">     
        {posts.map(post => (
        <div key={post.id}>
        
          <h1>{post.titulo}</h1>
          <p>{ post.conteudo}</p>


        </div>


         ))} 

      </div>
    );
  }
}
export default App;
