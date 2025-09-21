import { use } from "react";
import { AppContext } from "./context";

export default function Home() {
    const{number}=use(AppContext);
    return (
        <div className="container">
            Home
            <h3>Number from counter: {number}</h3>
        </div>
    );
}