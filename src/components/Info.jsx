import Button from "./Button";
import { research } from "../assets";

const Info = () => {
  return (
    <section className="flex lg:flex-row flex-col">
      <div className="flex-1 bg-slate-900 lg:pl-10 md:pl-32 pl-10 py-10 pr-10 flex flex-col">
        <h2 className="text-white font-poppins font-bold text-[24px] mb-6">
          About Computer <br className="lg:block hidden" /> Vision Technology
        </h2>
        <p className="text-dimWhite font-poppins font-normal text-[12px] leading-6 max-w-[500px] mb-4">
          The Computer Vision Technology (CVT) is a leading global research
          center dedicated to pushing the frontiers of knowledge. Our teams of
          scientists, researchers and engineers work in an open, flexible and
          agile environment to deliver discovery science and transformative
          technologies.
        </p>

        <p className="text-dimWhite font-poppins font-normal text-[12px] leading-6 max-w-[500px] mb-6">
          We are part of the Abu Dhabi Government’s{" "}
          <span>Advanced Technology Research Council (ATRC)</span>, which
          oversees technology research in the emirate.
        </p>

        <Button
          content="Who we are"
          customStyle="bg-white text-black"
          isArrow
        />
      </div>

      <div className="flex-1 bg-emerald-300 lg:pl-10 md:pl-32 pl-10 py-10 pr-10 flex justify-between items-start">
        <div >
            <h2 className="text-black font-poppins font-bold text-[24px] mb-9 mt-3">
            Research Centers
            </h2>
            <p className="text-emerald-900 font-poppins font-normal text-[12px] leading-6 max-w-[600px] mb-4">
                10 Research Centers, 100+ International Collaborations <br /> & <br /> 27+ Patents being worked on
            </p>
            <Button content='Explore all centers' customStyle='bg-white text-black' isArrow />
        </div>

        <div >
            <img src={research} alt="research" className="w-[60px] mt-10" />
        </div>
      </div>
    </section>
  );
};

export default Info;
