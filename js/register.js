const PrimeiroNomeInput = document.querySelector("#c-nome")

PrimeiroNome.addEventListener("input", ()=>{
    const primeiroNome = PrimeiroNomeInput.value.trim()
    const mensagemErro = document.querySelector("primeiroNome-erro")

    if (primeiroNome.length < 5) {
        PrimeiroNomeInput.classList.add("erro")
        mensagemErro.innerHTML = "O primeiro nome deve conter ao menos 5 caracteres"
    }else {
        PrimeiroNomeInput.classList.remove("erro")
        mensagemErro.innerHTML = ""
    }
})