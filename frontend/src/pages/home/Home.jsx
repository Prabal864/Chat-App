import MessageContainer from "../../components/messages/MessageContainer";
import LogoutButton from "../../components/sidebar/LogoutButton";
import Sidebar from "../../components/sidebar/Sidebar";

const Home = () => {
	return (
		<div className="flex h-screen w-screen bg-gray-900 overflow-hidden">
			{/* Sidebar */}
			<div className="w-1/4 h-full bg-gray-800 text-gray-100">
				<Sidebar />
			</div>

			{/* Main Content Area */}
			<div className="w-3/4 h-full flex flex-col relative">
				{/* Logout Button */}
				<div className="absolute top-4 right-4 z-10">
					<LogoutButton />
				</div>
				{/* Message Container */}
				<div className="flex-1">
					<MessageContainer />
				</div>
			</div>
		</div>
	);
};

export default Home;
