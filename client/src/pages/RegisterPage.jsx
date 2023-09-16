import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function registerUser(e) {
        e.preventDefault();
        axios.post('/register', {
            name,
            email,
            password
        });
    }

    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="-mt-64">
                <h1 className="text-4xl text-center m-4">Register</h1>
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <input type="text" 
                        name="name" 
                        id="name" 
                        placeholder={'John Doe'}
                        value={name} 
                        onChange={e => setName(e.target.value)}  
                    />
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder={'youremail@email.com'} 
                        value={email} 
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder={'your password'} 
                        value={password} 
                        onChange={e => setPassword(e.target.value)} 
                    />
                    <button 
                        type="submit" 
                        className="primary"
                    >
                        Sign Up
                    </button>
                    <div className="text-center py-2 text-gray-500">
                        Already a member? <Link to='/login' className="underline text-black">Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}