export interface ITarefa {
  id: string;
  titulo: string;
  descricao?: string;
  complete: boolean;
}

export interface ITodoState {
  tarefas: ITarefa[];
}

export interface IEditTarefa {
  id: string;
  titulo: string;
  descricao?: string;
}
