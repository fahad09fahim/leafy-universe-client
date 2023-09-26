import { createContext } from "react";
import { getAuth } from "firebase/auth"
import app from "../firebase/firebase.config";

const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({childern}) => {
    const clientInfo = {
         
    }
    return (
    <AuthContext.Provider value={clientInfo}>{childern}</AuthContext.Provider>
    );
};

export default AuthProvider;