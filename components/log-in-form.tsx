import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldDescription,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LogInForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center mt-1.5 gap-1">
                    <CardTitle className="text-2xl">Welcome back</CardTitle>
                    <CardDescription>Log in to your account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup className="gap-5">
                            <Field className="gap-2">
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" type="email" required />
                            </Field>
                            <Field className="gap-2">
                                <div className="flex items-center">
                                    <FieldLabel htmlFor="password">
                                        Password
                                    </FieldLabel>
                                    <a
                                        href="#"
                                        className="ml-auto text-xs text-muted-foreground underline-offset-4 hover:underline"
                                    >
                                        Forgot your password?
                                    </a>
                                </div>
                                <Input id="password" type="password" required />
                            </Field>
                            <Field className="mt-3">
                                <Button className="h-10" type="submit">
                                    Log In
                                </Button>
                                <FieldDescription className="text-center">
                                    Don&apos;t have an account?{" "}
                                    <a href="/sign-up">Sign up</a>
                                </FieldDescription>
                            </Field>
                        </FieldGroup>
                    </form>
                </CardContent>
            </Card>
            <FieldDescription className="px-6 text-center">
                By continuing, you agree to our{" "}
                <a href="/terms-of-service">Terms of Service</a> and{" "}
                <a href="/privacy-policy">Privacy Policy</a>.
            </FieldDescription>
        </div>
    );
}
