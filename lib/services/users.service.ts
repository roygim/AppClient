import axios from "axios";
import { ResponseObj, User } from "../types";

export const getAllUsers = async (): Promise<User[]> => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/users`
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
        const url = `${process.env.NEXT_PUBLIC_API_URL}/login`

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

export const logoutUser = async () => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/logout`

        const response = await axios.delete(url, { withCredentials: true });

        if (response && response.data) {
            return response.data;
        }
        else
            throw new Error('error')
    } catch (error) {
        throw error
    }
}

export const loadUser = async () => {
    try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/loaduser`

        const response = await axios.post(url, null, { withCredentials: true });

        if (response && response.data && response.data.success) {
            return response.data;
        }
        else
            throw new Error('error')
    } catch (error) {
        throw error
    }
}