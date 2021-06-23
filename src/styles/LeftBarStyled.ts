import styled from "styled-components";
import colors from "./Colors";

export const Container = styled.div`
    width: 30%;
    height: 100vh;
    position: fixed;
    background-color: black;
    font-family: "Roboto";


    & > div{
        flex: 1;
        height: 100%;
        display: flex;
        flex-direction: column;

        align-items: flex-end;

        border-style: solid;
        border-left: 1px;
        border-top: 0;
        border-color: ${colors.blackBorder};

        & > a {
            margin-top: 5px;
            width: max-content;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            border-radius: 24px;

            :hover{
                background-color: ${colors.opcitedBlue};

               & > h3{
                   color: ${colors.blue};
               }
            }

            & > h3{
                color: ${colors.whiteGray};
                font-weight: bold;
                margin-left: 20px;
            }
        }
    }
`

export const Icons = {
    height: "30px",
    width: "30px",
    color: `${colors.whiteGray}`
}
