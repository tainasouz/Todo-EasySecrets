import { ChangeEvent, FormEvent, useState } from "react";
import {
  Background,
  Dialog,
  Titulo,
  Form,
  Input,
  TextArea,
  CloseButton,
} from "./styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fecharFormDialog } from "../../redux/formDialog/formDialogSlice";
import { editarTarefa } from "../../redux/todo/todoSlice";

interface IFormDialog {
  id: string;
  //   _titulo: string;
  //   _descricao?: string;
}

export default function FormDialog({ id }: IFormDialog) {
  const dispatch = useDispatch();
  const tarefa = useSelector((state: RootState) =>
    state.todo.tarefas.find((tarefa) => tarefa.id === id)
  );

  const [titulo, setTitulo] = useState(tarefa?.titulo || "");
  const [descricao, setDescricao] = useState(tarefa?.descricao || "");

  const isOpen = useSelector((state: RootState) => state.formDialog.abrirForm);

  const handleTituloChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitulo(e.target.value);
  };

  const handleDescricaoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescricao(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    dispatch(editarTarefa({ id, titulo, descricao }));
    setTitulo("");
    setDescricao("");
    dispatch(fecharFormDialog());
  };

  const handleClose = () => {
    dispatch(fecharFormDialog());
  };

  return (
    <>
      {isOpen && (
        <Background>
          <Dialog>
            <CloseButton onClick={handleClose}>&times;</CloseButton>
            <Titulo>Formulário de Diálogo</Titulo>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                placeholder="Título"
                value={titulo}
                onChange={handleTituloChange}
                required
              />
              <TextArea
                placeholder="Descrição (opcional)"
                value={descricao}
                onChange={handleDescricaoChange}
              />
              <button type="submit">Enviar</button>
            </Form>
          </Dialog>
        </Background>
      )}
    </>
  );
}
