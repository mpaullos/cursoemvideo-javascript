function tabuada() {
    let num = document.getElementById('nums')
    let tab = document.getElementById('seltab')

    if (num.value.length == 0) {
        window.alert('Por favor, insira um número!')
    } else {
        let n = Number(num.value)
        let cont = 1
        tab.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n * cont}`
            item.value = `tab${cont}`
            tab.appendChild(item)
            cont ++
        }

    }
}