import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom'
import Navbar from './mycomponent/navbar';
import {connect} from 'react-redux'
import {Provider} from 'react-redux'
import {nameaction,desigaction} from './actions/action'
import thunk from 'redux-thunk'



const Home =()=>{
  return(
    <h1>This is Home Page</h1>
    )
}

const About =(props)=>{
  
  setTimeout(()=>{props.history.push("/")},5000)
  return(
    <h1>This is About Us Page</h1>
    )
}

const Contact =()=>{
  return(
    <h1>This is Contact Us Page</h1>
    )
}


const mapStateToProps = (state)=>{
  console.log(state)
  return{
    myname:state.name,
    mydesig:state.designation
}
}


const dispatchPropsToState = (dispatch)=>{
  return{
    changeName: (name)=>{dispatch(nameaction(name))},
    changeDesig:(designation)=>{dispatch(desigaction(designation))}
  }
}


function App(props) {
  return (
  <BrowserRouter>
    <div className="App">
    <Navbar/>
    <h2>Name:{props.myname}</h2>
    <h2>Email:{props.mydesig}</h2>
    <button onClick={()=>{props.changeName('Ram Kumar')}}>Change Name</button>
    <button onClick={()=>{props.changeDesig('Designer')}}>Change Designation</button>
    </div>
    <Route exact path = "/" component={Home} />
    <Route path = "/about" component={About} />
    <Route path = "/contact" component={Contact} />
    </BrowserRouter>
  );
}




export default connect (mapStateToProps,dispatchPropsToState)(App);
