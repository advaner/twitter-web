import styled from "styled-components"
import colors from "./Colors"
import twitterIMG from "../assets/twitterImg.png"


export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${colors.black};
    font-family: "Roboto", "sans-serif";
    color: ${colors.whiteGray};

    display: flex;
`

export const TwitterImg = styled.div`
    width: 55%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    background-image: url(${twitterIMG});
`

export const Content = styled.div`
    width: 45%;
    height: 100%;

    display: flex;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-size: 64px;
    }

    h2 {
        font-size: 32px;
    }

    margin-left: 40px;
`

export const Buttons = styled.div`
    display: flex;
    flex-direction: column;

    height: 15%;
`

export const SingUp = styled.button`
    width: 45%;
    height: 40%;

    border-radius: 24px;
    border-width: 1px;
    border-style: none;
    background-color: ${colors.blue};

    margin-bottom: 15px;
    color: ${colors.whiteGray};
    font-weight: bold;
    transition: 250ms;

    :hover{
        filter: opacity(75%);
    }

    cursor: pointer;

`

export const LogIn = styled.button`
    width: 45%;
    height: 40%;

    border-radius: 24px;
    border-width: 1px;
    border-style: solid;
    background-color: ${colors.black};
    border-color: ${colors.blue};
    color: ${colors.blue};
    font-weight: bold;

    transition: 250ms;
    :hover{
        filter: opacity(75%);
    }

    cursor: pointer;
`

export const ContentIcon = {
    height: "40px",
    width: "40px",
}

export const ImgIcon = {
    height: "45%",
    width: "45%",
}