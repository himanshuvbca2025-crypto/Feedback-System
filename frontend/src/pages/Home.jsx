import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

 addEventListener
  const navigate = useNavigate();

//Request send to server

async function handleLogin(e) {
    e.preventDefault();

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
            navigate("./Dashboard.jsx");
        } else {
            alert(data.message || "Invalid Email or Password");
        }

    } catch (error) {
        console.error("Login Error:", error);
        alert("Server se connection nahi ho raha");
    }
}

    return (

        <>
            {/* Header */}

            <header>
                <div className="header-content">
                    <img src="/ssismlogo.png" alt="SSISM Logo" />

                    <h1>SANT SINGAJI EDUCATIONAL SOCIETY</h1>

                    <img src="/ssec.png" alt="SSEC Logo" />
                </div>
            </header>

            {/* Main */}

            <main>


                <div className="Container">

                    <h1> 👤 Admin</h1>

                    <input type="text"
                        id="Mail"
                        placeholder="Enter Admin Mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    < br />

                    <input type="text"
                        id="password"
                        placeholder="Enter Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <br />

                    <button onClick={handleLogin}>
                        Login
                    </button>

                </div>


            </main>
        </>
    );
}

export default Home; 