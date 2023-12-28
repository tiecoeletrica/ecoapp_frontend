import Loading from "@/components/Loading";

const loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <Loading />
        Carregando dados...
      </div>
    </div>
  );
};

export default loading;
