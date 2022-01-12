import React from 'react'
import styled from 'styled-components';
import ArrowLeftOutlinedIcon from '@mui/icons-material/ArrowLeftOutlined';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';



const Container = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    position: relative;
`;
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom:0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    
`;
const Wrapper = styled.div`
    height: 100%;
`;
const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;
const ImgContainer = styled.div`
    height:100%;
    flex: 1;
`;
const Image =styled.img`
    height:80%;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1``;
const Desc = styled.p``;
const Button = styled.button``;

const Slider = () => {
    
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlinedIcon/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src="https://thumbs.dreamstime.com/b/fashion-model-shopping-bag-isolated-white-background-full-bags-length-portrait-young-woman-smile-44465036.jpg"/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title/>
                        <Desc/>
                        <Button/>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlinedIcon/>
            </Arrow>

        </Container>
    )
}

export default Slider;