import { StackNavigator } from 'react-navigation';
import Home from "./screens/home"
import JoinRoom from "./screens/join-room"
import GameRoom from "./screens/game-room"

export default App = StackNavigator({
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
	initialRouteName : "Home"
  });