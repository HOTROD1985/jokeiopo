function escolhaOponente() {
    const jokeipo = ["pedra", "papael", "tesoura"]
    let numeroAleatorio = Math.floor(math.random() * jokeipo.length)
    return jokeipo[numeroAleatorio]
}
escolhaOponente()