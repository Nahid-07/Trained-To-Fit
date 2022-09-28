import React from "react";
import image from "../../image/IMG_7565.JPG";
import AddBreak from "../AddBreak/AddBreak";
import Excercise from "../Excercise/Excercise";
const ContainerSideBar = () => {
  return (
    <div className="sticky top-2">
      <div>
        <div className="flex flex-col items-center mt-6">
          <img
            className="rounded-full w-[150px] h-[150px]"
            src={image}
            alt=""
          />
          <h1 className="text-3xl font-medium">Nahidul Islam Asif</h1>
          <p>Address : 26/A Narinda</p>
        </div>
        <div className="flex justify-evenly mt-5 mx-3 border-4 border-slate-400 p-1">
          <div className="bg-slate-400 p-2 md:p-5 rounded text-slate-50">
            <span className="text-4xl font-bold ">52</span>
            <small>kg</small>
          </div>
          <div className="bg-slate-400 p-2 md:p-5 rounded text-slate-50">
            <span className="text-4xl font-bold ">5'6</span>
            <small>inch</small>
          </div>
          <div className="bg-slate-400 p-2 md:p-5 rounded text-slate-50">
            <span className="text-4xl font-bold ">24</span>
            <small>years</small>
          </div>
        </div>
        <AddBreak></AddBreak>
        <Excercise></Excercise>
      </div>
    </div>
  );
};

export default ContainerSideBar;
