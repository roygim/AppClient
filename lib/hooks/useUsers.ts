import { useMutation, useQuery } from "react-query";
import { getAllUsers, loginUser, logoutUser, loadUser } from "../services/users.service";

const useUsers = () => {
    const getUsersQuery = () => {
        return useQuery("users", getAllUsers, { refetchOnWindowFocus: false })
    }

    const loginUserMutation = () => {
        return useMutation(loginUser)
    }

    const logoutUserMutation = () => {
        return useMutation(logoutUser)
    }

    const loadUserMutation = () => {
        return useMutation(loadUser)
    }

    return {
        getUsersQuery,
        loginUserMutation,
        logoutUserMutation,
        loadUserMutation
    }
}

export default useUsers