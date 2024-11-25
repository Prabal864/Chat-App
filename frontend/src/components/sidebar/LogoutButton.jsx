import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
	const { loading, logout } = useLogout();

	return (
		<div className="mt-auto flex items-center group cursor-pointer justify-end">
			{/* Text (Logout) - initially hidden */}
			<span className="text-[#f0f0f0] opacity-0 group-hover:opacity-100 text-sm font-medium transition-opacity duration-300 mr-2">
				Logout
			</span>

			{/* Icon (initially on the right, will shift to left on hover) */}
			<div className="flex items-center gap-2">
				{!loading ? (
					<BiLogOut
						className="w-8 h-8 text-[#f0f0f0] transform transition-all duration-300 group-hover:translate-x-2"
						onClick={logout}
					/>
				) : (
					<span className="loading loading-spinner text-[#EF233C]"></span>
				)}
			</div>
		</div>
	);
};

export default LogoutButton;
