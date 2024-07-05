import React from "react";
import { NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Logo from '@/public/icons/logo.svg'
import SearchIcon from '@/public/icons/search.svg'
import {
    NavBarWrapper,
    NavBrandWrapper,
    NavTitle,
    SearchBox,
    LogoutButton,
    SearchText, SearchButton, SearchWrapper
} from "@/components/navbar/navbar.styles";

export default function Navbar() {
    return (
        <NavBarWrapper>
            <NavBrandWrapper>
                <Logo />
                <NavTitle>TrendCart</NavTitle>
            </NavBrandWrapper>
            <NavbarContent>
                <SearchWrapper>
                    <SearchBox
                        radius={'full'}
                        type='search'
                        label=""
                        placeholder="Search for a product"
                        startContent={<SearchIcon/>}
                        onMouseEnter={() => console.log('search!')}
                    endContent={<SearchButton>Search</SearchButton>}/>

                </SearchWrapper>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <LogoutButton href="#" radius={'sm'}>
                        Logout
                    </LogoutButton>
                </NavbarItem>
            </NavbarContent>
        </NavBarWrapper>
    );
}
