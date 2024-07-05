import styled from 'styled-components';
import { Card } from '@nextui-org/react';
import {Button} from "@nextui-org/button";

export const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #001F3E; 
`;

export const LoginBox = styled(Card)`
    width: 20vw;
    height: auto;
    padding: 2rem;
    gap: 1rem;
    background-color: aliceblue;
    color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`;

export const LoginButton = styled(Button)`
    background-color: #001F3E; // Optional: background color for the page
    color: white;
    font-weight: 500;
`
