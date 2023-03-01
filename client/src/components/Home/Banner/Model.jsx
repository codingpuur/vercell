

import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { setVariableData } from '../../../actions/cityAction';




const Model = () => {
  const dispatch = useDispatch();
  const [photo, setPhoto] = useState([
    {
      id: 1,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Delhi_Icon-min.png",
      city: "Delhi NCR",
    },
    {
      id: 2,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Jaipur_Icon-min.png",
      city: "jaipur",
    },
    {
      id: 3,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Bangalore_Icon-min.png",
      city: "Banglore",
    },
    {
      id: 4,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Kolkata_Icon-min.png",
      city: "Kolkata",
    },
    {
      id: 5,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Indore_Icon-min.png",
      city: "Indore",
    },
    {
      id: 6,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Pune_Icon-min.png",
      city: "Pune",
    },
    {
      id: 7,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/india-icon-min.png",
      city: "Across India",
    },
    {
      id: 8,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Hyderabad_min.png",
      city: "Hyderabad",
    },
    {
      id: 9,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Mumbai_min.png",
      city: "Mumbai",
    },

    {
      id: 10,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Kanpur_min.png",
      city: "Kanpur",
    },
    {
      id: 11,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Chennai_min.png",
      city: "Chennai",
    },
    {
      id: 12,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Jammu_min.png",
      city: "Jammu",
    },
    {
      id: 13,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Lucknow_min.png",
      city: "Lucknow",
    },
    {
      id: 14,
      url: "https://deowgxgt4vwfe.cloudfront.net/city-icons/Chandigarh_min.png",
      city: "Chandigarh",
    },
    {
      id: 15,
      url: "	https://deowgxgt4vwfe.cloudfront.net/city-icons/Ahmedabad_min.jpg",
      city: "Ahmedabad",
    },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    dispatch(setVariableData(city));
    closeModal();
  };
  
  return (
    <div className="flex  justify-center items-center  hover:text-black px-2 py-1 rounded-2xl " >
      <button  onClick={openModal}>
        <svg
          stroke="currentColor"
          fill="black"
          stroke-width="0"
          viewBox="0 0 24 24"
          class="_city-button-select-icon mr-1"
          height="2em"
          width="1.3em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path>
        </svg>
      </button>
      {isOpen && (
        <div className="modal mx-2   overflow-hidden  absolute md:left-[17%] lg:left-[30%] rounded-xl   left-0 top-0    bg-white">
          <div className="flex justify-between px-3  border-b-2 text-xl font-bold py-5">
            <p className=" font-thin">Select Your City</p>

            <button
              className=" flex justify-center items-center font-bold"
              onClick={closeModal}
            >
              <ion-icon style= {{backgroundColor:"none"}} name="close"></ion-icon>
            </button>
          </div>
          <p className="py-5 text-center">
            Find more than 3000 decorations, gifts and surprises!
          </p>
          <div className="modal-content  text-center flex justify-center items-center">
            <ul className="grid grid-cols-3 md:grid-cols-4 gap-3 px-10 cursor-pointer">
              {photo.map((photo) => (
                <li
                  className="overflow-hidden  text-xs md:text-sm  text-center  shadow-inner p-1 md:p-4 drop-shadow-lg  md:w-28 flex-col justify-center items-center bg-white"
                  key={photo.id}
                  onClick={() => handleCitySelect(photo.city)}
                >
                  <img
                    className=" object-fit h-10 mx-auto"
                    key={photo.id}
                    src={photo.url}
                    alt="photo"
                  />
                  {photo.city}
                </li>
              ))}
            </ul>
          </div>
          <div className="   border-t-2 p-8 mt-4 font-bold text-xs">
            <p>
              Only Looking for Decoration Material & DIY Kits to be delivered
              anywhere in India ?
            </p>
          </div>
          <div className=" bg-green-500 w-full h-1"></div>
        </div>
      )}
      {selectedCity && <p className=" text-black" > {selectedCity}</p>}
    </div>
  );
};

export default Model;
