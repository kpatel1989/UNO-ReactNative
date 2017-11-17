import React, { Component } from "react";
import {
	View,
	Text,
} from 'react-native';
import styles from "../styles";

export default class GameRoom extends Component {
	static navigationOptions = {
		title: 'Game Room',
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					Game Room
			</Text>
			</View>
		);
	}
}