// React
import React, { useEffect } from 'react';
// Redux
import { connect } from 'react-redux'
import { selectVehicle } from '../redux/actions/selectVehicleActions'

const Header = props => {
  const { id } = props.match.params
  // I have ID of params here, I need to use this to give information about selected Vehicle
  useEffect(() => {
    props.selectVehicle(id)
  }, [id])

  return (
    <>
      <figure className="image is-128x128">
        <img src={props.image} alt={props.name} />
      </figure>
      <h2>{props.name}</h2>
      <p>Amount: ${props.price}</p>
    </>
  );
};

const mapStateToProps = ({ car }) => {
  return {
    image: car.image,
    name: car.name,
    price: car.price
  }
}

export default connect(mapStateToProps, {
  selectVehicle: selectVehicle
})(Header);
