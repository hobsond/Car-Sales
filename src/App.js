import React from 'react';
import {connect} from 'react-redux'
// import
import reducer from './reducer/reducer'
import{addFeature} from './actions/addFeature'
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';


const App = (props) => {
 

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStateProps = state=>{
  return{
    state


  };

 
  
}

export default connect(mapStateProps,{
  addFeature
})(App);
