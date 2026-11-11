export function textoValido(valor){
    return typeof valor === 'string' && valor.trim() !== ''
}

export function anoValido(valor){
    return typeof valor === 'number' && Number.isInteger(valor)
}

export function converterId(valor){
    const numero = Number(valor)
    if(!Number.isInteger(numero) || numero <= 0) return null
    return numero
}
