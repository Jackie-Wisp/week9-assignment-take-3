import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="notfound-container">
      <h1 className="notfound-text">Sorry, the card you are looking for has been lost!</h1>
      <Link href="/cards" className="notfound-button">
        Go back to the Card Database
      </Link>
    </div>
  );
}