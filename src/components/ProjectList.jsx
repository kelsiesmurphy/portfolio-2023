import styled from "styled-components";

const ListWrapper = styled.ul`
	max-width: 38rem;
	display: flex;
	flex-flow: column wrap;
	gap: 2rem;
	> li {
		list-style: none;
	}
`;
const ListItem = styled.li`
	cursor: pointer;
	> h3 { 
		color: var(--clr-grey-300);
	}
	> h3.active {
		color: var(--clr-grey-700);
	}
	@media (prefers-color-scheme: dark) {
		> h3 {
			color: var(--clr-grey-600);
		}
		> h3.active {
			color: var(--clr-grey-100);
		}
	}
`;

const ProjectList = ({ allProjects, selectedProject, setSelectedProject, scrollToRef }) => {

	const handleProjectClick = (project) => {
		setSelectedProject(project)
		scrollToRef.current.scrollIntoView()
	};

	const listOfProjects = allProjects.map((project, index) => {
		return 	<ListItem key={index}>
					<h3 className={selectedProject === project ? "active" : null} onClick={() => handleProjectClick(project)}>{project.name}</h3>
				</ListItem>
	})

	return (
		<ListWrapper>
			{listOfProjects}
		</ListWrapper>
	)
}

export default ProjectList;