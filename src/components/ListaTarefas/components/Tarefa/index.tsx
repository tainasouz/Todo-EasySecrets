import {
  DescricaoTarefa,
  CheckboxWrapper,
  ContainerInfosTarefa,
  Label,
  ContainerTarefa,
} from "./styled";
import { Checkbox } from "@mui/material";

import BotaoDeOpcoes from "../../../BotaoDeOpcoes";
import { useDispatch } from "react-redux";
import { checkTarefa } from "../../../../redux/todo/todoSlice";

interface ITarefa {
  id: string;
  titulo: string;
  descricao?: string;
  complete: boolean;
}

export default function Tarefa({ id, titulo, descricao, complete }: ITarefa) {
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(checkTarefa(id));
  };

  return (
    <ContainerTarefa className={id}>
      <ContainerInfosTarefa>
        <CheckboxWrapper>
          <Checkbox
            checked={complete}
            onChange={handleChange}
            sx={{
              padding: 0,
              "& .MuiSvgIcon-root": {
                fontSize: 20,
              },
              color: "#656565",
              "&.Mui-checked": {
                color: "#101010",
              },
            }}
          />
          {complete ? (
            <Label style={{ textDecoration: "line-through" }}>{titulo}</Label>
          ) : (
            <Label>{titulo}</Label>
          )}
        </CheckboxWrapper>
        <DescricaoTarefa>{descricao}</DescricaoTarefa>
      </ContainerInfosTarefa>
      <BotaoDeOpcoes id={id} />
    </ContainerTarefa>
  );
}
