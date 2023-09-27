#  Trabalho Final Senac RS
## Curso de introdução ao desenvolvimento com JavaScript 

- **Trabalho em Equipe:** Desenvolvimento de um Programa CLI em JavaScript

- **Cliente:** XYZ Solutions

- **Tema:** Sistema de Reservas de Salas de Reunião 

- **Descrição do Projeto:**
A XYZ Solutions deseja desenvolver um sistema de gerenciamento de reservas de
salas de reunião em JavaScript para ser executado em linha de comando (CLI). O
sistema deve permitir que os usuários criem, visualizem, editem e cancelem
reservas de salas de reunião. Cada reserva deve conter informações como nome
do solicitante, data, horário, sala desejada e finalidade da reunião.

- **Descrição do projeto:**  
Ao todo teremos 9 salas, onde o usuário podera escolher e reservar a sala de sua escolha, também como visualizar, editar e cancelar salas já reservadas.
Toda sala armazena o nome do reservante, para qual horário, qual dia e a finalidade escolhida.

- **descrição detalhada**
  Criamos uma variavel chamada "lista de salas", que contém um array com 9 salas pré-existentes e as informações exigidas também pré-preenchidas com o valor null.
  Após isso criamos uma função na qual , permite que o usuario vizualize as salas disponiveis, através de um for loop que verifica se o valor nome da sala é null, se esse for o caso, a 
  sala será descrita como disponível e impressa o seu respectivo número.
  Junto disso criamos outra função que permite o usuario reservar salas , armazenando seus dados através de user inputs em uma sala por vez.
  Também em outra funcão é possível cancelar as salas já reservadas, revertendo seus atributos para null novamente.
  E na última função ocorre a edição de salas, que é basicamente igual a de reservar porém com uma verificação se a sala já estava reservada anteriormente.
  Por fim, o comando de sair permite fechar o sistema.
  

- **Autores**
 Pedro Henrique Leite da Costa
 Yago Henrique Oliveira da Cruz
