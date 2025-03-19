"use client";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import * as HoverCard from "@radix-ui/react-hover-card"; 

export default function Header() {
  const { user } = useUser(); // this gets the user info from clerk, remember ti import "useUser"

  return (
    <>
    <header className="header">
      <h1 className="font-bold">YGO CardBase</h1>

      <SignedIn>
        <HoverCard.Root openDelay={100}>
          <HoverCard.Trigger asChild>
            <div className="cursor-pointer"> {/*For some reason, ths hovercard only works if the user button is wrapped in a interactive element, further researched showed this is because clerks native button is not an interactive element and the hovercard trigger requires it  */}
              <UserButton />
            </div> 
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className="hover-card-content">
              {user && (
                <div>
                  <img src={user.imageUrl} alt="User Avatar" className="hover-card-avatar" />
                  <p className="hover-card-name">{user.fullName || "User"}</p>
                  {/* || means if the username is missing it will fallback to "User"*/}
                  <p className="hover-card-email">{user.primaryEmailAddress?.emailAddress}</p>
                  {/*  this will get the email address from clerk and The `?.` prevents errors if email data is missing */}
                </div>
              )}
              <HoverCard.Arrow className="fill-white" />
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </SignedIn>

      <SignedOut>
        <div className="auth-buttons">
          <SignInButton>
            <button className="auth-button sign-in">Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className="auth-button sign-up">Sign Up</button>
          </SignUpButton>
        </div>
      </SignedOut>
    </header>
    </>
  );
}