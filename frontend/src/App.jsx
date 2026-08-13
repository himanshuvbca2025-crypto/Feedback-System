import "./App.css";

function App() {
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

      {/* Main Section */}
      <main>
        <section className="role-box">
          <div className="welcome-icon">👥</div>

          <h2>Welcome!</h2>

          <section>
            <button className="admin-btn">
              <span className="admin-icon">👤</span>

              <span>Admins</span>

              <b>›</b>
            </button>
          </section>
        </section>
      </main>
    </>
  );
}

export default App;