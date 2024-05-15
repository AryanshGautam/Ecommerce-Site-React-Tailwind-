import React, { useState } from "react";
import './Logbutton.css';
import { useNavigate } from "react-router-dom";

function Logbutton() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        if (!username || !password) {
            e.preventDefault();
            alert("Please fill in your details.");
            return;
        }
        let val ="Logout"

        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        navigate('/')
        window.location.reload();
    };


    return (
        <>
        <div className="formcontainer">
            <form onSubmit={handleSubmit} action="">
                <div>Username</div>
                <input 
                    type="text" 
                    placeholder="User Name" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                /><br/>
                <div>Password</div>
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                /><br/>
                <button type="submit">Login</button>
            </form>
        </div>
        </> 
    );
}

export default Logbutton;
