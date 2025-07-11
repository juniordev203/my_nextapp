"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { useLoginMutate } from "@/services/auth/auth.api";
import { LoginPayload } from "@/services/auth/auth.type";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/services/auth/auth.validation";
import { toast } from "react-toastify";
import RHFTextField from "@/components/forms/rhf-input";
import FormProvider from "@/providers/FormProvider";
import Link from "next/link";

const defaultValues = {
    email: "",
    password: "",
};

const LoginForm = () => {
    const router = useRouter();
    const { mutateAsync: login, isPending } = useLoginMutate();

    const methods = useForm<LoginPayload>({
        resolver: zodResolver(loginSchema),
        defaultValues,
    });

    const onSubmit = methods.handleSubmit(async (data) => {
        try {
            await login(data);
            toast.success("Login successful!");
            router.push("/");
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message);
            } else {
                toast.error("An unexpected error occurred.");
            }
        }
    });

    return (
        <Card className="w-full max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                    Enter your email below to login to your account
                </CardDescription>
                <CardAction>
                    <Link href="/register">
                        <Button variant="link" className="cursor-pointer">Sign Up</Button>
                    </Link>
                </CardAction>
            </CardHeader>
            <FormProvider methods={methods} onSubmit={onSubmit} className="flex flex-col gap-4">
                <CardContent className="space-y-2">
                    <RHFTextField
                        name="email"
                        label="Email"
                        title="Email"
                        isRequire
                        placeholder="Enter email..."
                        className="bg-white dark:bg-slate-500 border-[1px] focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    />

                    <RHFTextField
                        name="password"
                        type="password"
                        label="Password"
                        title="Password"
                        isRequire
                        placeholder="Enter password..."
                        className="bg-white dark:bg-slate-500 border-[1px] focus-visible:ring-0 text-black dark:text-white focus-visible:ring-offset-0"
                    />
                </CardContent>
                <CardFooter className="flex-col gap-2">
                    <Button type="submit" className="w-full" disabled={isPending}>
                        {isPending ? "Logging in..." : "Login"}
                    </Button>
                    <Button variant="outline" className="w-full">
                        Login with Google
                    </Button>
                </CardFooter>
            </FormProvider>

        </Card >
    )
};

export default LoginForm;
