"use strict";
import React, { Component } from 'react'
import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import * as storage from 'redux-storage'
import {
	Text,
	View,
	BackAndroid,
	AppRegistry,
	Image,
	TouchableOpacity,
	StyleSheet,
} from 'react-native'
import { StackNavigator, addNavigationHelpers } from "react-navigation";
import SideMenu from 'react-native-side-menu';

const image = require('./assets/menu.png');

import Menu from './src/components/Menu';
import AllNotes from './src/components/view_allNotes'
import NewNote from './src/components/view_newNote'
import SingleNote from './src/components/view_singleNote'
import LoginScreen from '../components/LoginScreen';

import NotesReducer from './src/reducers/reducer_notes'
import CurrentNoteReducer from './src/reducers/reducer_current'

const AppNavigator = StackNavigator({
	AllNotes: {
		screen: AllNotes,
	},
	NewNote: {
		screen: NewNote,
	},
	SingleNote: {
		screen: SingleNote,
	},
	LoginScreen: {
		screen: LoginScreen,
	}
});
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('/'));
const navReducer = (state = initialState, action) => {
	const nextState = AppNavigator.router.getStateForAction(action, state);

	// Simply return the original `state` if `nextState` is null or undefined.
	return nextState || state;
};

// import ApplicationStore from './src/reducers'
var reducer = combineReducers({
	allNotes: NotesReducer,
	currentNote: CurrentNoteReducer,
	nav: navReducer
});
reducer = storage.reducer(reducer);

import createEngine from 'redux-storage-engine-reactnativeasyncstorage'
const engine = createEngine('notes-app-store')

const middleware = storage.createMiddleware(engine)
const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)
const store = createStoreWithMiddleware(reducer)

const load = storage.createLoader(engine)
load(store)

class AppWithNav extends Component {


	render() {
		return (
			<AppNavigator navigation={addNavigationHelpers({
				dispatch: this.props.dispatch,
				state: this.props.nav,
			})} />
		)
	}
}

const mapStateToProps = (state) => ({
	nav: state.nav
});

const AppWithNavigationState = connect(mapStateToProps)(AppWithNav);

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.toggle = this.toggle.bind(this);

		this.state = {
			isOpen: false,
			selectedItem: 'About',
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}


	updateMenuState(isOpen) {
		this.setState({ isOpen });
	}

	onMenuItemSelected = item =>
		this.setState({
			isOpen: false,
			selectedItem: item,
		});

	render() {
		const menu = <Menu onItemSelected={this.onMenuItemSelected} />
		return (
			<Provider store={store}>
				<SideMenu
					menu={menu}
					isOpen={this.state.isOpen}
					onChange={isOpen => this.updateMenuState(isOpen)} >
					<AppWithNavigationState />
					<TouchableOpacity
						onPress={this.toggle}
						style={styles.button}>
						<Image
							source={image}
							style={{ width: 32, height: 32 }} />
					</TouchableOpacity>
				</SideMenu>
			</Provider>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		position: 'absolute',
		top: 20,
		padding: 10,
	},
	caption: {
		fontSize: 20,
		fontWeight: 'bold',
		alignItems: 'center',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});