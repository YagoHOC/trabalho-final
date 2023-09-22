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
for (let i = 0; i <= 10; i++) {
    listaDeSalas[i]= {
        nomeDaSala: 'Sala '+i,
        nome: null,
        data: null,
        horario: null,
        finalidade: null,
    }
}

function  visualizarSalas(){
    console.log('Essas são as salas disponíveis:')
for (let i = 0; i < 10; i++) {
    if (listaDeSalas[i].nome === null){
        console.log(listaDeSalas[i].nomeDaSala)
    }

}funcaoDaAcao()
}

function reservarSala(salaEscolhida){
    visualizarSalas()
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
        case 3:
            listaDeSalas[3].nome = prompt('Qual o seu nome?')
            listaDeSalas[3].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[3].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[3].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[3])
            break;
        case 4:
            listaDeSalas[4].nome = prompt('Qual o seu nome?')
            listaDeSalas[4].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[4].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[4].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[4])
            break;
        case 5:
            listaDeSalas[5].nome = prompt('Qual o seu nome?')
            listaDeSalas[5].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[5].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[5].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[5])
            break;
        case 6:
            listaDeSalas[6].nome = prompt('Qual o seu nome?')
            listaDeSalas[6].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[6].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[6].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[6])
            break;
        case 7:
            listaDeSalas[7].nome = prompt('Qual o seu nome?')
            listaDeSalas[7].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[7].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[7].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[7])
            break;
        case 8:
            listaDeSalas[8].nome = prompt('Qual o seu nome?')
            listaDeSalas[8].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[8].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[8].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[8])
            break;
        case 9:
            listaDeSalas[9].nome = prompt('Qual o seu nome?')
            listaDeSalas[9].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[9].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[9].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log(listaDeSalas[9])
            break;
        default:
            console.log('Sala inválida')
            break;
    
    }
} 

function editarReserva(){

}
function cancelarReserva(){

}


function funcaoDaAcao(){
    let acaoDoUsuario = prompt('Digite sua Ação')
switch (acaoDoUsuario){
    case 'RESERVAR':
        reservarSala()
        break;
    case 'VISUALIZAR':
        visualizarSalas()
        break;
    case 'EDITAR':
        editarReserva()
        break;
    case 'CANCELAR':
        cancelarReserva()
        break;
    default:
        break;
}

}

funcaoDaAcao()

// nome do solicitante, data, horário, sala desejada e finalidade da reunião

// function reservarSala(nome,data,horario,finalidade){

//    nome = prompt('Qual o seu nome?')
//    data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
//  horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
//  finalidade = prompt('Qual a finalidade da sua reunião?')

