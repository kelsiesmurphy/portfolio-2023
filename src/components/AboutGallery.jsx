import styled from "styled-components";

const GalleryWrapper = styled.div`
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    > img {
        max-height: 50vh;
    }
    @media (max-width: 1200px) {
        flex-flow: row wrap;
        > img {
            max-height: 100vh;
        }
    }
`

const AboutGallery = () => {
  return (
    <GalleryWrapper>
        <img alt="Kelsie swinging on monkey bars" src="/kelsie-1.jpg" />
        <img alt="Kelsie performing card tricks" src="/kelsie-2.jpg"/>
    </GalleryWrapper>
  )
}

export default AboutGallery;