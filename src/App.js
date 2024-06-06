import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet";
import { BeatLoader } from "react-spinners";
import "./App.css";
import { Flex, useColorMode } from "@chakra-ui/react";

const HeroSection = lazy(() => import("./components/Home/Hero"));
const AboutMeSection = lazy(() => import("./components/Home/AboutMe"));
const SkillsSection = lazy(() => import("./components/Home/Skills"));

function App() {
  const { colorMode } = useColorMode();
  return (
    <div className="App">
      <Helmet>
        <title>Harsh Raghavani</title>
        <meta name="description" content="Harsh Raghavani Portfolio" />
        <meta name="keywords" content="Harsh Raghavani" />
      </Helmet>
      <Suspense
        fallback={
          <Flex justifyContent={"center"} alignItems={"center"} minH={"100vh"}>
            <BeatLoader
              speedMultiplier={1.5}
              margin={3}
              color={colorMode === "dark" ? "white" : "black"}
            />
          </Flex>
        }
      >
        <HeroSection />
        <AboutMeSection />
        <SkillsSection />
      </Suspense>
    </div>
  );
}

export default App;
