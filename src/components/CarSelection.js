// React
import React from 'react'
import { Link } from 'react-router-dom'
// Redux
import { connect } from 'react-redux'

function CarSelection(props) {

  return (
    <div>
      <h1>Selection of Vehicles:</h1>

        {
          props.cars && props.cars.map((car, index) => (
            <div key={index}>
              <Link to={`/cars/${index}`}>{car.name}</Link>
            </div>
          ))
        }
    </div>
  )
}

const mapStateToProps = ({ cars }) => {
  return {
    cars: cars
  }
}

export default connect(mapStateToProps)(CarSelection);