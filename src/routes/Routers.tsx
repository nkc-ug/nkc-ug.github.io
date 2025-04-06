import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toppage } from "../pages/Toppage";
import { SiteAbout } from "../pages/SiteAbout";
import { Account } from "../pages/Account";
import { Event } from "../pages/Event";
import { Welcome } from "../pages/Welcome";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Toppage />} />
        <Route path={"/SiteAbout"} element={<SiteAbout />} />
        <Route path={"/Account"} element={<Account />} />
        <Route path={"/Event"} element={<Event />} />
        <Route path={"/Welcome"} element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
};
