import MainLayout from "../Layouts/MainLayout";
import { concert } from "../assets";

const AboutPage = () => {
  return (
      <div class="p-0" >
        <div class="h-[500px] bg-cover bg-center flex justify-center items-center" style={{"background-image":`url(${concert})`}}>
          <p class="text-white font-bold">I miss us</p>
        </div>
        <h1 class="text-3xl font-bold mb-4">About Face TV</h1>
        <p>Face TV Uganda is a modern entertainment platform focused on promoting Ugandan music, artists, and digital content.</p>
        <p>Our mission is to connect fans with their favorite artists through streaming, news, and exclusive content.</p>
      </div>
  );
};

export default AboutPage;