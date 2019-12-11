// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
import { removeFeature } from '../redux/actions/featurePurchaseActions'

const AddedFeature = props => {

  const handleClick = ev => {
    props.removeFeature(props.feature.index)
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button 
        className="button"
        onClick={handleClick}
        >X</button>
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
