import React from "react"

import { Container, Content } from "../styles/HomeStyled"
import LeftBar from "../components/LeftBar"
import RightBar from "../components/RightBar"

const Home: React.FC = () => {
    return(
        <Container>
            <LeftBar/>

            <Content>
                <div>
                    
                </div>
            </Content>

            <RightBar/>
        </Container>
    )
}

export default Home