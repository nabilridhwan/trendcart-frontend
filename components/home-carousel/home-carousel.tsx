import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 500px;
    display: grid;
    place-items: center;
`;

const Main = styled.main`
    width: 80%;
    height: 400px;
    overflow: hidden;
    position: relative;
`;

const Item = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: transform 0.5s ease;
`;

const Item1 = styled(Item)<{ position: number }>`
    background-color: #90f1ef;
    transform: ${(props) => `translateX(calc(${props.position - 1} * -100%))`};
`;

const Item2 = styled(Item)<{ position: number }>`
    background-color: #ff70a6;
    transform: ${(props) => `translateX(calc(${props.position - 2} * -100%))`};
`;

const Item3 = styled(Item)<{ position: number }>`
    background-color: #ff9770;
    transform: ${(props) => `translateX(calc(${props.position - 3} * -100%))`};
`;

const Item4 = styled(Item)<{ position: number }>`
    background-color: #ffd670;
    transform: ${(props) => `translateX(calc(${props.position - 4} * -100%))`};
`;

const Item5 = styled(Item)<{ position: number }>`
    background-color: #e9ff70;
    transform: ${(props) => `translateX(calc(${props.position - 5} * -100%))`};
`;

const RadioContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const RadioInput = styled.input`
    display: none;

    &:checked + label {
        color: #333;
    }
`;

const RadioLabel = styled.label`
    display: inline-block;
    cursor: pointer;
    padding: 0 0.5rem;
    font-size: 1.2rem;
`;

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
                <Item1 position={position}>1</Item1>
                <Item2 position={position}>2</Item2>
                <Item3 position={position}>3</Item3>
                <Item4 position={position}>4</Item4>
                <Item5 position={position}>5</Item5>
            </Main>
            <RadioContainer>
                {[1, 2, 3, 4, 5].map((value) => (
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
