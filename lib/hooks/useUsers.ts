import { useMutation, useQuery } from "react-query";
import { getAllUsers, loginUser as us_loginUser } from "../services/users.service";

const useUsers = () => {
    const getUsersQuery = () => {
        return useQuery("users", getAllUsers, { refetchOnWindowFocus: false })
    }

    const loginUserMutation = () => {
        return useMutation(us_loginUser)
    }

    return {
        getUsersQuery,
        loginUserMutation
    }
}

export default useUsers