import styled from "styled-components";
import Video from "../components/CodeSnippet";
import Details from "../components/Details"

const PageWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	> div {
		flex: 1;
		display: flex;
		justify-content: center;
		flex-direction: column;
		min-width: 280px;
		min-height: 100vh;
		padding-block: 6rem;
	}
`;

const MainContent = styled.div`
	flex: 1;
	padding: 1rem;
	display: flex;
	flex-flow: column wrap;
	gap: 2rem;
	margin: 0 auto;
`;

const ProjectDetails = ({selectedProject, scrollToRef}) => {

	return (
		<PageWrapper ref={scrollToRef}>
			<div>
				<MainContent>
					<Details selectedProject={selectedProject} />
				</MainContent>
			</div>
			<div>
				<Video selectedProject={selectedProject} />
			</div>
		</PageWrapper>
	)
}

export default ProjectDetails;