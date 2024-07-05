import styled from "styled-components";
import {
    Navbar,
    NavbarBrand
} from "@nextui-org/navbar";
import {Card, NavbarContent, NavbarItem} from "@nextui-org/react";
import {Button} from "@nextui-org/button";
import {Input} from "@nextui-org/react";

interface IItemProps {
    active?: boolean;
}

export const NavBarWrapper = styled(Navbar)`
    display: flex;
    gap: 4rem;
  color: #fff;
    background-color: #001F3E;
    padding: 1rem 0 1rem 0;
    
    header {
        gap: 3rem;
    }
    
`;

export const NavBrandWrapper = styled(NavbarBrand)`
    display: flex;
    align-items: center;
    gap: 1rem; /* Adjust as per your design */
`;

export const NavTitle = styled.span`
    font-size: 1.5rem;
    font-weight: 500;
`;
export const SearchWrapper = styled(NavbarItem)`
    
        display: flex; /* Hidden by default */
        flex-direction: row;
        justify-content: flex-start;
        @media (min-width: 640px) {
            display: flex; /* Display as flex from sm breakpoint */
            gap: 1.5rem; /* Adjust gap as needed */
        }
    
`

export const SearchBox = styled(Input)`
    width: 50vw;
    color: black;
    position: relative;
`;

export const SearchText = styled.span`
    flex: 1; /* Take remaining space */
    text-align: left; /* Align text to the left */
`;

export const SearchButton = styled(Button)`
    background-color: #F60457;
    padding: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: white;
    height: 4vh;
`

export const LogoutButton = styled(Button)`
    background-color: white;
    padding: 0.5rem;
    font-size: 0.9rem;
    font-weight: 500;
    color: #001F3E;
`

export const SecondaryNavBarWrapper = styled.div`
    padding: 0.5rem;
    background-color: #E5E6E7;
    gap: 2rem;
    display: flex;
    justify-content: center;
    align-items: center; /* Center align items vertically */
`;

export const ItemTitle = styled.span<IItemProps>`
    font-weight: 550;
    color: ${(props) => (props.active ? '#1E1E1E' : 'rgba(0, 0, 0, 0.3)')};
    border-bottom: ${(props) => (props.active ? '2px solid #1E1E1E' : 'none')};
    padding-bottom: 0.05rem; /* Optional: to give space for the border */
    display: flex;
    align-items: center; /* Center align text vertically */
`;

export const ForYouButton = styled(Button)<IItemProps>`
    display: flex;
    align-items: center;
    background-color: #001F3E;
    color: white;
    font-weight: 550;
    font-size: medium;
    text-shadow:
            0.8px 0.8px 0 #F60457,
            -0.8px -0.8px 0 #F60457,
            0.8px -0.8px 0 #F60457,
            -0.8px 0.8px 0 #F60457,
            0.8px 0 0 #F60457,
            -0.8px 0 0 #F60457,
            0 0.8px 0 #F60457,
            0 -0.8px 0 #F60457;
    width: auto;
    justify-content: center;
    button{
        padding: 0 0.5rem 0 0.5rem;
    }
    border: ${(props) => (props.active ? '2px solid #16E8ED' : 'none')};
`;

