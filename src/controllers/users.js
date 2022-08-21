const knex = require('../connection');

const listar = async (req, res) =>{
    try {
        const users = await knex('usuarios');
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno: ${error.message}`});
    }    
};

const obter = async (req, res) =>{
    const {id} = req.params;
    try {
        const usuario = await knex('usuarios').where({id}).first();
        
        if(!usuario){
            return res.status(404).json({mensagem: 'Usuário não encontrado'});
        }


        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno: ${error.message}`});
    }
};

const cadastrar = async (req, res) =>{
    const{nome, email, senha} = req.body;

    if (!nome){
        return res.status(404).json({mensagem: 'O campo nome é obrigatório'});
    }
    if (!email){
        return res.status(404).json({mensagem: 'O campo email é obrigatório'});
    }
    if (!senha){
        return res.status(404).json({mensagem: 'O campo senha é obrigatório'});
    }

    try {
        const usuario = await knex('usuarios')
        .insert({nome, email, senha})
        .returning('*');

        if(usuario.lenght <= 0){
            return res.status(400).json({mensagem: 'Não foi possiveo atualizar o usuário'});
        }

        return res.status(201).json(usuario[0]);

    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno: ${error.message}`});
    }
};

const atualizar = async (req, res) =>{
    const{nome, email, senha} = req.body;
    const {id} = req.params;
    //com o knex não precisar fazer as valiações acima, pois ele faz isso
    try {
        const usuarioExiste = await knex('usuarios').where({id}).first();

        if (!usuarioExiste){
            return res.status(404).json({mensagem: 'Usuário não encontrado'});
        }

        const usuario = await knex('usuarios')
        .update({nome, email, senha})
        .where({id});

        if(!usuario){
            return res.status(400).json({mensagem: 'Não foi possivel atualizar o usuário'});
        }

        return res.status(200).json({mensagem: 'Atualizado com sucesso!'});

    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno: ${error.message}`});
    }

};

const excluir = async (req, res) =>{
    const {id} = req.params;

    try {
        const usuarioExiste = await knex('usuarios').where({id}).first();

        if (!usuarioExiste){
            return res.status(404).json({mensagem: 'Usuário não encontrado'});
        }

        const usuario = await knex('usuarios')
        .del()
        .where({id});

        if(!usuario){
            return res.status(400).json({mensagem: 'Não foi possivel excluir o usuário'});
        }


        return res.status(200).json({mensagem: 'Usuario excluido com sucesso!'});
    } catch (error) {
        return res.status(500).json({mensagem: `Erro interno: ${error.message}`});
    }
};

module.exports = {
    listar,
    obter,
    cadastrar,
    atualizar,
    excluir
}