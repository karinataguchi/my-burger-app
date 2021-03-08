import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          < BurgerBuilder />
          <p>Test git commit</p>
        </Layout>
      </div>
    );
  }
}

export default App;
