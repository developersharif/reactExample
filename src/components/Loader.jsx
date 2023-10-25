import { useLoaderData } from "react-router-dom";
import AppLayout from "../Pages/layout/AppLayout";

function Loader() {
  const data = useLoaderData();
  return (
    <>
      <AppLayout>
        Loader data:
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </AppLayout>
    </>
  );
}

export default Loader;
