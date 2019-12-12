import React from 'react';
import { Route } from 'react-router-dom';

import FeatureDashboard from './components/FeatureDashboard'

const App = () => {

  return (
    <Route path="/" component={FeatureDashboard} />
  );
};

export default App;
