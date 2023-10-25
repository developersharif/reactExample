import { useNavigation } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Loading = ({children}) => {
    const navigation = useNavigation();
    return (
       <>
       {navigation.state === "loading" && <div>Loading...</div>}
       Loading...
       {children}
       </>
    );
};

export default Loading;