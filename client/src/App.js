import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { fetchMuseum } from './Component/action/museumAction'
import Home from './Component/Home'
import Details from './Component/Detail'
import { connect } from 'react-redux'

class App extends Component {
  componentDidMount() {
    //get all museum
    this.props.fetchMuseum();
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path={`/detail/:ID`} component={Details} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default connect(null, { fetchMuseum })(App);
