import React, {useState, useEffect} from "react";
import { getAlunos } from "../services/alunoService";

const Alunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        const fetchAlunos = async () => {
            try {
                const data = await getAlunos();
                setAlunos(data);
            } catch (error) {
                console.error('Erro ao buscar alunos:', error);
            }
        };
    
        fetchAlunos();
    },[setAlunos])

    return (
       <>
        <div className="container">
            <div className="header">
                <span>Alunos</span>
                <button id="new">Cadastrar</button>
            </div>

            <div className="divTable">
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Idade</th>
                            <th>Turma</th>
                            <th>Data de nascimento</th>
                            <th>Nota do primeiro semestre</th>
                            <th>Nota do segundo semestre</th>
                            <th>Media final</th>
                            <th className="acao">Editar</th>
                            <th className="acao">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        {alunos.map((aluno) => (
                            <tr key={aluno.id}>
                                <td>{aluno.id}</td>
                                <td className="acao">Editar</td>
                                <td className="acao">Excluir</td>
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
                
                        <label>Idade</label>
                        <input id="m-funcao" type="number" required />
                
                        <label>Turma</label>
                        <input id="m-salario" type="number" required />
                        <button id="btnSalvar">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
       </>
    )
}

export default Alunos;