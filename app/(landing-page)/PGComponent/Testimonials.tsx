"use client";

import { ArrowUpRight } from "lucide-react";

const testimonials = [
  {
    brand: "",
    text: "K.R. Mangalam University has truly transformed my career. The program not only provided me with technical expertise but also honed my problem-solving and analytical skills. The university encouraged us to participate in hackathons, industry projects, and internships, which gave me hands-on experience in real-world AI applications. Today, I am working as a Sales manager at Rally Motors, and I owe my success to the incredible faculty and supportive environment at KRMU. ",
    author: "Rishav Bakshi",
    color: "bg-[#EAF6FF]",
    featured: false,
  },
  {
    brand: "",
    text: "Looking back at my journey at K.R. Mangalam University, I feel grateful for the incredible opportunities I received here. The curriculum was designed in collaboration with industry experts, ensuring we were up to date with the latest AI trends. The mentorship from experienced faculty, research-driven approach, and exposure to AI tools like TensorFlow, PyTorch, and Big Data analytics helped me secure my dream job in the tech industry. I highly recommend this programme to anyone passionate about AI and data science!",
    author: "Parminder Singh",
    color: "bg-white",
    featured: false,
  },
  {
    brand: "",
    text: "Studying at K.R. Mangalam University was one of the best decisions of my academic journey. The well-structured curriculum, combined with practical exposure through hands-on projects, helped me build a strong foundation in machine learning, data analytics, and cloud computing. The faculty’s guidance and the state-of-the-art labs played a crucial role in enhancing my technical skills. Thanks to the university’s placement cell, I secured a job at a leading AI firm, and I feel confident about tackling industry challenges.",
    author: "Annanya Agarwal",
    color: "bg-white",
    featured: false,
  },
  {
    brand: "",
    text: "K.R. Mangalam University didn’t just provide me with a degree—it shaped my career. The MCA programme gave me the technical expertise, industry exposure, and confidence to work on AI-driven solutions. The university’s tie-ups with industry leaders, guest lectures from  AI professionals, and project-based learning approach made a significant difference in my  professional journey. Today, as a Data Analyst, I use the knowledge and skills I gained at KRMU  daily. If you're looking for a programme that bridges the gap between academics and industry, this is the place to be!",
    author: "Shivangi Sharma",
    color: "bg-white",
    featured: false,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-[#04162E] to-[#020B18] py-20 px-4 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-14">
          <div>
            <p className="text-sm text-gray-300 mb-2">Our Testimonials</p>
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Why our schoolers love and trust{" "}
              <span className="text-pink-300">K.R. Mangalam University?</span>
            </h2>
          </div>

          <button className="group self-start lg:self-center flex items-center gap-3 border border-white/30 rounded-full px-6 py-2 text-sm hover:bg-white hover:text-black transition">
            Apply Now
            <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-tr from-blue-500 to-red-500 text-white group-hover:rotate-45 transition">
              <ArrowUpRight size={16} />
            </span>
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((item, i) => (
            <div
              key={i}
              className={`break-inside-avoid rounded-xl p-6 ${
                item.featured ? "text-white" : "text-black"
              } ${item.color}`}
            >
              {/* Brand */}
              <p
                className={`font-semibold mb-4 ${
                  item.featured ? "text-white" : "text-gray-900"
                }`}
              >
                {item.brand}
              </p>

              {/* Text */}
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  item.featured ? "text-white/90" : "text-gray-700"
                }`}
              >
                “{item.text}”
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gray-300 shrink-0" />
                <span
                  className={`text-sm ${
                    item.featured ? "text-white" : "text-gray-600"
                  }`}
                >
                  {item.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
