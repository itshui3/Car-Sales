// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
import { addFeature } from '../redux/actions/featurePurchaseActions'

const AdditionalFeature = props => {
  const handleClick = ev => {
    props.addFeature(props.feature.id)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button"
        onClick={handleClick}
        >Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps, {
  addFeature
})(AdditionalFeature);
