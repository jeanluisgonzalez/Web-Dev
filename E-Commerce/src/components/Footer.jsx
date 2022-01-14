import React from 'react'
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import PhoneIcon from '@mui/icons-material/Phone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
const Container = styled.div`
    display: flex;

`;
const Left = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1``;
const Desc = styled.p`
    margin: 20px 0;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color};
    display:flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
`;

const Title= styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Rigth = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem =styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;

`;


const Footer = () => {
    return (
        <Container>
           <Left>
               <Logo>OHARAJYY</Logo>
               <Desc>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
               sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
               Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
               nisi ut aliquip ex ea commodo consequat.
               </Desc>
               <SocialContainer>
                   <SocialIcon color="3B5999">
                       <FacebookIcon/>
                   </SocialIcon>
                   <SocialIcon color="E4405F">
                       <InstagramIcon/>
                   </SocialIcon>
               </SocialContainer>
           </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Rigth>
                <Title>Contact</Title>
                <ContactItem>
                    <RoomIcon style= {{ marginRight: "10px"}} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </ContactItem>
                <ContactItem>
                    <PhoneIcon style= {{ marginRight: "10px"}} />
                    809 654 2157
                </ContactItem>
                <ContactItem>
                    <MailOutlineIcon style= {{ marginRight: "10px"}} />
                    contact@OHARAJYY.com
                </ContactItem>
            </Rigth>
        </Container>
    )
}

export default Footer;
