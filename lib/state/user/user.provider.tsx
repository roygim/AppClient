import { useState } from "react";
import { UserContext } from "./user.context";
import { UserStateObj } from "./user.type";
import { initialObj } from "./user.initial";
import { User } from "@/lib/types";
import { clone } from "@/lib/utils";

const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, setState] = useState<UserStateObj>(initialObj)

    const saveUser = (userObj: User) => {
        setState({ ...state, isLogin: true, user: userObj })
    }

    const removeUser = () => {
        const userObj = clone<UserStateObj>(initialObj)
        setState(userObj)
    }

    return (
        <UserContext.Provider value={{ user: state.user, isUserLogin: state.isLogin, saveUser, removeUser }}>
            {children}
        </UserContext.Provider>
    )
};

export default UserProvider;