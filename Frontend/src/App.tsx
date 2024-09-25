import BodyContent from "./BodyContent";

function App() {
  return (
    <div className="bg-cover bg-[#F8FAFC] w-full h-[100vh] m-auto relative">
      <div className=" flex items-center justify-center h-full w-full absolute  ">
        <BodyContent />
      </div>
      <div className="flex justify-end relative  h-full">
        <div className=" mr-4 w-[600px] h-[700px] bg-[#F8FAFC] rounded-lg mt-3">
          <div className=" flex justify-between p-4 pb-0 pl-6 pr-6 rounded-lg">
            <div className="flex items-center justify-center font-bold text-xl">
              Task details
            </div>
            <div className=" bg-[#F8FAFC] h-10 w-10 border-2 border-[#00000033] rounded-xl flex items-center justify-center">
              <img src="public\icon\close_ring_duotone-1.svg" />
            </div>
          </div>
          <div className="mt-4">
            <div className=" h-5 text-xs text-[#97A3B6] pl-6">Task name</div>
            <div className=" flex justify-between pb-0 pl-6 pr-6 ">
              <input
                type="text"
                className="flex items-center justify-center text-xl border-2 border-[#00000033]  outline-[#3662E3] w-full h-9 rounded-lg"
              />
            </div>
          </div>
          <div>
            <div className="mt-5">
              <div className=" h-5 text-xs text-[#97A3B6] pl-6">
                Description
              </div>
              <div className=" flex justify-between pb-0 pl-6 pr-6 ">
                <textarea
                  placeholder="Enter a short description"
                  className=" justify-center text-lg border-2 border-[#00000033]  outline-[#3662E3] w-full h-32 rounded-lg"
                />
              </div>
              <div className="mt-5">
                <div className=" h-5 text-xs text-[#97A3B6] pl-6">Icon</div>
                <div className=" flex justify-between pb-0 pl-6 pr-6 ">
                  <div className=" w-full h-10 space-x-3 flex items-center">
                    <div className="w-10 h-10 bg-[#E3E8EF] flex items-center justify-center rounded-xl ">
                      <img src="public\icon\close_ring_duotone-1.svg" />
                    </div>
                    <div className="w-10 h-10 bg-[#E3E8EF] flex items-center justify-center rounded-xl ">
                      <img src="public\icon\close_ring_duotone-1.svg" />
                    </div>
                    <div className="w-10 h-10 bg-[#E3E8EF] flex items-center justify-center rounded-xl ">
                      <img src="public\icon\close_ring_duotone-1.svg" />
                    </div>
                    <div className="w-10 h-10 bg-[#E3E8EF] flex items-center justify-center rounded-xl ">
                      <img src="public\icon\close_ring_duotone-1.svg" />
                    </div>
                    <div className="w-10 h-10 bg-[#E3E8EF] flex items-center justify-center rounded-xl ">
                      <img src="public\icon\close_ring_duotone-1.svg" />
                    </div>
                    <div className="w-10 h-10 bg-[#E3E8EF] flex items-center justify-center rounded-xl ">
                      <img src="public\icon\close_ring_duotone-1.svg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <div className=" h-5 text-xs text-[#97A3B6] pl-6">Status</div>
                <div className="flex space-x-4 ml-6 ">
                  <div className="w-[48%]">
                    <div className=" h-14 cursor-pointer flex items-center border-2 border-[#00000033] p-1 rounded-2xl ">
                      <div className="w-10 h-10  bg-[#E9A23B] flex items-center justify-center rounded-xl ">
                        <img src="public\icon\Time_atack_duotone.svg" />
                      </div>
                      <span className="font-semibold ml-3">In progress</span>
                    </div>
                    <div className=" mt-2 cursor-pointer h-14 flex items-center border-2 border-[#00000033] p-1 rounded-2xl ">
                      <div className="w-10 h-10 bg-[#DD524C] flex items-center justify-center rounded-xl ">
                        <img src="public\icon\close_ring_duotone.svg" />
                      </div>
                      <span className="font-semibold ml-3">Won't do</span>
                    </div>
                  </div>
                  <div className=" w-[47%] cursor-pointer h-14 flex items-center border-2 border-[#00000033] p-1 mr-6 rounded-2xl ">
                    <div className="w-10 h-10 bg-[#32D657] flex items-center justify-center rounded-xl ">
                      <img src="public\icon\Done_round_duotone.svg" />
                    </div>
                    <span className="font-semibold ml-3">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full  mt-28 mb-5 space-x-4 flex justify-end h-10 items-center pr-5">
            <div className="flex items-center justify-center w-28 space-x-2 bg-[#97A3B6] text-[#F8FAFC]  p-2 rounded-full cursor-pointer">
              <span>Delete</span> <img src="public\icon\Trash.svg"/>
            </div>
            <div className="flex items-center justify-center w-28 space-x-2 bg-[#3662E3] text-[#F8FAFC] p-2 rounded-full cursor-pointer">
              <span>Save</span> <img src="public\icon\Done_round.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
