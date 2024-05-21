import axios from "axios";
import { User } from "../types";

export const getAllUsers = async (): Promise<User[]> => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/users`
        const response = await axios.get(url, { withCredentials: true });

        if (response && response.data && response.data.success)
            return response.data.data;
        else
            throw new Error('error')
    } catch (err) {
        throw err
    }
}

export const loginUser = async ({ email, password }: { email: string, password: string }) => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/api/login`

        const data = {
            email: email,
            password: password
        }

        const response = await axios.post(url, data, { withCredentials: true })

        if (response && response.data && response.data.success) {
            return response.data.data;
        }            
        else
            throw new Error('error')
    } catch (error: any) {
        throw error
    }
}