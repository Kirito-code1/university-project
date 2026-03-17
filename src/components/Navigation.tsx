import { useState } from "react";
import { useI18n } from "../i18n";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { key: "nav.about", href: "#about" },
    { key: "nav.academics", href: "#faculties" },
    { key: "nav.research", href: "#research" },
    { key: "nav.admissions", href: "#admissions" },
    { key: "nav.campusLife", href: "#campus-life" },
    { key: "nav.news", href: "#news" },
    { key: "nav.contact", href: "#contact" },
  ];

  const { t } = useI18n();

  return (
    <div className="relative lg:ml-6">

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-md font-semibold text-sm"
      >
        <span>{isOpen ? "Close Menu" : "Menu"}</span>
      </button>

      <nav className="hidden lg:flex items-center text-[16px] font-semibold text-black gap-x-10 xl:gap-x-12">
        {menuItems.map((item) => (
          <a
            key={item.key}
            href={item.href}
            className="flex items-center space-x-1.5 cursor-pointer hover:text-[#00C9A7] transition-colors whitespace-nowrap"
          >
            <span>{t(item.key)}</span>
          </a>
        ))}
      </nav>

      {isOpen && (
        <div className="absolute right-0 top-[calc(100%+12px)] w-[min(88vw,360px)] bg-white shadow-xl z-50 lg:hidden border border-slate-100 rounded-xl">
          <div className="flex flex-col p-4 space-y-4">
            {menuItems.map((item) => (
              <div
                key={item.key}
                className="border-b border-gray-50 pb-2"
              >
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex justify-between items-center text-[16px] font-medium"
                >
                  <span>{t(item.key)}</span>
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
