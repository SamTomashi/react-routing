import { useState } from "react"
import { useNavigate } from "react-router-dom"
export default function Login(){

    const navigate = useNavigate();

    const user = {
        email: "sam@tomashi.dev",
        password: "12345678"
    }


    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const handleOnChange = (event)=> {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const login = (event)=> {
        event.preventDefault()

        if(JSON.stringify(formData) === JSON.stringify(user)){
            navigate("/countries")
        }else{
            alert("Wrong credentials!")
        }
    }

    return(
        <form onSubmit={login}>
            <input type="email" onChange={handleOnChange} placeholder="email" name="email" value={formData.email}/>
            <input type="password" onChange={handleOnChange} placeholder="password" name="password" value={formData.password}/>
            <input type="submit" value="login"/>
        </form>
    )
}