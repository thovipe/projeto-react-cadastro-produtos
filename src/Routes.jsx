import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";
import App from "./App";
import Filter from "./components/Filter";
import Menu from "./Menu";
import Private from "./components/Private";

export default function Router() {
    
    return (
        <>
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/filtro" element={<Filter />}> </Route>
                <Route path="/private" element={<Private />}></Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}