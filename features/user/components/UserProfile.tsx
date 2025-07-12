"use client";
import { Calendar, UserPen } from "lucide-react";
import useUserProfile from "../hooks/querys/useUserProfile";

const UserProfile = () => {
    const accountId = Number(localStorage.getItem("accountId")) || 0;
    const { data: userInfo } = useUserProfile(accountId);

    return (
        <>
            <div className="flex flex-col">
                {userInfo ? (
                    <div className="space-y-2 text-gray-700">
                        <div className="flex gap-1 items-center ">
                            <UserPen className="w-4 h-4" />
                            <p className="">{userInfo.fullName}</p>
                        </div>
                        <div className="flex gap-1 items-center ">
                            <Calendar className="w-4 h-4" />
                            <p className="">{new Date(userInfo.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                ) : (
                    <p>Loading user profile...</p>
                )}
            </div>
        </>
    )
}
export default UserProfile;