import { useMutation, useQuery } from "react-query";
import { getAllUsers, loginUser as us_loginUser, logoutUser as us_logoutUser } from "../services/users.service";

const useUsers = () => {
    const getUsersQuery = () => {
        return useQuery("users", getAllUsers, { refetchOnWindowFocus: false })
    }

    const loginUserMutation = () => {
        return useMutation(us_loginUser)
    }

    const logoutUserMutation = () => {
        return useMutation(us_logoutUser)
    }

    return {
        getUsersQuery,
        loginUserMutation,
        logoutUserMutation
    }
}

export default useUsers