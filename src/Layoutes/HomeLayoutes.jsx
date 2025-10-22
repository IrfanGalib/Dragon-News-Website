import React from "react";
import { Outlet, useNavigation } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayoutes = () => {
  const { state } = useNavigation();
  return (
    <div>
      <header>
        <Header></Header>
        {import.meta.env.VITE_Name}
        <section className="w-11/12 mx-auto my-3">
          <LatestNews />
        </section>
        <nav className="w-11/12 mx-auto my-3">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mt-13 mx-auto my-3 gap-7 grid grid-cols-1 md:grid-cols-12">
        <aside className="col-span-3 sticky top-5 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          {state == "loading" ? <Loading /> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-5 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayoutes;
