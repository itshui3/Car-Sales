// React
import React from 'react';
// Redux
import { connect } from 'react-redux';
// Child Component
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.features ? (
        <ol type="1">
          {props.features.map((item, index) => (
            <AdditionalFeature 
              key={index}
              index={index}
              feature={item} 
            />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    features: state.additionalFeatures
  }
}

export default connect(mapStateToProps)(AdditionalFeatures);
