import { Outlet } from "react-router-dom";
import Content from "../src/components/Content";
import Header from "../src/components/Header/Header";
import Slider from "../src/components/Slider/Slider";

export default function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Header />
        <Slider />
        <Content />


      </nav>
      <Outlet />
    </div>
  );
}
