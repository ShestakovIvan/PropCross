import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import InitialState from './components/Search';
import ResultsList from './components/Results';
import FavouritesList from './components/Favourites/Faves';
import PropertyRealty from './components/Results/propertyRealty';
import history from './history';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Error from './components/Error';

const results = id => {
 /*  console.log(id); */
  return <ResultsList id={id.match.params.id} />;
};
const realty = id => {
  /* console.log(id); */
  return <PropertyRealty id={id.match.params.id} />;
};

const error = id => {
  console.log(id);
  return <Error id={id.match.params.id} />;
};


class App extends React.Component {
  render() {
    return (
      <div>
          <Navbar/>
        <Switch>
          <Route exact={true} path="/" component={InitialState} />
          <Route path="/error=:id" render={error} /> 
           <Route path="/search/:location=:id" render={results} />
           <Route path="/search/:location/:realty=:id" render={realty}/>
           <Route path="/faves" component={FavouritesList}/>
        </Switch>
      </div>
    );
  }
}
export default App;
/* component={ResultsList} */


{/* <Route path=":title" component={Realty} /> */}
