import Social from '../data/Social'
import styled from "styled-components";

const StyledFooter = styled.div`
	padding: 2rem;
	display: flex;
	flex-wrap: wrap;
	gap: 1rem;
	justify-content: space-between;
	> p {
		color: var(--clr-grey-400);
		min-width: 280px;
	}
	> ul {
		display: flex;
		gap: 1.5rem;
	}
`;
const StyledIcon = styled.li`
	list-style: none;
`;

const Footer = () => {
	const socialList = Social.map((socialItem, index) => {
		return 	<StyledIcon key={index}>
					<a href={socialItem.href}>
						<img alt={socialItem.name} className="link-icon" src={socialItem.image}/>
					</a>
				</StyledIcon>
	})
	return (
		<StyledFooter className="footer">
			<p>© Kelsie S. Murphy 2023</p>
			<ul>
				{socialList}
			</ul>
		</StyledFooter>
	)
}

export default Footer;