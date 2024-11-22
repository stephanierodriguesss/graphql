const { usuarios, perfis } = require('../data/db')

module.exports = {
    ola() {
        return 'Primeiro teste GraphQL'
    },
    horaAtual(){
        const date = new Date()   
        return `${date.getHours().toString()}H ${date.getMinutes().toString()}M ${date.getSeconds().toString()}S`
    },
    usuarioLogado(){
        return {
            id: 0,
            nome: 'Stephanie Rodrigues',
            email: 'stephanie@hotmail.com',
            idade: 26,
            salario_real: 100000000000.00,
            vip: true    
        }
    },
    produtoEmDestaque(){
        return {
            nome: 'Notebook',
            preco: 4000.00,
            desconto: 0.15
        }
    },
    numerosMegaSena(){
        const crescente = (a, b) => a - b
        return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crescente)
    },
    usuarios(){
        return usuarios
    },
    usuario(_,{id}){
       const selecionados = usuarios.filter(u => u.id == id)   
       return selecionados ? selecionados[0] : null  
    },
    perfis() {
        return perfis
    },
    perfil(_, {id}){
        const perfil = perfis.filter(p => p.id == id)
        return perfil ? perfil[0] : null
    }
}