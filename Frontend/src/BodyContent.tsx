//import { LucidePencil } from "lucide-react";

import TaskComponent from "./components/TaskComponent";
//import TaskModal from "./modal/TaskModal";

const BodyContent = () => {
  return (
    <div className=" pt-[48px] absolute ">
      <div className="text-xl bg-[#F8FAFC] w-[552px] m-auto h-[600px] ">
        <div className="">
          <div className="text-black lg:text-4xl text-4xl h-12 w-full  flex items-center ">
            <img src="/icon/Logo.svg" className="mr-3" /> My Task Board
            <span className="ml-3">
              <img src="/icon/Edit_duotone.svg" className="mr-3" />
            </span>
          </div>
          <div className="text-black text-xs pl-14 mt-3">
            Tasks to keep organised
          </div>

          <TaskComponent />
        </div>
      </div>  
    </div>
  );
};

export default BodyContent;
