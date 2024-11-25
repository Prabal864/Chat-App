import { useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";


const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}
		const conversation = conversations.find((c) => c.username.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<div className="relative">
			<form onSubmit={handleSubmit} >
			<input
				type="text"
				placeholder="Search..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="w-full px-5 py-3 rounded-full bg-[#f7f5f5] text-[#060606] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#3ce898] shadow-inner transition-all duration-300"
			/>
			<span className="absolute right-4 top-3 text-[#888888]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M10 19l-7-7m0 0l7-7m-7 7h16"
					/>
				</svg>
			</span>
			</form>
		</div>
	);
};

export default SearchInput;
