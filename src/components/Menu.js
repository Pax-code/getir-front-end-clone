import React, { useState, useEffect } from "react";
import { Collapse } from "react-collapse";
import { useWindowWidth } from "@react-hook/window-size";
import { IoIosArrowDown } from "react-icons/io";

function Menu({ title, items }) {
  const windowWidth = useWindowWidth();
  const [isOpen, setIsOpen] = useState(true);

  const toggleCollapse = () => {
    if (windowWidth <= 768) {
      setIsOpen(!isOpen);
    }
  };

  useEffect(() => {
    if (isOpen && windowWidth <= 768) {
      setIsOpen(false);
    }
    if (!isOpen && windowWidth > 768) {
      setIsOpen(true);
    }
  }, [windowWidth]);

  return (
    <section>
      <nav className="grid gap-y-4">
        <h6
          onClick={toggleCollapse}
          className="text-lg text-primary-brand-color flex items-center justify-between"
        >
          {title}
          <button className="w-6 h-6 place-items-center rounded-lg bg-primary-brand-color bg-opacity-10 text-brand-color md:hidden">
            <span
              className={`transition-all transform ${
                isOpen ? "-rotate-180" : ""
              }`}
            >
              <IoIosArrowDown size={14} />
            </span>
          </button>
        </h6>
        <Collapse isOpened={isOpen}>
          <nav>
            <ul className="grid gap-y-2">
              {items.map((item, key) => (
                <li key={key}>
                  <a href="#" className="text-sm hover:text-brand-color">
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Collapse>
      </nav>
    </section>
  );
}

export default Menu;
