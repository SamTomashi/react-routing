import { useParams } from "react-router-dom"
export default function Country({countries}){

    const {id} = useParams()
    const country = countries.find(country => country.id === parseInt(id))


    return(
        <>
            { <h1>{country?.capital}</h1> }
        </>
    )
}