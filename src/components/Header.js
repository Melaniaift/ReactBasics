import Logo from "../assets/logo512.png"
import "./Header.css"

export const Header = () => {
    return (
        <header className="header"> 
            <img src={Logo} alt="" />
            <a href="/">Home</a>
        </header>
    )
}
