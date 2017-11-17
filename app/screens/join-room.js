import React, { Component } from "react";
import {
	View,
	Button,
	Text,
  } from 'react-native';
import styles from "../styles";

export default class JoinRoom extends Component {
	static navigationOptions = {
		title: 'Join Room',
	}
	render() {
		return (
		<View style={styles.container}>
			<Text style={styles.welcome}>
				Join Room
		</Text>
			<View>
				<Button
					onPress={() => {this.props.navigation.navigate('Home')}}
					title="Search for Room"
					color="#841584"
					accessibilityLabel="Press this button to join a room to play game."
				/>
				<Button
					onPress={() => {this.props.navigation.navigate('GameRoom')}}
					title="Create a Room"
					color="#841584"
					accessibilityLabel="Press this button to create a room to play game."
				/>
			</View>
		</View>
		);
	}
}