import React, { useState} from "react";


import githubService from './services/githubService';

const Search = () => {
    const [username, setUsername] = useState("")
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [login, setLogin] = useState("");
    const handleSearch = async (e) => {
        e.preventDefault();
        setLoading(true);
        setLogin("");
        try {
            const data = await fetchUserData(username);
            setUserData(data);
        } catch (err) {
            setLogin(" Look like we cant find the user");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="mx-20">
            <h1>GitHub user Search</h1>
            <form onSubmit={handleSearch}>
                <input type="text" placeholder="Search GitHub user" value={username} onChange={(e) => setUsername(e.target.value)} />
                <button type="submit">Search</button>
            </form>
            {loading && <p>Loading...</p>}
            {login && <p>{login}</p>}
            <ul>
                {results.map((item, index) = (
                    <li key={index}>{item.name}</li>
                ))}
            </ul>
            {userData && (
                <div>
                    <img src="{userData.avatar-url} alt={userData.name}"/>
                    <h3>{userData.name}</h3>
                    <a href={userDate.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
                        
                </div>
            )}
        </div>
    );
};
export default Search;