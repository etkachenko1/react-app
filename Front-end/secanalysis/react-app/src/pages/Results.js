import React from 'react'
import {stockData} from '../data'
import "../styles/Results.css"

function Results() {
	return (
		<div className="stock-container">
			<h2>Demo of the Results</h2>
			{stockData.map((data,key)=> {
				return(
					<li key = {key} align="start">
						{data.name +
						" , " +
						"Ticker: " + data.ticker +
						" , Sector: " +
						data.sector +
						" , Last Price: " +
						data.last_price +
						" , Volatility 30 days: " +
						data.volatility30.toFixed(2)+
						" , Volatility 120 days: " +
						data.volatility120.toFixed(2) +
						" , EPS:" +
						data.EPS}
					</li>
				)
			})}
		</div>
	)
}

export default Results
