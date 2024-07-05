import {
  ForYouButton,
  ItemTitle,
  SecondaryNavBarWrapper,
} from "@/components/navbar/navbar.styles";
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

export default function ItemNavbar() {
  const [activeItem, setActiveItem] = useState<string>("All");

  const renderItems = itemsArray.map((item) => {
    if (item.key === "for-you") {
      return (
        <ForYouButton
          radius={"none"}
          active={activeItem === "for-you"}
          key={item.key}
          onPress={() => setActiveItem(item.key)}
        >
          <a href={item.redirectTo}>{item.name}</a>
        </ForYouButton>
      );
    }

    return (
      <ItemTitle
        key={item.key}
        active={activeItem === item.key}
        onClick={() => setActiveItem(item.key)}
      >
        <a href={item.redirectTo}>{item.name}</a>
      </ItemTitle>
    );

    // if (item === "For you" && activeItem === "For you") {
    //   return (
    //     <ForYouButton
    //       radius={"none"}
    //       active={true}
    //       key={item}
    //       onPress={() => setActiveItem(item)}
    //     >
    //       <a href="#">{item}</a>
    //     </ForYouButton>
    //   );
    // } else if (item === "For you") {
    //   return (
    //     <ForYouButton
    //       radius={"none"}
    //       key={item}
    //       onPress={() => setActiveItem(item)}
    //     >
    //       <a href="#">{item}</a>
    //     </ForYouButton>
    //   );
    // } else if (item === activeItem) {
    //   return (
    //     <ItemTitle key={item} active={true} onClick={() => setActiveItem(item)}>
    //       <a href="#">{item}</a>
    //     </ItemTitle>
    //   );
    // } else {
    //   return (
    //     <ItemTitle
    //       key={item}
    //       active={false}
    //       onClick={() => setActiveItem(item)}
    //     >
    //       <a href="#">{item}</a>
    //     </ItemTitle>
    //   );
    // }
  });
  return <SecondaryNavBarWrapper>{renderItems}</SecondaryNavBarWrapper>;
}
