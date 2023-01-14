import { Link } from 'react-router-dom' 
import styled from "styled-components";

const AboutWrapper = styled.div`
    margin: auto;
    max-width: 60rem;
    padding: 1rem;
	display: flex;
    justify-content: space-between;
	flex-flow: column wrap;
	gap: 1rem;
    > a {
        max-width: fit-content;
    }
    > p {
    font-size: var(--fs-text-lg);
    }
`;

const StyledH1 = styled.h1`
	margin-top: 1rem;
`;

const AboutContent = () => {
	return (
		<AboutWrapper>
            <Link to="/"><img alt="Kelsie Murphy Logo" src="/km-logomark.png" width="78"/></Link>
            <StyledH1>About Me</StyledH1>
            <p>I started my career in tech building websites using Webflow, and Web Applications using Bubble.io. After working for an Australian Bubble.io agency for a year, and starting to feel limited by these tools, I made the decision to attend the CodeClan Software Development course and have been learning as much as I can about the world of front-end development ever since.</p>
            <p>I love clean, modern interfaces, and the user experience philosophies behind them. I also enjoy experimenting with new frameworks, and other new technologies and tools.</p>
            <p>I'm currently learning React, Three.js, and my next goals are Next.js and Java.'</p>
            <p>In my spare time, you might catch me cycling, reading, juggling, or performing magic at weddings.</p>
            <p>If you want to reach me, message me on <a href="https://www.linkedin.com/in/kelsiesmurphy/">LinkedIn</a>, or send me an email at <a href="mailto:kelsie@kelsiesmurphy.com">kelsie@kelsiesmurphy.com</a>!</p>
            <Link to="/" className="button btn-secondary">Back<img alt="" src="/arrow-up-right.svg"/></Link>
		</AboutWrapper>
	)
}

export default AboutContent;