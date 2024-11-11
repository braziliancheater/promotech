import { linkBase } from "../../configuracoes";

export const buscar_produto_por_id = async (id: any) => {
  try {
    const response = await fetch(`${linkBase}/produtos?id=${id}`);
    if (response.ok) {
      const data = await response.json();
      return data.produto;
    } else {
      console.error("Falha ao obter dados:", response.status);
    }
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw error;
  }
};
