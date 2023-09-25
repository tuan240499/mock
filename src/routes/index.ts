import ChildProductPage from "../pages/ChildProductPage/ChildProductPage";
import HomePage from "../pages/HomePage/HomePage";
import MapPage from "../pages/MapPage/MapPage";
import MenProductPage from "../pages/MenProductPage/MenProductPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
// import OrderPage from "../pages/OrderPage/OrderPage";
import WomenProductPage from "../pages/WomenProductPage/WomenProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import NewMenPage from "../pages/NewMenPage/NewMen";
import ShipOrder from "../pages/OrderPage/Order/Order/ShipOrder";
import UserProfile from "../pages/UserProfile/UserProfile";

export const routes = [
  { path: "/", page: HomePage, isBlank: false },
  { path: "/child", page: ChildProductPage },
  { path: "/signin", page: SignInPage, isBlank: true },
  { path: "/signup", page: SignUpPage, isBlank: true },
  { path: "/login", page: LoginPage },
  { path: "/map", page: MapPage },
  { path: "/men", page: MenProductPage },
  { path: "/order", page: ShipOrder },
  { path: "/women", page: WomenProductPage },
  { path: "*", page: NotFoundPage },
  { path: "/product/:id", page: ProductDetail },
  { path: "/newmen", page: NewMenPage },
  { path: "/userprofile", page: UserProfile },
];
