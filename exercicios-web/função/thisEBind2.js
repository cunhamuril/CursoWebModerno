function Pessoa(){
    this.idade = 0

    const proprio = this

    setInterval(function(){
        proprio.idade++
        console.log(proprio.idade)
    }/*.bind(this)*/, 1000)
}

new Pessoa