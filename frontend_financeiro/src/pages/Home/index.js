import React, { useEffect, useState } from 'react';

export const Home = () => {

const [data, setData] = useState([]);    

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

const listarExtrato = async e => {
    var valores = [
        {
            "id": 3,
            "nome": "Água",
            "valor": 347,
            "tipo": 1,
            "situacao": "Pago"
        },
        {
            "id": 2,
            "nome": "Luz",
            "valor": 347.68,
            "tipo": 1,
            "situacao": "Pendente"
        },
        {
            "id": 1,
            "nome": "Salário",
            "valor": 1100,
            "tipo": 3,
            "situacao": ""
        }
    ]
    setData(valores);
}

useEffect(() => {
    listarExtrato();
}, []);

    return (
        <div>
            <h1>Listar Situação Financeira</h1>
            <p>Ano atual: {dataView.ano}</p>
            <p>Mês atual: {dataView.mes}</p>
            <button type="button" onClick={() => anterior() }>Anterior</button>
            <button type="button" onClick={() => proximo() }>Proximo</button>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Tipo</th>
                        <th>Situação</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.nome}</td>
                            <td>{item.tipo === 1 ? <p>Pagamento</p>: <p>Recibido</p>}</td>
                            <td>{item.situacao}</td>
                            <td>{item.valor}</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>586.15</td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};