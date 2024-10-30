const API_BASE_URL = "http://localhost:5000/produtos";

export const buscar_produto_por_id = async (id: any) => {
  try {
    const response = await fetch(`${API_BASE_URL}?id=${id}`);
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
