import { memo } from "react";
function ViewWithmemo({value}) {
    alert("Rendered!(With Memo)")
    return (
        <>
        {value}
        </>
    );
}

export default memo(ViewWithmemo);