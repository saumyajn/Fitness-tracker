import { signIn } from "@/lib/auth";
import { Button } from "@mui/material";

export default function Login() {
    return (<div>
        Sign up/Sign in to your profile
        <form
            action={async () => {
              'use server';
              await signIn('google', {
                redirectTo: '/'
              });
            }}
            className="w-full"
          >
            <Button className="w-full" type="submit">Sign in with GitHub</Button>
          </form>
    </div>)
};