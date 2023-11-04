import useDimension from "../../utils/hooks/useDimension";
import Header from "../Header/Header";
import Router from "../Router/Router";
import Footer from "../Footer/Footer";


export default function Layout() {
    const [ dimension ] = useDimension();
    return (
        <div className="layout">
            <Header size={dimension}/>
            <Router />
            <Footer />
        </div>
    )
}
