import React, { useState } from "react";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import Logo from "@/public/icons/logo.svg";
import SearchIcon from "@/public/icons/search.svg";
import {
  LogoutButton,
  NavBarWrapper,
  NavBrandWrapper,
  NavTitle,
  SearchBox,
  SearchButton,
  SearchWrapper,
} from "@/components/navbar/navbar.styles";

interface NavbarProps {
  searchQuery?: string;
}

export default function Navbar({ searchQuery = "" }: NavbarProps) {
  const [query, setQuery] = useState(searchQuery);

  const handleSearch = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    window.location.href = `/search?q=${query}`;
  };

  return (
    <NavBarWrapper>
      <NavBrandWrapper>
        <Logo />
        <NavTitle>TrendCart</NavTitle>
      </NavBrandWrapper>
      <NavbarContent>
        <form onSubmit={handleSearch}>
          <SearchWrapper>
            <SearchBox
              radius={"full"}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              label=""
              placeholder="Search for a product"
              startContent={<SearchIcon />}
              onMouseEnter={() => console.log("search!")}
              endContent={<SearchButton>Search</SearchButton>}
            />
          </SearchWrapper>
        </form>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <LogoutButton href="#" radius={"sm"}>
            Logout
          </LogoutButton>
        </NavbarItem>
      </NavbarContent>
    </NavBarWrapper>
  );
}
