import { StackNavigator, SafeAreaView } from 'react-navigation';
import Home from "./home"
import JoinRoom from "./join-room"
import GameRoom from "./game-room"

export default MainScreen = StackNavigator({
	Home: {
		path: "/",
		title: 'UNO',
		screen: Home,
	},
	JoinRoom: {
		path: '/join-room',
		title: "Join Room",
		screen: JoinRoom,
	},
	GameRoom: {
		path: '/game-room',
		title: "Game Room",
		screen: GameRoom,
	},
}, {
		initialRouteName: "Home"
	});
