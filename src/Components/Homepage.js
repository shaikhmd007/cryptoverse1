import { Link } from 'react-router-dom';
import millify from 'millify'

// redux

import { useGetCryptosQuery } from '../Assets/cryptoAPI';
import Cryptocurrencies from './Cryptocurrencies';

const Homepage = () => {
    const { data } = useGetCryptosQuery(10);
    const globalStats = data?.data?.stats;
    // console.log(data);
    return (
        <section>
            <div className="grid-container">
                <div className="title">
                    <h4>Global Crypto Stats</h4>
                </div>
                <div>
                    <p>Total Cryptocurrencies </p>
                    <h3>{globalStats?.total} </h3>
                </div>
                <div>
                    <p>Total Exchanges</p>
                    <h2>{millify(globalStats?.totalExchanges)} </h2>
                </div>
                <div>
                    <p>Total Market Caps</p>
                    <h2>{`$${millify(globalStats?.totalMarketCap)}`}</h2>
                </div>
                <div>
                    <p>Total 24Hrs Volume</p>
                    <h2>{`$${millify(globalStats?.total24hVolume)}`} </h2>
                </div>
                <div>
                    <p>Total Cryptocurrencies </p>
                    <h2>{`$${millify(globalStats?.total24hVolume)}`} </h2>
                </div>
                <div>
                    <p>Total Market </p>
                    <h2>{millify(globalStats?.totalMarkets)}</h2>

                </div>
            </div>
            <div className="grid-container">
                <div className="title">
                    <h4>Top 10 Cryptos In The World</h4>
                    <Link to="/cryptocurrencies" className='button'> Show  more</Link>
                </div>
            </div>
            <Cryptocurrencies simplified={false} />
        </section>

    );
};

export default Homepage;
