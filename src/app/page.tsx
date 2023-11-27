import { Button } from "@/components/_ui/Button";
import Header from "@/components/_ui/Header";

export default function Home() {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Button variant="destructive">DEFAULT</Button>
      <Header />
    </div>
  );
}
