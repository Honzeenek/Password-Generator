const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const passwordLength = 12
let generatedPasswordOne;
let generatedPasswordTwo;
let renderPass1 = document.getElementById("password1")
let renderPass2 = document.getElementById("password2")

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length) // generuje random číslo které určí pozici
    return characters[randomChar] // vybere pozici kterou vybere let RandomChar, (číslo které vznikne pomocí randomChar se dosadí do [] a to pak určí pozici)
} 

function generatePassword () {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {// loop kterej 12x(password.lenght) vybere náhodnej znak z characters
    password += getRandomCharacter() // k variable password přidává po jednom znaky dokud jich nebude 12(password.length) a to vytvoří to heslo
    }
    return password
}


function renderPasswords() {
    renderPass1.textContent = generatePassword()
    renderPass2.textContent = generatePassword()
    renderPass1.addEventListener("click", () => copyToClipboard(generatedPasswordOne));
    renderPass2.addEventListener("click", () => copyToClipboard(generatedPasswordTwo));
}

