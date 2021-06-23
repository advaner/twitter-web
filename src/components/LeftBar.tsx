import React from "react"

import { Container, Icons } from "../styles/LeftBarStyled"
import { FaTwitter, FaHashtag,  FaBell, FaSave, FaList, FaHome} from "react-icons/fa"
import { MdEmail, MdAccountCircle } from "react-icons/md"
import { CgMoreO } from "react-icons/cg"

const LeftBar: React.FC = () => {
    return(
        <Container>
            <div>
                <a>
                    <FaTwitter style={Icons}/>
                </a>
                <a>
                    <FaHome style={Icons}/>
                    <h3>Home</h3>
                </a>
                <a>
                    <FaHashtag style={Icons}/>
                    <h3>Explore</h3>
                </a>
                <a>
                    <FaBell style={Icons}/>
                    <h3>Notifications</h3>
                </a>
                <a>
                    <MdEmail style={Icons}/>
                    <h3>Messages</h3>
                </a>
                <a>
                    <FaSave style={Icons}/>
                    <h3>Bookmars</h3>
                </a>
                <a>
                    <FaList style={Icons}/>
                    <h3>Lists</h3>
                </a>
                <a>
                    <MdAccountCircle style={Icons}/>
                    <h3>Profile</h3>
                </a>
                <a>
                    <CgMoreO style={Icons}/>
                    <h3>More</h3>
                </a>
            </div>
        </Container>
    )
}

export default LeftBar