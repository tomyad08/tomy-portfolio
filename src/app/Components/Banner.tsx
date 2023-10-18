import { DataSkill } from "../DataStatic.tsx/DataSkill";
interface DataSkill {
  id: number;
  name: string;
}
const Banner = () => {
  const listSkill: DataSkill[] = DataSkill;

  return (
    <div className=" xl:bg-slate-200" id="aboutme">
      <div className="xl:flex xl:justify-around pt-20 xl:pt-24">
        <div className="relative flex justify-center -top-1">
          <div className="absolute top-0 xl:m-4 xl:w-52 w-full h-24 bg-purple-800 xl:h-52 xl:bg-gradient-to-b xl:from-white xl:to-purple-800 xl:rounded-full p-5 z-5"></div>
          <div className="absolute right-10 top-4 w-10 h-10 xl:w-24 xl:h-24 bg-gradient-to-b from-slate-400 to-blue-500 rounded-full p-5 z-5"></div>
          <div className="absolute right-10 top-24 w-14 h-14 xl:w-96 xl:h-96 bg-gradient-to-b from-slate-200 to-pink-600 rounded-full p-5 z-5"></div>
          <img
            src="/tomy.png"
            alt="photo profil"
            className="z-10 w-2/5 xl:w-full rounded-full bg-blue-100 xl:bg-transparent"
          />
        </div>
        <div className="xl:mx-10 xl:mt-5 bg-slate-200 p-5 w-full xl:w-2/4">
          <p className="text-3xl xl:text-8xl font-bold text-purple-800 drop-shadow-xl">
            Tomy Adiansyah
          </p>
          <p className="text-sm text-justify text-black py-5">
            I am a graduate from physics department in Universitas Indonesia
            2021. I love coding since my last semester to solve math-physics
            problems. But in sep 2022, I tried to learn everything about
            frontend web development. In the past few months, I have also been
            exploring server-side rendering technology in Next JS, learning the
            GraphQL query language, state management using Redux, and creating
            rest api with Node JS and express JS. In the future, I want to
            become a software engineer.
          </p>
          <h1 className="font-semibold text-xl text-purple-800 mb-2">
            My Skill
          </h1>

          <div className="flex justify-between">
            <div className="columns-3 xl:columns-6 w-full">
              {listSkill.map((value) => (
                <div
                  className="bg-blue-700 text-purple-100 p-1 mb-2 me-2 rounded-lg text-sm text-center"
                  key={value.id}
                >
                  {value.name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
