import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div>
      <h2>notFound</h2>
      <p>Sorry, this page is not exist.</p>
      <Link href='/'>Return Home</Link>
    </div>
  );
}

export default NotFound;
