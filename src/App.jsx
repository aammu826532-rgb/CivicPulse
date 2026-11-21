import { useState } from "react";

export default function App() {
  const [view, setView] = useState("home");
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("bhagya@gmail.com");
  const [password, setPassword] = useState("1234");
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState(null);
  const [complaints, setComplaints] = useState([
    { id: 1, title: "Road pothole in Koramangala", status: "Pending" },
    { id: 2, title: "Street light not working in HSR Layout", status: "Pending" },
    { id: 3, title: "Garbage not collected in BTM Layout", status: "Pending" },
  ]);
  const [newComplaint, setNewComplaint] = useState("");
  const [aiQ, setAiQ] = useState("");
  const [aiAns, setAiAns] = useState("");

  const pendingCount = complaints.filter(c => c.status === "Pending").length;
  const resolvedCount = complaints.filter(c => c.status === "Resolved").length;

  const inputStyle = {
    width: "100%", padding: 13, marginBottom: 12, borderRadius: 12,
    border: "2px solid #E0E0E0", background: "#FFFFFF", color: "#111111",
    fontSize: 16, fontWeight: "600", boxSizing: "border-box", outline: "none"
  };

  const schemes = [
    { name: "SSP Scholarship", desc: "For students - Apply online" },
    { name: "Ayushman Bharat", desc: "Free health insurance 5 Lakhs" },
    { name: "Anna Bhagya", desc: "Free rice every month" },
    { name: "Gruha Lakshmi", desc: "2000/month for women" },
    { name: "Shakti Scheme", desc: "Free bus for women" },
    { name: "PM Awas Yojana", desc: "House for all" },
  ];

  const doRegister = () => {
    if (!name || !email || !password) { alert("Fill all daa!"); return; }
    setUser({ name: name, email: email, role: "Citizen" });
    setView("home");
  };

  // ============ LOGIN ============
  if (!user) {
    return (
      <div style={{ minHeight: "100vh", background: "#FFF0F0", display: "flex", alignItems: "center", justifyContent: "center", padding: 15, fontFamily: "Arial" }}>
        <div style={{ background: "white", width: "100%", maxWidth: 430, padding: 28, borderRadius: 20, boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
          <h1 style={{ textAlign: "center", margin: 0, fontSize: 26, color: "#111", fontWeight: "900" }}>Namma CivicPulse</h1>
          <p style={{ textAlign: "center", color: "#777", margin: "5px 0 15px 0", fontSize: 13, fontWeight: "600" }}>Namma Ooru • Namma Samasya • Namma Parihara</p>
          <h2 style={{ textAlign: "center", margin: "0 0 15px 0", fontSize: 24, color: "#111", fontWeight: "900" }}>{isLogin ? "Login" : "Register"}</h2>

          {!isLogin && <input value={name} onChange={e => setName(e.target.value)} placeholder="Full Name" style={inputStyle} />}
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" style={inputStyle} />
          <div style={{ position: "relative", marginBottom: 12 }}>
            <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" style={{ ...inputStyle, paddingRight: 45, marginBottom: 0 }} />
            <span onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: 12, top: 12, cursor: "pointer", fontSize: 19 }}>{showPassword ? "🙈" : "👁️"}</span>
          </div>

          {isLogin ? (
            <>
              <button onClick={() => { setUser({ name: "Bhagya", email: "bhagya@gmail.com", role: "Citizen" }); setView("home"); }} style={{ width: "100%", padding: 14, borderRadius: 25, border: "none", color: "white", fontWeight: "bold", fontSize: 15, cursor: "pointer", background: "linear-gradient(90deg,#FF6D00,#FFB300)", marginBottom: 10 }}>Login as Citizen 👤</button>
              <button onClick={() => { setUser({ name: "Officer", email: "officer@gmail.com", role: "Officer" }); setView("home"); }} style={{ width: "100%", padding: 14, borderRadius: 25, border: "none", color: "white", fontWeight: "bold", fontSize: 15, cursor: "pointer", background: "#2E9E2E", marginBottom: 10 }}>💧 Login as Officer</button>
              <button onClick={() => { setUser({ name: "Admin", email: "admin@gmail.com", role: "Admin" }); setView("home"); }} style={{ width: "100%", padding: 11, borderRadius: 25, border: "2px solid #FF6D00", color: "#FF6D00", background: "white", fontWeight: "bold", cursor: "pointer" }}>👑 Login as Admin</button>
            </>
          ) : (
            <button onClick={doRegister} style={{ width: "100%", padding: 14, borderRadius: 25, border: "none", color: "white", fontWeight: "bold", fontSize: 15, cursor: "pointer", background: "linear-gradient(90deg,#FF6D00,#FFB300)" }}>Register - Create Account</button>
          )}

          <p style={{ textAlign: "center", marginTop: 15, color: "#333", fontWeight: "600" }}>{isLogin ? "No account? " : "Already have account? "}<span onClick={() => setIsLogin(!isLogin)} style={{ color: "#D84315", fontWeight: "900", cursor: "pointer" }}>{isLogin ? "Register Here" : "Login Here"}</span></p>
          <div style={{ background: "#FFF8E1", padding: 12, borderRadius: 10, marginTop: 10, fontSize: 13, color: "#333", lineHeight: 1.6 }}>
            <b>Demo Login:</b><br />Citizen: Click Orange Button<br />Officer: Click Green Button<br />Admin: Click Admin Button
          </div>
        </div>
      </div>
    );
  }

  // ============ HOME ============
  return (
    <div style={{ minHeight: "100vh", background: "#FFF0F0", fontFamily: "Arial", paddingBottom: 30 }}>
      <div style={{ background: "linear-gradient(90deg,#FF6D00,#FFB300,#4CAF50)", padding: "25px 15px 35px 15px", borderRadius: "0 0 25px 25px", textAlign: "center", color: "white" }}>
        <h1 style={{ margin: 0, fontSize: 32, fontWeight: "900" }}>Namma CivicPulse</h1>
        <p style={{ margin: "5px 0", fontSize: 13, fontWeight: "600" }}>Namma Ooru • Namma Samasya • Namma Parihara</p>
        <span style={{ background: "rgba(255,255,255,0.25)", padding: "5px 15px", borderRadius: 20, fontSize: 13, fontWeight: "700" }}>Hello, {user.name} • {user.role}</span>
      </div>

      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 15, flexWrap: "wrap", padding: "0 10px" }}>
        {[{ n: complaints.length, t: "Total Complaints" }, { n: pendingCount, t: "Pending" }, { n: resolvedCount, t: "Resolved ✅" }, { n: 6, t: "Schemes" }].map((s, i) => (
          <div key={i} style={{ background: "white", padding: "10px 18px", borderRadius: 12, textAlign: "center" }}><b style={{ color: "#111", fontSize: 16 }}>{s.n}</b><br /><span style={{ fontSize: 12, color: "#666" }}>{s.t}</span></div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginTop: 15, flexWrap: "wrap" }}>
        {["home", "schemes", "complaint", "ai", "admin"].map(v => (
          <button key={v} onClick={() => setView(v)} style={{ padding: "8px 14px", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: "bold", background: view === v ? "#FF6D00" : "white", color: view === v ? "white" : "#333" }}>
            {v === "home" ? "🏠 Home" : v === "schemes" ? "📄 Schemes" : v === "complaint" ? "📝 Complaint" : v === "ai" ? "🤖 CivicMitra AI" : "👑 Admin"}
          </button>
        ))}
        <button onClick={() => setUser(null)} style={{ padding: "8px 14px", borderRadius: 20, border: "none", cursor: "pointer", fontWeight: "bold", background: "#E53935", color: "white" }}>Logout</button>
      </div>

      {view === "home" && (
        <div style={{ maxWidth: 900, margin: "20px auto", padding: "0 15px" }}>
          <p style={{ textAlign: "center", color: "#444", fontWeight: "600" }}>🙏 Report problem in 30 seconds. Get schemes. Track status live.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            {[
              { t: "📢 Report Problem", d: "Street light, Water, Road - Report from home!", b: "Report Now →", v: "complaint" },
              { t: "🤖 Ask CivicMitra AI", d: "Which scheme for you? Ask in Kannada / English!", b: "Ask AI →", v: "ai" },
              { t: "📄 Govt Schemes", d: "SSP, Ayushman, Anna Bhagya - All in one place!", b: "View Schemes →", v: "schemes" },
            ].map((c, i) => (
              <div key={i} style={{ flex: 1, minWidth: 220, background: "white", padding: 20, borderRadius: 15, textAlign: "center", borderLeft: "4px solid #FF6D00" }}>
                <h3 style={{ color: "#111" }}>{c.t}</h3><p style={{ color: "#666", fontSize: 14 }}>{c.d}</p>
                <button onClick={() => setView(c.v)} style={{ background: "#FF6D00", color: "white", border: "none", padding: "8px 16px", borderRadius: 20, cursor: "pointer", fontWeight: "bold" }}>{c.b}</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === "schemes" && (
        <div style={{ maxWidth: 900, margin: "20px auto", padding: "0 15px", display: "flex", gap: 12, flexWrap: "wrap" }}>
          {schemes.map((s, i) => (
            <div key={i} style={{ flex: 1, minWidth: 240, background: "white", padding: 18, borderRadius: 15 }}><h3 style={{ margin: "0 0 5px 0", color: "#111" }}>{s.name}</h3><p style={{ color: "#666", fontSize: 14 }}>{s.desc}</p><button style={{ background: "#2E9E2E", color: "white", border: "none", padding: "7px 14px", borderRadius: 15, cursor: "pointer" }}>Apply →</button></div>
          ))}
        </div>
      )}

      {view === "complaint" && (
        <div style={{ maxWidth: 600, margin: "20px auto", padding: "0 15px" }}>
          <div style={{ background: "white", padding: 20, borderRadius: 15 }}>
            <h3 style={{ color: "#111" }}>📝 Report New Problem</h3>
            <input value={newComplaint} onChange={e => setNewComplaint(e.target.value)} placeholder="Ex: Street light not working in HSR Layout" style={inputStyle} />
            <button onClick={() => { if (newComplaint) { setComplaints([...complaints, { id: Date.now(), title: newComplaint, status: "Pending" }]); setNewComplaint(""); alert("Complaint Added!"); } }} style={{ background: "#FF6D00", color: "white", border: "none", padding: "10px 20px", borderRadius: 20, cursor: "pointer", fontWeight: "bold" }}>Submit Complaint</button>
            <h4 style={{ color: "#111" }}>Your Complaints:</h4>
            {complaints.map(c => (
              <p key={c.id} style={{ background: c.status === "Resolved" ? "#E8F5E9" : "#FFF3E0", padding: 10, borderRadius: 10, color: "#111" }}>
                • {c.title} - <b>{c.status}</b>
              </p>
            ))}
          </div>
        </div>
      )}

      {view === "ai" && (
        <div style={{ maxWidth: 600, margin: "20px auto", padding: "0 15px" }}>
          <div style={{ background: "white", padding: 20, borderRadius: 15, textAlign: "center" }}>
            <h3 style={{ color: "#111" }}>🤖 CivicMitra AI</h3>
            <input value={aiQ} onChange={e => setAiQ(e.target.value)} placeholder="Ask: Which scheme for students?" style={inputStyle} />
            <button onClick={() => { if (aiQ) setAiAns(`For "${aiQ}" - Best is SSP / Gruha Lakshmi! Apply in Seva Sindhu with Aadhaar!`); }} style={{ background: "#FF6D00", color: "white", border: "none", padding: "10px 20px", borderRadius: 20, cursor: "pointer", fontWeight: "bold" }}>Ask AI</button>
            {aiAns && <p style={{ background: "#FFF8E1", padding: 12, borderRadius: 10, marginTop: 12, textAlign: "left", color: "#111" }}>{aiAns}</p>}
          </div>
        </div>
      )}

      {view === "admin" && (
        <div style={{ maxWidth: 700, margin: "20px auto", padding: "0 15px" }}>
          <div style={{ background: "white", padding: 20, borderRadius: 15, color: "#111" }}>
            <h3>👑 Admin Panel - {user.role === "Admin" ? "You are Admin - Full Access!" : "View Only - Login as Admin for full access"}</h3>
            <p><b>Total Users:</b> 125 | <b>Officers:</b> 10 | <b>Citizens:</b> 115</p>
            <p><b>All Complaints - Admin Can Resolve:</b></p>
            {complaints.map(c => (
              <div key={c.id} style={{ background: c.status === "Resolved" ? "#E8F5E9" : "#FFF3E0", padding: 12, borderRadius: 10, marginBottom: 10 }}>
                <b>• {c.title}</b> - <b>{c.status}</b><br />
                {user.role === "Admin" && c.status === "Pending" && (
                  <button onClick={() => setComplaints(complaints.map(x => x.id === c.id ? { ...x, status: "Resolved" } : x))} style={{ marginTop: 8, marginRight: 8, background: "#2E9E2E", color: "white", border: "none", borderRadius: 10, padding: "6px 12px", cursor: "pointer", fontWeight: "bold" }}>✅ Resolve</button>
                )}
                {user.role === "Admin" && (
                  <button onClick={() => setComplaints(complaints.filter(x => x.id !== c.id))} style={{ marginTop: 8, background: "red", color: "white", border: "none", borderRadius: 10, padding: "6px 12px", cursor: "pointer" }}>Delete</button>
                )}
                {c.status === "Resolved" && <span style={{ marginLeft: 8, color: "#2E9E2E", fontWeight: "bold" }}>✅ Resolved by Admin</span>}
              </div>
            ))}
            <p style={{ background: "#FFF3E0", padding: 10, borderRadius: 10 }}>Admin: Click Admin Button to login as Admin</p>
          </div>
        </div>
      )}
    </div>
  );
}