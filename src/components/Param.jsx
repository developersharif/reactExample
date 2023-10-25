import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DefaultContext } from "../contexts/DefaultContext";
import AppLayout from "../Pages/layout/AppLayout";

function Param() {
  const globalValues = useContext(DefaultContext);
  const { id } = useParams();
  function handleClick() {
    globalValues.setData({
      ...globalValues.data,
      isLoading: true,
      data: {
        ...globalValues.data.data,
        user: { ...globalValues.data.data.user, name: "updated name" },
      },
    });
  }
  return (
    <>
      <AppLayout>
        Dynamic param: {id} <br />
        {globalValues?.data?.data?.user?.name}
        <button onClick={handleClick}>Update Global State</button>
      </AppLayout>
    </>
  );
}

export default Param;
