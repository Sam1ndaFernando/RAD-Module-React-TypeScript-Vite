import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
export function RootLayout() {
    return (
        <>
            <Navigation />  {}
            <Outlet />  {}
        </>
    );
}
