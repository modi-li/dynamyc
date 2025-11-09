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

export function SignUpForm({
    className,
    ...props
}: React.ComponentProps<"div">) {
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader className="text-center mt-1.5 gap-1">
                    <CardTitle className="text-2xl">Welcome</CardTitle>
                    <CardDescription>Create an account</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <FieldGroup className="gap-5">
                            <Field className="gap-2">
                                <FieldLabel htmlFor="email">Name</FieldLabel>
                                <Input id="email" type="text" required />
                            </Field>
                            <Field className="gap-2">
                                <FieldLabel htmlFor="email">Email</FieldLabel>
                                <Input id="email" type="email" required />
                            </Field>
                            <Field className="gap-2">
                                <FieldLabel htmlFor="password">
                                    Password
                                </FieldLabel>
                                <Input id="password" type="password" required />
                            </Field>
                            <Field className="mt-3">
                                <Button className="h-10" type="submit">
                                    Log In
                                </Button>
                                <FieldDescription className="text-center">
                                    Already have an account?{" "}
                                    <a href="/log-in">Log In</a>
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
