// Trabalho em Equipe: Desenvolvimento de um Programa CLI em JavaScript
// Cliente: XYZ Solutions
// Tema: Sistema de Reservas de Salas de Reunião

// Descrição do Projeto:
// A XYZ Solutions deseja desenvolver um sistema de gerenciamento de reservas de
// salas de reunião em JavaScript para ser executado em linha de comando (CLI). O
// sistema deve permitir que os usuários criem, visualizem, editem e cancelem
// reservas de salas de reunião. Cada reserva deve conter informações como nome
// do solicitante, data, horário, sala desejada e finalidade da reunião.

console.log('Bem-vindo ao sistema de gerenciamento de reservas de salas de reunião da XYZ Solutions')
console.log('Aqui você pode criar, visualizar, editar e cancelar as salas de reunião')
console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
console.log('Para fazer uma reserva, digite RESERVAR')
console.log('Para visualizar as salas existentes, digite VISUALIZAR')
console.log('Para editar uma reserva, digite EDITAR')
console.log('Para cancelar uma reserva, digite CANCELAR')
console.log('Para reinicar o sistema, digite REINICIAR')
console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')


let listaDeSalas = ['Sala0','Sala1','Sala2','Sala3','Sala4','Sala5','Sala6','Sala7','Sala8','Sala9']
listaDeSalas[0]= {
    nomeDaSala: 'Sala 0',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[1]= {
    nomeDaSala: 'Sala 1',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[2]= {
    nomeDaSala: 'Sala 2',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[3]= {
    nomeDaSala: 'Sala 3',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[4]= {
    nomeDaSala: 'Sala 4',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[5]= {
    nomeDaSala: 'Sala 5',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[6]= {
    nomeDaSala: 'Sala 6',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[7]= {
    nomeDaSala: 'Sala 7',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[8]= {
    nomeDaSala: 'Sala 8',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}
listaDeSalas[9]= {
    nomeDaSala: 'Sala 9',
    nome: null,
    data: null,
    horario: null,
    finalidade: null,
}

function reservarSala(nome,data,horario,finalidade,salaEscolhida){
    console.log('Essas são as salas disponíveis:')
    if (listaDeSalas[0].nome === null){
        console.log(listaDeSalas[0].nomeDaSala)
    }if (listaDeSalas[1].nome === null){
        console.log(listaDeSalas[1].nomeDaSala)
    }if (listaDeSalas[2].nome === null){
        console.log(listaDeSalas[2].nomeDaSala)
    }if (listaDeSalas[3].nome === null){
        console.log(listaDeSalas[3].nomeDaSala)
    }if (listaDeSalas[4].nome === null){
        console.log(listaDeSalas[4].nomeDaSala)
    }if (listaDeSalas[5].nome === null){
        console.log(listaDeSalas[5].nomeDaSala)
    }if (listaDeSalas[6].nome === null){
        console.log(listaDeSalas[6].nomeDaSala)
    }if (listaDeSalas[7].nome === null){
        console.log(listaDeSalas[7].nomeDaSala)
    }if (listaDeSalas[8].nome === null){
        console.log(listaDeSalas[8].nomeDaSala)
    }if (listaDeSalas[9].nome === null){
        console.log(listaDeSalas[9].nomeDaSala)
    }
    salaEscolhida = Number(prompt('Digite o número da sala de preferência'))
    switch (salaEscolhida){
        case 0:
            listaDeSalas[0].nome = prompt('Qual o seu nome?')
            listaDeSalas[0].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[0].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[0].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[0])
            break;
        case 1:
            listaDeSalas[1].nome = prompt('Qual o seu nome?')
            listaDeSalas[1].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[1].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[1].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[1])
            break;
        case 2:
            listaDeSalas[2].nome = prompt('Qual o seu nome?')
            listaDeSalas[2].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[2].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[2].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[2])
            break;
        default:
            console.log('Sala inválida')
            break;
    
    }
} 


let acaoDoUsuario = prompt('Digite sua Ação')

if (acaoDoUsuario==='RESERVAR'){
    reservarSala()
}


// nome do solicitante, data, horário, sala desejada e finalidade da reunião

// function reservarSala(nome,data,horario,finalidade){

//    nome = prompt('Qual o seu nome?')
//    data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
//  horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
//  finalidade = prompt('Qual a finalidade da sua reunião?')

