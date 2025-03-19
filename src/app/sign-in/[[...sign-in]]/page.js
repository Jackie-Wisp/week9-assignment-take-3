import { SignIn} from "@clerk/nextjs";

export default function SignInPage(){
return (
    <>
    <h1>Welcome to the YGO Card Database! To create Card Posts and Comments, please Sign in!</h1>
    <SignIn />
    </>
)
}