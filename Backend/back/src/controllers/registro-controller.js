const Registro = require("../models/registro-model");
const RegistroService = require("../services/registro-service");

var registroService = new RegistroService();

exports.getAll = (req,res) =>{
    res.json(registroService.getAll());
};

exports.post = (req,res) =>{
    res.json(registroService.post(new Registro(req.body.nomeF, req.body.cargo, req.body.dataN, req.body.dataEntrada )));
};
exports.getById = (req,res) =>{
    const {idRegistro} = req.params;
    res.json(registroService.getById(idRegistro));
};
exports.getByOffice = (req,res) =>{
    const {office} = req.params;
    res.json(registroService.getByOffice(office));

};
exports.getByQuantity = (req,res) =>{
    const {quantity} = req.params;
    res.json(registroService.getByQuantity(quantity));
};
exports.put = (req,res) =>{
    const {idRegistro} = req.params;
    res.json(registroService.put(new Registro(req.body.nomeF, req.body.cargo, req.body.dataN, req.body.dataEntrada )));
};
exports.delete = (req,res) =>{
    const {idRegistro} = req.params;
    res.json(registroService.delete(idRegistro));
};