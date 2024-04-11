
import { useState, useCallback, useContext } from "react";
import { createContext } from 'react';

export const UserContext = createContext(null)

export function useUser(defaultUser = null) {
    const [user, setUser] = useState(defaultUser);

// Можно не писать строку ниже если прокидывается только userName для простоты в объекте ниже просто user

    // const login = useCallback((userName) => setUser(userName), []);

    const logout = useCallback((userName) => setUser(null), []);

    return{
        user,
        login: setUser,
        logout
    };
}
 
export function useCurrentUser() {
    return useContext(UserContext)
}

