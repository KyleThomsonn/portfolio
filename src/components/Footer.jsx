import { getYear } from "../utilities/Utilities";
import { author } from "../global/global";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <footer>
      <p>
        &copy; {getYear()} {author}
      </p>
      <div className="social-icons">
        <SocialIcon
          url="https://github.com/KyleThomsonn"
          target="_blank"
          bgColor="#554EEF"
          style={{ width: "2rem", height: "2rem" }}
        />
        <SocialIcon
          url="https://www.linkedin.com/in/kylethomsonn"
          target="_blank"
          bgColor="#554EEF"
          style={{ width: "2rem", height: "2rem" }}
        />
        <SocialIcon
          url="mailto:kyle@kylescode.com"
          bgColor="#554EEF"
          style={{ width: "2rem", height: "2rem" }}
        />
      </div>
    </footer>
  );
}

export default Footer;
