const CompanyProfile = () => {
  return (
    <div className="company-profile w-full bg-white p-10 mt-10">
      <div className="flex justify-center items-center flex-col lg:flex-row">
        <div className="">
          <img src="./logo.jpg" className="w-[14rem] lg:w-[300px]" alt="" />
        </div>
        <div className="">
          <div className="text-3xl">
            <p className="text-black">Company</p>
            <p className="text-black">Profile</p>
          </div>
          <div className="text-sm mt-5">
            <p className="text-black">
              Established in 2015, Kook sportswear is a men's garment brand
              under,
            </p>
            <p className="text-black">
              `jitesh fabrics`, manufacturer of sports wear and clothing house{" "}
            </p>
            <p className="text-black">
              We believe in manufacturing quality products with every piece
              being inspected
            </p>
            <p className="text-black">by hand to perfection.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
