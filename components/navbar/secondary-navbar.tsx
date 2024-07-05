import {ForYouButton, ItemTitle, SecondaryNavBarWrapper} from "@/components/navbar/navbar.styles";
import {useState} from "react";

export default function ItemNavbar() {
    const [activeItem, setActiveItem] = useState<string>('All')
    const itemsArray = ['All', 'For you', 'Beauty', 'Toys', 'Jewellery', 'Food', 'Household', 'Entertainment', 'Accessories']
    const renderItems  = itemsArray.map((item) => {
          if(item==='For you' && activeItem==='For you'){
            return(
                <ForYouButton radius={'none'} active={true} key={item} onPress={() => setActiveItem(item)}>
                    <a href="#">{item}</a>
                </ForYouButton>
            )
        } else if(item==='For you'){
              return(
                  <ForYouButton radius={'none'} key={item} onPress={() => setActiveItem(item)}>
                      <a href="#">{item}</a>
                  </ForYouButton>
              )
          } else if(item===activeItem){
            return (
                <ItemTitle key={item} active={true} onClick={() => setActiveItem(item)}>
                    <a href="#">{item}</a>
                </ItemTitle>
            )
        } else {
            return (
                <ItemTitle key={item} active={false} onClick={() => setActiveItem(item)}>
                    <a href="#">{item}</a>
                </ItemTitle>
            )
        }
    })
    return(
        <SecondaryNavBarWrapper>
            {renderItems}
        </SecondaryNavBarWrapper>
    )
}