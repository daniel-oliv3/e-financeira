import styled from 'styled-components';

export const Container = styled.section`
    margin: 0px auto;
    width: 960px;
    max-width: 960px;
`;

export const ConteudoTitulo = styled.section`
    display: flex;
    justify-content: space-between;
`;

export const BotaoAcao = styled.section`
    margin: 5px;
`;

export const Titulo = styled.h1`
    font-size: 23px;
    font-family: sans-serif;
    margin: 10px 15px;
    color: #1d1e1e;
`;

export const AnteriorProximo = styled.section`
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #c1c1c1;
    padding-top: 15px;
`;

export const ButtonSuccess = styled.button`
    background-color: #fff;
    color: #198754;
    padding: 5px 8px;
    border: 1px solid #198754;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #198754;
        color: #fff;
    }
`;

export const ButtonPrimary = styled.button`
    background-color: #fff;
    color: #0d6efd;
    padding: 5px 8px;
    border: 1px solid #0d6efd;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
    :hover {
        background-color: #0d6efd;
        color: #fff;
    }
`;

export const Table = styled.table`
    margin-top: 15px;
    width: 100%;
    th {
        background-color: #007281;
        color: #f1f1f1;
        padding: 10px;
    }
    td {
        background-color: #f6f6f6;
        color: #3e3e3e;
        padding: 8px;
    }
`;

export const TextDanger = styled.span`
    color: #ec2121;
`;

export const TextSuccess = styled.span`
    color: #198754;
`;