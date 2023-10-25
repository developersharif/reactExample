import { useContext } from "react";
import { DefaultContext } from "../contexts/DefaultContext";
import AppLayout from "./layout/AppLayout";

function Context() {
  const globalValues = useContext(DefaultContext);
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
      Global State: {globalValues?.data?.data?.user?.name} <br />
      <button onClick={handleClick}>Update Global State</button>
      </AppLayout>
    </>
  );
}

export default Context;
