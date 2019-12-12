import React from 'react';
import { Route } from 'react-router-dom';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import CarSelection from './components/CarSelection'

const App = () => {

  return (
    <div className="boxes">
      <div className="box">
        {/* Car Selection will have a set of links to each available vehicle, marking it in state.selectedCar by index string */}
        <CarSelection />
        <Route path="/cars/:id" component={Header} />
        <Route path="/cars" component={AddedFeatures} />
      </div>
      <div className="box">
        <Route path="/cars" component={AdditionalFeatures} />
        <Route path="/cars/:id" component={Total} />
      </div>
    </div>
  );
};

export default App;
