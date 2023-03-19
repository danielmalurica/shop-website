import "./App.css";
import "./categories.styles.scss";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeComponent from "./components/routes/home/home.component";
import NavigationComponent from "./components/routes/navigation/navigation.component";
import ShopComponent from "./components/routes/shop/shop.component";
import AuthenticationComponent from "./components/routes/authentication/authentication.component";
import CheckoutComponent from "./components/routes/checkout/checkout.component";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavigationComponent />}>
      <Route index element={<HomeComponent />} />
      <Route path="shop/*" element={<ShopComponent />} />
      <Route path="signin" element={<AuthenticationComponent />} />
      <Route path="checkout" element={<CheckoutComponent />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
