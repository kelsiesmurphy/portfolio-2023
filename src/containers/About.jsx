import AboutContent from "../components/AboutContent";
import AboutGallery from "../components/AboutGallery";
import Footer from "../components/Footer"
import styled from "styled-components";

const PageWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: space-between;
	> .section-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
`;

const About = () => {
	return (
			<PageWrapper>
				<div className="section-wrapper">
					<AboutContent />
					<Footer/>
				</div>
				<AboutGallery />
			</PageWrapper>
	)
}

export default About;