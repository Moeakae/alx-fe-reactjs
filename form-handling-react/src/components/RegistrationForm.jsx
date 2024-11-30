import  { useState } from "react";
     const RegistrationForm = () => { 
        const [name, setname] = useState("");
        const [email, setemail] = useState("");
        const [password, setpassword] = useState("");
        const handleSubmit = (event) => { 
            event.preventDefault();
            console.log(email);
        };
        const handleName = (event) => { 
            setname(event.target.value);
        };
        const handleEmail = (event) => { 
            setemail(event.target.value);
        };
        const handlePassword = (event) => { 
            setpassword(event.target.value);
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
