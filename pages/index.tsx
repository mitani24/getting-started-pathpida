import Link from "next/link";
import { pagesPath } from "../lib/$path";

export default function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link href={pagesPath._id(10).$url()}>
        <a>10</a>
      </Link>
    </>
  );
}
