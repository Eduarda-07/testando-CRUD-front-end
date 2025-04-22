'use strict'

// function teste (){
//     alert("OI!")
// }



export async function getContatosPorNome(nome){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos?nome_like=^${nome}`
    console.log(url); 
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data
}

export async function getContatos(){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos` 
    const response = await fetch(url)
    const data = await response.json()

    console.log(data)
    return data
}

async function postContato(contato){
    const url = "https://bakcend-fecaf-render.onrender.com/contatos" 
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)


    // se daer tudo certo retorna ok se der erro volta false
    return response.ok
}

async function putContato(contato, id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}` 

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(contato)
    }
    const response = await fetch(url, options)


    // se daer tudo certo retorna ok se der erro volta false
    return response.ok

}

async function  deleteContato(id){
    const url = `https://bakcend-fecaf-render.onrender.com/contatos/${id}` 

    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)


    // se daer tudo certo retorna ok se der erro volta false
    return response.ok

}


const contatoTeste = {
"nome": "Eduarda Silva",
"celular": "11 9 555555555",
"foto": "../img/eduarda.png",
"email": "eduarda@gmail.com",
"endereco": "Av. São Joaquim, 234",
"cidade": "Sorocaba"
}


