import { useLoaderData } from "react-router-dom";
import AppLayout from "../Pages/layout/AppLayout";
import Description from "../components/Description";

function Loader() {
  const data = useLoaderData();
  return (
    <>
      <AppLayout>
        <h2>Rote Loader data:</h2>
        {data.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
        <Description>
          Full Details:
          <a href="https://reactrouter.com/en/main/hooks/use-loader-data" target="_blank">https://reactrouter.com/en/main/hooks/use-loader-data</a>
        </Description>
      </AppLayout>
    </>
  );
}

export default Loader;
