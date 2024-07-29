import { ChangeEvent, FormEvent, useState } from "react";
import {
  ButtonFormNovaTarefa,
  Form,
  Input,
  CriarTarefaButton,
  TextArea,
} from "./styled";
import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addTarefa } from "../../redux/todo/todoSlice";

const gerarIdUnico = () => {
  return "_" + Math.random().toString(36).substring(2, 9);
};

export default function NovaTarefa() {
  const [exibirForm, setExibirForm] = useState(false);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const dispatch = useDispatch();

  const handletituloChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitulo(e.target.value);
  };
  const handleDescricaoChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setDescricao(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(
      addTarefa({ id: gerarIdUnico(), titulo, descricao, complete: false })
    );
    setTitulo("");
    setDescricao("");
    setExibirForm(false);
  };

  return (
    <div>
      <ButtonFormNovaTarefa onClick={() => setExibirForm(!exibirForm)}>
        <FiPlus color="#414141" fontSize={20} />
        <h2>Nova Tarefa </h2>
      </ButtonFormNovaTarefa>
      {exibirForm ? (
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Título"
            value={titulo}
            onChange={handletituloChange}
            required
          />
          <TextArea
            placeholder="Descrição (opcional)"
            value={descricao}
            onChange={handleDescricaoChange}
          />
          <CriarTarefaButton type="submit">Adicionar Tarefa</CriarTarefaButton>
        </Form>
      ) : null}
    </div>
  );
}
