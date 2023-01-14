import { Link } from 'react-router-dom' 
import styled from "styled-components";

const ErrorWrapper = styled.div`
  margin: auto;
  padding: 1rem;
  min-height: 100vh;
	max-width: 38rem;
	display: flex;
  justify-content: center;
	flex-flow: column wrap;
	gap: 1rem;
	> a {
		max-width: fit-content;
	}
  > p {
    font-weight: 600;
  }
  >h2 {
    font-size: var(--fs-text-xl);
  }
`;

const ErrorPage = () => {
  return (
    <ErrorWrapper>
      <p>Error 404</p>
			<h1>Page not found</h1>
			<h2>Sorry, the page you are looking for doesn't exist.</h2>
			<Link to="/" className="button btn-secondary">Back to Home<img alt="" src="/arrow-up-right.svg"/></Link>
		</ErrorWrapper>
  )
}

export default ErrorPage;