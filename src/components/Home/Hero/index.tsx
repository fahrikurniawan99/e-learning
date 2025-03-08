import Dropdownone from "./Dropdownone";
import Dropdowntwo from "./Dropdowntwo";

const Banner = () => {
  return (
    <section className="  pt-40">
      <div className="relative px-6 lg:px-8">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl md:4px">
              Upgrade skill gratis <br /> hanya disini
            </h1>
            <p className="mt-6 text-lg leading-8 text-black">
              Cari kursus yang sesuai dengan kebutuhanmu, <br /> mulai dari
              pemula hingga mahir.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <div className="hidden sm:flex -space-x-2 overflow-hidden gap-5">
                <img
                  className="w-10 aspect-square"
                  src="/images/techStack/html5.svg"
                  alt=""
                />
                <img
                  className="w-10 aspect-square"
                  src="/images/techStack/css3.svg"
                  alt=""
                />
                <img
                  className="w-10 aspect-square"
                  src="/images/techStack/js.svg"
                  alt=""
                />
                <img
                  className="w-10 aspect-square"
                  src="/images/techStack/php.svg"
                  alt=""
                />
                <img
                  className="w-10 aspect-square"
                  src="/images/techStack/go.svg"
                  alt=""
                />
                <img
                  className="w-10 aspect-square"
                  src="/images/techStack/c++.svg"
                  alt=""
                />
                <img
                  className="w-10 aspect-square"
                  src="/images/techStack/python.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
