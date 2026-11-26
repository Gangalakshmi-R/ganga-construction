import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import MainLayout from "./layouts/MainLayout";
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader key="loader" />}</AnimatePresence>
      {!loading && (
        <MainLayout>
          <AppRoutes />
        </MainLayout>
      )}
    </>
  );
}

export default App;
