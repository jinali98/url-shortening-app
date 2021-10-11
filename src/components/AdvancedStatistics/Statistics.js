import React from "react";
import Card from "../../UI/Card/Card";
import Brand from "../../assets/icon-brand-recognition.svg";
import Detailed from "../../assets/icon-detailed-records.svg";
import Customizable from "../../assets/icon-fully-customizable.svg";
import {
  CardContainer,
  ImageContainer,
  CardHeading,
  CardParagraph,
  HeadingContainer,
} from "./Statistics.styles";
const Statistics = () => {
  return (
    <div>
      <HeadingContainer>
        <h2>Advanced Statistics</h2>
        <p>
          Track how links are perfroming across the web with our advanced
          statistics dashboard
        </p>
      </HeadingContainer>
      <CardContainer>
        <Card className="stat-card">
          <ImageContainer>
            <img src={Brand} alt="Brand" />
          </ImageContainer>
          <CardHeading>Brand Recognition</CardHeading>
          <CardParagraph>
            Boost your brand recognition with each click, generic links don't
            meas a thing. Brandad links help instill confident in your content
          </CardParagraph>
        </Card>
        <Card className="stat-card">
          <ImageContainer>
            <img src={Detailed} alt="Detailed" />
          </ImageContainer>
          <CardHeading>Detailed records</CardHeading>
          <CardParagraph>
            Going insights into who is clicking your links. Knowing when and
            where people engane with your content helps inform better decisions
          </CardParagraph>
        </Card>
        <Card className="stat-card">
          <ImageContainer>
            <img src={Customizable} alt="Customizable" />
          </ImageContainer>
          <CardHeading>Fully Customizable</CardHeading>
          <CardParagraph>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </CardParagraph>
        </Card>
      </CardContainer>
    </div>
  );
};

export default Statistics;
