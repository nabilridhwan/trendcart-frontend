import {
  ForYouButton,
  ItemTitle,
  SecondaryNavBarWrapper,
} from "@/components/navbar/navbar.styles";
import Link from "next/link"; // Assuming you are using Next.js
import { useState } from "react";

interface Item {
  key: string;
  name: string;
  redirectTo: string;
}

const itemsArray: Item[] = [
  {
    key: "all",
    name: "All",
    redirectTo: "/home",
  },
  {
    key: "for-you",
    name: "For you",
    redirectTo: "/for-you",
  },
  {
    key: "beauty",
    name: "Beauty",
    redirectTo: "#",
  },
  {
    key: "toys",
    name: "Toys",
    redirectTo: "#",
  },
  {
    key: "jewellery",
    name: "Jewellery",
    redirectTo: "#",
  },
  {
    key: "food",
    name: "Food",
    redirectTo: "#",
  },
  {
    key: "household",
    name: "Household",
    redirectTo: "#",
  },
  {
    key: "entertainment",
    name: "Entertainment",
    redirectTo: "#",
  },
  {
    key: "accessories",
    name: "Accessories",
    redirectTo: "#",
  },
];

interface NavItemProps {
  item: Item;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ item, isActive, onClick }: NavItemProps) => {
  if (item.key === "for-you") {
    return (
      <ForYouButton radius="none" active={isActive} onClick={onClick}>
        <Link href={item.redirectTo}>{item.name}</Link>
      </ForYouButton>
    );
  }

  return (
    <ItemTitle active={isActive} onClick={onClick}>
      <Link href={item.redirectTo}>{item.name}</Link>
    </ItemTitle>
  );
};

export default function ItemNavbar() {
  const [activeItem, setActiveItem] = useState<string>("all");

  const handleItemClick = (key: string) => {
    setActiveItem(key);
  };

  return (
    <SecondaryNavBarWrapper>
      {itemsArray.map((item) => (
        <NavItem
          key={item.key}
          item={item}
          isActive={activeItem === item.key}
          onClick={() => handleItemClick(item.key)}
        />
      ))}
    </SecondaryNavBarWrapper>
  );
}
