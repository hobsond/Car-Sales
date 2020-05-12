import React from 'react';
import { connect } from 'react-redux'
import { removeFeature} from '../actions/removeFeature'

const AddedFeature = props => {
  const Removeft = e => {
    e.preventDefault();
    props.removeFeature(props.feature)
  }


  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={Removeft} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

const mapToState = (state) => {
  return {
    state
  }
}

export default connect(mapToState,{removeFeature})(AddedFeature);
