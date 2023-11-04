import { Routes, Route } from "react-router-dom";
import { Home, Features, Prices } from "./Paths";

export default function Router() {
    return (
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/features"} element={<Features />} />
            <Route path={"/prices"} element={<Prices />} />
        </Routes>
    )
}
