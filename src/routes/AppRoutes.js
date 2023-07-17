import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Calculator from "../pages/calculator/Calculator";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/calculatorpage",
        element: <Calculator />
    }
    
]);

export default AppRoutes;