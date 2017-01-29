import React,{ Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component{
    constructor(props){
        super(props);
    };

    renderWeather(cityData){
        const name  = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return(
            <tr key={ name + Math.random() }>
                <td>{ name }{ cityData.city.country }</td>
                <td><Chart  data={ temps } color={'orange'} units='C' /></td>
                <td><Chart  data={ pressures } color={'green'} units='hPa' /></td>
                <td><Chart  data={ humidities } color={'blue'} units='%'/></td>
            </tr>
        );
    }

    render(){
        return(
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (HPA)</th>
                        <th>Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                        { this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    };
}

function mapStateToProps({ weather }){//es2105 syntax, its like create const weather inside function 
    return { weather };// if name of object completely identical (weather === weather) we can type like this
}

export default connect(mapStateToProps, null)(WeatherList);