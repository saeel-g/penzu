import { useSelector } from "react-redux";

function DebugInfo() {
    const auth = useSelector(state => state.auth);
    // const auth = {
    //     isLoggedIn: true,
    //     user: {
    //         name: "Omkar"
    //     }
    // }
    return <>
        {auth.isLoggedIn && "Logged in as " + auth.user?.name}
        {!auth.isLoggedIn && "Not logged in"}
    </>;
}

export default DebugInfo;