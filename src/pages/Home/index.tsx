import Header from "../../components/Header";
import ListaTarefas from "../../components/ListaTarefas";
import NovaTarefa from "../../components/NovaTarefa";
import { StyledConteinerTodo } from "./styles";

export default function Home() {
  return (
    <>
      <StyledConteinerTodo>
        <Header />
        <NovaTarefa />
        <ListaTarefas />
      </StyledConteinerTodo>
    </>
  );
}
