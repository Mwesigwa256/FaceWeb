import { logo } from "../assets";
import { createSignal, onMount, onCleanup } from "solid-js";

const Navbar = () => {
  const [visible, setVisible] = createSignal(true);
  const [solid, setSolid] = createSignal(false);

  let lastScroll = 0;

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // ⬆️ scrolling UP → show navbar
    if (currentScroll < lastScroll) {
      setVisible(true);
    }

    // ⬇️ scrolling DOWN → hide navbar
    if (currentScroll > lastScroll && currentScroll > 100) {
      setVisible(false);
    }

    // ✅ If user is NOT at the top → always solid
    if (currentScroll > 50) {
      setSolid(true);
    } else {
      // 🔝 Back to hero → transparent
      setSolid(false);
    }

    lastScroll = currentScroll;
  };

  onMount(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onCleanup(() => {
    window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div
      class={`fixed top-0 left-0 w-full z-50 px-10 py-6 flex items-center text-white transition-all duration-500 ${
        visible() ? "translate-y-0" : "-translate-y-full"
      } ${
        solid()
          ? "bg-black/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <div class="pl-4">
        <img src={logo} alt="logo" class="w-40 h-auto" />
      </div>

      {/* Links */}
      <div class="flex gap-6 mx-auto">
        <a href="/" class="hover:text-orange-500 font-bold text-xl">Home</a>
        <a href="/about" class="hover:text-orange-500 font-bold text-xl">About</a>
        <a href="/shows" class="hover:text-orange-500 font-bold text-xl">Shows</a>
        <a href="/contact" class="hover:text-orange-500 font-bold text-xl">Contact Us</a>
      </div>
    </div>
  );
};

export default Navbar;