import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRealtysList, resetListings } from '../../actions/results';
import { getLocations, getMyLocation } from '../../actions/index';
import ErrorList from './errorList';

class Error extends Component {
  get errorMessage() {
    const errorResult = this.props.error.errorList.map((er, i) => (
      <ErrorList key={i} errorCode={er.code} errorText={er.textError} />
    ));
    return errorResult;
  }
  render() {
    return (
      <div>
        {this.errorMessage}
      </div>
    );
  }
}

const mapStateToProps = ({ error }) => ({ error });
export default connect(mapStateToProps) (Error);
