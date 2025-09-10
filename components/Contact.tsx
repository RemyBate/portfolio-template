'use client';

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-600 mb-6">Let’s work together. Fill out the form and I’ll get back to you soon.</p>
        
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! (This demo form doesn’t send yet)");
          }}
          className="grid gap-4"
        >
          <input type="text" placeholder="Your Name" className="border rounded-lg px-4 py-3" required />
          <input type="email" placeholder="Your Email" className="border rounded-lg px-4 py-3" required />
          <textarea placeholder="Message" rows={5} className="border rounded-lg px-4 py-3" required />
          <button className="bg-indigo-600 text-white px-5 py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
}
