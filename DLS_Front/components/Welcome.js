import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../utils/firebase";

export default function Welcome() {
  const [user, loading] = useAuthState(auth);

  return (
    <nav className="login-options">
      {!user ? (
        <div className="login">
          <Link href="/auth/login">Login</Link>
        </div>
      ) : (
        <h3 className="login" onClick={() => auth.signOut()}>
          Log Out
        </h3>
      )}
    </nav>
  );
}
