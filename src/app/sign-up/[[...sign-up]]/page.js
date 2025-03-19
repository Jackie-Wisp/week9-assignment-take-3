import { SignUp} from "@clerk/nextjs";

export default function SignUpPage(){
return (
    <>
    <h1>Welcome to the YGO Card Database! To create Card Posts and Comments, please Sign up and Create a Profile!!</h1>
    <SignUp />
    </>
)
}