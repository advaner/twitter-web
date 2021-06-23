import React, { FormEvent, useState } from "react"
import { useHistory } from "react-router-dom"

import api from "../services/api"
import { Container, Icon } from "../styles/ModalStyled"
import { FaTwitter } from "react-icons/fa"


interface ModalProps {
    onClose: any,
}

interface Values {
    name: string,
    username: string,
    email: string,
    password: string,

}
 
const Modal: React.FC<ModalProps> = ({onClose, children}) => {

    const history = useHistory()

    const [values, setValues] = useState<Values>({
        name: "",
        username: "",
        email: "",
        password: "",

    })

    async function handdleSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
        event.preventDefault()

        await api.post("/register", {
            name: values.name,
            username: values.username,
            email: values.email,
            password: values.password,
        })

        history.push("/login")
    }

    const handleChange = (event: any) => {
        const {name, value} = event.target
        setValues({...values, [name]:value})
    }

    return(
        <Container>
           <form onSubmit={handdleSubmit}>
                <div id="header">

                        <button onClick={onClose}>Close</button>

                        <FaTwitter style={Icon}/>

                </div>

                <div id="content">
                    <div>
                        <div>
                            <h3>Create your account</h3>

                            <input type="name" placeholder="Name" required value={values.name} onChange={handleChange} name="name"></input>

                            <input type="email" placeholder="Email" required value={values.email} onChange={handleChange} name="email"></input>

                            <input placeholder="Username" required value={values.username} onChange={handleChange} name="username"></input>

                            <input type="password" placeholder="Passwword" required value={values.password} onChange={handleChange} name="password"></input>

                            <div>
                                <button type="submit">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

           </form>
        </Container>
    )
}

export default Modal