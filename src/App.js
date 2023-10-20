import "./App.css";
import ContactCard from "./components/ContactCard";
import { userInfo } from "./data/contact/userContactInfo";

function App() {
	return (
		<div className="App">
			{userInfo.map(({ username, email, age }, index) => (
				<div key={index}>
					<ContactCard username={username} email={email} age={age} />
				</div>
			))}
		</div>
	);
}

export default App;
