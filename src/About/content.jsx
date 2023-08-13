import React from "react";
import cet from "../../static/images/about/cet.png";
import event from "../../static/images/about/event.png";
import execom from "../../static/images/about/execom.png";
import { BiSolidChevronDown } from "react-icons/bi";
import "../styles/HeroSection.css";
import { Icon } from "@iconify/react";

function content() {
  const shadow = {
    boxShadow: "0px 0px 32px 0px rgba(142, 50, 0, 0.16)",
    // Add more CSS properties here as needed
  };
  return (
    <div>
      <div className="flex items-center CET mt-28">
        <div className="pb-10 px-14">
          <h2 className="mb-6 text-2xl font-recoleta text-brown100">
            About CET
          </h2>
          <div className=" font-outfit text-brown80">
            <p className="mb-8">
              College Of Engineering Trivandrum, the pioneer institute of
              technical education in Kerala has held its status of excellence in
              technical and cultural aspects for 80 years since its foundation
              in 1939. Having attained the regal age of 80, CET has a very rich
              legacy of nurturing multidimensional talents & providing the best
              platforms for tehnocrats and artists alike.
            </p>
            <p>
              With its dynamic student population, CET has carved a niche for
              itself both within and outside the field of engineering expertise.
              The broad spectrum of notable alumni that CET has produced have
              imprinted the ethos of their alma mater on the vibrant arenas of
              their careers.
            </p>
          </div>
          <div className="mt-10 cta">
            Learn More <Icon icon="ic:baseline-arrow-forward" />
          </div>
        </div>
        <div className="h-full">
          <img src={cet} alt="cet pic" className=""></img>
        </div>
      </div>
      <div className="flex items-center justify-between Club bg-brown5">
        <div className="w-1/2">
          <img
            src={event}
            alt="event pic"
            className="object-contain w-1/2 h-1/2"
          ></img>
        </div>
        <div className="w-1/2">
          <h2 className="my-10 text-lg font-recoleta text-brown100">
            About Club
          </h2>
          <div className="mb-10 font-outfit text-brown80">
            <p className="mb-8">
              CET Film Society is a community aimed at celebrating the art of
              cinema. Initiated by a group of film enthusiastic students, the
              club aims at providing a platform for attention and appreciation
              to movies, primarily independent, be it Indian or foreign.
            </p>
            <p>
              Being one of the most active clubs in the college, we've organised
              numerous programs both online and offline which includes film
              screenings, discussions and several film oriented competitions. We
              often collaborate with other film-related organisations and
              encourage up and coming talents. Rangam, our annual film festival
              is one of the major events this year. It will also include a short
              film competition focused on nurturing young and promising talents.
              We also have an active social media presence with our Weekly
              Suggestions, Movie Reviews and other contests and events. The CET
              Film Society is an inclusive group rendering an imaginative and
              critical space for CETians.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-12 gap-y-10 people">
        <h2 className="text-2xl font-semibold font-recoleta text-brown100">
          People Behind Club
        </h2>
        <div className="flex flex-col items-center justify-center execom font-outfit">
          <h3 className="mb-10 text-xl font-semibold text-brown80">EXECOM</h3>
          <div className="grid grid-cols-4 gap-4">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3"
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3"
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3"
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
          <h4 className="flex mt-8 font-semibold text-brown100 gap-x-2">
            VIEW MORE <BiSolidChevronDown className="text-xl" />
          </h4>
        </div>
        <div className="flex flex-col items-center justify-center webdev execom font-outfit">
          <h3 className="text-xl font-semibold text-brown80">WEB DEV TEAM</h3>
        </div>
        <div className="grid grid-cols-5 grid-rows-2 gap-4 mb-10">
          <div className="col-start-2 row-start-1">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
          <div className="col-start-3 row-start-1">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
          <div className="col-start-4 row-start-1">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
          <div className="col-start-5 row-start-1">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
          <div className="col-start-1 row-start-1">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
          <div className="col-start-2">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
          <div className="col-start-3">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
          <div className="col-start-4">
            <div
              className="flex items-center w-56 p-2 rounded-lg gap-x-3 "
              style={shadow}
            >
              <img src={execom} alt="execom pic" className="w-20 h-20"></img>
              <div className="flex flex-col">
                <p className="font-medium text-brown100 w">Niyas</p>
                <p className="font-normal text-brown60">President</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default content;
