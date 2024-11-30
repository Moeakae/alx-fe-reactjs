import React, { useState } from "react";
     const RegistrationForm = () => { 
        const [name, setname] = useState("");
        const [email, setemail] = useState("");
        const [password, setpassword] = useState("");
        const [naneErrorMessage, setNameErrorMessage] = useState(null);
        const [emailErrorMessage, setEmailErrorMessage] = useState(null);
        const validateName = (name) => { 
            if (name.trim() ==='') { 
                return 'Name is required.'
            }
            return null;
        }
        const validateEmail = (email) => { 
            const re = /^[∖w-∖.]+@([∖w-]+∖.)+[∖w-]{2,4}$/;
            if (!re.test(string(email).toLowerCase())) { 
                return 'invalid email format.'
            }
               return null;
        }
        const validatePassword = (password) => {
            if (!password.trim() ==='') { 
                return 'password recovery.'
            }
            
        }
    
        const handleNameChange = (event) => { 
            setname(event.target.value);
            const error = validateName(e.target.value);
            setNameErrorMessage(error);
        };
        const handleEmailChange = (event) => { 
            setemail(event.target.value);
            const error =validateEmail(e.target.valu);
            setEmailErrorMessage(error);
        };
        const handlePasswordChange = (event) => { 
            setpassword(event.target.value);

            const handleSubmit = (event) => { 
                event.preventDefault();
                console.log(email);
             const nameError = validateName(name);
             const emailError = validateEmail(email);
             setEmailErrorMessage(emailError)
             setNameErrorMessage(nameErrorMessage)
             if (!nameError && !emailError){
                // Subit for data to server
             }
            }
        return (
       <form onSubmit={handleSubmit}>
        <h2>User Registration</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div>
            <labe>Username:</labe> 
            <input type="text" name="username" value={username} onChange={handleNameChange} required />
            {nameErrorMessage && <span className="error">{naneErrorMessage}</span>}
        </div>
        <div>
            <label>Email:</label>
            <input type="email" name="email" value={email} onChange={handleEmailChange} required />
            {emailErrorMessage && <span className="error">{emailErrorMessage}</span>}
        </div>
        <div>
            <label>Password:</label>
            <input type="password" name="password" value={password} onChange={handlePassword} required />
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
    </form>
);
        };
};
export default RegistrationForm;
