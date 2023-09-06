import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Link as LinkR } from'react-router-dom';


const Nav = styled.div`
background-color: ${({ theme }) => theme.card_light};
height: 80px;
display: flex;
justify-content:center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
@media screen and (max-width: 960px) {
    transition: 0.8 all ease;
}
`

const NavContainer = styled.div`
height: 68px;
display: flex;
justify-content: space-between;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1200px;`

//LinkR makes this a linked component and will take us to home page when clicked
const NavLogo = styled(LinkR)`
  width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    @media scrren and (max-width: 640px) {
      padding: 0 0px;
    }
;`

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;


const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>Logo</NavLogo>
                <MobileIcon>Icon</MobileIcon>
                <NavItems>
                    <NavLink>Home</NavLink>
                </NavItems>
                <ButtonContainer>
                    <GitHubButton>GitHub Profile</GitHubButton>
                </ButtonContainer>
            </NavContainer>
        </Nav >
    )
}

export default Navbar;