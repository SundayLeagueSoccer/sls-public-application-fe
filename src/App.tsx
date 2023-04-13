import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

//Layout
import PublicPageLayout from "./utils/PubilcPageLayout";

//context
import { AppContextProvider } from "./context/AppContext";

//Pages
// import LandingPage from "./pages/LandingPage/";
// import AwardsPage from "./pages/AwardsPage/";
// import PlayersPage from "./pages/PlayersPage/";
// import StatisticsPage from "./pages/StatisticsPage/";
// import AboutPage from "./pages/AboutPage/";

//lazyLoading
const LandingPage = lazy(() => import("./pages/LandingPage/"));
const AwardsPage = lazy(() => import("./pages/AwardsPage/"));
const PlayersPage = lazy(() => import("./pages/PlayersPage/"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage/"));
const AboutPage = lazy(() => import("./pages/AboutPage/"));

const App = () => {
  const location = useLocation();
  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes location={location} key={location.pathname}>
              {/* public routes */}
              <Route element={<PublicPageLayout />}>
                <Route path="/" element={<LandingPage />} />
                <Route path="/awards" element={<AwardsPage />} />
                <Route path="/players" element={<PlayersPage />} />
                <Route path="/statistics" element={<StatisticsPage />} />
                <Route path="/about-us" element={<AboutPage />} />
              </Route>
            </Routes>
          </Suspense>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
