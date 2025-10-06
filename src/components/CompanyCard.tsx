const CompanyCard = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
      <div className="bg-purple-800 h-120 w-220 flex">
        <div className="w-1/2 flex flex-col justify-between items-start pl-10">
          <div className="h-1/3 pt-10 font-medium text-2xl ">Super Protech Ltd </div>
          <div className="h-1/3 flex flex-col gap-2">
            <p className="text-white font-bold text-5xl">Company</p>
            <p className="text-white font-bold text-5xl">Town Hall</p>
            <p className="text-white text-2xl">January 8,2015</p>
          </div>
          <div className="h-1/3">
            <button className="bg-white text-purple-800 px-16 py-1 rounded-sm mt-16">WATCH FROM HERE</button>
          </div>
        </div>

        <div className="w-1/2 flex items-center justify-center">
          <img
            className="h-100 w-96 border-white rounded-4xl border-20"
            src="https://tse1.mm.bing.net/th/id/OIP.q2eieGW4rZQjwLCsa9KK0AHaDt?pid=Api&P=0&h=220"
            alt="Animated Image Of Girk"
          />
        </div>
      </div>
    </div>
  );
};

export default CompanyCard;
