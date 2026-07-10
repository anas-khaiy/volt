import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/admin/dashboard");
    });
    return () => unsub();
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Email ou mot de passe incorrect");
    }
  };

  return (
    <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh", background: "#f5f5f5" }}>
      <div className="bg-white p-5 border-radius-10px box-shadow-large" style={{ width: "100%", maxWidth: 420 }}>
        <div className="text-center mb-4">
          <img src="/images/logo2.png" alt="" style={{ height: 50 }} />
          <h3 className="alt-font fw-700 text-dark-gray mt-3">Admin Volt Construction</h3>
        </div>
        {error && (
          <div className="alert alert-danger py-2 fs-14">{error}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label alt-font fw-600 fs-14 text-dark-gray">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="form-label alt-font fw-600 fs-14 text-dark-gray">Mot de passe</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-base-color btn-medium w-100 fw-600">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}
