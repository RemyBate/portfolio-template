import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#f3f3f3] py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800">ABOUT ME</h2>
          <div className="w-14 h-1 bg-cyan-500 mx-auto mt-4"></div>
        </div>

        {/* Top text */}
        <div className="text-center max-w-5xl mx-auto mb-10 text-black-700">
          <p className="text-2xl md:text-3xl mb-4">
            This is the page where you can learn more about me.
          </p>

          <p className="text-lg leading-9">
            I am a punctual and motivated individual who is able to work in a busy
            environment and produce high standards of work. I am an excellent team
            worker and am able to take instructions from all levels and build up
            good working relationships with all colleagues. I am flexible,
            reliable and possess excellent time keeping skills. I am a nice fun
            and friendly person, I am honest and punctual, I work well in a team
            but also on my own as I like to set goals which I will achieve, I have
            good listening and communication skills.
          </p>
        </div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left image */}
          <div className="flex justify-center">
            <div className="bg-white p-4 rounded-xl shadow-lg">
              <Image
                src="/remy.jpg"
                alt="Remy"
                width={500}
                height={400}
                className="object-contain rounded-lg brightness-120 contrast-120"
              />
            </div>
          </div>

          {/* Right details */}
          <div className="text-gray-800">
            <h3 className="text-4xl font-semibold mb-8">
              IT specialist - application development
            </h3>

            <div className="grid sm:grid-cols-2 gap-y-6 gap-x-10 text-lg">
              <p>
                <span className="font-bold">Birthday:</span> 12 July 1983
              </p>
              <p>
                <span className="font-bold">Age:</span> 42
            
              </p>

              <p>
                <span className="font-bold">Website:</span> www.example.com
              </p>
              <p>
                <span className="font-bold">Degree:</span> Bachelors
              </p>

              <p>
                <span className="font-bold">Phone:</span> +49 15208520081
              </p>
              <p>
                <span className="font-bold">Email:</span> remybatem@gmail.com
              </p>

              <p>
                <span className="font-bold">Address:</span> Eichenber 45, 45473,
                Mülheim an der Ruhr, Deutschland
              </p>
              <p>
                <span className="font-bold">Freelance:</span> Available
              </p>
            </div>

            <p className="mt-10 text-xl leading-9 text-gray-700">
              I have a creative mind and am always up for new challenges. I am
              well organized and always plan ahead to make sure I manage my time
              well.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}