import React from 'react';
import styled from 'styled-components';
import { useTheme } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
//importting logo from react https://react-icons.github.io/react-icons/icons?name=di
import { DiCssdeck } from 'react-icons/di';
//import { Gi3DGlasses } from "react-icons/gi";
import { FaBars } from 'react-icons/fa';



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

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    :hover {
      color: ${({ theme }) => theme.primary};
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.button`
background-color: transparent;
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;



const Navbar = () => {
  //Hook that lets you add a state variable to your component.
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton>GitHub Profile</GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {isOpen && 
        <MobileMenu isOpen={isOpen}>
          <MobileMenuLinks href="#about" onClick={() => {
            setIsOpen(!isOpen)
          }}>About</MobileMenuLinks>
          <MobileMenuLinks href='#skills' onClick={() => {
            setIsOpen(!isOpen)
          }}>Skills</MobileMenuLinks>
          <MobileMenuLinks href='#experience' onClick={() => {
            setIsOpen(!isOpen)
          }}>Experience</MobileMenuLinks>
          <MobileMenuLinks href='#projects' onClick={() => {
            setIsOpen(!isOpen)
          }}>Projects</MobileMenuLinks>
          <MobileMenuLinks href='#education' onClick={() => {
            setIsOpen(!isOpen)
          }}>Education</MobileMenuLinks>
          <GitHubButton style={{ 
            padding: '10px 16px', 
            background: `${theme.primary}`, 
            color: 'white', 
            width: 'max-content' }} 
            href={'/'} 
            target="_blank">Github Profile</GitHubButton>
        </MobileMenu>
      }
    </Nav >
  )
}

export default Navbar;