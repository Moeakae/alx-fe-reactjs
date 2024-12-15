import axios from "axios";

const fetchUserData = async (username) => {
    const respond = await axios.get('https://api.github.com/users/${username}');
    return respond.data;
};
export { fetchUserData};