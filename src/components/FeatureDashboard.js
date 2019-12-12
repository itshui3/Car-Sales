// React
import React from 'react';
import { Link, Route } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
// Components
import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

function FeatureDashboard(props) {

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures />
      </div>
      <div className="box">
        <AdditionalFeatures />
        <Total />
      </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {}
}

export default connect(mapStateToProps)(FeatureDashboard);