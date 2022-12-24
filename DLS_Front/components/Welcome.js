import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Welcome() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="login-options">
      {!user ? (
        <Link href="/auth/login" className="login">
          Login
        </Link>
      ) : (
        <h3 className="login" onClick={() => auth.signOut()}>
          Log Out
        </h3>
      )}
    </nav>
  );
}
