import Image from "next/image";

export const TechItem = ({ url, alt, width, height }) => {
  return (
    <Image src={url} alt={alt} width={width} height={height} title={alt} />
  );
};
