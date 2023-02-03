import styled from "styled-components"

const SectionWrapper = styled.div`
  display: flex;
  justify-content: center;
  > div {
    position:relative;
    display:inline-block;
  }
  > div::after {
    content:'';
    position:absolute;
    left:0; top:0;
    width:100%; height:100%;
    display:inline-block;
    background: none 
  }
  > div > img {
    display:block;
    width: 100%;
    max-width: 600px;
    padding: 1rem;
  }
  @media (prefers-color-scheme: light) {
  > div::after {
    background: -moz-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(255,255,255,1) 100%);
    background: -webkit-linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(255,255,255,1) 100%);
    background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(0,0,0,0) 25%, rgba(0,0,0,0) 75%, rgba(255,255,255,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1); 
  }
}
`;

const CodeSnippet = ({ selectedProject }) => {
  return (
    <SectionWrapper>
      <div>
        {selectedProject.code ? <img src={selectedProject.code} alt={`${selectedProject.name} code snippet`} /> : <h4>Code snippet coming soon</h4> }
      </div>
    </SectionWrapper>
  )
}

export default CodeSnippet