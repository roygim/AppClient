import { createContext } from 'react';
import { UserContextValue } from './user.type';

export const UserContext = createContext<UserContextValue | null>(null);