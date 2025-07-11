"use client"

import LoginForm from "@/features/auth/components/LoginForm"

const loginPage = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <LoginForm />
        </div>
    )
}
export default loginPage;