import React from "react"

import { Link } from "react-router-dom"
import { Container, Icon, Button, LinkStyled } from "../styles/LoginStyled"
import { FaTwitter } from "react-icons/fa"

const Login: React.FC = () => {
    return(
        <Container>
            <form>
                <div>
                    <FaTwitter style={Icon}/>
                </div>

                <div>
                    <h1>Log in to Twitter</h1>
                </div>

                <div>
                    <input placeholder="Email" required></input>
                </div>

                <div>
                    <input placeholder="Password" required></input>
                </div>

                <Button>
                    <button>Log in</button>
                </Button>

                <div>
                    <Link to="forgot" style={LinkStyled}>Forgot password?</Link>
                    <Link to="/" style={LinkStyled}>Sing up for Twitter</Link>
                </div>
            </form>
        </Container>
    )
}

export default Login