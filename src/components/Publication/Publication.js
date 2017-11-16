import React, { Component } from 'react';

import './Publication.css';

class Publication extends Component {
  render(){
    return(
      <div className="Publication-container">
        <div className="Publication-content">
          <div className="Publication-image-container">
            <img className="Publication-image" src={this.props.image} alt="" />
          </div>
          <div className="Publication-type">
            {this.props.homeType}
          </div>
          <div className="Publication-description">
            <div className="Publication-rooms">
              {this.props.rooms} habitaciones
            </div>
            <div className="Publication-bathrooms">
              {this.props.baths} baños
            </div>
          </div>
          <div className="Publication-address">
            {this.props.address}
          </div>
          <div className="Publication-price">
            {this.props.price}
          </div>
        </div>
      </div>
    )
  }
}

export default Publication;