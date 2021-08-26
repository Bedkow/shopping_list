import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useState } from "react";

function App() {
	const handleClickAddNewItem = () => {
		setInputItemName("new name");
		setInputItemNumber(4);
	};

	// [initial value, function used to change the value by passing smth to it later]
	const [inputItemName, setInputItemName] = useState("xxx");
	const [inputItemNumber, setInputItemNumber] = useState(6);

	return (
		<div>
			<Header />

			<div className="item">
				<input
					type="text"
					className="name-input"
					placeholder="Item's name..."
				></input>
				<input
					type="number"
					className="number-input"
					placeholder="Quantity..."
				></input>
				<div className="btn-container">
					<button className="float-right-btn" onClick={handleClickAddNewItem}>
						+
					</button>
				</div>
			</div>

			<div className="new-item">
				<span>
					Item name: {inputItemName} Number: {inputItemNumber}
				</span>
			</div>

			<Footer />
		</div>
	);
}

export default App;
