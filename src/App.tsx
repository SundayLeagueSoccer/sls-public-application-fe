import { lazy, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

//Layout
import PublicPageLayout from "./utils/PubilcPageLayout";

//context
import { AppContextProvider } from "./context/AppContext";

//Pages
import SplashPage from "./pages/SplashPage/";
import LandingPage from "./pages/LandingPage/";

//lazyLoading for pages
// const LandingPage = lazy(() => import("./pages/LandingPage/"));
const AwardsPage = lazy(() => import("./pages/AwardsPage/"));
const PlayersPage = lazy(() => import("./pages/PlayersPage/"));
const StatisticsPage = lazy(() => import("./pages/StatisticsPage/"));
const AboutPage = lazy(() => import("./pages/AboutPage/"));
const DevelopmentTeamPage = lazy(() => import("./pages/DevelopmentTeamPage/"));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <AppContextProvider>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<SplashPage />} />
            <Route path="/development-team" element={<DevelopmentTeamPage />} />

            {/* public routes */}
            <Route element={<PublicPageLayout />}>
              <Route path="/home" element={<LandingPage />} />
              <Route path="/awards" element={<AwardsPage />} />
              <Route path="/players" element={<PlayersPage />} />
              <Route path="/statistics" element={<StatisticsPage />} />
              <Route path="/about-us" element={<AboutPage />} />
            </Route>
          </Routes>
        </AnimatePresence>
      </AppContextProvider>
    </>
  );
};

export default App;
