import { useMutation, useQuery } from "react-query";
import { getAllUsers, loginUser, loadUser, logoutUser, deleteUser } from "../services/users.service";

const useUsers = () => {
    const getUsersQuery = () => {
        return useQuery("users", getAllUsers, { refetchOnWindowFocus: false })
    }

    const loginUserMutation = () => {
        return useMutation(loginUser)
    }
    const loadUserMutation = () => {
        return useMutation(loadUser)
    }

    const logoutUserMutation = () => {
        return useMutation(logoutUser)
    }

    const deleteUserMutation = () => {
        return useMutation(deleteUser)
    }

    return {
        getUsersQuery,
        loginUserMutation,
        loadUserMutation,
        logoutUserMutation,
        deleteUserMutation,
    }
}

export default useUsers