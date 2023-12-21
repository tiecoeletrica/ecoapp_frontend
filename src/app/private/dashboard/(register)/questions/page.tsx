import { getServerSession } from "next-auth";

import Form from "./components/Form";

import { authOptions } from "@/lib/auth";
import api from "@/services/api";
import { propsSessionPage } from "@/types/next-auth";
import { QuestionType } from "@/types/rotes";

const getQuestions = async () =>
  api.get("/perguntas").then((response) => {
    return response.data;
  });

const questionsPage = async () => {
  const response: QuestionType[] = await getQuestions();
  const session: propsSessionPage | null = await getServerSession(authOptions);
  return <Form data={response} token={session?.tokenUser || ""} />;
};

export default questionsPage;
