export default function Footer(props){


    props.updateCountry("Tanzania")
    const username = "Joseph"
    const city = "Nairobi"
    
    props.getCityAndUsername({ username, city})
    return(
        <>
        </>
    )
}