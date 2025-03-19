"use client";

import { useUser } from "@clerk/nextjs";

export default function UserProfilePage() {
  const { user, isLoading } = useUser(); 

  if (isLoading) {
    return <p>Loading...</p>;  
  }

  return (
    <>
      <h1>User Profile Page</h1>
      {user && (  
        <div>
          <h2>{user.firstName} {user.lastName}</h2>
          <p>Email: {user.email}</p>
        </div>
      )}
    </>
  );
}