import { SearchBox, SearchButton } from "@/components/navbar/navbar.styles";
import React, { useState } from "react";
import SearchIcon from "@/public/icons/search.svg";
import { RiSearch2Line, RiSparklingFill } from "react-icons/ri";

export default function SearchNavbar({
  searchQuery = "",
}: {
  searchQuery?: string;
}) {
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

  return (
    <form onSubmit={handleSearch}>
      <div className={"bg-darkblue flex items-center py-4"}>
        <section
          className={
            "items-center justify-center mx-auto flex flex-wrap gap-3 px-3"
          }
        >
          <SearchBox
            radius={"full"}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            label=""
            placeholder="Search for products, e.g., 'watch' or 'eco-friendly watch'"
            startContent={<SearchIcon />}
            onMouseEnter={() => console.log("search!")}
          />

          <div className={"grid grid-cols-2 gap-2"}>
            <SearchButton
              title="We use your search query to find products that match your interests."
              onClick={(e) => {
                e.stopPropagation();
                redirectToLLMSearch();
              }}
              type="button"
              startContent={<RiSparklingFill />}
            >
              AI Search
            </SearchButton>
            <SearchButton startContent={<RiSearch2Line />} type="submit">
              Search
            </SearchButton>
          </div>
        </section>
      </div>
    </form>
  );
}
