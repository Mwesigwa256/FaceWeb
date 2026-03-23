import type { ParentComponent } from "solid-js";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout: ParentComponent = (props) => {
  return (
    <>
      {/* Main content container */}
      <div class="flex flex-col min-h-screen relative">
        <Navbar />
        <main class="flex-grow">
          {props.children}
          
        </main>
      </div>

      {/* Footer in its own separate div */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;