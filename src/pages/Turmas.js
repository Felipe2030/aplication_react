import React, {useState, useEffect} from "react";
import { getTurmas, deletarTurma } from "../services/turmaService";

const Turmas = () => {
    const [turmas, setTurmas] = useState([]);

    useEffect(() => {
        fetchTurmas();
    },[setTurmas])

    const fetchTurmas = async () => {
        try {
            const data = await getTurmas();
            setTurmas(data);
        } catch (error) { 
            console.error('Erro ao buscar turmas:', error); 
        }
    };

    const deleteTurmas = async (id) => {
        await deletarTurma(id);
        await fetchTurmas();
    }

    return (
       <>
        <div className="container">
            <div className="header">
                <span>Turmas</span>
                <button id="new">Cadastrar</button>
            </div>

            <div className="divTable">
                <table>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Descrição</th>
                        <th>Professor</th>
                        <th>Ativo</th>
                        <th className="acao">Editar</th>
                        <th className="acao">Excluir</th>
                    </tr>
                    </thead>
                    <tbody>
                        {turmas.map((turma) => (
                            <tr key={turma.id}>
                                <td>{turma.id}</td>
                                <td>{turma.descricao}</td>
                                <td>{turma.professor.nome}</td>
                                <td>{(turma.ativo) ? 'Sim' : 'Não'}</td>
                                <td className="acao"><a>Editar</a></td>
                                <td className="acao"><a onClick={() => deleteTurmas(turma.id)}>Excluir</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="modal-container">
                <div className="modal">
                    <form>
                        <label>Nome</label>
                        <input id="m-nome" type="text" required />
                
                        <label>Função</label>
                        <input id="m-funcao" type="text" required />
                
                        <label>Salário</label>
                        <input id="m-salario" type="number" required />
                        <button id="btnSalvar">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
       </>
    )
}

export default Turmas;