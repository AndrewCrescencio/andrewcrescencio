import Image from "next/image";

export const Company = ({ name, logo, role, responsibilities }) => {
  return (
    <>
      <Image
        width={logo.width}
        height={logo.height}
        src={logo.url}
        alt={name + " logo"}
      />
      <div>{name}</div>
      <p>{role}</p>
      <ul>
        {responsibilities.map((responsibility, i) => {
          return <li key={i}>{responsibility.description}</li>;
        })}
      </ul>
    </>
  );
};
