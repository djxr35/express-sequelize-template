import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store from '../store/index.js';
// import All The Pages you'll Need
// import {Provider} from 'react-redux';

export default class Main extends Component {
  constructor (prop) {
     super(props);

     this.state = store.getState();
  }
  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));

    store.dispatch(messagesThunk);
    store.dispatch(fetchSomething());
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  render () {
    return (
      <div>
      {
        // wrap everything in <Provider> if using react-redux

        // pages you'll want to keep on all pages
        //then a switch
          <Switch>
            <Route path="/" component={} />
            <Route path='/somePlace' something = {this.state.something } />
                { /* or this.some props you want to pass through */ }
          </Switch>
      }
      </div>
    );
  }
}
