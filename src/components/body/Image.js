import { useState } from "react";

const Image = ({ imgUrl }) => {
  const [imageUrl, setImageUrl] = useState(imgUrl);
  return (
    <img
      src={imageUrl}
      height={86}
      width={86}
      alt="Error"
      onError={() =>
        setImageUrl("https://etherscan.io/images/main/empty-token.png")
      }
    />
  );
};

export default Image;
