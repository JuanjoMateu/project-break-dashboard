function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()-_=+";
    if (length < 12) {
        alert("La longitud mínima de la contraseña debe ser 12 caracteres.");
        return;
    }
    let password = "";
    let allChars = uppercaseChars + lowercaseChars + numberChars + symbolChars;
    password += getRandomChar(uppercaseChars);
    password += getRandomChar(lowercaseChars);
    password += getRandomChar(numberChars);
    password += getRandomChar(symbolChars);
    for (let i = password.length; i < length; i++) {
        password += getRandomChar(allChars);
    }
    document.getElementById('passwordResult').innerText = "Contraseña generada: " + password;
}

function getRandomChar(characters) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    return characters.charAt(randomIndex);
}
