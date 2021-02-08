import Tippy from "@tippyjs/react";
import { useState } from "react";

const Image = ({ imgUrl, token }) => {
  const [imageUrl, setImageUrl] = useState(imgUrl);
  return (
    <a href={`https://etherscan.io/address/${token}`}>
      <Tippy content={token} maxWidth="none">
        <img
          src={imageUrl}
          alt="Error"
          className="img"
          onError={() =>
            setImageUrl("https://etherscan.io/images/main/empty-token.png")
          }
        />
      </Tippy>
    </a>
  );
};

export default Image;
