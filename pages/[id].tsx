import Link from "next/link";
import { useRouter } from "next/router";
import { pagesPath } from "../lib/$path";

export default function Id() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Id: {id}</h1>
      <Link href={pagesPath.$url()}>
        <a>Home</a>
      </Link>
    </>
  );
}
