import React, { useEffect, useState } from "react";
import {
  Container,
  Item2,
  Item3,
  Item4,
  Item5,
  Main,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./home-carousel.styles";

const Carousel: React.FC = () => {
  const [position, setPosition] = useState(1);
  const [autoplay, setAutoplay] = useState(true); // State to control autoplay

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(Number(event.target.value));
    setAutoplay(false); // Stop autoplay when manually changing position
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (autoplay) {
      interval = setInterval(() => {
        setPosition((prevPosition) => (prevPosition % 5) + 1); // Cycle through positions 1 to 5
      }, 9000); // Change slide every 2 seconds (adjust as needed)
    }
    return () => clearInterval(interval); // Clean up on component unmount or when autoplay state changes
  }, [autoplay]);

  return (
    <Container>
      <Main>
        {/*<Item1 position={position}></Item1>*/}
        <Item2 position={position}></Item2>
        <Item3 position={position}></Item3>
        <Item4 position={position}></Item4>
        <Item5 position={position}></Item5>
      </Main>
      <RadioContainer>
        {[1, 2, 3, 4].map((value) => (
          <React.Fragment key={value}>
            <RadioInput
              type="radio"
              id={`radio-${value}`}
              name="position"
              value={value}
              checked={position === value}
              onChange={handleRadioChange}
            />
            <RadioLabel htmlFor={`radio-${value}`}>{value}</RadioLabel>
          </React.Fragment>
        ))}
      </RadioContainer>
    </Container>
  );
};

export default Carousel;
