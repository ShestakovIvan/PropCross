import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFaves } from '../../actions/faves';

class PropertyRealty extends Component {

  toggleFaves = () => {
    const { toggleFaves, realtyList } = this.props;
    toggleFaves(realtyList);
  };

  render() {
    const {
      title,
      price_formatted: price,
      property_type: propertyType,
      summary,
      bathroom_number: bathroomNumber,
      bedroom_number: bedroomNumber,
      img_url: imgUrl
    } = this.props.realtyList;

    return (
      <div>
        <div>
          <Link to={`/search/:location=${this.props.id}`}>
            <button className="back">← Back</button>
          </Link>
        </div>
        <div className='titlePrice'>
          <p>Price: {price}</p>
          <p>Title: {title}</p>
        </div>

<div>
        <img className='photoDetails' src={imgUrl} alt="realty photo" /> 
        <button onClick={this.toggleFaves} className='ARfaves'>
          {this.props.isFavourite ? 'Add to Faves' : 'Remove from Faves'}
        </button>
        </div>

        <div className='details'>
        <p>Type: {propertyType}</p>
        <p>Summary: {summary}</p>
        <p>Bathroom Number: {bathroomNumber}</p>
        <p>Bedroom Number: {bedroomNumber}</p>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    realtyList: state.realty,
    faves: state.faves,
    isFavourite: !state.faves.favesArray.some(
      item => item.title === state.realty.title
    )
  }),
  { toggleFaves }
)(PropertyRealty);
