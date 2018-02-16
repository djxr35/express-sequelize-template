import React, { Component } from 'react';
import store from '../store/index';
import {storeFunction} from '../store/reducerFile';

export default class ComponentName extends Component {

  constructor () {
    super(); // ALWAYS in constructor

    // If this is a form, it most likely should have its own local state
    // so as not to update a global store with handleChanges
    // this.state = {
      // someKey: someValue
      // maybe someEntry: someEntryValue
    // }
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);

    // for a standard component in redux
    // this.state = store.getState();

  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()));
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  handleChange (event) { // this goes in input
  // in a form:
        // check it out: we get the evt.target.name (which will be either "email" or "password")
        // and use it to target the key on our `state` object with the same name, using bracket syntax
        // make sure that each input field has a name="somethingThatMatchesAKeyInState"
    this.setState({ [event.target.name]: event.target.value });

    // generally
    store.dispatch(STOREFUNCTION(event.target.value))
  }

  handleSubmit (event) {  // this goes in <form>
    event.preventDefault();
    // In a form
    //axios.post('/api/something', this.state)
      // .then(res=>res.datat)
      //.then(value => store.dispatch(storeFunction(value (req.body)))
    // }
    //Generally
    store.dispatch(storeFunction({ 'req.body': 'here' }));
  }


render () {
    return (
      <JSX>
      { 'put in brackets things that you would like to do in JS' }
      </JSX>
    );
  }
}
