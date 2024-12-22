import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProviter";

const useAuth = () => {
    const context = useContext(AuthContext)
    return context
};

export default useAuth;