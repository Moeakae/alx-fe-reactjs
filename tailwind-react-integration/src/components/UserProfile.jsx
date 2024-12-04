function UserProfile() {
    return (
        <div className="bg-gray-100 hover:shadow-xl p-8 sm:max-w-sm max-w-xs mx-auto arounded-lg shadow-lg my-20 sm:p-4 sm:h-24 md:w-36 md:p-8 md:max-w-sm">
            <img className="rounded-full hover:scale-110 sm:w-24 sm:w-36 md:h-36 w-36 h-36 mx-auto transition-transform duration-300 ease-in-out" src="https://via.placeholder.com/150" alt="User" />
            <h1 className="hover:text-blue-500 text-xl sm:text-lg md:text-xl text-blue-800 my-4">John Doe</h1>
            <p className="text-gray-600 text-base sm:text-sm md:text-base">Developer at Example Co.Loves to write code and explore new techno logies.</p>
        </div>
    );
}
export default UserProfile;