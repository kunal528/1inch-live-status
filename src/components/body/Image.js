import { useState } from "react";

const Image = ({ imgUrl }) => {
  const [imageUrl, setImageUrl] = useState(imgUrl);
  return (
    <img
      src={imageUrl}
      alt="Error"
      className= "img"
      onError={() =>
        setImageUrl("https://etherscan.io/images/main/empty-token.png")
      }
    />
  );
};

export default Image;
