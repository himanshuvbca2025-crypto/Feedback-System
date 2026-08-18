import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // Request send to server
    async function handleLogin(e) {
        if (e && e.preventDefault) e.preventDefault();

        try {
            const response = await fetch("http://localhost:1000/admin/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });

            const data = await response.json();

            if (response.ok) {
                navigate("/dashboard");
                return;
            }
        } catch (error) {
            console.error("Login Error:", error);
        }

        // Direct navigation for frontend preview
        navigate("/dashboard");
    }

    return (
        <div className="home-page">
            {/* Header */}
            <header className="header">
                <div className="header-content">
                    <img src="/ssismlogo.png" alt="SSISM Logo" className="header-logo-left" />
                    <h1 className="header-title">SANT SINGAJI EDUCATIONAL SOCIETY</h1>
                    <img src="/ssec.png" alt="SSEC Logo" className="header-logo-right" />
                </div>
            </header>

            {/* Main Content */}
            <main className="main-content">
                <div className="hero-container">
                    {/* Left Side Content */}
                    <div className="hero-left">
                        <p className="hero-subtitle">Empowering Rural Youth</p>
                        <h2 className="hero-title">
                            <span className="hero-line-1">SANT SINGAJI EDUCATIONAL</span>
                            <span className="hero-line-2">SOCIETY</span>
                        </h2>
                    </div>

                    {/* Right Side Login Card */}
                    <div className="login-card">
                        <div className="card-header">
                            <img src="/ssismlogo.png" alt="SSISM Logo" className="card-logo" />
                            <h3>Admin Login</h3>
                        </div>

                        <form onSubmit={handleLogin} className="login-form">
                            <div className="input-field-wrapper">
                                <input 
                                    type="text"
                                    id="Mail"
                                    placeholder="Enter Admin Mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="input-field-wrapper">
                                <input 
                                    type="password"
                                    id="password"
                                    placeholder="Enter Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <button type="submit" className="login-submit-btn">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;