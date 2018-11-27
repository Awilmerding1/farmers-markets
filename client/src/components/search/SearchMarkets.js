import React from 'react';

const SearchMarkets = ({searchParams, marketCount}) =>

    <div>
      <div className="searchResults">{searchParams.searchParams.length > 0 ? "Searched for Markets Open On: " + searchParams.searchParams.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(", ") : <p></p>}</div>
      <div className="searchResults">{searchParams.zip !== "" ? "Searched for Markets Within the Zip Code: " + searchParams.zip : <p></p>}</div>
      <br/><div className="noMarketsFound">{marketCount < 1 ? "No Markets Found Open on " + searchParams.searchParams.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(', ').replace(/, ([^,]*)$/, ' or $1') + (searchParams.zip !== "" ? " within the Zip Code " + searchParams.zip : <p></p>) : <p></p>}</div>
    </div>



export default SearchMarkets
