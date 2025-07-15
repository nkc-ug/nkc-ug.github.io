import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toppage } from "../pages/Toppage";
import { SiteAbout } from "../pages/SiteAbout";
import { Account } from "../pages/Account";
import { Event } from "../pages/Event";
import { Welcome } from "../pages/Welcome";
import { NewStudent } from "../pages/NewStudent";

export const Routers = () => {
  const showShinkan = import.meta.env.VITE_SHOW_SHINKAN === "true";
  const routes = [
    <Route path={"/"} element={<Toppage />} />,
    <Route path={"/SiteAbout"} element={<SiteAbout />} />,
    <Route path={"/Account"} element={<Account />} />,
    <Route path={"/Event"} element={<Event />} />,
    <Route path={"/Welcome"} element={<Welcome />} />,
    showShinkan && <Route path={"/NewStudent"} element={<NewStudent />} />,
  ];

  return (
    <BrowserRouter>
      <Routes>{routes}</Routes>
    </BrowserRouter>
  );
};
