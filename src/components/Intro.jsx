import { Link } from 'react-router-dom' 
import styled from "styled-components";

const IntroWrapper = styled.div`
	max-width: 38rem;
	display: flex;
	flex-flow: column wrap;
	gap: 1.5rem;
	> a {
		max-width: fit-content;
	}
`;

const StyledH1 = styled.h1`
	margin-top: 1rem;
	@media (prefers-color-scheme: dark) {
		color: white;
	}
`;

const Intro = () => {
	return (
		<IntroWrapper>
			<picture>
				<source srcSet="/km-logomark-white.PNG" media="(prefers-color-scheme: dark)" />
				<img src="/km-logomark.png" alt="Kelsie Murphy Logo" width="78" />
			</picture>
			<StyledH1>Hi, I’m Kelsie!</StyledH1>
			<h2>I'm a developer with a passion for coding for good and creating a next-level user experience</h2>
			<Link to="/about" className="button btn-secondary">About Me<img alt="" src="/arrow-up-right.svg"/></Link>
		</IntroWrapper>
	)
}

export default Intro;