import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Realty from './realty';

export default class RealtyList extends Component {
        
    get realtiesList() {
        const listings = this.props.listings.map((el, i) => (
            <Realty
                key={i}
                InfoAboutRealty={el}
            />
        ));
        return listings;
    }  
 
  render() {
    const { listings, totalResults } = this.props;
/*     console.log('realtyList - props', this.props);
    console.log('realtyList', listings, totalResults); */
    const resultsShowing = this.props.listings.length;

    return (
      <div>
        <Link to={`/`}>
          <button className="back">← Back</button>
        </Link>
        <div className='counterResults'>
          {resultsShowing}
         <span> of {totalResults} </span> matches
        </div>
          {this.realtiesList}   
      </div>
    );
  }
}
