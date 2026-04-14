import React from 'react'

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#0f172a",
      color: "white",
      fontFamily: "Arial"
    }}>
      <h1 style={{fontSize: "40px", marginBottom: "10px"}}>
        Shubham Vyas
      </h1>

      <h2 style={{fontSize: "20px", marginBottom: "20px", color: "#94a3b8"}}>
        QA Automation Engineer
      </h2>

      <a 
        href="/Shubham_Vyas_Resume.pdf" 
        target="_blank"
        style={{
          padding: "12px 20px",
          background: "#3b82f6",
          color: "white",
          textDecoration: "none",
          borderRadius: "8px"
        }}
      >
        Download Resume
      </a>
    </div>
  )
}