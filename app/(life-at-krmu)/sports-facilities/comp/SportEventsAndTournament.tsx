import Image from "next/image";
import React from "react";

const SportEventsAndTournament = () => {
  return (
    <section className="pb-[50px]">
      <div className="max-w-[1664px] mx-auto w-full">
        <h4 className="text-[38px] mb-5 font-bold">Events and Tournaments</h4>
        <p>
          The success of KRMU students extends far beyond the confines of their
          own campus. They have made their mark in various National, State, and
          Inter-University sports events, consistently bringing home accolades
          and recognition. This speaks volumes about the dedication and skill of
          the university’s athletes, as well as the support and encouragement
          provided by the institution itself. Participation in sports offers
          numerous benefits beyond physical fitness. It instills values such as
          teamwork, discipline, resilience, and sportsmanship, all of which are
          integral to personal and professional success.
        </p>
        <div className="flex gap-10 mt-10">
          <div className="w-1/2">
            <Image
              src="/life-at-krmu/img-5.webp"
              width={768}
              height={432}
              alt=""
              className="w-full"
            />
            <p className="mt-5 leading-[2]">
              An annual highlight on the university is “ZEST” Inter-University
              sports event. This eagerly anticipated competition attracts more
              than 800 participants from 20 different universities and colleges.
              The diverse array of sports offered, including Football,
              Basketball, Table Tennis (Singles and Doubles), Badminton (Men and
              Women), and Chess, ensures there’s something for every sports
              enthusiast. ZEST serves not only as a platform for healthy
              competition but also as a celebration of camaraderie and skill
              development among students from various academic institutions.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/life-at-krmu/img-6.webp"
              width={768}
              height={432}
              alt=""
              className="w-full"
            />
            <p className="mt-5 leading-[2]">
              K.R. Mangalam University goes beyond intercolljegiate sports
              events with its own internal competition, “SPORTURA.” Exclusive to
              KRMU students, SPORTURA is a vibrant Inter-School sports event
              that annually attracts over 1000 participants from a wide range of
              schools. Here, students have the opportunity to showcase their
              sporting prowess in Cricket, Football, Basketball, Volleyball,
              Tennis, Badminton, Chess etc. SPORTURA serves as a testament to
              the university’s commitment to providing avenues for students to
              excel not just academically but also athletically
            </p>
          </div>
        </div>
        <div className="flex gap-20 mt-10">
          <div className="w-1/3">
            <Image
              src="/life-at-krmu/img-7.webp"
              width={768}
              height={432}
              alt=""
              className="w-full"
            />
            <p className="mt-5 leading-[2]">
              K.R. Mangalam University takes immense pride in celebrating the
              outstanding achievements of our students at the DPG
              Inter-University Sports Meet. Competing with exceptional skill and
              unwavering spirit, our teams showcased true determination and
              sportsmanship.Our Volleyball Team secured 1st Position, Football
              Team secured 1st Position and Cricket Team secured 2nd Position.
              These accolades are a testament to the hard work, discipline, and
              team spirit of our talented players who have once again proven
              their excellence on the field. We extend our heartfelt
              appreciation to all the players, coaches, and mentors whose
              continuous guidance and dedication made this success possible.
              Their collective efforts not only brought laurels to the
              university but also strengthened the spirit of teamwork and
              resilience.
            </p>
          </div>
          <div className="w-1/3">
            <Image
              src="/life-at-krmu/img-8.webp"
              width={768}
              height={432}
              alt=""
              className="w-full"
            />
            <p className="mt-5 leading-[2]">
              We are thrilled to share the outstanding performance of our
              students at the Inter-University Sports Meet hosted by Aravali
              College of Engineering and Management. With passion, grit, and
              determination, our players delivered remarkable results in Carrom
              by securing 2nd Position, Table Tennis – 2nd & 3rd Position,
              Football – 3rd Position, 400m Men’s Single – 3rd Position, 400m
              Men’s Relay – 3rd Position.
            </p>
          </div>
          <div className="w-1/3">
            <Image
              src="/life-at-krmu/img-9.webp"
              width={768}
              height={432}
              alt=""
              className="w-full"
            />
            <p className="mt-5 leading-[2]">
              We are proud to announce that Vaibhav Joshi, a student of K.R.
              Mangalam University, has secured the Gold Medal in the 62 kg Men’s
              Powerlifting category at the prestigious event held at NIIT
              College, Neemrana, Rajasthan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportEventsAndTournament;
