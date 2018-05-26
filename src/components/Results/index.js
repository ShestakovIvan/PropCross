import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRealtysList } from '../../actions/results';
import RealtyList from './realtyList';

class ResultsList extends Component {
  updateRealtyList = () => {
    const {
      getRealtysList,
      results: { numPage },
      id,
    } = this.props;
    getRealtysList(id, numPage);
  };

  get loadMoreButton() {
    const { listings, totalResults, numPage, totalPages } = this.props.results;
    const resultsShowing = this.props.results.listings.length;
    console.log(numPage, totalPages);

    if( numPage < totalPages ) {
      return (
        <div className='footer'>
        <button className="loadMore" onClick={this.updateRealtyList}>
          Load more
        </button>
        </div>
      );
    } 
  }

  render() {
    const { listings, totalResults, numPage, totalPages } = this.props.results;
    const resultsShowing = this.props.results.listings.length;
    return (
      <div>
        <RealtyList listings={listings} totalResults={totalResults} />
        {this.loadMoreButton}
      </div>
    );
  }
}

const mapStateToProps = ({ results }) => ({ results });
export default connect(mapStateToProps, { getRealtysList })(ResultsList);
