import { IoSearch } from "react-icons/io5";
import { ContainerBusca, Input } from "./styles";

export default function Busca() {
  return (
    <ContainerBusca>
      <Input placeholder="Pesquisar tarefa" />
      <IoSearch fontSize={20} color="#656565" />
    </ContainerBusca>
  );
}
