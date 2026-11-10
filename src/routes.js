// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Computer from "@material-ui/icons/Computer";
import SportsEsports from "@material-ui/icons/SportsEsports";
import CardGiftcard from "@material-ui/icons/CardGiftcard";
import ShoppingCart from "@material-ui/icons/ShoppingCart";

// Core views
import DashboardPage from "views/Dashboard/Dashboard.js";
import HardwarePage from "views/Hardware/Hardware.js";
import GamesStorePage from "views/GamesStore/GamesStore.js";
import BundlesPage from "views/Bundles/Bundles.js";
import CartPage from "views/Cart/Cart.js";
import UserProfile from "views/UserProfile/UserProfile.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Inicio & Destacados",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin",
  },
  {
    path: "/hardware",
    name: "Componentes & PCs",
    rtlName: "مكونات الكمبيوتر",
    icon: Computer,
    component: HardwarePage,
    layout: "/admin",
  },
  {
    path: "/games",
    name: "Tienda de Juegos",
    rtlName: "متجر الألعاب",
    icon: SportsEsports,
    component: GamesStorePage,
    layout: "/admin",
  },
  {
    path: "/bundles",
    name: "Promos & Bundles",
    rtlName: "عروض الحزم",
    icon: CardGiftcard,
    component: BundlesPage,
    layout: "/admin",
  },
  {
    path: "/cart",
    name: "Carrito de Compras",
    rtlName: "عربة التسوق",
    icon: ShoppingCart,
    component: CartPage,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Perfil de Estudiante",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
