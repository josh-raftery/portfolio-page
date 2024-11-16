import { useState } from "react";
import Github from "./Github";

function Projects() {
  const projects = [
    {
      title: "PulseWire",
      id: 1,
      url: "https://pulsewire.netlify.app/",
      github: "https://github.com/josh-raftery/fe-nc-news",
      img: "/assets/pulsewire.gif",
      features: [
        "View Articles",
        "Filter Articles",
        "Article Pagination",
        "Search Bar",
        "Post Article",
        "View Topics",
        "View Article",
        "Like, Dislike Article",
        "Share Article",
        "Preview Top Articles",
        "Preview Top Articles Pagination",
        "Preview Related Articles",
        "Preview Related Articles Pagination",
        "View Comments",
        "Like, Dislike Comments",
        "Comment Pagination",
        "Day/Night Theme Switcher",
        "Sign In, Sign Up and Sign Out.",
        "Accessible design such as optimistic rendering and intuitive error handling around input fields.",
        "Mobile first design with dynamic page styling catering for mobile, tablet and monitor screens.",
        "Modals implemented to restrict access to user only features.",
        "Dynamic SVG icons - adjusting to browser theme.",
      ],
      summary:
        "News site application - read, comment on, post, like and share news articles.",
      technologies: ["React.js", "CSS", "HTML", "TailwindCSS"],
    },
    {
      title: "PulseWire API",
      github: "https://github.com/josh-raftery/be-nc-news",
      id: "2",
      img: "/assets/pulsewireAPI.png",
      url: "https://be-nc-news-ml9n.onrender.com/api",
      features: [
        "PostgreSQL database",
        "MVC pattern SQL database querying",
        "Express.js API route handling",
        "Jest automated testing suite with 100+ tests including database seeding.",
      ],
      summary:
        "Various endpoints which serve JSON files - root of API contains description of contents.",
      technologies: ["Node.js", "Express.js", "Jest", "PostgreSQL"],
    },
    {
      title: "PrepMaster",
      img: "/assets/prepmaster.gif",
      id: "3",
      github: "https://github.com/josh-raftery/prep-master",
      url: "https://be-prep-master.vercel.app/",
      features: [
        "View your meal plan for a given week",
        "Generate Mealplan to automatically create a meal plan by selecting specifying days and meals",
        "Handpick meals and add them to the planner from any recipe page.",
        "Mark all the meals you have cooked in the progress page.",
        "Add all ingredients from a given recipe to your shopping list",
        "Search for recipes",
        "Post a recipe of your own.",
        "Sign in, sign out and sign up.",
      ],
      summary:
        "Meal planner app. Generate, add to and manage your meal plan and shopping list.",
      technologies: [
        "Next.js",
        "CSS",
        "HTML",
        "MongoDB",
        "TailwindCSS",
        "Mongoose",
      ],
    },
  ];
  const [summary, setSummary] = useState({});
  const [toggleSummary, setToggleSummary] = useState(false);
  const [toggleOpenProject, setToggleOpenProject] = useState(false);
  const [sidebarInfo, setSidebarInfo] = useState({
    title: "",
    img: "",
    id: "3",
    url: "",
    features: [],
    summary: "",
    technologies: [],
  });

  console.log(toggleSummary);

  function displayPopup(currProject) {
    setSidebarInfo(currProject);
    setToggleSummary(true);
    const body = document.getElementById("body");
    body.style.overflow = "hidden";
  }

  function closePopup() {
    setToggleSummary(false);
    const body = document.getElementById("body");
    body.style.overflow = "visible";
  }

  return (
    <div className={`gap-5 grid josh`}>
      {projects.map((project) => {
        return (
          <>
            <div
              onClick={() => displayPopup(project)}
              key={project.id}
              className={`rounded-3xl relative max-w-[500px] m-[auto] cursor-pointer`}
            >
              <img
                className="rounded-3xl opacity-100"
                onMouseEnter={() => setSummary({ [project.id]: true })}
                onMouseLeave={() => setSummary({ [project.id]: false })}
                src={project.img}
                alt={project.summary}
              />
              <div
                className={`absolute inset-0 rounded-3xl transition-bg-opacity duration-1000 bg-black ${
                  summary[project.id] ? "bg-opacity-80" : "bg-opacity-0"
                }`}
                onMouseEnter={() => setSummary({ [project.id]: true })}
                onMouseLeave={() => setSummary({ [project.id]: false })}
              >
                {summary[project.id] && (
                  <div className="p-4 text-white absolute bottom-0 m-4 gap-5 grid">
                    <h2 className="text-3xl font-bold text-align-left">
                      {project.title}
                    </h2>
                    <p className="">{project.summary}</p>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((technology) => {
                        return (
                          <div className="rounded-xl bg-gray-500 bg-opacity-90 p-1 relative">
                            <p className="text-[#FFFFFF] no-opacity">
                              <b>{technology}</b>
                            </p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </>
        );
      })}
      <div
        className={`sidebar ${
          toggleSummary ? "sidebar-appear" : ""
        } bg-base-100`}
      >
        <div className="justify-between flex mt-6 ml-6 mr-6 mb-4">
          <button
            className="circle border p-1 border-[currentColor] "
            onClick={closePopup}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
              />
            </svg>
          </button>
          <button
            onClick={closePopup}
            className="hover:border-b border-[currentColor] leading-none"
          >
            <b>Back To Projects.</b>
          </button>
        </div>
        <div className="border-t border-[0.2px] border-[currentColor] mr-2 ml-2 opacity-20" />
        <div className="m-6">
          <h2 className="text-xl font-bold text-align-left">
            <b>{sidebarInfo.title}</b>
          </h2>
          <p className="mt-2">{sidebarInfo.summary}</p>
          <img
            className="rounded-3xl m-[auto] mt-6"
            src={sidebarInfo.img}
            alt={sidebarInfo.summary}
          />
          <h3 className="mt-6">
            <b>Features</b>
          </h3>
          <ul className="p-4 list-disc">
            {sidebarInfo.features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>
          <h3 className="mb-4">
            <b>Technologies</b>
          </h3>
          <div className="flex flex-wrap gap-3">
            {sidebarInfo.technologies.map((technology) => {
              return (
                <div className="rounded-xl bg-gray-300 bg-opacity-30 p-1 relative">
                  <p className="no-opacity">
                    <b>{technology}</b>
                  </p>
                </div>
              );
            })}
          </div>
          <div className="flex gap mt-6">
            <svg
              fill="currentColor"
              width={"25px"}
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>globe</title>{" "}
                <path d="M19.063 8.094c2.063 2.063 3.344 4.875 3.344 7.906 0 3.063-1.281 5.813-3.344 7.875s-4.844 3.313-7.875 3.313c-3.063 0-5.813-1.25-7.875-3.313s-3.313-4.813-3.313-7.875c0-3.031 1.25-5.844 3.313-7.906s4.813-3.313 7.875-3.313c3.031 0 5.813 1.25 7.875 3.313zM12.469 22.313h0.063c0.094 0 0.188 0.031 0.25 0.125 0.063 0.063 0.125 0.125 0.25 0.125 0.031 0 0.063-0.031 0.063-0.094 0-0.125 0.031-0.25 0.031-0.281 0.031-0.094 0.094-0.094 0.156-0.094 0.031 0 0.031 0 0.031-0.063l-0.063-0.063c-0.031 0-0.063 0.031-0.063 0.063-0.031 0.031-0.063 0.063-0.094 0l-0.188 0.125-0.219-0.063-0.375-0.563 0.125-0.813c0-0.031-0.031-0.094-0.125-0.125s-0.094-0.094-0.063-0.125c-0.125-0.063-0.281-0.125-0.469-0.125-0.031 0-0.125 0.031-0.281 0.063-0.156 0-0.25 0-0.25-0.063 0-0.094 0.094-0.281 0.156-0.5 0.031-0.094 0.063-0.25 0.094-0.313 0-0.063 0.031-0.125 0.031-0.125l0.156-0.375-0.031-0.063-0.219-0.031c-0.063 0-0.281 0.125-0.438 0.25-0.156 0.188-0.281 0.344-0.281 0.469l-0.625 0.125c-0.125 0-0.25-0.031-0.344-0.156-0.031-0.156-0.125-0.344-0.25-0.531-0.125-0.156-0.156-0.313-0.156-0.469 0-0.188 0.031-0.438 0.094-0.594 0.063-0.188 0.063-0.406-0.063-0.594 0.031 0 0.125-0.063 0.063-0.125l0.156-0.188 0.031-0.031 0.031 0.031c0.125-0.094 0.344-0.125 0.531-0.094 0.219 0.031 0.344-0.063 0.406-0.219l0.219 0.219c0.063 0.031 0.188-0.188 0.188-0.25l-0.094-0.063 0.563-0.125 0.031 0.063h0.25l0.313 0.188c0.031 0 0.063-0.031 0.094-0.063 0.063-0.063 0.094-0.063 0.125-0.031l0.281 0.313c-0.031 0.063-0.031 0.125-0.031 0.188 0.031 0.031 0.063 0.063 0.063 0.094 0 0.125 0.281 0.688 0.438 0.688 0.094 0 0.125-0.063 0.094-0.188v-0.25c0-0.156-0.031-0.344-0.094-0.531-0.094-0.156-0.156-0.375-0.219-0.563v-0.063c0-0.094 0.063-0.188 0.188-0.25 0.094-0.063 0.156-0.125 0.156-0.125 0.094-0.063 0.188-0.156 0.313-0.219 0.094-0.063 0.188-0.219 0.25-0.313l0.094-0.219v-0.125h0.094s0.063-0.031 0.063-0.094c0 0-0.031-0.031-0.063-0.031-0.031-0.031-0.125-0.094-0.188-0.156l0.063-0.063c0.094-0.094 0.125-0.313 0.063-0.406l0.25-0.125c-0.063 0.125 0.125 0.156 0.188 0.125l0.125-0.281c-0.063-0.156-0.094 0 0-0.188 0.094-0.031 0.188-0.063 0.281-0.125 0.094-0.031 0.156-0.063 0.25-0.063 0.031 0 0.063 0.031 0.063 0.031 0.063 0 0.094-0.031 0.094-0.031 0-0.094-0.031-0.156-0.063-0.156l0.156-0.344c0.125 0 0.25-0.063 0.313-0.188l0.25-0.031c0.063 0 0.094-0.031 0.094-0.094v-0.063l0.469-0.125 0.063-0.156-0.125-0.188s0.031-0.031 0.031-0.063-0.031-0.063-0.063-0.094c-0.031 0-0.063-0.031-0.094-0.031-0.031-0.031-0.063-0.063-0.094-0.063h0.25s0.125-0.031 0.125-0.125c0-0.125-0.063-0.156-0.188-0.156-0.344 0-0.875 0.125-1.063 0.5l-0.188 0.094 0.25-0.25 0.031-0.063c0-0.031-0.031-0.063-0.094-0.094h-0.094c0.313 0 0.5-0.094 0.625-0.188 0.094-0.094 0.188-0.188 0.406-0.25 0.219 0.031 0.438 0.031 0.656 0.031 0.188-0.031 0.375-0.031 0.594-0.031 0.094-0.063 0.219-0.188 0.281-0.313l0.313-0.031c0.063 0.063 0.281-0.094 0.281-0.188s-0.031-0.125-0.125-0.156-0.188-0.094-0.188-0.188v-0.094c0.031-0.031 0-0.063-0.031-0.063-0.125 0-0.438 0.156-0.531 0.219-0.063 0.063-0.094-0.031-0.094-0.094l0.031 0.031 0.125-0.063 0.313-0.125 0.031-0.031c0-0.125-0.188-0.156-0.25-0.156-0.031 0-0.094 0.031-0.156 0.063-0.063 0-0.125 0-0.125-0.063l0.031-0.063c-0.219-0.156-0.406-0.469-0.406-0.563v-0.125c0.031-0.031 0-0.031-0.063-0.031h-0.094c-0.031 0.031-0.063 0-0.063-0.063s-0.125-0.406-0.281-0.406l-0.094 0.094c0 0.063-0.031 0.094-0.094 0.125s-0.094 0.063-0.094 0.094h-0.031l-0.313 0.188c0-0.063-0.031-0.063-0.063-0.031-0.031 0-0.031 0.031-0.094 0.031h-0.063c0.156 0 0.125-0.219 0-0.219l-0.25 0.031c-0.063 0-0.063 0 0-0.063 0.031-0.063 0.094-0.125 0.031-0.188 0-0.063-0.031-0.063-0.063-0.031l0.063-0.094c0.063-0.031-0.031-0.156-0.094-0.219l-0.281-0.031-0.188-0.188c-0.031 0.031-0.063 0-0.125-0.031-0.031-0.031-0.094-0.094-0.125-0.094l-0.219 0.094-0.563-0.125c-0.063 0-0.156 0.031-0.156 0.125 0 0.031 0 0.063 0.031 0.063 0.063 0.031 0.063 0.063 0.063 0.094s0.031 0.156 0.063 0.313c0 0.156 0 0.219-0.094 0.188l-0.125 0.188c0 0.063 0.063 0.094 0.094 0.094 0.094 0.063 0.188 0.156 0.25 0.25 0.063 0.063 0.063 0.156 0.031 0.25l-0.594 0.469v0.031c0 0.094 0 0.156 0.031 0.219 0.063 0.063 0.063 0.156 0.125 0.25 0.156 0.063 0.156 0.125 0.031 0.188-0.063 0-0.125 0.031-0.188 0.063l-0.063 0.063c0 0.031-0.031 0.031-0.063 0.031h-0.156s0-0.031 0.031-0.031c0 0 0.031-0.031 0.031-0.063l-0.281-0.156-0.125-0.219c0.031-0.094 0.031-0.156 0-0.188s-0.031-0.094-0.031-0.156-0.063-0.219-0.188-0.219c-0.156 0-0.281 0.031-0.438 0.063 0.063-0.031-0.063-0.188-0.094-0.188-0.156 0-0.344-0.063-0.563-0.188s-0.375-0.188-0.5-0.188c-0.094 0-0.281 0.031-0.406 0.094 0.063-0.031 0.063-0.063 0.094-0.156l-0.188-0.313-0.031-0.031c-0.063 0-0.125 0.031-0.188 0.094-0.063 0.031-0.156 0-0.156-0.125 0-0.031 0.031-0.063 0.031-0.063 0.031-0.031 0.031-0.031 0-0.063 0-0.094 0.031-0.188 0.125-0.281 0.063-0.063 0.094-0.188 0.125-0.281 0.063-0.031 0.063-0.063 0.063-0.094 0-0.063 0.031-0.063 0.063-0.063 0.063 0 0.156-0.031 0.219-0.063 0.063-0.063 0.125-0.094 0.219-0.094l0.031-0.094c0-0.031-0.094-0.063-0.281-0.094-0.219-0.031-0.313-0.031-0.313-0.094l0.031-0.031c0.188 0.063 0.344 0.094 0.438 0.094 0.188 0.031 0.281-0.031 0.469-0.125 0.063-0.031 0.25-0.094 0.406-0.188 0-0.031-0.031-0.031-0.125-0.063h0.125l0.219-0.125v-0.125l-0.063-0.063 0.313-0.063c-0.031-0.063 0.031-0.094 0.063-0.094 0.063 0 0.125 0.031 0.188 0.094s0.094 0.063 0.125 0.063l0.281-0.094c0-0.031 0.031-0.031 0.094-0.031 0.063-0.031 0.094-0.063 0.063-0.094l-0.219-0.219c-0.063 0-0.094-0.094-0.031-0.094 0.094 0 0.156-0.031 0.094-0.125-0.063-0.031-0.156-0.094-0.25-0.125-0.094-0.063-0.188-0.094-0.281-0.094-0.063 0-0.188 0.031-0.188 0.125 0 0.063 0.031 0.063 0.063 0.063 0.063 0 0.094 0.031 0.094 0.063 0.063 0.031 0.031 0.063-0.031 0.063h-0.063c-0.063 0-0.156 0.063-0.219 0.188-0.063 0.094-0.156 0.188-0.25 0.219-0.031 0-0.031 0-0.031-0.031 0.031-0.031 0-0.031 0-0.063-0.031-0.031-0.063-0.063-0.094-0.063-0.063-0.031-0.125-0.031-0.125-0.063 0-0.063 0.063-0.094 0.125-0.188 0.031-0.094-0.063-0.125-0.219-0.125-0.063 0-0.125 0.031-0.156 0.094-0.031 0.031-0.063 0.094-0.094 0.156l-0.313-0.344-0.25-0.031c0-0.063 0.031-0.125 0.063-0.188 0.063-0.125-0.188-0.281-0.281-0.375-0.031 0-0.094-0.031-0.156-0.031-0.031 0-0.219 0.156-0.344 0.219-0.063 0.031-0.094 0.063-0.094 0.094 0 0.063 0.063 0.063 0.156 0.063h-0.031c-0.063 0-0.094 0.031-0.094 0.125 0 0.031 0.25 0.094 0.313 0.094s0.125 0 0.125 0.031c0.031 0.031 0.031 0.031 0.094 0.031l0.094-0.031v0.063s-0.031 0.063-0.031 0.063l0.031 0.094-0.313 0.156-0.031 0.031c-0.031 0-0.063 0-0.063 0.031s0 0.094 0.063 0.156c0.031 0.063 0 0.094-0.156 0.094l-0.094-0.063c0-0.063-0.063-0.125-0.219-0.188-0.281-0.094-0.781-0.125-1.219-0.125-0.219-0.031-0.375-0.031-0.5-0.031l-0.469 0.156 0.125 0.25c-0.031 0-0.094 0.031-0.094 0.031-0.125-0.094-0.313-0.281-0.375-0.281l-0.219-0.031c-0.688 0.031-1.5 0.688-2.281 1.469s-1.469 1.656-1.813 2.188h0.063c0.063 0 0.094-0.031 0.188-0.063 0.063-0.031 0.094 0.031 0.094 0.125 0 0.063 0 0.094-0.031 0.156s0.031 0.094 0.156 0.094c0.031 0 0.063-0.031 0.063-0.094 0.031-0.063 0.031-0.063 0.031 0l0.063 0.219v0.031c0 0.031-0.031 0.063-0.063 0.094-0.094 0.031 0 0.125 0.094 0.125h0.156l0.063-0.031 0.031-0.031c0 0.125 0.125 0.156 0.219 0.156h0.031s-0.031 0.063-0.063 0.094c-0.063 0-0.063 0.031 0 0.063l0.313 0.063v0.031l0.188 0.406c0 0.063-0.063 0.219-0.125 0.219s-0.063-0.031-0.063-0.063c0.031 0 0.031-0.031 0.031-0.094 0-0.031-0.031-0.063-0.031-0.094-0.031-0.031-0.094-0.031-0.219-0.031-0.031 0-0.125 0-0.063 0.094l0.156 0.344 0.063 0.063c-0.188 0-0.219 0.625-0.219 0.813l0.031 0.25 0.031 0.094v0.031l-0.031 0.281 0.375 0.625h0.094c0 0.031 0 0.063-0.031 0.094s-0.031 0.063-0.031 0.125l0.125 0.094c0 0.188 0.063 0.219 0.219 0.375 0 0.094 0.125 0.219 0.313 0.344 0.219 0.094 0.344 0.156 0.406 0.188 0.125 0.438 0.344 0.906 0.656 1.188l0.031 0.188-0.063 0.063c-0.063 0-0.063 0.031-0.031 0.063l0.25 0.125c0.063-0.063 0.094 0 0.156 0.094 0.063 0.125 0.094 0.188 0.125 0.219v0.094l0.156 0.219 0.063 0.063 0.063-0.156c-0.063-0.156-0.281-0.5-0.469-0.781-0.094-0.156-0.188-0.313-0.281-0.438-0.063-0.094-0.094-0.156-0.094-0.188s-0.031-0.375-0.063-0.438c0.031 0.031 0.125 0.063 0.188 0.094 0.094 0.031 0.188 0.063 0.25 0.094 0.031 0.25 0.125 0.438 0.281 0.594 0.125 0.125 0.25 0.281 0.344 0.469-0.063 0.063 0.063 0.063 0.125 0.063 0.031 0.063 0.031 0.094 0.031 0.219 0.281 0.281 0.844 0.938 0.844 1.219v0.031l-0.063 0.188c0.125 0.281 0.406 0.5 0.688 0.594h0.063c0.156 0.094 0.375 0.188 0.594 0.281 0.188 0.125 0.375 0.219 0.563 0.281l0.313-0.188c0.156 0.031 0.344 0.188 0.563 0.375s0.5 0.406 0.875 0.469c0.125-0.094 0.188-0.063 0.188 0.063v0.063l0.344 0.406 0.063 0.188c0.188 0.125 0.406 0.313 0.5 0.531zM8.438 6.594l-0.031-0.063c-0.063-0.031-0.219-0.094-0.281-0.094-0.031 0-0.094 0.031-0.219 0.063-0.219 0.125-0.563 0.219-0.813 0.344-0.125 0.063-0.219 0.094-0.281 0.094 0.125 0 0.25-0.031 0.375-0.094 0.094-0.063 0.219-0.094 0.344-0.094l0.094 0.063c0.063 0.031 0.094 0.031 0.156 0.031 0.031 0 0.063 0 0.125 0.063 0.063-0.031 0.125-0.031 0.219 0.031l0.094-0.063v-0.125l-0.031-0.063 0.063 0.031c0.063 0 0.125-0.031 0.188-0.125zM13.156 24.906l0.031 0.188c0 0.063-0.031 0.063-0.063 0.125-0.094 0.063-0.25 0.156-0.25 0.344 0 0.031 0.031 0.063 0.031 0.125 0.031 0.031 0.063 0.063 0.063 0.125 0 0.031-0.031 0.063-0.031 0.094 2.156-0.375 4.094-1.406 5.594-3h-0.031c-0.063 0.031-0.156 0.031-0.188 0l-0.094 0.031-0.156-0.031h-0.094c-0.063-0.094-0.125-0.156-0.219-0.219l-0.031-0.031c-0.031 0-0.063 0-0.063 0.063 0-0.281-0.219-0.531-0.469-0.531 0 0.031-0.031 0.031-0.031 0.031h-0.063l-0.063-0.031h0.094l0.063-0.188-0.156-0.094-0.031 0.031c-0.125-0.031-0.219-0.094-0.281-0.219l-0.094-0.031v0.031l-0.063 0.031c-0.125 0.031-0.219 0.063-0.281 0.094-0.125-0.031-0.219-0.094-0.25-0.125l-0.375 0.031c0-0.125-0.063-0.281-0.219-0.281-0.188 0-0.438 0-0.5 0.219 0 0.063 0.031 0.156 0.063 0.188v0.125l-0.031 0.063-0.031 0.031h-0.031l-0.094-0.219 0.094-0.125c-0.031-0.063-0.031-0.094-0.031-0.156s-0.031-0.094-0.031-0.156l-0.031-0.031h-0.094l-0.188 0.125h-0.125l-0.031 0.063c-0.031 0-0.031 0.031-0.031 0.063 0 0-0.031 0-0.031 0.031l-0.031-0.031h-0.125c-0.063 0.063-0.094 0.156-0.125 0.25l0.063 0.063-0.156 0.063-0.031 0.063-0.094 0.063v0.031h-0.031v0.156h-0.031c-0.031-0.125-0.125-0.25-0.313-0.344h-0.094v0.063c0 0.063 0.063 0.094 0.125 0.125 0.063 0.063 0.094 0.125 0.125 0.156-0.031-0.031-0.094 0-0.094 0.031v0.063l0.188 0.281v0.531l0.063 0.125c-0.063 0.156-0.125 0.313-0.219 0.406v-0.031l-0.063 0.031-0.031 0.031-0.031 0.125 0.031 0.031v0.031l-0.063-0.063-0.031 0.188-0.156 0.063c-0.063 0.031-0.094 0.063-0.063 0.156 0 0.063-0.031 0.094-0.094 0.125l0.031 0.063-0.063 0.094c0 0.031 0 0.063-0.031 0.063v0.125l0.031 0.219 0.063 0.031 0.063-0.031z"></path>{" "}
              </g>
            </svg>
            <h3>
              <b>Website</b>
            </h3>
          </div>
          <a href={sidebarInfo.url} target="_blank">
            <p className="mt-2 mb-8 opacity-70 hover:border-b-2 hover:border-b-[currentColor] leading-none w-fit cursor-pointer">
              <b>{sidebarInfo.url}</b>
            </p>
          </a>
          <div className="flex mb-4 gap-2">
            <svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width={"20px"}
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="currentColor"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>github [#142]</title> <desc>Created with Sketch.</desc>{" "}
                <defs> </defs>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="currentColor"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="currentColor"
                  >
                    {" "}
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      {" "}
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      >
                        {" "}
                      </path>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
            <h3>
              <b>Github</b>
            </h3>
          </div>
          <a href={sidebarInfo.github} target="_blank">
            <p className="mt-2 mb-4 opacity-70 hover:border-b-2 hover:border-b-[currentColor] leading-none w-fit cursor-pointer">
              <b>{sidebarInfo.github}</b>
            </p>
          </a>
        </div>
        <a href={sidebarInfo.url} target="_blank">
          <div
            className="flex justify-center sticky bottom-0 left-0 right-0 h-[50px] bg-base-200 cursor-pointer items-center"
            onMouseEnter={() => setToggleOpenProject(true)}
            onMouseLeave={() => setToggleOpenProject(false)}
          >
            <p
              onMouseEnter={() => setToggleOpenProject(true)}
              className={`h-fit ${
                toggleOpenProject &&
                "border-b-[1.5px] border-[currentColor] leading-tight"
              }`}
            >
              <b>Open Project</b>
            </p>
            <svg
              className="h-fit"
              viewBox="0 0 512 512"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="currentColor"
              width={"25px"}
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>open-external</title>{" "}
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="currentColor"
                  fill-rule="evenodd"
                >
                  {" "}
                  <g
                    id="icon"
                     fill="currentColor"
                    transform="translate(85.333333, 64.000000)"
                  >
                    {" "}
                    <path
                      d="M128,63.999444 L128,106.666444 L42.6666667,106.666667 L42.6666667,320 L256,320 L256,234.666444 L298.666,234.666444 L298.666667,362.666667 L4.26325641e-14,362.666667 L4.26325641e-14,64 L128,63.999444 Z M362.666667,1.42108547e-14 L362.666667,170.666667 L320,170.666667 L320,72.835 L143.084945,249.751611 L112.915055,219.581722 L289.83,42.666 L192,42.6666667 L192,1.42108547e-14 L362.666667,1.42108547e-14 Z"
                      id="Combined-Shape"
                    >
                      {" "}
                    </path>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </div>
        </a>
      </div>
      {toggleSummary && (
        <div
          onClick={closePopup}
          className="fixed inset-0 bg-black opacity-20 z-5"
        />
      )}
    </div>
  );
}

export default Projects;

/* <div className="flex w-full flex-col border-opacity-50">
            <a href="https://be-nc-news-ml9n.onrender.com/api" target="_blank">
                <div  className="card shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04),_0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
                    <div className="card-body">
                        <h2 className="card-title text">NC News Back-End API</h2>
                        <p>This is an API created for the purpose of building a news site application such as Reddit. I coded endpoints for articles, comments, users etc. which access a postgreSQL database containing sample data.</p>
                        <p>This application was created with a stack of<b> node.js, express.js, jest</b> and <b>postgreSQL. </b>It has a full-testing suite with over 100 tests and meticulous error handling</p>
                        <p>This is the general flow of the API:</p>
                        <ul className="feature-list">
                            <li><b>Endpoints - </b>were set up using Express routing, they listen for an HTTP request and direct the request to the relevant controller.</li>
                            <li><b>Errors - </b>If the request is invalid and for any reason not handled in the front end, each of the MVC's can identify 400 request (syntactically incorrect request) and 404 (valid request but non-existant target)</li>
                            <li><b>SQL - </b>Once a valid request is made the model will query the SQL DB, but in such a way that it is immune to SQL injection.</li>
                            <li><b>MVC - </b>Finally the controller will send a response containing the target data - the API follows a strict MVC pattern for consistency/readability.</li>
                        </ul>
                        <p>The testing suite utilises a test DB mirroring live and a seed function to reset the data upon every invocation of the testing suite - it then utilises supertest to emulate HTTP requests and evalates express responses.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </a>
            <div style={{ marginBottom: "none", marginTop: "1rem"}} className="badges">
                <div style={{marginRight: "1rem"}} className="badge badge-primary badge-outline">node.js</div>
                <div style={{marginRight: "1rem"}} className="badge badge-secondary badge-outline">postgreSQL</div>
                <div className="badge badge-accent badge-outline">express.js</div>
                    <div style={{ marginTop: "0.5rem" }}>
                        <a href="https://github.com/josh-raftery/be-nc-news" target="_blank">
                            <Github />
                        </a>
                    </div>
            </div>
            <div style={{ marginTop: "none", marginBottom: "1rem"}} className="divider"></div>
            <a href="https://main--adorable-strudel-b4aa70.netlify.app" target="_blank">
                <div className="card card shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04),_0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
                    <div className="card-body">
                        <h2 className="card-title">NC News Front-End Application</h2>
                        <p>This is a for website displaying, reading and commenting on articles.</p>
                        <p>The application is feature-rich and has functionality for the following:</p>
                        <ul className="feature-list" >
                            <li><b>Topics Page - </b>listing all available topics on cards which will link you to articles for the specified topic.</li>
                            <li><b>Post Article Page - </b>allowing you to create an article of your own.</li>
                            <li><b>Article Filters - </b>you can sort by date, votes (likes), most comments and order by filters of top and bottom (asc, desc)</li>
                            <li><b>Day/Night mode - </b>adjusting the CSS from a lighter scheme to a dark one and vise versa - adjusting icons to remain a strong contrast.</li>
                            <li><b>Suggested Articles - </b>If you are using a wide display such as a laptop - suggested articles will fill the otherwise dead space to the side(s) of an article card</li>
                            <li><b>Pagination - </b>Articles are displayed 10 at a time and on a button press are added to the page</li>
                        </ul>
                        <p>Styling, Design and Accessability choices:</p>
                        <ul className="style-list" >
                            <li><b>Responsive - </b>Loading component displayed in between asynchronous processes, input fields turn red and display error message upon invalid input or bad connection.</li>
                            <li><b>Opimistic Rendering - </b>Where possible I used optimistic rendering for a more pleasant user experience.</li>
                            <li><b>Mobile First - </b>The application works well with any screen size utilising flex styling.</li>
                        </ul>
                        <p>* This is very much a work in progress - more to come! *</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </a>
            <div style={{marginTop: "1rem"}} className="badges">
                <div style={{marginRight: "1rem"}} className="badge badge-primary badge-outline">node.js</div>
                <div className="badge badge-secondary badge-outline">react.js</div> 
                    <div style={{ marginTop: "0.5rem" }}>
                        <a href="https://github.com/josh-raftery/fe-nc-news" target="_blank">
                            <Github />
                        </a>
                    </div>
                </div>
            <div className="divider"></div>
            <a href="https://joshraftery.netlify.app" target="_blank">
                <div className="card card shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),_0_10px_10px_-5px_rgba(0,0,0,0.04),_0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
                    <div className="card-body">
                        <h2 className="card-title">Portfolio Page</h2>
                        <p>Whoa, project-ception - a website to showcase all my projects!</p>
                        <p>A fairly simple react app where I tried to focus on some nice UI, including quite a premium (and totally necessary) day/night switch.</p>
                        <p>Pages for:</p>
                        <ul className="style-list" >
                            <li><b>Resume - </b>Resume embedded into the page using an iframe element, big download button</li>
                            <li><b>About - </b>All my links - utilised a 'mailto' anchor link for my gmail.</li>
                            <li><b>Projects - </b>A series of cards which are wrapped in a link to the hosted site, github buttons link to corresponding repo</li>
                        </ul>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </a>
            <div style={{marginTop: "1rem"}} className="badges">
                <div style={{marginRight: "1rem"}} className="badge badge-primary badge-outline">node.js</div>
                <div className="badge badge-secondary badge-outline">react.js</div> 
                    <div style={{ marginTop: "0.5rem" }}>
                        <a href="https://github.com/josh-raftery/portfolio-page" target="_blank">
                            <Github />
                        </a>
                    </div>
                </div>
            <div className="divider"></div>
        </div> */
