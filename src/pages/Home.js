import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col snap-start snap-always">
      <div className="flex flex-row justify-between mx-[40px]">
        <div>
          <img
            src="https://www.creativefabrica.com/wp-content/uploads/2021/11/17/AD-initial-logo-design-AD-logo-Graphics-20338415-1-580x387.jpg"
            alt="initials"
            className="h-[70px] w-[100px]"
          />
        </div>

        <div className="flex flex-row mt-[20px]">
          <label className="px-[60px] text-slate-400 text-sm">HOME</label>
          <label className="px-[60px] text-slate-400 text-sm">ABOUT</label>
          <label className="px-[60px] text-slate-400 text-sm">PROJECTS</label>
          <label className="px-[60px] text-slate-400 text-sm">CONTACT</label>
        </div>

        <div className="flex flex-row mt-[10px]">
          <a href="https://www.linkedin.com/in/ankush-dutta-920b5b202/">
            <img
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_gray-512.png"
              alt="linkedin"
              className="h-[40px] w-[40px] "
            />
          </a>
          <a href="https://twitter.com/Ankush_523">
            <img
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/twitter_circle_gray-512.png"
              alt="twitter"
              className="h-[40px] w-[40px]"
            />
          </a>
          <a href="https://github.com/Ankush523">
            <img
              src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/github_circle_gray-512.png"
              alt="twitter"
              className="h-[40px] w-[40px]"
            />
          </a>
        </div>
      </div>

      <div className="px-[400px] my-[100px] ">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://media-exp1.licdn.com/dms/image/C5603AQFppjPNkBEjpA/profile-displayphoto-shrink_400_400/0/1656403861773?e=1672876800&v=beta&t=IQBS3hUUp3UJbzDaejyAEnykntCQ1h43VvZ26CEvfeQ"
            alt="me"
            className="h-[200px] w-[200px] rounded-full "
          />
          <label className="mt-[30px] text-3xl font-bold">Hi, I'm Ankush</label>
          <label className="text-sm mt-[10px] text-gray-500">
            Full-stack Web3 Developer
          </label>
          <label className="mt-[30px] text-6xl font-semibold">Passionate</label>
          <label className="text-6xl font-semibold">to craft amazing</label>
          <label className="text-6xl font-semibold">digital product.</label>
        </div>
      </div>
    </div>
  );
};

export default Home;
