import React from "react";

const Contact = () => {
  return (
    <div className="px-[550px] my-[100px] snap-start snap-always">
      <div className="flex flex-col">
        <label className="text-6xl font-semibold pb-[30px]">Contact Me</label>
        <label className="text-2xl pb-[50px]">
          I love connecting with different people and it would be awesome if we
          could get in touch :) You can find me on these platforms:
        </label>

        <div className="flex flex-row justify-between">
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

          <a href="mailto:ankush.ad050203@gmail.com">
            <img
              src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/mail-512.png"
              alt="twitter"
              className="h-[50px] w-[50px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
