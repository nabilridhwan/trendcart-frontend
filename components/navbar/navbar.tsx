import React, { useEffect, useState } from "react";
import { NavbarContent, NavbarItem } from "@nextui-org/react";
import Logo from "@/public/icons/logo.svg";
import {
  LogoutButton,
  NavBarWrapper,
  NavBrandWrapper,
  NavTitle,
} from "@/components/navbar/navbar.styles";

interface NavbarProps {
  searchQuery?: string;
}

export default function Navbar({ searchQuery = "" }: NavbarProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [query, setQuery] = useState(searchQuery);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    window.location.href = `/search?q=${query}`;
  };

  const redirectToLLMSearch = () => {
    window.location.href = `/search?q=${query}&llm=true`;
  };

  const handleLogout = () => {
    localStorage.removeItem("tokenData");
    window.location.href = "/login";
  };

  const handleLogin = () => {
    localStorage.removeItem("tokenData");
    window.location.href = "/login";
  };

  const handleGoHome = () => {
    window.location.href = "/home";
  };

  useEffect(() => {
    const t = localStorage.getItem("authToken");

    if (t) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <NavBarWrapper>
      <NavBrandWrapper
        onClick={handleGoHome}
        className={"flex items-center gap-1 cursor-pointer"}
      >
        <Logo />
        <NavTitle>TrendCart</NavTitle>
      </NavBrandWrapper>
      {/*<NavbarContent className="hidden sm:flex gap-4" justify="center">*/}
      {/*  <form onSubmit={handleSearch}>*/}
      {/*    <SearchWrapper>*/}
      {/*      <SearchBox*/}
      {/*        radius={"full"}*/}
      {/*        type="search"*/}
      {/*        value={query}*/}
      {/*        onChange={(e) => setQuery(e.target.value)}*/}
      {/*        label=""*/}
      {/*        placeholder="Search"*/}
      {/*        startContent={<SearchIcon />}*/}
      {/*        onMouseEnter={() => console.log("search!")}*/}
      {/*        endContent={*/}
      {/*          <div className={"flex gap-1"}>*/}
      {/*            <SearchButton*/}
      {/*              title="We use your search query to find products that match your interests."*/}
      {/*              onClick={(e) => {*/}
      {/*                e.stopPropagation();*/}
      {/*                redirectToLLMSearch();*/}
      {/*              }}*/}
      {/*              type="button"*/}
      {/*            >*/}
      {/*              <RiSparklingFill />*/}
      {/*              AI Search*/}
      {/*            </SearchButton>*/}
      {/*            <SearchButton type="submit">Search</SearchButton>*/}
      {/*          </div>*/}
      {/*        }*/}
      {/*      />*/}
      {/*    </SearchWrapper>*/}
      {/*  </form>*/}
      {/*</NavbarContent>*/}

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        <NavbarItem>
          {isLoggedIn ? (
            <LogoutButton onClick={handleLogout} radius={"sm"}>
              Logout
            </LogoutButton>
          ) : (
            <LogoutButton onClick={handleLogin} radius={"sm"}>
              Login
            </LogoutButton>
          )}
        </NavbarItem>
      </NavbarContent>
    </NavBarWrapper>
  );
}
