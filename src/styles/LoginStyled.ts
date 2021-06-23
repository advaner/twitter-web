import styled from "styled-components"
import colors from "./Colors"

export const Container = styled.div`
    height: 100%;
    width: 100%;

    background-color: black;

    display: flex;

    justify-content: center;
    align-items: flex-start;

    & > form {
        width: 18%;
        height: 60%;

        margin-top: 30px;

        & > div {
            width: 100%;
            height: 10%;
            margin-bottom: 25px;
            display: flex;
            justify-content: space-between;
            & > h1 {
                color: ${colors.whiteGray};
                font-size: 32px;
                font-weight: bold;
                font-family: "Roboto";
            }

            & > input {
                width: 95%;
                height: 100%;
                background-color: black;
                border-style: solid;
                border-width: 1px;
                border-color: ${colors.blackGray};
                border-radius: 8px;
                margin-bottom: 20px;
                color: ${colors.whiteGray};
                font-size: 16px;
                transition: 200ms;
                padding-left: 10px;
                margin: 0px;
                ::-webkit-search-cancel-button{
                    display: none;
                }
                :focus{
                    outline: none;
                    border-color: ${colors.blue};
                }
            }
        }
    }
`

export const Button = styled.div`
    width: 100%;
    height: 60%;

    display: flex;
    justify-content: center; 
    align-items: center;

    & > button {
        width: 99%;
        height: 85%;
        border-radius: 24px;
        border: 0px;
        background-color: ${colors.blue};
        font-size: 14px;
        font-weight: bold;
        color: ${colors.whiteGray};
        transition: 250ms;

        :hover {
            filter: opacity(75%);
        }
    }
`

export const Icon = {
    width: "40px",
    height: "40px",

    color: `${colors.whiteGray}`
}

export const LinkStyled = {
    color: `${colors.blue}`,
    textDecoration: "0",
}