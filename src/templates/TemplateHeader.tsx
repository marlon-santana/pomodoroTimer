import { Header } from "../components/Header";
import { Outlet } from "react-router-dom";

export function TemplateHeader () {
    return(
        <div>
            <Header/>
            <Outlet />
        </div>
    );
}