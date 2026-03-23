const ContactPage = () => {
  return (
    <div class="w-full min-h-screen bg-center bg-black text-white flex flex-col justify-center items-center">
      <div class="p-10 max-w-xl mx-auto">
        <h1 class="text-3xl font-bold mb-6">Contact Us</h1>

        <form class="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            class="input input-bordered w-full"
          />

          <input
            type="email"
            placeholder="Your Email"
            class="input input-bordered w-full"
          />

          <textarea
            placeholder="Your Message"
            class="textarea textarea-bordered w-full"
          ></textarea>

          <button class="btn bg-orange-500 text-white border-none w-full">
            Send Message
          </button>
        </form>

        <div class="mt-6">
          <p>Email: info@facetv.ug</p>
          <p>Phone: +256 700000000</p>
        </div>
      </div>
    </div>  
  );
};

export default ContactPage;