import Loading from "@/components/Loading";

const loading = () => {
  return (
    <div className="flex flex-col items-center mt-60">
      <Loading />
      Carregando...
    </div>
  );
};

export default loading;
