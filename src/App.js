import FundRequests from "./component/FundRequests";
import Sidebar from "./component/Sidebar";
import "./Scss/main.scss";

function App() {
	return (
		<div className="container">
			<Sidebar />
			<FundRequests />
		</div>
	);
}

export default App;
