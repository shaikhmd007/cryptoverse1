import React, { useEffect, useState } from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../Assets/cryptoAPI';

// const Cryptocurrencies = ({ Crypto_Type, price, Market_caps, Daily_changes }) => 
const Cryptocurrencies = ({ simplified }) => {
    const count = simplified ? 100 : 10;
    const { data: cryptoList, isFetching } = useGetCryptosQuery(count);
    const [cryptos, setCryptos] = useState()

    useEffect(() => {
        setCryptos(cryptoList?.data?.coins);
    }, [cryptoList]);
    if (isFetching) return 'Loading..';

    return (
        <div style={simplified ? { marginLeft: '100px' } : {}}>
            {cryptos?.map((currency) => (
                <div className='Cards-wrapper' key={currency.uuid}>
                    <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
                        <div className="crypto-cards">
                            <span>{`${currency.rank}. ${currency.name}`} <img className="crypto-image" width='25px' height='25px' src={currency.iconUrl} /></span>
                            <hr style={{ border: '1px solid white', margin: '20px 0' }} />
                            <h6>Price: {millify(currency.price)}</h6>
                            <h6>Market Cap: {millify(currency.marketCap)}</h6>
                            <h6>Daily Change: {currency.change}%</h6>
                        </div>
                    </Link>
                </div>
            ))
            }
        </div>
    )
}

export default Cryptocurrencies