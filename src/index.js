import { createRoot } from "react-dom/client";
import "./style.css";
import NavBar from "./NavBar";
import Technology from "./Technology";
import Team from "./Team";
import Contact from "./Contact";
const root = createRoot(document.querySelector("#root"));

root.render(
  <>
    <NavBar></NavBar>
    <Technology></Technology>
    <Team></Team>
    <Contact></Contact>
  </>
);
