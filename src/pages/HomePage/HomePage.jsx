import React from "react";
import styled from "styled-components";
import homeImage from '../../assets/images/home/homepage-main.png';
import Trustpilot from '../../assets/images/home/homepage-trustpilot.svg';

const Main = styled.main`
    background-image: url("../../assets/images/home/background-homepage.svg");
    padding: 140px 120px;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const Hero = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 26px;
`;

const Heading = styled.h1`
    font-weight: normal;
    font-size: 60px;
    line-height: 60px;
    letter-spacing: 1.8px;
    color: #08090a;

    span {
        color: #35b8be;
    }
`;

const Paragraph = styled.p`
    font-weight: normal;
    font-size: 18px;
    line-height: 24.1px;
    letter-spacing: 0.36px;
      color: #546285;
`;

const OrderButton = styled.button`
    padding: 19px 35px 21px;
    background-color: #35b8be;
    color: #ffffff;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    border: none;
    border-radius: 6px;
    margin: 27px 0 3px;
    opacity: 0.6;
`;

const TrustPilot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    p {
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        color: #08090a;

        span {
            color: #35b8be;
        }
    }
`;

const Image = styled.img`
    max-width: 100%;
`;

const HomePage = () => {
    return (
        <Main>
            <Wrapper>
                <Hero>
                    <Heading>
                        Beautiful food & takeaway, <span>delivered</span> to your door.
                    </Heading>
                    <Paragraph>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500
                    </Paragraph>
                    <OrderButton disabled>Place an Order</OrderButton>
                    <TrustPilot>
                        <img src={Trustpilot} alt="trustpilot" />
                        <p><span>4.8 out of 5 </span>based on 2000+ reviews</p>
                    </TrustPilot>
                </Hero>
                <Image src={homeImage} alt="home" />
            </Wrapper>
        </Main>
    );
};

export default HomePage;
