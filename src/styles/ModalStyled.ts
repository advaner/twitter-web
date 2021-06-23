import styled from "styled-components"
import colors from "./Colors"


export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: ${colors.blackOpcited};

    display: flex;
    justify-content: center;
    align-items: center;

    //--------------------------------------------------------------------------------------//

    & > form {
        width: 32%;
        height:70%;

        border-radius: 16px;

        background-color: black;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        & > #header {
            width: 100%;
            height: 10%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            & > button {
                width: 12%;
                height: 55%;
                border-radius: 24px;
                margin-left: 20px;

                background-color: ${colors.blue};
                border: none;
                font-weight: bold;
                color: ${colors.whiteGray};
                font-size: 14px;
                font-weight: bold;
                transition: 250ms;
                cursor: pointer;

                :hover{
                    filter: opacity(75%);
                }
            }
        }

        //--------------------------------------------------------------------------------------//


        & > #content {
            width: 100%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;

            & > div {
                width: 90%;
                height: 100%;

                & > div {
                    width: 100%;
                    height: 80%;
                    
                    display: flex;
                    flex-direction: column;

                    & > h3 {
                        font-size: 22px;
                    }
                    
                    & > input {
                        width: 97%;
                        height: 22%;
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
                        ::-webkit-search-cancel-button{
                            display: none;
                        }
                        :focus{
                            outline: none;
                            border-color: ${colors.blue};
                        }
                    }

                    & > div {
                        width: 100%;
                        height: 15%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        margin-top: 20px;

                        & > button {
                            width: 50%;
                            height: 120%;
                            background-color: ${colors.blue};
                            border: 0;
                            border-radius: 24px;
                            color: ${colors.whiteGray};
                            font-size: 16px;
                            font-weight: bold;
                            transition: 250ms;
                            cursor: pointer;
                            :hover {
                                filter: opacity(75%);
                            }
                        }
                    }
                }
            }
        }    
    }
`

export const Icon = {
    width: "30px",
    height: "30px",
    marginRight: "20px"
}
