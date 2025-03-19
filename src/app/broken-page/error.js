"use client";
import Link from "next/link";

export default function Error({ error, reset }){
    return(
        <>
        <h2>Sorry! Something went wrong with the YGO CardBase!</h2>
        <button onClick={() => reset()}>Please try again or</button>
        <Link href={"/"} className="text-green-300">  You can navigate back to the Home Page!</Link>
   
        </>
    )
}