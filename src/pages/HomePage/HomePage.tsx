import React from "react";
import styled from "styled-components";
import homeImage from '../../assets/images/home/homepage-main.png';
import TrustpilotLight from '../../assets/images/home/homepage-trustpilot.svg';
import TrustpilotDark from '../../assets/images/home/homepage-darktheme-trustpilot.png';
import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext"

const Main = styled.main`
    background-image: var(--background-image-home);
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
    color: var(--text-color);

    span {
        color: #35b8be;
    }
`;

const Paragraph = styled.p`
    font-weight: normal;
    font-size: 18px;
    line-height: 24.1px;
    letter-spacing: 0.36px;
      color: var(--description-color);
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
        color: var(--text-color);

        span {
            color: #35b8be;
        }
    }
`;

const Image = styled.img`
    max-width: 100%;
`;

const HomePage = () => {
    const { theme } = useContext(ThemeContext);
    const Trustpilot = theme === 'dark' ? TrustpilotDark : TrustpilotLight;

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
