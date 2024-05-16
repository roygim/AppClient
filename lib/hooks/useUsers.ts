import { useQuery } from "react-query";
import { getAllUsers } from "../services/users.service";

const useUsers = () => {
    const getUsers = () => {
        return useQuery("users", getAllUsers)
    }

    return {
        getUsers
    }
}

export default useUsers