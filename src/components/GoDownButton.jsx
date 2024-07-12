import { GoChevronDown } from "react-icons/go";

const GoDownButton = () => {
  const scrollToSection = () => {
    const section = document.getElementById("home-works-section");

    if (section) {
      window.scrollTo({ top: section.offsetTop, behavior: "smooth" });
    }
  };

  return (
    <button className="btn-arrow-down" onClick={scrollToSection}>
      <GoChevronDown />
      <span className="arrow-down-text">Scroll down</span>
    </button>
  );
};

export default GoDownButton;
