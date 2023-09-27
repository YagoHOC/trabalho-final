// Trabalho em Equipe: Desenvolvimento de um Programa CLI em JavaScript
// Cliente: XYZ Solutions
// Tema: Sistema de Reservas de Salas de Reunião
// Descrição do Projeto:
// A XYZ Solutions deseja desenvolver um sistema de gerenciamento de reservas de
// salas de reunião em JavaScript para ser executado em linha de comando (CLI). O
// sistema deve permitir que os usuários criem, visualizem, editem e cancelem
// reservas de salas de reunião. Cada reserva deve conter informações como nome
// do solicitante, data, horário, sala desejada e finalidade da reunião.

// Feito por Pedro Costa e Yago da Cruz
// Projeto idealizado no curso de Introdução ao desenvolvimento com JavaScript no SenacRS

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

} console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
}

function reservarSala(salaEscolhida){
    visualizarSalas()
    salaEscolhida = Number(prompt('Digite o número da sala de preferência'))
    if (salaEscolhida <= 9 && salaEscolhida >= 0 && listaDeSalas[salaEscolhida].nome === null){
            listaDeSalas[salaEscolhida].nome = prompt('Qual o seu nome?')
            listaDeSalas[salaEscolhida].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
            listaDeSalas[salaEscolhida].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
            listaDeSalas[salaEscolhida].finalidade = prompt('Qual a finalidade da sua reunião?')
            console.log('A '+listaDeSalas[salaEscolhida].nomeDaSala+' foi reservada para '+listaDeSalas[salaEscolhida].nome+' no dia '+listaDeSalas[salaEscolhida].data+' ás '+listaDeSalas[salaEscolhida].horario+' com a finalidade: '+listaDeSalas[salaEscolhida].finalidade)
            console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
            exibirMenu()
            funcaoDaAcao()
}else{
    console.log('Opção inválida, por favor digite uma sala existente e livre')
    console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
    reservarSala()
}
} 

function editarReserva(){
    console.log('Essas são as salas reservadas:')
    for (let i = 0; i < 10; i++) {
        if (listaDeSalas[i].nome !== null){
            console.log(listaDeSalas[i].nomeDaSala)
        }
    } console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
    salaEscolhida = Number(prompt('Digite o número da sala de preferência para modificação'))
    if (salaEscolhida <= 9 && salaEscolhida >= 0 && listaDeSalas[salaEscolhida].nome !== null){
        console.log('A '+listaDeSalas[salaEscolhida].nomeDaSala+' havia sido reservada para '+listaDeSalas[salaEscolhida].nome+' no dia '+listaDeSalas[salaEscolhida].data+' ás '+listaDeSalas[salaEscolhida].horario+' com a finalidade: '+listaDeSalas[salaEscolhida].finalidade)
        console.log('Insira os novos dados para modificação')
        console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
        listaDeSalas[salaEscolhida].nome = prompt('Qual o seu nome?')
        listaDeSalas[salaEscolhida].data = prompt('Qual dia ocorrerá a reunião? (Use o formato dd/mm)')
        listaDeSalas[salaEscolhida].horario = prompt('Qual horário ocorrerá a reunião? (Use o formato hr:mn')
        listaDeSalas[salaEscolhida].finalidade = prompt('Qual a finalidade da sua reunião?')
        console.log('A '+listaDeSalas[salaEscolhida].nomeDaSala+' foi modificada e reservada para '+listaDeSalas[salaEscolhida].nome+' no dia '+listaDeSalas[salaEscolhida].data+' ás '+listaDeSalas[salaEscolhida].horario+' com a finalidade: '+listaDeSalas[salaEscolhida].finalidade)
        console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
            exibirMenu()
            funcaoDaAcao()
}else{
    console.log('Opção inválida, por favor, verifique se existem salas reservadas e digite um número válido')
    console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
}


}


function cancelarReserva(){
    console.log('Essas são as salas reservadas:')
    for (let i = 0; i < 10; i++) {
        if (listaDeSalas[i].nome !== null){
            console.log(listaDeSalas[i].nomeDaSala)
        }
    } console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
    salaEscolhida = Number(prompt('Digite o número da sala de preferência para cancelamento'))
    if (salaEscolhida <= 9 && salaEscolhida >= 0 && listaDeSalas[salaEscolhida].nome !== null){
            listaDeSalas[salaEscolhida].nome = null
            listaDeSalas[salaEscolhida].data = null
            listaDeSalas[salaEscolhida].horario = null
            listaDeSalas[salaEscolhida].finalidade = null
            console.log('A reserva da '+listaDeSalas[salaEscolhida].nomeDaSala+' foi cancelada')
            console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
            exibirMenu()
            funcaoDaAcao()
}else{
    console.log('Opção inválida, por favor, verifique se existem salas reservadas e digite um número válido')
    console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
}
    }

function exibirMenu(){
    console.log('Para fazer uma reserva, digite RESERVAR')
    console.log('Para visualizar as salas existentes, digite VISUALIZAR')
    console.log('Para editar uma reserva, digite EDITAR')
    console.log('Para cancelar uma reserva, digite CANCELAR')
    console.log('Para fechar o sistema, digite FECHAR')
    console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
}

function funcaoDaAcao(){
    let acaoDoUsuario = prompt('Digite sua Ação').toUpperCase()
    switch (acaoDoUsuario){
        case 'RESERVAR':
            reservarSala()
            break;
        case 'VISUALIZAR':
            visualizarSalas()
            exibirMenu()
            funcaoDaAcao()
            break;
        case 'EDITAR':
            editarReserva()
            exibirMenu()
            funcaoDaAcao()
            break;
        case 'CANCELAR':
            cancelarReserva()
            exibirMenu()
            funcaoDaAcao()
            break;
        case 'FECHAR':
            console.log('Até logo :D ')
            break;
        default:
            console.log('Opção inválida, por favor digite um comando existente')
            console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
            exibirMenu()
            funcaoDaAcao()
            break;
}    
}


console.log('Bem-vindo ao sistema de gerenciamento de reservas de salas de reunião da XYZ Solutions')
console.log('Aqui você pode criar, visualizar, editar e cancelar as salas de reunião')
console.log('-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-')
exibirMenu()
funcaoDaAcao()
