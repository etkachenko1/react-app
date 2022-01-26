import React from 'react'
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import YouTubeIcon from '@material-ui/icons/YouTube';
import "../styles/Footer.css";
function Footer() {
	return (
		<div className="footer">
			<div className="socialMedia">
			<h2>@Bloomberg.PL</h2>.
				<a href='https://www.instagram.com/bloombergbusiness/'
				className="instagramSocial">
            	<InstagramIcon style= {{color: '#5B51D8'}}/>
				</a>

				<a href='https://twitter.com/Business'
				className="twitterSocial">
            	<TwitterIcon style= {{color: '#55ACEE' }}/>
				</a>

				<a href='https://www.facebook.com/bloombergbusiness'
				className="facebookSocial">
            	<FacebookIcon style= {{color: '#29487d' }}/>
				</a>

				<a href='https://www.linkedin.com/company/bloomberg-lp'
				className="linkedInSocial">
            	<LinkedInIcon style= {{color: '#006192' }}/>
				</a>

				<a href='https://www.youtube.com/channel/UCIALMKvObZNtJ6AmdCLP7Lg/videos'
				className="youtubeSocial">
            	<YouTubeIcon style= {{color: 'red'}}/>
				</a>
				<p>© 2022 Bloomberg L.P. All rights reserved.</p>*/

			</div>

		</div>
	);
}
export default Footer
