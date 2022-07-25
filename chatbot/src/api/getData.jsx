import { WIT_AI_URL } from "./constantsAPI";
export const fetchData = (
  fullUrl,
  chatbotMessage,
  responseNotFound,
  setData
) => {
  fetch(fullUrl)
    .then((res) => {
      if (res.status === 400) {
        chatbotMessage(responseNotFound);
        return;
      }
      return res.json();
    })
    .then((res) => setData(res));
};

export const fetchWitData = (query) => {
  const q = encodeURIComponent(query);

  return fetch(WIT_AI_URL + q, {
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_WIT_API_KEY}`,
    },
  }).then((res) => res.json());
};
