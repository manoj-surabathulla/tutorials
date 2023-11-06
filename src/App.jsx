import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Birthday from "./pages/birthday";
import Dashboard from "./pages/dashboard";
import ToursPage from "./pages/tours";
import MenuPage from "./pages/menu";
import GroceryBud from "./pages/grocery-bud";
import CartPage from "./pages/cart";
import TodoPage from "./pages/todo";
import DropdownComponent from "./pages/dropdown";
import ManagementPage from "./pages/management";
import EmployeeList from "./pages/management/employee-list";
import Expense from "./pages/expense";

function App() {
  // async function requestPermission() {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     //generate token
  //     const token = await getToken(messaging, {
  //       vapidKey:
  //         "BIGGnFgfoMiDzyY9IDPl7Wi4-3jzyavJZ6U9aYVvbz_gwaqDhvAjZT4JvsBjZAo5ExOk9qrwT0p4m8qFmRzHZgw",
  //     });
  //     console.log("Token Gen", token);
  //   } else if (permission === "denied") {
  //     alert("your denied");
  //   }
  // }

  // useEffect(() => {
  //   requestPermission();
  // }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/tours" element={<ToursPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/grocery" element={<GroceryBud />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/to-do" element={<TodoPage />} />
        <Route path="/dropdown" element={<DropdownComponent />} />
        <Route path="/management" element={<ManagementPage />} />
        <Route path="/management/employee" element={<EmployeeList />} />
        <Route path="/expense-tracker" element={<Expense />} />
      </Routes>
    </Router>
  );
}

export default App;
