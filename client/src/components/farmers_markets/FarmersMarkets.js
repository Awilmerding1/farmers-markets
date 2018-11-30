import React from 'react';
import FarmersMarket from './FarmersMarket'
import SearchMarkets from '../search/SearchMarkets'

const FarmersMarkets = ({ farmersMarkets, searchParams }) => {

    const marketCount = farmersMarkets.length

  return (
      <div>
        <div>{(searchParams.searchParams.length > 0 || searchParams.zip !== "") ? <SearchMarkets searchParams={searchParams} marketCount={marketCount}/> : undefined}</div>
        <ul>
          {farmersMarkets.map(farmersMarket => <FarmersMarket key={farmersMarket.id} farmersMarket={farmersMarket} />)}
        </ul>
      </div>
    )
}

export default FarmersMarkets;
