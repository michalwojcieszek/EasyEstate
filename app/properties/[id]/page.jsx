"use client";

import {
  useParams,
  useRouter,
  useSearchParams,
  usePathname,
} from "next/navigation";

const PropertyPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  const pathname = usePathname();

  console.log("hello");

  return (
    <div>
      <button className="bg-blue-500 p-2" onClick={() => router.push("/")}>
        Go Home
      </button>
      <p>Id of the page - params: {id}</p>
      <p>Search Params of name: {name}</p>
      <p>Pathname: {pathname}</p>
    </div>
  );
};
export default PropertyPage;
