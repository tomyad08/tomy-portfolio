import { DataWoriking } from "../DataStatic.tsx/DataWorking";

const Working = () => {
  const listWorking = DataWoriking;
  return (
    <div className="bg-slate-200 text-black p-4 md:p-10" id="workingexperience">
      <h1 className="text-center text-3xl font-bold text-purple-800 mb-5">
        Working Experiences
      </h1>
      <div className="flex justify-center">
        <div className="w-full md:w-3/4">
          {listWorking.map((value) => (
            <div key={value.id}>
              <h1 className="text-lg font-semibold border-b-2 border-slate-200 my-4">
                {value.company}
              </h1>
              <p className="text-sm">• {value.list1}</p>
              <p className="text-sm">• {value.list2}</p>
              <p className="text-sm">• {value.list3}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Working;
