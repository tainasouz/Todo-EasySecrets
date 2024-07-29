import { StyledConteinerHeader } from "./styles";

const getPeriodoDia = (): string => {
  const horas = new Date().getHours();
  if (horas < 12) {
    return "Bom dia";
  }
  if (horas < 18) {
    return "Boa tarde";
  }
  return "Boa noite";
};

const formatarData = (): string => {
  const data = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return data.toLocaleDateString("pt-BR", options);
};

export default function Header() {
  return (
    <StyledConteinerHeader>
      <h1>{getPeriodoDia()}</h1>
      <h2 style={{ color: "#656565" }}>{formatarData()}</h2>
    </StyledConteinerHeader>
  );
}
