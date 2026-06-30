import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>
      <div>
        <h1>Sign in</h1>
        <LoginForm onSuccess={() => navigate("/dashboard")} />
      </div>
    </div>
  );
}
