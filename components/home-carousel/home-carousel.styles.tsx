import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  display: grid;
  place-items: center;
`;

export const Main = styled.main`
  width: 80%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  transition: transform 0.5s ease;
`;

export const Item1 = styled(Item)<{ position: number }>`
  background-color: #90f1ef;
  background-image: url("../../public/images/img1.jpg");
  transform: ${(props) => `translateX(calc(${props.position - 1} * -100%))`};
`;

export const Item2 = styled(Item)<{ position: number }>`
  background-image: url("../../public/images/img2.jpeg");
  background-color: #ff70a6;
  transform: ${(props) => `translateX(calc(${props.position - 2} * -100%))`};
`;

export const Item3 = styled(Item)<{ position: number }>`
  background-image: url("../../public/images/img3.jpeg");
  background-color: #ff9770;
  transform: ${(props) => `translateX(calc(${props.position - 3} * -100%))`};
`;

export const Item4 = styled(Item)<{ position: number }>`
  background-image: url("../../public/images/img4.jpeg");
  background-color: #ffd670;
  transform: ${(props) => `translateX(calc(${props.position - 4} * -100%))`};
`;

export const Item5 = styled(Item)<{ position: number }>`
  background-image: url("../../public/images/img5.jpg");
  background-color: #e9ff70;
  transform: ${(props) => `translateX(calc(${props.position - 5} * -100%))`};
`;

export const RadioContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const RadioInput = styled.input`
  display: none;

  &:checked + label {
    color: #333;
  }
`;

export const RadioLabel = styled.label`
  display: inline-block;
  cursor: pointer;
  padding: 0 0.5rem;
  font-size: 1.2rem;
`;
