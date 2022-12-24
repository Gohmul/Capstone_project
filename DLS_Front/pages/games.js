import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";

export default function Games() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (loading) return <h1>Loading</h1>;
  else
    return (
      <div>
        <h1>Welcome to the games.</h1>
      </div>
    );
}
