import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

function Interview({current}) {


  return current.question1 ? (
    <StyledContainer>
      <StyledTracklistContainer>
        {current.tracklist.map((track) => (
          <p className="tracklist" key={track}>
            {track}
          </p>
        ))}
      </StyledTracklistContainer>
      <StyledAlbumArtGrid>
        {current.albumArt.map((art) => (
          <Img
            fluid={art.asset.fluid}
            alt={art.name}
            className="albumArt"
            key={art.id}
          />
        ))}
      </StyledAlbumArtGrid>
      <StyledHeader className={current.style1}>{current.artist}</StyledHeader>
      <StyledDescription style={{fontSize: "2rem"}}>{current.description}</StyledDescription>
      <StyledArtistImage>
        <Img fluid={current.imageOfArtist.asset.fluid} alt={current.name} />
      </StyledArtistImage>
      <StyledInterviewGrid>
        <h5>{current.question1}</h5>
        <h4>{current.answer1}</h4>
        {current.video1 ? (
          <iframe
            title={current.name}
            width="350"
            height="250"
            src={current.video1}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Img
            fluid={current.i1.asset.fluid}
            alt={current.name}
            className="image"
          />
        )}
        <h5>{current.question2}</h5>
        <h4>{current.answer2}</h4>
        {current.video2 ? (
          <iframe
            title={current.name}
            width="350"
            height="250"
            src={current.video2}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Img
            fluid={current.i2.asset.fluid}
            alt={current.name}
            className="image"
          />
        )}
        <h5>{current.question3}</h5>
        <h4>{current.answer3}</h4>
        {current.video3 ? (
          <iframe
            title={current.name}
            width="350"
            height="250"
            src={current.video3}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Img
            fluid={current.i3.asset.fluid}
            alt={current.name}
            className="image"
          />
        )}
        <h5>{current.question4}</h5>
        <h4>{current.answer4}</h4>
        {current.video4 ? (
          <iframe
            title={current.name}
            width="350"
            height="250"
            src={current.video4}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Img
            fluid={current.i4.asset.fluid}
            alt={current.name}
            className="image"
          />
        )}
        <h5>{current.question5}</h5>
        <h4>{current.answer5}</h4>
        {current.video5 ? (
          <iframe
            title={current.name}
            width="350"
            height="250"
            src={current.video5}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Img
            fluid={current.i5.asset.fluid}
            alt={current.name}
            className="image"
          />
        )}
        <h5>{current.question6}</h5>
        <h4>{current.answer6}</h4>
        {current.video6 ? (
          <iframe
            title={current.name}
            width="350"
            height="250"
            src={current.video6}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Img
            fluid={current.i6.asset.fluid}
            alt={current.name}
            className="image"
          />
        )}
        <h5>{current.question7}</h5>
        <h4>{current.answer7}</h4>
        {current.video7 ? (
          <iframe
            title={current.name}
            width="350"
            height="250"
            src={current.video7}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Img
            fluid={current.i7.asset.fluid}
            alt={current.name}
            className="image"
          />
        )}
        <h5>{current.question8}</h5>
        <h4>{current.answer8}</h4>
        {current.video8 ? (
          <iframe
            title={current.name}
            width="350"
            height="250"
            src={current.video8}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <Img
            fluid={current.i8.asset.fluid}
            alt={current.name}
            className="image"
          />
        )}
        {current.question9 ? (
          <>
            <h5>{current.question9}</h5>
            <h4>{current.answer9}</h4>
            {current.video9 ? (
              <iframe
                title={current.name}
                width="350"
                height="250"
                src={current.video9}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <Img
                fluid={current.i9.asset.fluid}
                alt={current.name}
                className="image"
              />
            )}
            <h5>{current.question10}</h5>
            <h4>{current.answer10}</h4>
            {current.video10 ? (
              <iframe
                title={current.name}
                width="350"
                height="250"
                src={current.video10}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <Img
                fluid={current.i10.asset.fluid}
                alt={current.name}
                className="image"
              />
            )}

            {current.question11 ? (
              <>
                <h5>{current.question11}</h5>
                <h4>{current.answer11}</h4>
                {current.video11 ? (
                  <iframe
                    title={current.name}
                    width="350"
                    height="250"
                    src={current.video11}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <Img
                    fluid={current.i11.asset.fluid}
                    alt={current.name}
                    className="image"
                  />
                )}
                <h5>{current.question12}</h5>
                <h4>{current.answer12}</h4>
              </>
            ) : (
              <></>
            )}
            {current.video12 ? (
              <iframe
                title={current.name}
                width="350"
                height="250"
                src={current.video12}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : current.i12 ? (
              <Img
                fluid={current.i12.asset.fluid}
                alt={current.name}
                className="image"
              />
            ) : (
              <> </>
            )}
            {current.question13 ? (
              <>
                <h5>{current.question13}</h5>
                <h4>{current.answer13}</h4>
                <h5>{current.question14}</h5>
                <h4>{current.answer14}</h4>
                <h5>{current.question15}</h5>
                <h4>{current.answer15}</h4>
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </StyledInterviewGrid>
      <StyledButton onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}>Return to the top</StyledButton>
    </StyledContainer>
  ) : (
    <StyledContainer>
      <StyledTracklistContainer>
        {current.tracklist.map((track) => (
          <p className="tracklist" key={track}>
            {track}
          </p>
        ))}
      </StyledTracklistContainer>
      <StyledAlbumArtGrid>
        {current.albumArt.map((art) => (
          <Img
            fluid={art.asset.fluid}
            alt={art.name}
            className="albumArt"
            key={art.id}
          />
        ))}
      </StyledAlbumArtGrid>

      <StyledHeader>{current.artist}</StyledHeader>
      <StyledDescription style={{fontSize: "2rem"}}>{current.description}</StyledDescription>
      <StyledArtistImage>
        <Img fluid={current.imageOfArtist.asset.fluid} alt={current.name} />
      </StyledArtistImage>
      <button
        onClick={() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        }}
      >
        Return to the top
      </button>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 375px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const StyledTracklistContainer = styled.div`
  text-align: center;
  padding: 5%;
  p {
    font-family: "Source Code Pro", monospace;
    padding: 0.5rem;
  }
`;
const StyledArtistImage = styled.div`
  width: 50%;
  padding: 5%;
  @media screen and (max-width: 375px) {
    width: 100%;
  }
`;
const StyledAlbumArtGrid = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: 20px;
  padding: 0 5% 0 5%;
  margin-bottom: -5%;
  .albumArt {
    width: 80%;
    height: 900px;
    @media screen and (max-width: 375px) {
      height: 400px;
      width: 100%;
    }
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 5%;
  }
`;

const StyledHeader = styled.div`
  text-align: center;
  font-size: 5rem;
  font-family: "Source Code Pro", monospace;
  padding: 5%;
  @media screen and (max-width: 375px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 800px) {
    margin-top: 180px;
  }
`;
const StyledDescription = styled.div`
  text-align: center;
  font-size: 3rem;
  font-family: "Raleway", sans-serif;
  padding: 3%;

  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
`;
const StyledInterviewGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 3%;

  .noMoreQuestions {
    display: none;
  }
  @media screen and (max-width: 375px) {
    font-size: 1rem;
  }
  h4 {
    margin: 5% 0 5% 0;
    font-size: 1.5rem;
  }
  h5 {
    font-size: 1.5rem;
    margin: 5% 0 0 0;
  }
  .image {
    width: 50vw;
  }
`;
const StyledButton = styled.button`
  text-align: center;
  background: transparent;
    border: none;
    cursor: pointer;
    border: 2px solid rgb(65, 65, 65);
    padding: 0.5rem;
    transition: all 0.3s ease;
    &:hover {
      background: rgb(65, 65, 65);
      color: white;
    }
  width: 100vw;
`;

export default Interview;
