import React, { Component } from 'react';

import './App.css';

import PublicationList from './components/PublicationList/PublicationList';

class App extends Component {
  state = {
    publications: [
      {
        image: 'https://i.pinimg.com/736x/73/de/32/73de32f9e5a0db66ec7805bb7cb3f807--navy-blue-houses-blue-and-white-houses-exterior.jpg',
        homeType: 'Habitación privada',
        rooms: '2',
        baths: '1',
        address: 'Carlos Alvarado 5953, Las Condes',
        price: 'UF 9.500',
      },
      {
        image: 'http://cdn.history.com/sites/2/2015/07/hith-white-house-attacks-H.jpeg',
        homeType: 'Casa de lujo',
        rooms: '3',
        baths: '2',
        address: 'Carlos Alvarado 5954, Las Condes',
        price: 'UF 92.500',
      },
    ]
  }

  render() {
    return (
      <PublicationList publications={this.state.publications}/>
    );
  }
}

export default App;
