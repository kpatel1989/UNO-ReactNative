import React, { Component } from "react";
import {
	View,
	Text,
	Button
} from 'react-native';
import styles from "../styles";

export default class Home extends Component {
	static navigationOptions = {
		title: 'Home',
	}
	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>
					UNO
				</Text>
				<View>
					<Button
						onPress={() => { this.props.navigation.navigate('JoinRoom') }}
						title="Join Room"
						color="#841584"
						accessibilityLabel="Press this button to join a room to play game."
					/>
				</View>
			</View>
		);
	}
}
