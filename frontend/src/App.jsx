import React,
{
  useEffect,
  useState,
} from "react";

import MainLayout
from "./layouts/MainLayout";

import CursorGlow
from "./components/CursorGlow";

import AppRoutes
from "./routes/AppRoutes";

import Loader
from "./components/Loader";

function App() {

  const [loading,
    setLoading] =
      useState(true);

  useEffect(() => {

    const timer =
      setTimeout(() => {

        setLoading(false);

      }, 2800);

    return () =>
      clearTimeout(timer);

  }, []);

  if (loading) {

    return <Loader />;
  }

  return (

    <>

      <CursorGlow />

      <MainLayout>

        <AppRoutes />

      </MainLayout>

    </>

  );
}

export default App;