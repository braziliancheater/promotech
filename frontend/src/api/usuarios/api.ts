const API_BASE_URL = "https://api.promotecnologia.com.br/usuario";

export const login_novo_usuario = async (dados: any) => {
  try {
    const response = await fetch(API_BASE_URL + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });
    if (response.ok) {
      const data = await response.json();
      return data.access_token;
    } else {
      console.error("Falha ao obter dados:", response.status);
      throw new Error("Falha ao obter dados");
    }
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw error;
  }
};

export const logout_usuario = async () => {
  try {
    const response = await fetch(API_BASE_URL + "/logout", {
      method: "POST",
    });
    if (response.ok) {
      return response.json();
    } else {
      console.error("Falha ao obter dados:", response.status);
    }
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw error;
  }
};

export const cadastrar_novo_usuario = async (dados: any) => {
  try {
    const response = await fetch(API_BASE_URL + "/cadastrar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });
    if (response.ok) {
      const data = await response.json();
      return data.usuario;
    } else {
      console.error("Falha ao obter dados:", response.status);
    }
  } catch (error) {
    console.error("Erro ao buscar produto:", error);
    throw error;
  }
};
