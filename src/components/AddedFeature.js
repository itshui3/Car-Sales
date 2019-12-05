import React from 'react';
import { connect } from 'react-redux'
import { removeFeature } from '../redux/actions/action'

const AddedFeature = props => {

  const handleRemoval = ev => {
    props.removeFeature(props.index)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={handleRemoval}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  removeFeature: removeFeature
})(AddedFeature);
