import React from "react";

const PlaylistCard = ({ jsonList }) => {
  return (
    <div>
      <a href={"/playlist/" + jsonList.ID}>
        <div
          className="
          bg-gray-200
          hover:bg-gray-100
          transition duration-500 ease-in-out
          animate-slideup
          rounded-md
          grid grid-cols-1 grid-rows-2 justify-center items-center 
          m-6 pl-8 pr-8 h-60
        "
        >
          <div className="top-0 mt-8">
            <img
              src={jsonList.Image}
              className="w-64 h-32 object-cover top-0 rounded-t-md"
              style={{ objectFit: "cover" }}
            />
          </div>
          
          <div className="relative bottom-0 text-white text-center font-bold line-clamp-2 ">
            <a href={jsonList.Link} className="hover:text-secondary underline">
              {jsonList.Title}
            </a>
          </div>
        </div>
      </a>
    </div>
  );
};

export default PlaylistCard;
