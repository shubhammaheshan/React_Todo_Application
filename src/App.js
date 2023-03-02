import React from "react";
import "./index.css";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import "./App.css";
// router config
import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// Create a client
const queryClient = new QueryClient();

const AppLayout = () => {
  return (
    <div className="container">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
        <Footer />
      </QueryClientProvider>
    </div>
  );
};

export default AppLayout;
