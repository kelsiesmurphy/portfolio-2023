import styled from "styled-components";

const SectionWrapper = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
    background-color: var(--clr-grey-050);
	padding: 2rem;
`;

const ProjectView = ({ selectedProject }) => {

	window.onload=function(){
		const element = document.querySelector(".bananahammock");
		if(element) {
		element.addEventListener("mousemove", (e) => {
		const { x, y, width, height } = element.getBoundingClientRect();

		const rotateX = e.clientX - x - width / 2;
		const rotateY = e.clientY - y - height / 2;

		// recalculate rotateX and rotateY to be between -1 and 1
		element.style.setProperty("--this-mouseX", rotateY / (height / 2));
		element.style.setProperty("--this-mouseY", rotateX / (width / 2));
		});
		} else {console.log("error");}
	}
	return (
	<SectionWrapper>
		<a href={selectedProject.github} className="card bananahammock">
			<div className="card__body">
				<img className="card__image" src={selectedProject.image} alt={selectedProject.name} />
				<div className="card__glare-container">
					<span className="card__glare"></span>
				</div>
			</div>
		</a>
	</SectionWrapper>
	)
}

export default ProjectView;