import React, {useEffect, useState} from "react";
import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase';
import { useFetcher, useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if(auth.currentUser) {
            navigate('/chat');  // Redirect to chat if already logged in
        }
    }, []);

    // Google Sign-in
    const signInWithGoogle = async () => {
        try {

            const result = await signInWithPopup(auth, provider);
            console.log("Google User:" , result.user);
            navigate("/chat");
        } catch (error) {
            console.error("Google Sign-in Error:", error.message);
        }
    };

    // Manual Email/Password Login
    const loginWithEmailPassword = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            console.log("Email User:", userCredential.user);
            navigate("/chat");
        } catch (error) {
            console.error("Login Error:", error.message);
        }
    };

return (
    <div>
        <h1>Login</h1>
        {/* Google Login */}
        <button onClick={signInWithGoogle}>Sign in with Google</button>

        {/* Manual Login */}
        <form onSubmit={loginWithEmailPassword}>
            <input 
                type="email" 
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
             />
             <button type="submit">Login with Email</button>
        </form>
    </div>
);
};

export default Login;