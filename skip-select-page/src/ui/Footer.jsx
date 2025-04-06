import { icons } from "../utils/icons";
import Button from "./Button";
import Icon from "./Icon";

const { arrowRight } = icons;

function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium"></h3>

            <div>
              <span className="text-xl font-bold text-[#0037C1]">£</span>
              <span className="text-sm text-gray-400 ml-2">7 days</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Button className="w-full py-2 px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1] hover:text-white">
              <span className="text-[17px] font-semibold">Back</span>
            </Button>

            <Button className="w-full py-2 px-4 md:px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#0037C1] hover:bg-[#002da1] text-white hover:text-white">
              <span className="text-[17px] font-semibold">Continue</span>
            </Button>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <h3 className="font-medium"></h3>
              <p className="text-sm text-gray-400">6</p>
            </div>

            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#0037C1] mb-[.4rem]">
                £
              </span>
              <span className="text-sm text-gray-400 ml-2">7 days hire</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Button className="w-full py-2 px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#2A2A2A] text-white hover:bg-[#3A3A3A] hover:border-[#0037C1] hover:text-white">
              <span className="text-[17px] font-semibold">Back</span>
            </Button>

            <Button className="w-full py-2 px-4 md:px-4 rounded-md transition-all flex items-center justify-center space-x-2 bg-[#0037C1] hover:bg-[#002da1] text-white hover:text-white">
              <span className="text-[17px] font-semibold">Continue</span>

              <Icon
                icon={arrowRight}
                className="w-4 h-4 lucide lucide-arrow-right"
              />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
