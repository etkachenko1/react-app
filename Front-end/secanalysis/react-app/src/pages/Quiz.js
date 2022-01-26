import React, {Component} from 'react';
import "survey-react/survey.css";
import * as Survey from "survey-react";
import axios from "axios"


const Quiz =()=> {
	var json = {
		"title": "Investor's Survey",
		"description": "Thank you for using our service. This survey will help us determine which assets best fits you needs.",
		"pages": [
			{
				"name": "page1",
				"elements": [
					{
						"type": "text",
						"name": "FirstName",
						"title": "(First Name)",
						"isRequired": true
					},
					{
						"type": "text",
						"name": "LastName",
						"startWithNewLine": false,
						"title": "(Last Name)",
						"isRequired": true
					},
					{
						"type": "text",
						"inputType": "date",
						"name": "birthDate",
						"startWithNewLine": false,
						"title": "Date of birth:"
					},
					{
						"type": "radiogroup",
						"name": "0",
						"title": "Do you trade according to a strategy or have you traded on forex?",
						"choices": ["Yes, I also know some forex trading concepts", "No, but I am learning it", "No, and I am not interested"]
					}, {
						"type": "radiogroup",
						"name": "1",
						"title": "I would rather...",
						"choices": ["Risk loosing money but have a better chance of higher return", "Put money in stable assets and risk much less, but have less yield"]
					}, {
						"type": "radiogroup",
						"name": "2",
						"title": "Do you find the chart for the securities essential to determine your actions?",
						"choices": [
							"Yes",
							"No"
						]
					}, {
						"type": "radiogroup",
						"name": "3",
						"title": "How often would you like to check the owned assets condition (price, chart, changes)?",
						"choices": ["Once or more a day", "Once a month","I will not get much from this information. I just want to invest without having specific knowledge on characteristics"]
					}, {
						"type": "radiogroup",
						"name": "4",
						"title": "When do you expect to use the money accumulating in your investments?",
						"choices": ["Immediately, because I plan it to be my main source or one of the main sources of income", "In a year or more"]
					}, {
						"type": "radiogroup",
						"name": "5",
						"title": "If I own an asset that occupies more than 20% of my portfolio and I see a sudden significant drop in the price value, while company's financials, management, and active projects are in a great standing, I think I...",
						"choices": ["Have to sell the security as soon as possible before the price drops even lower",
									"Have to wait before selling it despite of knowing the risk of it falling deeper",
									"Have to buy more while it is on the low",
									"Cannot incline to any of those options because I do not understand the difference between them"
									]
					},{
						"type": "radiogroup",
						"name": "6",
						"title": "What do you rely on for emergency funds?",
						"choices": ["I don't have emergency funds and have to rely on family members or friends for financial support.",
									"I have a comfortable amount of money saved for cases of emergency"
								   ]
					},{
						"type": "radiogroup",
						"name": "7",
						"title": "I prefer the following sector ...",
						"choices": ["Finance",
									"Information Technology",
									"Health Care",
									"Consumer Services",
									"Any"
								   ]
					}
				]
			}
		],
		"showQuestionNumbers": "off"
	};
const sendDataToServer = (survey) => {
		//send Ajax request to your web server.
		JSON.stringify(survey.data);
		axios.post("http://localhost:5000/doasurvey",
		{
			data: survey.data
		})
		.then(res=> {
			console.log(res)
		})
		.catch(err=> {
			console.log(err)
		})
	}
return(
	<div>
		<Survey.Survey json={json} onComplete={ sendDataToServer } />
	</div>
);
};
export default Quiz;
