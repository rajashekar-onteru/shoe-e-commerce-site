import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";

function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <img src={footerLogo} width={150} height={46} />
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            your perfect size in store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((item, index) => {
              return (
                <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                  <img src={item.src} width={24} height={24} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                  {item.title}
                </h4>
                <ul>
                  {item.links.map((link, index) => {
                    return (
                      <li className="text-white-400 mt-3 font-montserrat tex-base leading-normal hover:text-slate-gray cursor-pointer">
                        <a>{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white mt-20 max-sm:flex-col">
        <div className="flex flex-1 justify-start items-center font-montserrat gap-2 cursor-pointer">
          <img
            src={copyrightSign}
            height={20}
            width={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
}

export default Footer;
