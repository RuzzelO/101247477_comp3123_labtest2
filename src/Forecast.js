import React, {Component} from 'react'
import {Row, Col,Container} from 'react-bootstrap'
import axios from 'axios'
import './App.css';


export default class Forecast extends Component{
    constructor(props){
        super(props)

        this.state={
            day:[],
            weather:[],
            date: new Date().toLocaleString()
        }
    }

    componentDidMount(){
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=43.39&lon=-79.23&exclude=daily,hourly,minutely,hourly&units=metric&appid=b607a79927eb93a61879e8c23ad4c497`)
        .then(res => {
            const day = res.data;
            const weather = res.data.current.weather
            this.setState({ day:day, weather:weather });
        })
    }

    render(){
        return(
            <div>
                {
                    this.state.weather.map(u => (
                        <div>
                            <div className="cityDisplay">
                                        <h1>{this.state.day.timezone}</h1>
                                        <p>{this.state.date}</p>
                                        <img src={'http://openweathermap.org/img/wn/' + u.icon +'@2x.png'}/>
                                        <p>{u.description}</p>
                                        <hr/>
                            </div>
                            <div className="desc">
                                <Container>
                                    <Row className='stats'>
                                        <Col>
                                            <p>Humidity: {this.state.day.current.humidity}%</p>
                                            <p>latitude: {this.state.day.lat}<span>&#176;</span></p>
                                            <p>longitude: {this.state.day.lon}<span>&#176;</span></p>
                                        </Col>

                                        <Col>
                                            <p>Wind: {this.state.day.current.wind_speed} km/h</p>
                                            <p>Clouds: {this.state.day.current.clouds}%</p>
                                            <p>Visibility: {this.state.day.current.visibility}</p>
                                        </Col>

                                        <Col>
                                            <p>Temp: {this.state.day.current.temp}<span>&#176;</span>C</p>
                                            <p>Feels Like: {this.state.day.current.feels_like}<span>&#176;</span>C</p>
                                        </Col>
                                    </Row>
                                </Container>
                            </div>                   
                            <div className='student-info'>
                                <Container>
                                    <h1>Ruzzel Orejola</h1>
                                    <h1>101247477</h1>
                                </Container>
                            </div>
                        </div>
                    ))} 
            </div>
        )
    }
}