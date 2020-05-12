import React from 'react';
import {connect} from 'react-redux'
import {AddFeature,addFeature} from '../actions/addFeature'


const AdditionalFeature = props => {
  const updateFeature = e => {
    e.preventDefault()
    props.addFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={updateFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};
const mapToState =(state)=>{
  return{
    state
  }
}

export default connect(mapToState,{addFeature})(AdditionalFeature);
