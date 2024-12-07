import { Logo } from "./Logo";
import { ContactInfo } from "./ContantInfo";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <ContactInfo />
        </div>
      </div>
    </header>
  );
};
