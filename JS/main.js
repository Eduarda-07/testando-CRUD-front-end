'use strict'

import { getContatos, postContato } from "./contatos.js"
import { getContatosPorNome } from "./contatos.js"

function criarCard(contatos){
    const container = document.getElementById('container')
    const card = document.createElement('div')
    card.classList.add('card-contato')
    console.log(contatos)
    card.innerHTML = `
                    <img src= "${contatos.foto}" alt="avatar">
                    <h2> ${contatos.nome} </h2>
                    <p> ${contatos.celular} </p>
    `
    container.appendChild(card)
}

async function carregarCards(){
    const contatos = await getContatos()
    // console.log(contatos)

    contatos.forEach(criarCard)
}

async function carregarPesquisa(evento){
    const container = document.getElementById('container')
    if(evento.key == 'Enter'){
        const contatos = await getContatosPorNome(evento.target.value)
        container.replaceChildren()
        contatos.forEach(criarCard)

    }
}

function novoContato(){
    document.querySelector('main').className = 'form-show'
}

function cancelar(){
    document.querySelector('main').className = 'card-show'
}

function salvarContato(){
    const form = document.querySelector('form')
    if(form.reportValidity() == false){
        return
    }
    const contato = {
                    "nome": document.getElementById('nome').value,
                    "celular": document.getElementById('celular').value,
                    "foto": document.getElementById('foto').value,
                    "email": document.getElementById('email').value,
                    "endereco": document.getElementById('endereco').value,
                    "cidade": document.getElementById('cidade').value
                    }
    postContato(contato)

    if (postContato(contato)){
        alert ('cadastrado com sucesso')
        carregarCards()
        cancelar()
    }

}
   

carregarCards()
document.getElementById('nome-contato')
    .addEventListener('keydown', carregarPesquisa)

document.getElementById('novo-contato')
    .addEventListener('click', novoContato)

document.getElementById('cancelar')
    .addEventListener('click', cancelar)

document.getElementById('salvar')
    .addEventListener('click', salvarContato)