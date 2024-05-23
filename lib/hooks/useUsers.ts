import { useMutation, useQuery } from "react-query";
import { getAllUsers, loginUser, loadUser, logoutUser, deleteUser, updateUser, registerUser } from "../services/users.service";

const useUsers = () => {
    const getUsersQuery = () => {
        return useQuery("users", getAllUsers, { refetchOnWindowFocus: false })
    }

    const addUserMutation = () => {
        return useMutation(registerUser)
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

    const updateUserMutation = () => {
        return useMutation(updateUser)
    }

    return {
        getUsersQuery,
        addUserMutation,
        loginUserMutation,
        loadUserMutation,
        logoutUserMutation,
        deleteUserMutation,
        updateUserMutation,        
    }
}

export default useUsers