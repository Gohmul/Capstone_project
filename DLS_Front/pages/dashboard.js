import { auth } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import Loading from "../components/Loading";
export default function Dashboard() {
  const route = useRouter();
  const [user, loading] = useAuthState(auth);
  console.log(user);
  if (loading) return <h1>Loading</h1>;

  if (!user) route.push("/auth/login");
  if (loading) {
    return <Loading />;
  }
  if (user) {
    console.log(user);
    return (
      <div className="dashboard-container">
        <div className="dashboard">
          <h1>Welcome to your Dashboard {user.displayName}!</h1>
          <img src={user.photoURL} />
          <button className="dashboard-btn" onClick={() => auth.signOut()}>
            Log out
          </button>
        </div>
      </div>
    );
  }
}
