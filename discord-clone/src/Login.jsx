import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {auth} from './firebase';


const Login = () => {
    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).catch(console.error);
    };

return (
    <div>
        <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
);
};

export default Login;