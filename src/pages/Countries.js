import { NavLink } from "react-router-dom"

export default function Countries({countries}){


    
    const li = countries.map((country)=> {

        return <li key={country.id}>
            <a href={'/countries/'+country.id}>{country.name}</a>
        </li>
    })

    return(
        <>
        <h1>Countries Page</h1>
        <ul>
            {li}
        </ul>
       
        </>
    )
}