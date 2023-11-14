export default function getCountries(){
    return fetch("http://localhost:3000/country")
    .then(response => response.json())
    .then(data => data)
}