import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Body/Header";
import Sidebar from "./Components/Body/Sidebar";
import Dashboard from "./Components/Content/Dashboard";
import Theme from "./Components/Body/Theme";
import ToDoList from "./Components/Body/ToDoList";
import Login from "./Components/Authorization/Login";
import Register from "./Components/Authorization/Register";
import SeeNews from "./Components/Content/SeeNews";
import AccountUpdate from "./Components/Content/AccountUpdate";
import UpdateSocial from "./Components/Forms/UpdateSocial";
import UpdatePersonal from "./Components/Forms/UpdatePersonal";
import YourProducts from "./Components/Content/YourProducts";
import YourWebsite from "./Components/Content/YourWebsite";
import AddPortfolio from "./Components/Content/AddPortfolio";
import { useState, useEffect } from "react";

function App() {
  const [login, SetLogin] = useState(false);

  const SetLocalLogin = async () => {
    try {
      let userLogin = await localStorage.getItem("logIN");
      let parsed = JSON.parse(userLogin);
      if (parsed !== null) {
        SetLogin(parsed);
      }
    } catch {
      return null;
    }
  };

  useEffect(() => {
    SetLocalLogin();
  }, []);

  return (
    <div>
      {login === false ? (
        <>
          <Router>
            <Routes>
              <Route path="/" exact element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </Router>
        </>
      ) : (
        <>
          <div class="container-fluid page-body-wrapper">
            <Router>
              <Header />
              <Theme />
              <ToDoList />
              <Sidebar />
              <Routes>
                {/* < Route path='/' element={<Dashboard />} /> */}
                <Route path="/" element={<AccountUpdate />} />
                <Route path="/SeeNews" element={<SeeNews />} />
                <Route path="/UpdateSocial" element={<UpdateSocial />} />
                <Route path="/UpdatePersonal" element={<UpdatePersonal />} />
                <Route path="/YourProducts" element={<YourProducts />} />
                <Route path="/YourWebsite" element={<YourWebsite />} />
                <Route path="/AddPortfolio" element={<AddPortfolio />} />
              </Routes>
            </Router>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
