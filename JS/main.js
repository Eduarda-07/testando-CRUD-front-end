'use strict'

import { getContatos } from "./contatos.js"
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

carregarCards()
document.getElementById('nome-contato')
    .addEventListener('keydown', carregarPesquisa)