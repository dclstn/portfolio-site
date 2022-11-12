import { Button, Card, NextUIProvider } from "@nextui-org/react";
import SideNavigation from "./components/SideNavigation";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <SideNavigation />
      <Button>Click me</Button>
    </>
  );
}

export default App;
