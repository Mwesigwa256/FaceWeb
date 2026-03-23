import MainLayout from "../Layouts/MainLayout";
import { Home } from "../assets";
import {epg} from "../assets";
import {we} from "../assets";

const HomePage = () => {
  return (  


  <div class="w-full min-h-screen bg-center bg-cover text-white flex flex-col justify-center items-center">
    <div class="h-[730px] w-full pb-[40px]">
      <video
        autoplay
        muted
        loop
        playsinline
        class="absolute top-0 left-0 w-full h-[730px] object-cover"
      >
        <source src={Home} type="video/mp4" />
      </video>
    </div>
    <div class=" w-full h-[600px] relative">
      <img
      src={we}
      alt="EPG"
      class=" h-full object-cover"/>
    </div>

    <div class=" w-full h-[600px] flex justify-end  relative">
      <img
      src={epg}
      alt="EPG"
      class=" h-full object-cover"/>
    </div>

  </div>

  );
};

export default HomePage;