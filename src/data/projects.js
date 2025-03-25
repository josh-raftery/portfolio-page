export default [
    {
      title: "TravelMate",
      img: "/assets/travel_mate_thumbnail.png",
      id: "3",
      github: "https://github.com/josh-raftery/travel_mate/",
      url: "",
      features: [
        "Add countries, destinations, accomodation, transportation and activities to an itinerary",
        "View your past, present and future trips on the map",
        "View your friend's trips"
      ],
      summary:
      "Travel planner app and diary",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "TailwindCSS",
        "HTML",
        "CSS"
      ],
      finished: false
    },
    {
      title: "PulseWire",
      id: 1,
      url: "https://pulsewire.netlify.app/",
      github: "https://github.com/josh-raftery/fe-nc-news",
      img: "/assets/pulsewire.gif",
      features: [
        "Read, Post, Like, Dislike and Share Articles",
        "Read, Like, Dislike and Post Comments",
        "Article and Comment Pagination",
        "Filter and Search Articles",
        "Sign In, Sign Up and Sign Out.",
        "Day/Night Theme Switcher",
        "Accessible design such as optimistic rendering and intuitive error handling around input fields.",
        "Mobile first design with dynamic page styling catering for mobile, tablet and monitor screens.",
        "Modals implemented to restrict access to user only features.",
        "Dynamic SVG icons - adjusting to browser theme.",
      ],
      summary:
        "News site application - read, comment on, post, like and share news articles.",
      technologies: ["React.js", "CSS", "HTML", "TailwindCSS"],
      finished: true
    },
    {
      title: "PulseWire API",
      github: "https://github.com/josh-raftery/be-nc-news",
      id: "2",
      img: "/assets/pulsewireAPI.png",
      url: "https://pulsewire-api.vercel.app/api",
      features: [
        "MVC pattern SQL database querying",
        "Express.js API route handling",
        "Jest automated testing suite with 100+ tests including database seeding.",
      ],
      summary:
        "Various endpoints which serve JSON files - root of API contains description of contents.",
      technologies: ["Node.js", "Express.js", "Jest", "PostgreSQL"],
      finished: true
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
      finished: true
    }
  ];