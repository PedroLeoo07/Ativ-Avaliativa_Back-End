//Importando o modelo de jogador
const jogadorModel = require('../models/jogadorModel');

const getAllJogadores = async (req,res) => {
    try {
        const jogadores = await jogadorModel.getJogadores();
        res.status(200).json(jogadores);
    } catch (error) {  
        res.status(404).json({message: "Erro ao buscar jogadores"});   
    }
};

const getJogador = async (req,res) => {
    try {
        const jogador = await jogadorModel.getJogador(req.params.id);
        res.status(200).json(jogador);
    } catch (error) {
        res.status(404).json({message: "Erro ao buscar jogador"});
    }
};

const createJogador = async (req,res) => {
    try {
        const { name, idade, gols, time_id } = req.body;
        const photo = req.file ? req.file.filename : null;
        const newjogador = await jogadorModel.createJogador(name, idade, gols, time_id, photo);
        res.status(201).json(newjogador);
    } catch (error) {
	 console.log(error);
        if (error.code === "23505") { // Código de erro do PostgreSQL para chave única violada
            return res.status(400).json({ message: "Jogador já cadastrado." });
        }
        res.status(500).json({ message: "Erro ao criar jogador." });
    }
};

const updateJogador = async (req, res) => {
    try {
        const { name, idade, gols, photo } = req.body;
        const updatedJogador = await jogadorModel.updateJogador(req.params.id, name, idade, gols, photo);
        if (!updatedJogador) {
            return res.status(404).json({ message: "Jogador não encontrado." });
        }
        res.json(updatedJogador);
    } catch (error) {
        res.status(500).json({ message: "Erro ao atualizar jogador." });
    }
};

const deleteJogador = async (req, res) => {
    try {
        const message = await jogadorModel.deleteJogador(req.params.id);
        res.json(message);
    } catch (error) {
        res.status(500).json({ message: "Erro ao deletar jogador." });
    }
};


module.exports = { getAllJogadores, getJogador, createJogador, updateJogador, deleteJogador };