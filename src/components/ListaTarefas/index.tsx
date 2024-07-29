import Tarefa from "./components/Tarefa";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function ListaTarefas() {
  const tarefas = useSelector((state: RootState) => state.todo.tarefas);

  return (
    <>
      {tarefas.map((tarefa) => (
        <Tarefa
          key={tarefa.id}
          id={tarefa.id}
          titulo={tarefa.titulo}
          descricao={tarefa.descricao}
          complete={tarefa.complete}
        />
      ))}
    </>
  );
}

export default ListaTarefas;
