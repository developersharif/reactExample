import { useParams } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
function Param() {
  const { id } = useParams();
  
  return (
    <>
      <AppLayout>
        Dynamic param:  {id} 
      </AppLayout>
    </>
  );
}

export default Param;
