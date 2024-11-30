import  { useState } from "react";
const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        "value = {username}": "",
        "value = {email}": "",
        "value = {password}": "",
    });

    
const [error, setError] = useState("");

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = useForm<formData>
   useEffect(() => {
    if (!username || !email || !password) { 
        setError("All fields are required!");
    } else {
        setError("");
        console.log("Submitted Data:", formData);
        // Simulate API call
        alert("User registered successfully!");
     
}
});
return (
    <form className="registration-form" onSubmit={handleSubmit}>
        <h2>User Registration</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
            <labe>Username:</labe> 
            <input type="text" name="username" value={username} onChange={handleName} required />
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleEmail} required />
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handlePassword} required />
        </div>
        <div>
            <button onClick={onSubmit}>Register</button>
        </div>
    </form>
);
};
};
export default RegistrationForm;
