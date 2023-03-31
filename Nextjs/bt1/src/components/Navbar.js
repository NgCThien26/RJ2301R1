import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <>
      <nav>
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/posts/blog">
            <li>Blog</li>
          </Link>
          <Link href="/posts/about">
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </>
  );
}