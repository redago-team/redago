import axios from "axios";

const correct = (text: string) => {
  return axios.post("http://127.0.0.1:8000/correct-tokenized", { text });
};

export default correct;