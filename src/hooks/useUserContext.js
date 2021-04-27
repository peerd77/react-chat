import React, {useState, useContext, createContext} from "react";

const userContext = createContext();

export function ProvideUser({children}) {
    const userObj = useProvideUser();
    return <userContext.Provider value={userObj}>{children}</userContext.Provider>;
}

// Hook for child components to get the user object ...
// ... and re-render when it changes.
export const useUserContext = () => {

    return useContext(userContext);
};

// Provider hook that creates user object and handles state
function useProvideUser() {
    const [user, setUser] = useState();

    // Return the user object
    return {
        user,
        setUser,
    };
}
