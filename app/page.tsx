'use client'

import UsersList from "@/components/users/users-list";
import { UserContext } from "@/lib/state/user/user.context";
import { UserContextValue } from "@/lib/state/user/user.type";
import { useContext } from "react";
import Link from 'next/link';

export default function Home() {
  const { isUserLogin } = useContext(UserContext) as UserContextValue

  if (!isUserLogin) {
    return (
      <div className="flex justify-center pt-8">
        <div className="flex items-center divide-x divide-gray-300">
          <Link href="/login" className="text-sm font-semibold px-4">
            Log in
          </Link>
          <Link href="/register" className="text-sm font-semibold px-4">
            Sign up
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      <UsersList />
    </div>
  );
}
