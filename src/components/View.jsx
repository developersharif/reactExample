import { memo } from "react";

function View({value=1}) {
    console.log("View called/rendered");
    return (<>{value}</>);
}

export default memo(View);