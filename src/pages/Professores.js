import React, { useEffect, useState } from "react";
import FormularioCadastroEdicao from "../components/FormularioCadastroEdicaoProfessores";
import {
  getProfessores,
  deletarProfessor,
  criarProfessor,
  atualizarProfessor,
} from "../services/professorService";

const Professores = () => {
  const [professores, setProfessores] = useState([]);
  const [modalAberto, setModalAberto] = useState(false);
  const [dadosEdicao, setDadosEdicao] = useState(null);

  useEffect(() => {
    fetchProfessores();
  }, []);

  const handleAbrirModal = () => {
    setModalAberto(true);
  };

  const handleFecharModal = () => {
    setModalAberto(false);
    setDadosEdicao(null);
  };

  const handleEditarItem = (dadosItem) => {
    setDadosEdicao(dadosItem);
    setModalAberto(true);
  };

  const handleFormSubmit = async (dadosFormulario, id) => {
    if (id) {
      await atualizarProfessor(id, dadosFormulario);
    } else {
      await criarProfessor(dadosFormulario);
    }
    await fetchProfessores();
    handleFecharModal();
  };

  const fetchProfessores = async () => {
    try {
      const data = await getProfessores();
      setProfessores(data);
    } catch (error) {
      console.error('Erro ao buscar professores:', error);
    }
  };

  const deleteProfessor = async (id) => {
    await deletarProfessor(id);
    await fetchProfessores();
  };

  return (
    <>
      <div className="container">
        <div className="header">
          <span>Professores</span>
          <button id="new" onClick={handleAbrirModal}>
            Cadastrar
          </button>
        </div>

        <div className="divTable">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Idade</th>
                <th>Matéria</th>
                <th>Observações</th>
                <th className="acao"></th>
                <th className="acao"></th>
              </tr>
            </thead>
            <tbody>
              {professores.map((professor) => (
                <tr key={professor.id}>
                  <td>{professor.id}</td>
                  <td>{professor.nome}</td>
                  <td>{professor.idade}</td>
                  <td>{professor.materia}</td>
                  <td>{professor.observacoes}</td>
                  <td className="acao">
                    <a onClick={() => handleEditarItem(professor)}>Editar</a>
                  </td>
                  <td className="acao">
                    <a onClick={() => deleteProfessor(professor.id)}>Excluir</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {modalAberto && (
          <FormularioCadastroEdicao
            modo={dadosEdicao ? 'editar' : 'cadastro'}
            dadosIniciais={dadosEdicao}
            onSubmit={handleFormSubmit}
            onClose={handleFecharModal}
          />
        )}
      </div>
    </>
  );
};

export default Professores;
