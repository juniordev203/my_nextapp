"use client"

import RegisterForm from "@/features/auth/components/RegisterForm";

const loginPage = () => {
    return (
        <div className="w-full h-full flex items-center justify-center p-4">
            <RegisterForm />
        </div>
    )
}
export default loginPage;