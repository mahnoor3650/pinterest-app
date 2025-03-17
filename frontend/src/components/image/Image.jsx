import { IKImage } from "imagekitio-react";
import React from "react";

const Image = ({ path, alt, className, height, width }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_URL_IMGEKIT}
      path={path}
      transformation={[
        {
          height: height,
          width: width,
        },
      ]}
      alt={alt}
      className={className}
      loading="lazy"
      lqip={{ active: true, quality: 20 }}
    />
  );
};

export default Image;
