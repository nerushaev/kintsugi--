import axios from "axios";

export const NOVA_API_KEY = "44778101b1ca9f8a228dc93309baef8b";

export const novaInstance = axios.create({
  BASE_URL: "https://api.novaposhta.ua/v2.0/json/",
  apiKey: NOVA_API_KEY,
  modelName: "Address",
  calledMethod: "searchSettlements",
  methodProperties: {
    CityName: '',
    limit: 5,
    page: 1,
  }
})