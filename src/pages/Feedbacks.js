import React from "react";

const Feedbacks = () => {
    return (
       <>
        <div className="container">
            <div className="header">
                <span>Feedbacks</span>
                <button id="new">Cadastrar</button>
            </div>

            <div className="divTable">
                <table>
                    <thead>
                    <tr>
                        <th>Feed</th>
                    </tr>
                    </thead>
                    <tbody>
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

export default Feedbacks;