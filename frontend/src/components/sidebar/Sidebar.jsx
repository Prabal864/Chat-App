import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
	return (
		<div className="bg-[#24252c] text-[#24252c] border-r border-[#333333] p-6 flex flex-col h-screen overflow-y-auto shadow-xl ">
			{/* Header */}
			<h2 className="text-3xl font-bold text-center mb-8 tracking-wide text-[#eae5e6]">
				Chats
			</h2>

			{/* Search Input */}
			<div className="mb-6">
				<SearchInput />
			</div>

			{/* Divider */}
			<div className="divider border-[#333333] opacity-50 my-4" />

			{/* Conversations List */}
			<div className="flex-1 overflow-y-auto bg-white border rounded-md">
				<Conversations />
			</div>
		</div>
	);
};

export default Sidebar;
