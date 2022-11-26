import "./app.css";
import HomePage from "./pages/HomePage/HomePage";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyCPznpr8lPTl4h5T18n9swEDf_kp6Z7kR8",
	authDomain: "open-apis-fc461.firebaseapp.com",
	databaseURL:
		"https://open-apis-fc461-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "open-apis-fc461",
	storageBucket: "open-apis-fc461.appspot.com",
	messagingSenderId: "47013630181",
	appId: "1:47013630181:web:3355a59d18918a232f840c",
};

initializeApp(firebaseConfig);

function App() {
	return (
		<div className="App">
			<HomePage />
		</div>
	);
}

export default App;
