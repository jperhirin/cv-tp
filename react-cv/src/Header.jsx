import { Link } from "react-router-dom";
import './marchepas.css'
const header = () => {

    return(
        <main id="app">
        <header>         
        <div className="header">
            <div className="header__image">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="Jon SIMPSON" />
            </div>
            <h1 className='header__name'>Jon SIMPSON</h1>
        </div>
        <nav>
            <ul>
                <li>
                    <Link to={"/home"}>
                        <a href="index.html"><span className="material-symbols-outlined"></span><span className="link">Accueil</span></a>
                    </Link>
                </li>
                <li>
                    <Link to={"/Experience"}>
                        <a href="experience.html"><span className="material-symbols-outlined"></span><span className="link">Experience</span></a>
                    </Link>
                </li>
                <li>
                    <Link to={"/portfolio"}>
                        <a href="portfolio.html"><span className="material-symbols-outlined"></span><span className="link">Portfolio</span></a>
                    </Link>
                </li>
                <li>
                    <Link to={"/contact"}>
                        <a href="contact.html"><span className="material-symbols-outlined"></span><span className="link">Contact</span></a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
    </main>


    )
}

export default header;