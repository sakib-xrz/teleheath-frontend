import { Button } from "antd";

export default function Home() {
  return (
    <div>
      <h1 className="text-center py-20 text-6xl text-primary font-bold">
        Telehealth Frontend
      </h1>
      <div className="flex justify-center">
        <Button type="primary">Customized Theme Button</Button>
      </div>
    </div>
  );
}
