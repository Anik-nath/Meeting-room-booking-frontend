import { useRef } from "react";

export default function AboutUs() {
  const missionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    if (missionRef.current) {
      missionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  //   example of team
  const team = [
    {
      id: 1,
      name: "Anik Nath",
      position: "Chief Executive Officer (CEO)",
      image: "https://i.postimg.cc/bNBVRGRZ/team-6.png",
      bio: "He leads the company with a vision to revolutionize the way co-working spaces operate. With over 15 years of experience in the tech and real estate industries, she drives strategic growth and ensures the company's mission aligns with industry needs.",
    },
    {
      id: 2,
      name: "Sophia Reynolds",
      position: "Chief Technology Officer (CTO)",
      image: "https://i.postimg.cc/xjmQw2cp/team-3.jpg",
      bio: "Sophia oversees the technological development of our platform, ensuring it remains secure, scalable, and user-friendly. His background in software engineering and cloud technologies makes him the ideal leader for our tech team.",
    },
    {
      id: 3,
      name: "Noah Bennett",
      position: "Marketing Director",
      image: "https://i.postimg.cc/sXQzDFKX/team-4.jpg",
      bio: "Noah is responsible for the company's marketing strategies, ensuring our brand reaches a global audience. He excels at crafting campaigns that highlight the unique benefits of our co-working space solutions.",
    },
    {
      id: 4,
      name: "Olivia Martinez",
      position: "Head of Product Design",
      image: "https://i.postimg.cc/fLGNVHgv/team-2.jpg",
      bio: "Olivia brings creativity and precision to our platform design. Her focus is on creating a seamless user experience, making it easy for clients to book and manage their meeting spaces.",
    },
    {
      id: 5,
      name: "Ava Thompson",
      position: "Customer Success Manager",
      image: "https://i.postimg.cc/DzYFTfrH/team-5.jpg",
      bio: "Ava leads the customer success team, ensuring that clients have a smooth experience from booking to checkout. Her expertise in customer relations helps foster long-term partnerships with our users.",
    },
    {
      id: 6,
      name: "Ethan Parker",
      position: "Chief Operating Officer (COO)",
      image: "https://i.postimg.cc/6qCNndkx/team-1.jpg",
      bio: "Ethan manages the day-to-day operations of the company, ensuring that everything runs efficiently. In operations management, he plays a crucial role in driving the company's success.",
    },
  ];

  return (
    <div>
      <section
        id="about-hero"
        className="relative w-full md:px-10 px-6 flex flex-col items-center justify-center py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/MK3QgqCf/premium-photo-1682436127861-3718772f4c2e.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#011100ee] opacity-75"></div>

        <div className="relative text-center md:w-1/2 w-full">
          <h1 className="text-gray-200 md:text-2xl text-lg">About Us</h1>
          <h1 className="text-3xl md:text-5xl font-bold py-4 text-white">
            One Meeting at a Time
          </h1>
          <p className="text-gray-300 md:text-lg text-md pb-4">
            Discover how NexusMeet is redefining co-working experiences by
            providing seamless, secure, and intuitive meeting room bookings
          </p>
          <button
            onClick={scrollToSection}
            className="btn btn-primary text-white cta-button"
          >
            Explore Our Journey
          </button>
        </div>
      </section>
      <section
        id="mission"
        ref={missionRef}
        className="mission text-center md:px-10 px-6 py-12"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
          Our Mission
        </h2>
        <p className="text-gray-800 text-lg text-justify ">
          At NexusMeet, our mission is to revolutionize the way co-working
          spaces are utilized by offering a seamless and intuitive meeting room
          booking experience. We believe in empowering professionals and
          businesses with tools that make collaboration effortless, secure, and
          efficient. Our goal is to foster creativity and productivity by
          providing a platform that connects people with the perfect space for
          their needs.
        </p>
      </section>
      <section id="team" className="team bg-primary md:px-10 px-6 py-8 ">
        <h2 className="text-3xl md:text-5xl font-bold text-secondary mb-10 text-center">
          Our Team
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-2 gap-4 gap-y-8">
          {team.map((member) => (
            <div
              key={member.id}
              id="teamMember"
              className="flex flex-col items-center "
            >
              <div className="mask mask-hexagon-2 w-36 h-36">
                <img className="w-full" src={member.image} />
              </div>

              <div id="bio" className="text-center">
                <h2 className="text-secondary font-semibold text-lg">
                  {member.name}
                </h2>
                <p className="text-md text-gray-200">{member.position}</p>
                <p className="text-sm text-gray-200 mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="story" className="team text-center md:px-10 px-6">
        <div className="w-full py-20 flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
            Our Story
          </h2>
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic">2021</time>
                <div className="text-lg font-black">Platform Launched</div>
                In 2021, [Founders' Names] noticed the challenges professionals
                faced in finding and booking spaces for meetings. They
                envisioned a platform that would not only streamline the booking
                process but also cater to the unique needs of co-working spaces.
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 md:text-start">
                <time className="font-mono italic">2022</time>
                <div className="text-lg font-black">Reached 10,000 Users</div>
                After months of hard work and dedication, our platform reached
                10,000 users, proving the need for an easy and efficient meeting
                room booking system in the co-working space industry.
              </div>
              <hr className="bg-primary" />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-primary"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end ">
                <time className="font-mono italic">2023</time>
                <div className="text-lg font-black">Expanded to 50+ Cities</div>
                Our platform expanded to over 50 cities, becoming a trusted name
                in the co-working space industry, known for its user-friendly
                design and robust management tools.
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* <section id="greatings" className="team text-center md:px-10 px-6 py-8">
        <p>
          Thank you for visiting our About Us page. We’re excited to continue
          growing and evolving, and we look forward to helping you find the
          perfect space for your next meeting.
        </p>
      </section> */}
    </div>
  );
}
