import { RiHome3Line, RiBitCoinLine, RiExchangeFundsFill, RiNewspaperLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <nav>
            <Link to="/"><h4>🦉Cryptoverse</h4></Link>
            <ul>
                <li>
                    <Link to="/home"> <RiHome3Line style={{}} /> Home</Link>
                </li>
                <li>
                    <Link to="/cryptocurrencies"><RiBitCoinLine style={{}} /> Cryptocurrency</Link>
                </li>
                <li>
                    <Link to="/exchanges"> <RiExchangeFundsFill style={{}} />Exchanges</Link>
                </li>
                <li>
                    <Link to="/news"> <RiNewspaperLine style={{}} />News</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar