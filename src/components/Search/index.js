import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Location from './listRecentPlace';
import 'whatwg-fetch';
import { getRealtysList, resetListings } from '../../actions/results';
import { getLocations, getMyLocation } from '../../actions/index';
import Spinner from '../Spinner';

class InitialState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: ''
    };
  }
  componentDidMount() {
    this.props.resetListings();
  }

  /*   updateList = () => {
    const {getRealtysList } = this.props;
    const {listings} = this.props.results;
    listings.length = 0;
    const  numPage = 0; 
    getRealtysList(this.state.place, numPage);
  } */
  getLocations = () => {
    const { getLocations, getRealtysList } = this.props;
    const { listings } = this.props.results;
    listings.length = 0;
    const numPage = 0;
    getRealtysList(this.state.place, numPage);
    /*  this.updateList(); */
    this.props.getLocations(this.state.place);
  };

  getMyLocation = () => {
    /*     this.updateList(); */
    this.props.getMyLocation();
  };

  onChangeHandler = e => {
    console.log(this.props);
    this.setState({
      place: e.target.value
    });
  };

  get recentPlace() {
    const searches = this.props.recList.recentArray.map((loc, i) => (
      <Location
        key={i}
        place={loc.location}
        totalResults={loc.totalResults}
        index={i + 1}
      />
    ));
    return <div>{searches}</div>;
  }

/*   get errorMessage() {
    const errorResult = this.props.error.errorList.map((er, i) => (
      <Error
        key={i}
        errorCode={er.code}
        errorText={er.textError}
      />
    ));
    return <div>{errorResult}</div>;
  } */

  render() {
    /*    const {spinner} = this.props;
    let mainSpinner = (spinner) ? <Spinner/> : null; */
    return (
      <div>
        <p className="initialText">
          Use the form below to search for houses to buy. You can search by
          place-name, postcode, or click 'My location', to search in your
          current location!
        </p>

        <input
          className="inputTxt"
          type="text"
          name="searchText"
          placeholder="Search..."
          value={this.state.place}
          onChange={this.onChangeHandler}
        />

        <div>
          <button name="go" className="btnGo" onClick={this.getLocations}>
            Go
          </button>
          <button
            name="myLocation"
            className="btnMyLoc"
            onClick={this.getMyLocation}
          >
            My location
          </button>
          {/* <button name="myLocation" onClick={this.test}>
            Test
          </button> */}
        </div>

       {/*    {!this.recentPlace ? <p>Recent Searches: </p> : null } */}
        <h4>Recent Searches:</h4>
        {/*    {mainSpinner} */}
        {this.recentPlace}
      </div>
    );
  }

  test = () => {
    fetch(
      'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=uk'
    )
      .then(response => response.json())
      .then(data => console.log(data));
  };
}

const mapStateToProps = ({ placeList, results, recList, spinner, error }) => ({
  placeList,
  results,
  recList,
  spinner,
  error
});

export default connect(mapStateToProps, {
  getLocations,
  getRealtysList,
  resetListings,
  getMyLocation
})(InitialState);

/* export default connect(
  state => ({
    placeStore: state.placeList.placeArray,
    totalResults: state.placeList.totalResults
  }),
  { getLocations, recentSearch }
)(InitialState); */
