import { NavLink } from "react-router-dom"

export default function Countries({countries}){


    const countriesLinks =countries.map(country => 
    <li key={country.id}>
        <NavLink to={'/countries/' + country.id}>{country.name}</NavLink>
    </li>)

    return(
        <>
        <h1>Countries Page</h1>
       <ul>
       {countriesLinks}
       </ul>
        </>
    )
}