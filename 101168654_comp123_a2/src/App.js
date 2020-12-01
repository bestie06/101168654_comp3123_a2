import React, { Component } from "react";
import './App.css';

import "weather-icons/css/weather-icons.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Wheather from './app_component/weather.component';


const API_key="69bcf12350649732b62292b9d63ad7da"

class App extends React.Component{
  constructor(){
    super();
    this.state={
      city:undefined,
      country:undefined,
      main:undefined,
      icon:undefined,
      celcius:undefined,
      temp_max:undefined,
      temp_min:undefined,
      description:"",
      error:false
    }

    this.getWeather()
  }

  getWeather=async()=>{
    const api_call=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Toronto,ont&appid=${API_key}`);
    const responde = await api_call.json();

    console.log(responde);
    this.setState({
      city:responde.name,
      country:responde.sys.country
    })
  };
  render(){
    return(
      <div className="App">
      <Wheather city={this.state.city} country={this.state.country}/>
    </div>
    );
  }
}



export default App;
