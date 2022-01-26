import React, {useState, useEffect} from 'react';
import axios from "axios"

const SurveysDone =()=> {

	const [survey, setSurvey] = useState([])
	useEffect(() => {
	async function fetchItems () {
			const url = 'http://localhost:5000/serveyinfo';
			let res = await axios.get(url);
			return setSurvey(res.data)
			.then(res => {
				console.log(res)
				setSurvey(res.data)
			})
			.then ()
			.catch(err => {
				console.log(err)
			})
		}
		fetchItems();
	}, )

	return(
		<div>
			{survey.map((individualSurvey, index)=>{
				return(
				<ul key = {index}>
					<li>{JSON.stringify(individualSurvey)}</li>
				</ul>
				)
		})}
		</div>
	);
};
export default SurveysDone;
