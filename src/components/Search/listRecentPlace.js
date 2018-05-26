import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';

const Location = ({ index, place, totalResults }) => (
        <div>
          {/* <Link to={`/search/:location=${place}`}> */}
          <div className='searchResult'>
            <span className='index'>№{index} </span>
            <span className='title'>{place} ({totalResults})</span>
          </div>
   {/*    </Link> */}
      </div>
)
export default Location;


