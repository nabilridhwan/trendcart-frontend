import { Button } from "@nextui-org/button";
import { Navbar, NavbarBrand } from "@nextui-org/navbar";
import { Input, NavbarItem } from "@nextui-org/react";
import styled from "styled-components";

interface IItemProps {
  active?: boolean;
}

export const NavBarWrapper = styled(Navbar)`
  display: flex;
  gap: 4rem;
  color: #fff;
  background-color: #001f3e;
  padding: 1rem 0 1rem 0;

  header {
    gap: 3rem;
  }
`;

export const NavBrandWrapper = styled(NavbarBrand)`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const NavTitle = styled.span`
  font-size: 1.5rem;
  font-weight: 500;
`;
export const SearchWrapper = styled(NavbarItem)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  @media (min-width: 640px) {
    display: flex;
    gap: 1.5rem;
  }
`;

export const SearchBox = styled(Input)`
  color: black;
`;

export const SearchText = styled.span`
  flex: 1;
  text-align: left;
`;

export const SearchButton = styled(Button)`
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: white;
`;

export const LogoutButton = styled(Button)`
  background-color: white;
  padding: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #001f3e;
`;

export const SecondaryNavBarWrapper = styled.div`
  padding: 0.5rem;
  background-color: #e5e6e7;
  gap: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ItemTitle = styled.span<IItemProps>`
  font-weight: 550;
  color: ${(props) => (props.active ? "#1E1E1E" : "rgba(0, 0, 0, 0.3)")};
  border-bottom: ${(props) => (props.active ? "2px solid #1E1E1E" : "none")};
  padding-bottom: 0.05rem;
  display: flex;
  align-items: center;
`;

export const ForYouButton = styled(Button)<IItemProps>`
  display: flex;
  align-items: center;
  background-color: #001f3e;
  color: white;
  font-weight: 550;
  font-size: medium;
  text-shadow:
    0.8px 0.8px 0 #f60457,
    -0.8px -0.8px 0 #f60457,
    0.8px -0.8px 0 #f60457,
    -0.8px 0.8px 0 #f60457,
    0.8px 0 0 #f60457,
    -0.8px 0 0 #f60457,
    0 0.8px 0 #f60457,
    0 -0.8px 0 #f60457;
  width: auto;
  justify-content: center;
  button {
    padding: 0 0.5rem 0 0.5rem;
  }
  border: ${(props) => (props.active ? "2px solid #16E8ED" : "none")};
`;
