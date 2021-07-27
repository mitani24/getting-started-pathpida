import Link from "next/link";
import Image from "next/image";
import { pagesPath, staticPath } from "../lib/$path";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href={pagesPath._id(10).$url()}>
        <a>10</a>
      </Link>
      <div>
        <Image
          src={staticPath.vercel_svg}
          alt="vercel"
          width="283"
          height="64"
        />
      </div>
    </>
  );
}
