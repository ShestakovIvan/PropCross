import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { selectRealty } from '../../actions/realty';
import { connect } from 'react-redux';

class Realty extends Component {

  selectRealty = () => {
    const { selectRealty, InfoAboutRealty } = this.props;
    selectRealty(InfoAboutRealty);
  };

  render() {
    console.log(this.props);
    const { title, price_formatted: price, img_url: imgUrl } = this.props.InfoAboutRealty;

    return (
      <Link to={`/search/:location/:realty=${title}`} onClick={this.selectRealty}>
 <div className='listResults'>
  <table >
     <tr >
        <td>
         <img src={imgUrl}  className='imgList' alt="realty photo" />
        </td>
        <td>
        <div className='titlesPrices'>
            <p className='titleRes' >{title}</p>
            <p className='price' >{price}</p>
          </div>
        </td>
    </tr>
</table> 
</div>
      </Link>
    );
  }
}

const mapStateToProps = ({ realty }) => ({ realty });

export default connect(mapStateToProps, { selectRealty })(Realty);
