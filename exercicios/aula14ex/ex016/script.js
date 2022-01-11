function contar() {
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resposta = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert("Atenção falta dados!")
    } else {
        resposta.innerHTML = 'Contando: <br>' 
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0) {
            window.alert('Impossível Contar, mudando o valor do Passo para -> 1')
            p = 1
        }

        if (i < f) {
            for (let c = i; c <= f; c += p) {
                resposta.innerHTML += `${c} \u{1f449} `
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                resposta.innerHTML += `${c} \u{1f449} `
            }
        }
        resposta.innerHTML += `\u{1f3c1}`
    }
    
}