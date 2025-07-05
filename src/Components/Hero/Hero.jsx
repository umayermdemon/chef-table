
const Hero = () => {
  return (
    <div>
      <div
        className="hero h-full object-cover rounded-xl mx-2 lg:mx-auto w-[96%] lg:w-full"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/8gbVQZ4/hero.jpg')",
        }}
      >
        <div className="hero-overlay rounded-xl p-24 lg:p-72"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="mx-auto lg:mx-36">
            <h1 className="mb-3 lg:mb-5 text-base lg:text-5xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
            <p className="mb-3 lg:mb-5 text-xs lg:text-base">
            Indulge in culinary wonders at Tasty Twist, where flavors meet creativity. Discover a fusion of taste in every dish. Welcome to a gastronomic journey like no other.
            </p>
          <button className="btn bg-[#0BE58A] hover:bg-[#0BE58A] border-none text-sm lg:text-base rounded-2xl font-medium
      ">Explore Now</button>
            <button className="btn btn-outline text-white rounded-2xl font-medium text-sm lg:text-base ml-4">Our Feedback</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
