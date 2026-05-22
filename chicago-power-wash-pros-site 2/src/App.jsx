import React from "react";

export default function App() {
  return (
    <div style={{fontFamily:"Arial, sans-serif", padding:"40px", background:"#f8fbff", minHeight:"100vh"}}>
      <div style={{background:"#38bdf8", color:"#0f172a", padding:"10px", textAlign:"center", fontWeight:"bold"}}>
        Proudly Serving Chicago & Surrounding Neighborhoods ✶ ✶ ✶ ✶
      </div>

      <div style={{maxWidth:"1200px", margin:"40px auto"}}>
        <h1 style={{fontSize:"72px", lineHeight:"0.95", marginBottom:"20px", fontWeight:"900"}}>
          KEEPING CHICAGO <span style={{color:"#0ea5e9"}}>CLEANER.</span>{" "}
          <span style={{color:"#dc2626"}}>SAFER.</span> STRONGER.
        </h1>

        <p style={{fontSize:"22px", color:"#334155", maxWidth:"800px"}}>
          Chicago Power Wash Pros provides power washing, commercial cleaning,
          graffiti removal, fleet washing, and winter snow shoveling across
          Chicago and surrounding suburbs.
        </p>

        <div style={{marginTop:"30px", display:"flex", gap:"20px"}}>
          <button style={{background:"#dc2626", color:"white", border:"none", padding:"18px 28px", fontWeight:"bold", borderRadius:"10px"}}>
            GET A FREE QUOTE
          </button>

          <button style={{background:"white", color:"#0284c7", border:"2px solid #0284c7", padding:"18px 28px", fontWeight:"bold", borderRadius:"10px"}}>
            TEXT 773.319.0569
          </button>
        </div>

        <div style={{marginTop:"60px", display:"grid", gridTemplateColumns":"repeat(auto-fit,minmax(240px,1fr))", gap:"20px"}}>
          {[
            "House Washing",
            "Driveways & Sidewalks",
            "Commercial Buildings",
            "Graffiti Removal",
            "Fleet Washing",
            "Snow Shoveling"
          ].map((service) => (
            <div key={service} style={{background:"white", borderRadius:"20px", padding:"30px", boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
              <h3 style={{fontSize:"24px", fontWeight:"900"}}>{service}</h3>
              <p style={{marginTop:"10px", color:"#475569"}}>
                Professional Chicago exterior cleaning services.
              </p>
            </div>
          ))}
        </div>

        <div style={{marginTop:"80px", background:"#0f172a", color:"white", borderRadius:"30px", padding:"50px"}}>
          <h2 style={{fontSize:"42px", fontWeight:"900"}}>
            CALL OR TEXT 773.319.0569
          </h2>
          <p style={{marginTop:"20px", color:"#cbd5e1"}}>
            Chicago Power Wash Pros • Clean Spaces. Strong Communities.
          </p>
        </div>
      </div>
    </div>
  );
}
