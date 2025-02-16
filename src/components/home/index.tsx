import { getBlogPosts } from "@/app/db/blog";
import { MotionDiv } from "@/lib/framer";
import Image from "next/image";
import Link from "next/link";
import { ProjectsData } from "../../data/home";
import Newsletter from "../newsletter";
import MaxWidthWrapper from "../reusable/maxWidthWrapper";

const About = () => {
  return (
    <div className="">
      <p className="text-gray-500">
        {`I'm Raviteja, a seasoned software engineer from Bengaluru, India, with 10 years of experience in crafting scalable web-based applications. My technical proficiency spans Java/J2EE technologies, Spring Boot, Microservices architecture, RESTful web services, Hibernate, React, MySQL, Redis, and RabbitMQ. Additionally, I possess in-depth knowledge of ERP, Retail, and Banking domains, enabling me to deliver industry-specific solutions.`}
      </p>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="mt-16">
      <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
      <ol className="relative border-s border-gray-200">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>

          <div className="flex flex-row items-center gap-2">
            <div className="text-md font-medium text-gray-900">Walmart</div>
            <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
              Feb, 2022 - Present
            </div>
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            Full stack engineer
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>

          <div className="flex flex-row items-center gap-2">
            <div className="text-md font-medium text-gray-900">DBS Bank</div>
            <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
              Oct, 2019 - Feb, 2022
            </div>
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            Full stack engineer
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>

          <div className="flex flex-row items-center gap-2">
            <div className="text-md font-medium text-gray-900">
              Ferns N Petals
            </div>
            <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
              Jul, 2018 - Sep, 2019
            </div>
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            Senior Software Engineer
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>
          <div className="flex flex-row items-center gap-2">
            <div className="text-md font-medium text-gray-900">
              Vasista
            </div>
            <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
              Feb, 2015- Jul, 2018
            </div>
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            Software Engineer
          </div>
        </li>
      </ol>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="mt-16">
      <h1 className="font-medium text-gray-900 mb-4 text-lg">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
        {ProjectsData.map((project) => {
          return (
            <MotionDiv
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="rounded-lg mb-3"
                  alt={project.name}
                />
                <div className="text-sm mb-1 font-medium text-gray-900">
                  {project.name}
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  {project.description}
                </div>
              </a>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
};

const Blogs = () => {
  let allBlogs = getBlogPosts();

  return (
    <div className="mt-16">
      <h1 className="font-medium text-gray-900 mb-4 text-lg">Latest Blogs</h1>
      {allBlogs
        .sort((a, b) => {
          const dateA = new Date(a.metadata.publishedAt) as any;
          const dateB = new Date(b.metadata.publishedAt) as any;

          return dateB - dateA;
        })
        .slice(0, 2)
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 hover:bg-gray-100 p-2 hover:underline"
            href={`/blogs/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs">
                  {post.metadata.publishedAt}
                </p>
                <p className="text-gray-900 text-lg font-medium tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      <Link
        href="/blogs"
        className="hover:underline text-sm"
        aria-label="Read more blogs"
      >
        Read More
      </Link>
    </div>
  );
};

const HomeComponent = () => {
  return (
    <MaxWidthWrapper>
      <About />
      <Experience />
      <Projects />
      <Blogs />
      <div className="mt-16">
        <Newsletter />
      </div>
    </MaxWidthWrapper>
  );
};

export default HomeComponent;
