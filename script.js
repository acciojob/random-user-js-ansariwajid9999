const image = document.querySelector(".image")
const age = document.getElementById("age")
const email = document.getElementById("email")
const phone = document.getElementById("phone")
const getAnother = document.getElementById("getAnother")
const ParaName = document.getElementById("ParaName")
const displayInfo = document.getElementById("displayInfo")

async function getApi(){
    const apiUrl = "https://randomuser.me/api/"
    const response = await fetch(apiUrl)
    if(!response.ok){
        throw new Error("Could not fetch api data");
    }
    return await response.json()
}

async function Helper() {
    const response = await getApi()
    image.src = response.results[0].picture.large
    
    ParaName.textContent = response.results[0].name.first + " " + response.results[0].name.last

    age.onclick = () => {
        displayInfo.textContent = response.results[0].dob.age
    }
    email.onclick = () => {
        displayInfo.textContent = response.results[0].email
    }
    phone.onclick = () => {
        displayInfo.textContent = response.results[0].phone
    }
}
getAnother.onclick = () => {
    displayInfo.textContent = ""
    Helper()
}
Helper()