import Image from "next/image";
import Link from "next/link";

const SocialsData = [
  {
    id: 1,
    name: "Twitter",
    icon: "/images/icons/x.svg",
    link: "https://x.com/teja008",
  },
  {
    id: 2,
    name: "Github",
    icon: "/images/icons/github.svg",
    link: "https://github.com/draviteja",
  },
  {
    id: 3,
    name: "Linkedin",
    icon: "/images/icons/linkedin.svg",
    link: "https://www.linkedin.com/in/ravitejadaggupati",
  },
];

const Navbar = () => {
  return (
    <>
      <div>
        <Link href="/">
          <Image
            src="/images/profilepic.jpeg"
            width={120}
            height={200}
            className="rounded-full object-fit w-[50px] h-[50px]"
            alt="profile-picture"
            loading="eager"
          />
        </Link>
        <h1 className="font-medium text-gray-900 mt-2 text-xl font-heading">
          Raviteja Daggupati
        </h1>
        <p className="text-gray-500">Software Engineer</p>
        <div className="flex flex-row justify-between items-center mt-6">
          <div className="flex flex-row gap-x-3">
            {SocialsData.map((social) => {
              return (
                <Link
                  href={social.link}
                  key={social.id}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    width={24}
                    height={24}
                    src={social.icon}
                    alt={social.name}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="border-b w-full my-8"></div>
    </>
  );
};

export default Navbar;
