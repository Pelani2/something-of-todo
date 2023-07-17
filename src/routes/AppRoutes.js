import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Calculator from "../pages/calculator/Calculator";
import ValueConverter from "../pages/converter/ValueConverter";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/calculatorpage",
        element: <Calculator />
    },
    {
        path: "/converterpage",
        element: <ValueConverter />
    }
]);

export default AppRoutes;