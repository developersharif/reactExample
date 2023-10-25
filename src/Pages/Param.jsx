import { useParams } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Description from "../components/Description";
import Anchor from "../components/Anchor";
function Param() {
  const { id } = useParams();
  
  return (
    <>
      <AppLayout>
        Dynamic param:  {id} 
        <Description>
          <Anchor>https://reactrouter.com/en/main/hooks/use-params#useparams</Anchor>
        </Description>
      </AppLayout>
    </>
  );
}

export default Param;
