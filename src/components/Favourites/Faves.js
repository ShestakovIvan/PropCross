import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Realty from '../Results/realty';

class FavouritesList extends Component {
   get realtiesList() {
    const listings = this.props.faves.favesArray.map((el, i) => (
      <Realty key={i} InfoAboutRealty={el} />
    ));
    return listings;
  } 

  render() {
    console.log(this.props.faves);
    return (
      <div>
        <Link to={`/`}>
          <button className="back">← Back</button>
        </Link>
        <div>
    {this.realtiesList == 0 ? (<div className='textInFaves'>Вы не добавили никаких свойств в избранное</div>):(<div className='favesList'>{this.realtiesList}</div>)}
         </div>
      {/*    {this.realtiesList}  */}
      </div>

      /*  <RealtyList listings={JSON.parse(localStorage.favourites)} />; */
    );
  }
}

const mapStateToProps = ({ faves }) => ({ faves });
export default connect(mapStateToProps)(FavouritesList);
