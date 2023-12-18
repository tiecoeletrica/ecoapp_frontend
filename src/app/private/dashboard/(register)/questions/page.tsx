import Form from "./components/Form";

import api from "@/services/api";
import { QuestionType } from "@/types/rotes";
const getQuestions = async () =>
  api.get("/perguntas").then((response) => {
    return response.data;
  });

const questionsPage = async () => {
  const response: QuestionType[] = await getQuestions();
  return <Form data={response} />;
};

export default questionsPage;
