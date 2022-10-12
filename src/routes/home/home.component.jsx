import { Outlet } from "react-router-dom";

import Hero from "../../components/hero/hero.component";

const Home = () => {
  return (
    <div>
      <Outlet />
      <Hero />
    </div>
  );
};

export default Home;
