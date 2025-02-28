import Tippy from "@tippyjs/react";
import { useState } from "react";

const Image = ({ imgUrl, token , isDarkMode }) => {
  const [imageUrl, setImageUrl] = useState(imgUrl);
  return (
    <a
      href={`https://etherscan.io/address/${token}`}
      className={`href ${isDarkMode &&   "darkMode"  }`}
    >
      <Tippy
        content={token}
        maxWidth="none"
      >
        <img
          src={imageUrl}
          alt="Error"
          className={`img ${isDarkMode &&   "darkMode"   }`}
          onError={() =>
            setImageUrl("https://etherscan.io/images/main/empty-token.png")
          }
        />
      </Tippy>
    </a>
  );
};

export default Image;
