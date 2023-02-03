import { useState, useRef } from "react";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import ProjectList from "../components/ProjectList";
import ProjectView from "../components/ProjectView";
import styled from "styled-components";
import Projects from "../data/Projects";
import ProjectDetails from "./ProjectDetails";

const PageWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	> div {
		flex: 1;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		min-width: 280px;
		min-height: 100vh;
	}
`;

const MainContent = styled.div`
	padding: 1rem;
	display: flex;
	flex-flow: column wrap;
	gap: 2rem;
	margin: auto;
`;

const Home = () => {
	const [selectedProject, setSelectedProject] = useState(Projects[0])
	const [allProjects, setAllProjects] = useState(Projects)

	const scrollToRef = useRef()

	return (
		<>
			<PageWrapper>
				<div>
					<MainContent>
						<Intro />
						<ProjectList allProjects={allProjects} selectedProject={selectedProject} setSelectedProject={setSelectedProject} scrollToRef={scrollToRef}/>
					</MainContent>
					<Footer />
				</div>
				<div>
					<ProjectView selectedProject={selectedProject} scrollToRef={scrollToRef}/>
				</div>
			</PageWrapper>
			{selectedProject &&
				<ProjectDetails selectedProject={selectedProject} scrollToRef={scrollToRef} />
			}
		</>
	)
}

export default Home;