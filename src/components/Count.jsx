export default function Count({ count, time }) {
    return (
      <div className="mx-4 first:ml-0 last:mr-0 ">
        <div className="relative block min-w-[11rem] p-6 mb-6 text-[6rem] bg-[#2d2d2d] text-green-500 rounded-lg shadow-md overflow-hidden font-bold sm:min-w-auto sm:p-4 sm:text-[3rem]">
          <div className="absolute inset-0 bg-black/20 transition-transform duration-800 ease-in-out">
            <div className="absolute right-[-0.5rem] bottom-[-0.5rem] bg-[#1e1e1e] w-4 h-4 rounded-full"></div>
            <div className="absolute left-[-0.5rem] bottom-[-0.5rem] bg-[#1e1e1e] w-4 h-4 rounded-full "></div>
          </div>
          <div className="text-bold">
          {count}
          </div>
          
        </div>
        <p className="text-lg text-gray-500 sm:text-xs">{time}</p>
      </div>
    );
  }
  