import React, { Component } from 'react';
import SearchBar from '../containers/search_bar';
import WeatherList from '../containers/weather_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <p>The query should be formatted like : cityName,countryCode or cityName. Examples: New york,US Moscow,RU <br/>
        The codes of countries you can find <a href='http://userpage.chemie.fu-berlin.de/diverse/doc/ISO_3166.html' target='_blank'>here</a>. 
        The country by default US</p>
        <WeatherList/>
      </div>
    );
  }
}
