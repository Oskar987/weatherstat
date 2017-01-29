import React,{ Component } from 'react';
import { GoogleMapLoader, GoogleMap } from 'react-google-maps';

export default class GMap extends Component{

    render(){
        return(
            <GoogleMapLoader
                googleMapURL='https://maps.googleapis.com/maps/api/js?key=AIzaSyBIvp4SpWJMD4fehsdUGmD7UXv6MtmVNR8'
                containerElement={ <div style={{height: '100%', width: '100%'}} />}
                googleMapElement={ 
                    <GoogleMap defaultZoom={ 12 } defaultCenter={{lat: this.props.lat, lng: this.props.lon}}/>
                }
            />
        );
    }
}