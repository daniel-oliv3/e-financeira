import React, { useState } from 'react';

export const Home = () => {

var dataAtual = new Date();
var ano = dataAtual.getFullYear();
var mes = dataAtual.getMonth() + 1;
//console.log(mes + "/" + ano);

const [dataView, setDataView] = useState({
    ano,
    mes
});

const anterior = async () => {
    if(dataView.mes === 1){
        setDataView({
            ano: dataView.ano - 1,
            mes: 12
        });
    }else{
        setDataView({
            ano: dataView.ano,
            mes: dataView.mes - 1
        });
    }
};

const proximo = async () => {
    if(dataView.mes === 12){
        setDataView({
            ano: dataView.ano + 1,
            mes: 1
        });
    }else{
        setDataView({
            ano: dataView.ano,
            mes: dataView.mes + 1
        });
    }
};

    return (
        <div>
            <h1>Listar Situação Financeira</h1>
            <p>Ano atual: {dataView.ano}</p>
            <p>Mês atual: {dataView.mes}</p>
            <button type="button" onClick={() => anterior() }>Anterior</button>
            <button type="button" onClick={() => proximo() }>Proximo</button>
        </div>
    );
};