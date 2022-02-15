//Importação do Módulo axios para consumir API
import axios from "axios";


const api = axios.create({
  baseURL: `http://192.168.1.229:3000/v1/`,
  headers: { "Cache-Control": "no-store", Pragma: "no-cache", Expires: "0" },
});
axios.defaults.timeout = 1000;
api.defaults.timeout = 1000;

//Criação dos interceptadores de rota.
api.interceptors.request.use(async (sucess) => {
  const token = await renewToken();
  sucess.headers = { "x-access-token": token };

  return sucess;
});

//Criação da função que tem como objetivo renovar o token
async function renewToken() {
  try {
    const response = await axios.post(`http://192.168.1.229:3000/v1/auth`, {
      user: "administrador@endevs.com.br",
      password: "z.Xw3NvqIO7Z",
    });
    return response.data.token;
  } catch (err) {
    return null;
  }
}

export default api;
