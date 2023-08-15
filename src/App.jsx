import { useState } from "react";
import "./App.css";
import { HomeScreen, SideBar, Mobile_Sidebar } from "./Components";

function App() {
  const [isMobileBarOpen, setIsMobileBarOpen] = useState(false);

  const toggleMobileBar = () => {
    setIsMobileBarOpen(!isMobileBarOpen);
  };

  return (
    <div className="h-full w-full flex font-body">
      <Mobile_Sidebar
        isMobileBarOpen={isMobileBarOpen}
        setIsMobileBarOpen={setIsMobileBarOpen}
      />
      <SideBar />
      <HomeScreen toggleMobileBar={toggleMobileBar} />
    </div>
  );
}

export default App;
