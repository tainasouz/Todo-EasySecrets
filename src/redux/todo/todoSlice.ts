import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodoState, ITarefa, IEditTarefa } from "../../types/types";

const initialState: ITodoState = {
  tarefas: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTarefa(state, action: PayloadAction<ITarefa>) {
      state.tarefas.unshift(action.payload);
    },
    removerTarefa(state, action: PayloadAction<string>) {
      state.tarefas = state.tarefas.filter(
        (tarefa) => tarefa.id !== action.payload
      );
    },
    checkTarefa(state, action: PayloadAction<string>) {
      const tarefa = state.tarefas.find(
        (tarefa) => tarefa.id === action.payload
      );
      if (tarefa) {
        tarefa.complete = !tarefa.complete;
      }
    },
    editarTarefa(state, action: PayloadAction<IEditTarefa>) {
      const { id, titulo, descricao } = action.payload;
      const tarefa = state.tarefas.find((t) => t.id === id);
      if (tarefa) {
        tarefa.titulo = titulo;
        if (descricao !== undefined) {
          tarefa.descricao = descricao;
        }
      }
    },
    filtrarTarefas(state, action: PayloadAction<string>) {
      state.filter = action.payload;
    },
  },
});

export const { addTarefa, removerTarefa, checkTarefa, editarTarefa } =
  todoSlice.actions;
export default todoSlice.reducer;
