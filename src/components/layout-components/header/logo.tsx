"use client";
import Image from "next/image";
import Link from "next/link";
export default function Logo() {
  return (
    <div className="justify-items-start  md:justify-items-center content-center">
      <div className="w-30 transition duration-300 ease-in-out hover:scale-105">
        <Link href="/">
          <Image
            src="/assets/img-logos/m-logo.png"
            alt="Marvel Logo"
            width={400}
            height={100}
          />
        </Link>
      </div>
    </div>
  );
}
