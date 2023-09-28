import img from "../../../assets/about.png";

const About = () => {
  return (
    <div className="hero min-h-fit bg-base-100 shadow-lg mx-auto mt-5">
      <div className="hero-content flex-col lg:flex-row" data-aos="fade-left">
        <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
        <div data-aos="fade-right">
          <h1 className="text-5xl text-center font-bold">About Us</h1>
          <p className="py-6 text-xl">
            At Leafy Universe, our love for trees runs deep. We believe in the
            intrinsic beauty, environmental importance, and sheer wonder that
            trees bring to our lives. Whether you're a seasoned tree enthusiast,
            a budding horticulturalist, or simply someone looking to add a touch
            of green to your world, we're here to help you connect with the
            perfect tree..
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
