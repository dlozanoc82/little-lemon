
import logo from "../../assets/Logos.svg"
import Nav from "./Nav";

const Header = () => {
  return (

    <header className="topbar">

      <div className="logo">
        <img src={logo} alt="Logo Little Lemon" height="50px" />
      </div>

      <div>
        <Nav />
      </div>

    </header>

  )
}

export default Header
