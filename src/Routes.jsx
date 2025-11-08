import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
  useSearchParams,
} from "react-router-dom";
import App from "./App";
import Filter from "./Filter";
import Menu from "./Menu";

export default function Router() {
    
    return (
        <>
        <BrowserRouter>
        <Menu />
            <Routes>
                <Route path="/" element={<App />}></Route>
                <Route path="/filtro" element={<Filter />}> </Route>
            </Routes>
        </BrowserRouter>
        </>
    )
}