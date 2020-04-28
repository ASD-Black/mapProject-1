import React, { Component } from "react";
import PropTypes from 'prop-types';// ES6 

import { Router } from "react-native-router-flux";

import scenes from "../routes/scenes";

import { Provider } from "react-redux";

export default class AppContainer extends Component {
	static propTypes = {
		store: PropTypes.object.isRequired
	}
	render(){
		return ( //err 17,16
			<Provider store={this.props.store}>
				<Router scenes={scenes}/>
			</Provider>

			);
	}
}