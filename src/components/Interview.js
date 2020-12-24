import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";

function Interview({current}) {
  const interviewContent = current;
  console.log(interviewContent);
  return (
    <StyledContainer>
      <StyledTracklistContainer>
        {current.tracklist.map((track) => (
          <p key={track}>{track}</p>
        ))}
      </StyledTracklistContainer>
      <StyledAlbumArtGrid>
        {current.albumArt.map((art) => (
          <Img fluid={art.asset.fluid} alt={current.name} style={{width: "100%", height: "80%"}} />
        ))}
      </StyledAlbumArtGrid>
      <StyledArtistImage>
        <Img fluid={current.imageOfArtist.asset.fluid} alt={current.name} />
      </StyledArtistImage>
      <StyledHeader>{current.artist}</StyledHeader>
      <StyledDescription>{current.description}</StyledDescription>
      <StyledInterviewGrid>
        <h4>{current.question1}</h4>
        <h5>{current.answer1}</h5>
        <div>
          <Img fluid={current.i1.asset.fluid} alt={current.name} />
        </div>
        <h4>{current.question2}</h4>
        <h5>{current.answer2}</h5>
        <h4>{current.question3}</h4>
        <h5>{current.answer3}</h5>
        <Img fluid={current.i2.asset.fluid} alt={current.name} />
        <h4>{current.question4}</h4>
        <h5>{current.answer4}</h5>
        <Img fluid={current.i3.asset.fluid} alt={current.name} />
        <h4>{current.question5}</h4>
        <h5>{current.answer5}</h5>
        <Img fluid={current.i9.asset.fluid} alt={current.name} />
        <h4>{current.question6}</h4>
        <h5>{current.answer6}</h5>
        <Img fluid={current.i4.asset.fluid} alt={current.name} />
        <h4>{current.question7}</h4>
        <h5>{current.answer7}</h5>
        <Img fluid={current.i5.asset.fluid} alt={current.name} />
        <h4>{current.question8}</h4>
        <h5>{current.answer8}</h5>
        <Img fluid={current.i6.asset.fluid} alt={current.name} />
        <h4>{current.question9}</h4>
        <h5>{current.answer9}</h5>
        <Img fluid={current.i7.asset.fluid} alt={current.name} />
        <h4>{current.question10}</h4>
        <h5>{current.answer10}</h5>
        <Img fluid={current.i8.asset.fluid} alt={current.name} />
        <div style={current.i10 ? {display: "show"} : {display: "none"}}>
          <h4>{current.question11}</h4>
          <h5>{current.answer11}</h5>

          <h4>{current.question12}</h4>
          <h5>{current.answer12}</h5>

          <h4>{current.question13}</h4>
          <h5>{current.answer13}</h5>

          <h4>{current.question14}</h4>
          <h5>{current.answer14}</h5>

          <h4>{current.question15}</h4>
          <h5>{current.answer15}</h5>

          <h4>{current.question16}</h4>
          <h5>{current.answer16}</h5>
          <h4>{current.question17}</h4>
          <h5>{current.answer17}</h5>
          <h4>{current.question18}</h4>
          <h5>{current.answer18}</h5>
          <h4>{current.question19}</h4>
          <h5>{current.answer19}</h5>
          <h4>{current.question20}</h4>
          <h5>{current.answer20}</h5>
        </div>
      </StyledInterviewGrid>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  margin: 0 10% 0 10%;
  padding: 5% 10% 5% 10%;
`;
const StyledTracklistContainer = styled.div`
  text-align: center;
  p {
    font-family: "Source Code Pro", monospace;
    padding: 0.5rem;
  }
`;
const StyledArtistImage = styled.div`
  box-shadow: 0px 0px 10px 4px #e0e0e0;
  border: 1px solid #daf1ff;
  margin: 5% 0 5% 0;
`;
const StyledAlbumArtGrid = styled.div`
  margin: 8% -30% 0 -30%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
`;
const StyledHeader = styled.div`
  text-align: center;
  font-size: 5rem;
  font-family: "Source Code Pro", monospace;
  margin: 10%;
`;
const StyledDescription = styled.div`
  font-size: 3rem;
  font-family: "Raleway", sans-serif;
`;
const StyledInterviewGrid = styled.div`
  margin: 0 -30% 0 -30%;
  padding: 5% 10% 5% 10%;
  font-size: 3rem;
  margin-top: 4rem;
  display: grid;
  grid-template-columns: 2;
  gap: 4rem;
  div {
    display: flex;
    flex-direction: row-reverse;
    width: 500px;
  }
  //grid-auto-rows: 500px auto auto;
`;

export default Interview;