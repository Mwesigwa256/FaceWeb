import { createSignal } from "solid-js";
import FaceHome from "../assets/FaceHome.mp4";
import FaceHits from "../assets/FaceHits.mp4";
import Pressplay from "../assets/Pressplay.mp4";
import RiseUp from "../assets/RiseUp.mp4";
import COLLABS from "../assets/COLLABS.mp4";
import { epg } from "../assets";

const ShowsPage = () => {
  const [activeIndex, setActiveIndex] = createSignal<number | null>(null);

  const shows = [
    { title: "Face Hits", video: FaceHits },
    { title: "Press Play", video: Pressplay },
    { title: "Rise Up", video: RiseUp },
    { title: "102 Collabs", video: COLLABS },
  ];

  const toggleVideo = (index: number, el: HTMLVideoElement) => {
    if (activeIndex() === index) {
      el.pause();
      el.currentTime = 0;
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
      el.play();
    }
  };

  return (
    <div class="w-full min-h-screen bg-black text-white flex flex-col items-center">

      {/* HERO SECTION */}
      <div class="relative h-[700px] w-full">
        <video autoplay muted loop playsinline class="absolute top-0 left-0 w-full h-full object-cover">
          <source src={FaceHome} type="video/mp4" />
        </video>
        <div class="absolute inset-0 bg-black/40"></div>
      </div>

      {/* FEATURED SECTION */}
      <div class="h-[300px] w-full flex flex-col justify-center items-center text-center px-4 bg-blue">
        <h1 class="text-5xl font-bold mb-4 text-white">Featured Blog</h1>
        <p class="text-xl max-w-xl text-red-400">Check out the latest updates on Face TV!</p>
      </div>

      {/* SHOWS GRID */}
      <div class="w-full py-16 bg-white flex flex-col items-center">
        <h2 class="text-4xl font-bold mb-10 text-black">Our Shows</h2>

        <div class="flex flex-col w-full max-w-6xl gap-16 px-6">
          {shows.map((item, index) => {
            const isEven = index % 2 === 0; // alternate sides
            return (
              <div class={`flex flex-col md:flex-row items-center gap-6 ${isEven ? "md:flex-row" : "md:flex-row-reverse"} group`}>
                
                {/* TITLE */}
                <div class="md:w-1/3 text-left md:text-right transition-transform duration-700 transform opacity-0 group-hover:opacity-100 group-hover:translate-x-0">
                  <h3 class="text-2xl font-bold text-black">{item.title}</h3>
                </div>

                {/* VIDEO */}
                <div class="md:w-2/3 relative cursor-pointer overflow-hidden rounded-xl transform transition duration-500 hover:scale-105"
                     onClick={(e) => {
                       const videoEl = e.currentTarget.querySelector("video") as HTMLVideoElement;
                       toggleVideo(index, videoEl);
                     }}
                >
                  <video
                    src={item.video}
                    muted
                    loop
                    playsinline
                    disablepictureinpicture
                    class={`w-full h-[300px] object-cover transition duration-500 ${activeIndex() === index ? "" : "group-hover:brightness-50"}`}
                  />

                  {/* PLAY / PAUSE BUTTON */}
                  <div class="absolute inset-0 flex items-center justify-center">
                    <div class="bg-black/60 p-3 rounded-full">
                      {activeIndex() === index ? <span class="text-white text-xl">⏸</span> : <span class="text-white text-xl">▶</span>}
                    </div>
                  </div>    
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div class=" w-full h-[600px] relative">
      <img
      src={epg}
      alt="EPG"
      class=" h-full object-cover"/>
    </div>

    </div>
  );
};

export default ShowsPage;