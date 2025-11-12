"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { toast } from "sonner"
import { CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useTransition } from "react"
import { Loader2 } from "lucide-react"

type Props = {
    type: "login" | "signup"
}

export default function AuthForm({ type }: Props) {
    const isLogin = type === "login"
    const router = useRouter()

    const handleSubmit = async (formData: FormData) => {
        console.log("Form submitted:", formData)
        toast.success(`${isLogin ? "Logged in" : "Signed up"} successfully! Redirecting...`)
        router.push("/")
    }

    const [isPending, startTransition] = useTransition()

    return (
        <>
            <CardContent>
                <form action={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            disabled={isPending}
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="••••••••"
                            disabled={isPending}
                            required
                        />
                    </div>

                    {!isLogin && (
                        <div className="space-y-2">
                            <Label htmlFor="confirmPassword">Confirm Password</Label>
                            <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                placeholder="••••••••"
                                disabled={isPending}
                                required
                            />
                        </div>
                    )}

                    <Button type="submit" className="w-full">
                        {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : isLogin ? "Log In" : "Sign Up"}
                    </Button>
                </form>
            </CardContent>

            <CardFooter className="flex justify-center text-sm text-muted-foreground space-x-1">
                {isLogin ? (
                    <>
                        Don’t have an account?{" "}
                        <Link href="/sign-up" className="px-1 text-primary">
                            Sign up
                        </Link>
                    </>
                ) : (
                    <>
                        Already have an account?{" "}
                        <Link href="/login" className="px-1 text-primary">
                            Log in
                        </Link>
                    </>
                )}
            </CardFooter>

        </>
    )
}
