const perfis = [{
    id: 1,
    nome: 'Comum'
},
{
    id: 2,
    nome: 'Administrador'
}]

const usuarios = [{
    id: 1,
    nome: 'Maria',
    email: 'maria@gmail.com',
    idade: 45,
    perfil_id: 1,
    status: 'ATIVO'
},
{
    id: 2,
    nome: 'Joao',
    email: 'joao@gmail.com',
    idade: 34,
    perfil_id: 2,
    status: 'INATIVO'
},
{
    id: 3,
    nome: 'Stephanie',
    email: 'stephanie@gmail.com',
    idade: 26,
    perfil_id: 1,
    status: 'BLOQUEADO'
}]

module.exports = { usuarios, perfis }