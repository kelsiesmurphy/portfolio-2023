import styled from "styled-components";

const DetailsWrapper = styled.div`
	flex: 1;
	max-width: 38rem;
	display: flex;
	flex-flow: column wrap;
	gap: 1.5rem;
	justify-content: space-between;
	> div:not(.button-wrapper) {
		display: flex;
		flex-flow: column wrap;
		gap: 1.5rem;
	}
`;

const Details = ({ selectedProject }) => {
	return (
		<DetailsWrapper>
			<div>
				<h6>{selectedProject.projectType}</h6>
				<h2>{selectedProject.name}</h2>
				<hr />
				<p>{selectedProject.description}</p>
				<p>{selectedProject.furtherDetails}</p>
				<h4>Reflections</h4>
				<p>{selectedProject.reflections}</p>
			</div>
			<div className='button-wrapper'>
				{selectedProject.demo ? <a href={selectedProject.demo} className='button btn-secondary'>Demo</a> : null }
				
				<a href={selectedProject.github} className='button'>GitHub</a>
			</div>
		</DetailsWrapper>
	)
}

export default Details;