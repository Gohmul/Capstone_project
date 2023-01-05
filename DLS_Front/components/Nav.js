import Link from "next/link";
import { useNavigate } from "react-router";
import { useRouter } from "next/router";
export default function Nav() {
  let route = useRouter;
  return (
    <div className="nav">
      <Link href="/">
        <h2 className="nav-item1">Home</h2>
      </Link>
      <Link href="/locations">
        <h2 className="nav-item3">Locations</h2>
      </Link>
      {/* <Link href="/games">
        <h2 className="nav-item4">Games</h2>
      </Link> */}
      <Link href="/comments">
        <h2 className="nav-item5">Comments</h2>
      </Link>
      <Link href="/dashboard">
        <h2 className="nav-item2">Dashboard</h2>
      </Link>
      <Link href="javascript:history.back()">
        <h2 className="nav-item6">Back</h2>
      </Link>
    </div>
  );
}
