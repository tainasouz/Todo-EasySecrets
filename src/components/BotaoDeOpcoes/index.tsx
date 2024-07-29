// import { Container } from './styles';

import { useState } from "react";
import { ButtonWrapper, DropdownMenu, IconeButton } from "./styled";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removerTarefa } from "../../redux/todo/todoSlice";
import { abrirFormDialog } from "../../redux/formDialog/formDialogSlice";
import FormDialog from "../FormDialog";

interface IBotaoDeOpcoesProps {
  id: string;
}

const BotaoDeOpcoes = ({ id }: IBotaoDeOpcoesProps) => {
  const [exibirMenu, setExibirMenu] = useState(false);

  const dispatch = useDispatch();

  const toggleExibirMenu = () => {
    setExibirMenu(!exibirMenu);
  };

  return (
    <ButtonWrapper className={id}>
      <IconeButton onClick={toggleExibirMenu}>
        <BsThreeDotsVertical />
      </IconeButton>
      {exibirMenu && (
        <DropdownMenu exibir={exibirMenu}>
          <div onClick={() => dispatch(abrirFormDialog())}>Editar</div>
          <div onClick={() => dispatch(removerTarefa(id))}>Excluir</div>
        </DropdownMenu>
      )}
      <FormDialog id={id} />
    </ButtonWrapper>
  );
};

export default BotaoDeOpcoes;
