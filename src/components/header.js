import react from 'react'
// import '../css/main.css'

export default function Header() {
  return (
    <>
      <div className = "Header">
      <div>
        <img 
          className="logo" 
          alt="logo" 
          src={require("../media/logo.png")} />
      </div>
      </div>
    </>
  );
}

