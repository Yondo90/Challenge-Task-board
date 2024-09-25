//import React from 'react'
{
  /**interface Props {
    taskName: string
    image1: string
    image2: string
}**/
}

const TaskComponent = () => {
  return (
    <div>
      <div className="text-black bg-[#F5D565] rounded-xl mt-10 mb-5 flex items-center h-16 font-bold justify-between">
        <div className="flex items-center">
          <div className="bg-[#F8FAFC] ml-4 mr-6 w-10 flex items-center justify-center rounded-xl h-10">
            <img src="public\alarm-clock.svg" />
          </div>
          Task in Progress
        </div>
        <div className="bg-[#E9A23B] mr-4 w-10 rounded-xl flex items-center justify-center h-10">
          <img src="public\icon\Time_atack_duotone.svg" />
        </div>
      </div>
      <div className="text-black bg-[#A0ECB1] rounded-xl mb-5 flex items-center h-16 font-bold justify-between">
        <div className="flex items-center">
          <div className="bg-[#F8FAFC] ml-4 mr-6 w-10 flex items-center justify-center rounded-xl h-10">
            <img src="public\biceps-flexed.svg" />
          </div>
          Task Completed
        </div>
        <div className="bg-[#32D657] mr-4 w-10 rounded-xl flex items-center justify-center h-10">
          <img src="public\icon\Done_round.svg" />
        </div>
      </div>
      <div className="text-black bg-[#F7D4D3] rounded-xl mb-5 flex items-center h-16 font-bold justify-between">
        <div className="flex items-center">
          <div className="bg-[#F8FAFC] ml-4 mr-6 w-10 flex items-center justify-center rounded-xl h-10">
            <img src="public\coffee.svg" />
          </div>
          Task Won't Do
        </div>
        <div className="bg-[#DD524C] mr-4 w-10 rounded-xl flex items-center justify-center h-10">
          <img src="public\icon\close_ring_duotone.svg" />
        </div>
      </div>
      <div className="text-black bg-[#00000033] rounded-xl mb-5 flex items-center h-[118px]  justify-between">
        <div className="flex items-center relative">
          <div className=" h-24">
            <div className="bg-[#F8FAFC] ml-4 mr-6 w-10 flex items-center justify-center rounded-xl h-10">
              <img src="public\coffee.svg" />
            </div>
          </div>
          <div className=" ml-2">
            <div className=" w-20rem h-20">
              <div className="font-bold">Task To Do</div>
              <div className="text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, officiis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black bg-[#F5E8D5] rounded-xl flex items-center h-16 font-bold justify-between">
        <div className="flex items-center">
          <div className="bg-[#E9A23B] ml-4 mr-6 w-10 flex items-center justify-center rounded-xl h-10">
            <img src="public\icon\Add_round_duotone.svg" />
          </div>
          Add new task
        </div>
      </div>
    </div>
  );
};

export default TaskComponent;
