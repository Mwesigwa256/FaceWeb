
import footerimg from "../assets/footerimg.png"; // adjust path

const Footer = () => {
  return (
    <div
      class="text-white p-10 relative z-10 bg-cover bg-center flex justify-center items-center min-h-[300px]"
      style={{
        "background-image": `url(${footerimg})`,
      }}
    >
      {/* optional dark overlay */}
      <div class="absolute inset-0 bg-black/60 z-0"></div>

      <div class="relative z-10">
        <div class=" gap-10 items-center">
          <h3 class="font-bold mb-2">Quick Links</h3>
          <a href="/" class="link link-hover mr-4">Home</a>
          <a href="/about" class="link link-hover">About</a>
          <a href="/about" class="link link-hover">Shows</a>
          <a href="/about" class="link link-hover">Contact Us</a>

        </div>

        <div class="mt-4">
          <h3 class="font-bold mb-2">Contact</h3>
          <p>Email: info@facetv.ug</p>
          <p>Phone: +256 700000000</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;