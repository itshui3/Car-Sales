import React from 'react';
import { removeFeature, buyItem } from '../redux/actions/action'
import { connect } from 'react-redux'

const AdditionalFeature = props => {

  const buyItem = ev => {
    props.buyItem(props.feature)
  }
  const removeFeature = ev => {
    props.removeFeature(props.feature.name)
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}

      <button onClick={buyItem} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})

    </li>
  );
};

const mapStateToProps = state => {
  return {
    addedFeatures: state.car.features
  }
}

export default connect(mapStateToProps, {
  buyItem: buyItem,
  removeFeature: removeFeature
})(AdditionalFeature);
