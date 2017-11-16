import React, { Component } from 'react';

import Publication from '../Publication/Publication';
import './PublicationList.css';


class PublicationList extends Component {
  buildPublications(publications) {
    return publications.map((publication) => {
      return this.buildPublication(publication)
    })
  }

  buildPublication(publication) {
    return (
      <Publication
        image={publication.image}
        homeType={publication.homeType}
        rooms={publication.rooms}
        baths={publication.baths}
        address={publication.address}
        price={publication.price}
      />
    )
  }

  render() {
    return (
      <div className="PublicationList-container" >
        <div className="PublicationList-content" >
          {this.buildPublications(this.props.publications)}
        </div>
      </div>
    )
  }
}

export default PublicationList;
