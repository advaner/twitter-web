import React, { FormEvent, useState} from "react"
import { Link, useHistory} from "react-router-dom"
import Modal from "../components/Modal"
import { Container, TwitterImg, Content, ContentIcon,Buttons, SingUp, LogIn, ImgIcon } from "../styles/EntryStyled"
import { FaTwitter } from "react-icons/fa"


const Entry: React.FC = () => {

    const history = useHistory()

    const [showModal, setShowModal] = useState(false)

    function handdleLogin(event: FormEvent<HTMLButtonElement>){
        event.preventDefault()

        history.push("/login")
    }

    return(
        <Container>
            <TwitterImg>
                <FaTwitter style={ImgIcon}/>
            </TwitterImg>

            <Content>
                <div>
                    <FaTwitter style={ContentIcon}/>
                </div>

                <div>
                    <h1>Happening now</h1>
                    <h2>Join Twitter today.</h2>
                </div>

                <Buttons>
                    <SingUp onClick={() => setShowModal(true)}>Sing up</SingUp>
                    {showModal ? <Modal onClose={() => setShowModal(false)}/> : null}
                    <LogIn onClick={handdleLogin}>Log in</LogIn>
                </Buttons>
            </Content>
        </Container>
    )
}

export default Entry