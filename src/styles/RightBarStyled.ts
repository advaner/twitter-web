import styled from "styled-components";
import colors from "./Colors";

export const Container = styled.div`
    width: 30%;
    height: 100vh;
    background-color: black;
    margin-left: 70%;
    
    position: fixed;

    & > div{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;

        border-style: solid;
        border-right: 1px;
        border-color: ${colors.blackBorder};
    }

`