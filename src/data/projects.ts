export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  technologies: string[];
  features: string[];
  challenges: {
    challenge: string;
    solution: string;
  }[];
  learnings: string[];
  liveUrl?: string;
  githubUrl: string;
  image?: string;
  status: string;
}

export const projects: Project[] = [
  // 1. BazarDor
  {
    slug: "bazardor",
    title: "BazarDor (বাজার দর)",
    subtitle: "Market Price Tracking Platform",
    description:
      "BazarDor is a web application designed to help people in Bangladesh stay informed about everyday market prices. Users can explore different product categories, check the latest available prices, and compare historical prices to understand market trends.",

    category: "Full Stack Web Application",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Better Auth",
      "MongoDB",
      "REST API",
    ],

    features: [
      "Check the latest available prices of everyday essential products.",
      "Compare current prices with previous prices to understand market trends.",
      "Browse products through different categories.",
      "Sign in or create an account using Email, Google, or GitHub.",
      "Enjoy a responsive experience across mobile, tablet, and desktop devices.",
    ],

    challenges: [
      {
        challenge: "Managing dynamic product and market price information.",
        solution:
          "Worked with REST APIs and MongoDB to handle dynamic application data.",
      },
      {
        challenge: "Implementing multiple authentication options.",
        solution:
          "Integrated Better Auth to support email, Google, and GitHub authentication.",
      },
      {
        challenge: "Creating a consistent experience across screen sizes.",
        solution:
          "Used responsive Tailwind CSS layouts for mobile, tablet, and desktop devices.",
      },
    ],

    learnings: [
      "Building full-stack applications using Next.js and React.",
      "Implementing authentication with Better Auth.",
      "Working with MongoDB for data management.",
      "Developing REST APIs and handling dynamic data.",
      "Creating responsive and user-friendly interfaces.",
    ],

    liveUrl: "https://assignment-7-one-rho.vercel.app/",
    githubUrl: "https://github.com/Nujhath-Tabassum/Bazar-dor",
    image: "/assets/projects/Bazar-dor.PNG",

    status: "Completed",
  },

  // 2. Dev Stack
  {
    slug: "dev-stack",
    title: "Dev Stack",
    subtitle: "Technology Stack Builder",
    description:
      "Dev Stack is an interactive Technology Stack Builder that allows users to explore different technologies and create their own personalized tech stacks. Users can add their favorite technologies, remove individual selections, or clear their entire stack whenever needed.",

    category: "Frontend Web Application",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Toastify",
      "Vite",
    ],

    features: [
      "Explore different technologies and development tools.",
      "Build a personalized technology stack.",
      "Add favorite technologies to your stack.",
      "Remove individual technologies whenever needed.",
      "Clear the entire stack with a single action.",
      "Receive instant feedback through toast notifications.",
      "Responsive interface for different screen sizes.",
    ],

    challenges: [
      {
        challenge: "Managing a dynamic collection of selected technologies.",
        solution:
          "Used React state management to add, remove, and clear selected technologies.",
      },
      {
        challenge: "Keeping the interface responsive during user interactions.",
        solution:
          "Built reusable React components and responsive layouts with Tailwind CSS.",
      },
      {
        challenge: "Providing clear feedback for user actions.",
        solution:
          "Integrated React Toastify for success and informational notifications.",
      },
    ],

    learnings: [
      "Building reusable React components.",
      "Managing application state and user interactions.",
      "Using TypeScript for type safety and better code organization.",
      "Creating responsive interfaces with Tailwind CSS.",
      "Implementing interactive notifications.",
    ],

    liveUrl: "https://harmonious-douhua-869fb8.netlify.app/",
    githubUrl: "https://github.com/Nujhath-Tabassum/Dev_Stack",
    image: "/assets/projects/Dev-Stack.PNG",

    status: "Completed",
  },

  // 3. FitLog
  {
    slug: "fitlog",
    title: "FitLog",
    subtitle: "Workout Library & Daily Planner",
    description:
      "FitLog is a responsive workout library and daily workout planner designed to help users explore exercises, organize their fitness routines, and manage their daily workout activities.",

    category: "Frontend Web Application",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "React Toastify",
      "REST API",
      "Local Storage",
    ],

    features: [
      "Browse exercises targeting different muscle groups.",
      "Explore workout details, equipment, duration, calories, and ratings.",
      "Create a personalized daily workout plan with up to five exercises.",
      "Save favorite workouts and access them later.",
      "Mark exercises as completed or remove them from the plan.",
      "Track total exercises, workout duration, and estimated calories.",
    ],

    challenges: [
      {
        challenge: "Managing workout plans and saved exercises.",
        solution:
          "Used client-side state management to organize daily plans and saved workouts.",
      },
      {
        challenge: "Preserving user selections between page visits.",
        solution:
          "Implemented Local Storage for persistent client-side data.",
      },
      {
        challenge: "Presenting detailed information for individual workouts.",
        solution:
          "Created dynamic workout detail pages using Next.js routing.",
      },
    ],

    learnings: [
      "Building responsive web applications using Next.js and React.",
      "Managing application state and user interactions.",
      "Working with REST APIs.",
      "Implementing Local Storage for persistent client-side data.",
      "Creating interactive and user-friendly interfaces.",
    ],

    liveUrl: "https://assignment-6-six-gamma.vercel.app/",
    githubUrl: "https://github.com/Nujhath-Tabassum/Fitlog",
    image: "/assets/projects/Fit-log.PNG",

    status: "Completed",
  },

  // 4. Multithreaded Backend Server
  {
    slug: "multithreaded-backend-server",
    title: "Multithreaded Backend Server",
    subtitle: "Java | Multithreading | Operating Systems",
    description:
      "Developed a multithreaded backend server using Java to demonstrate concurrent client handling, thread pool management, and fundamental Operating Systems concepts. The server handles multiple client connections using dedicated worker threads and provides real-time monitoring of server activities, thread states, and request processing.",

    category: "Java & Systems Programming",

    technologies: [
      "Java",
      "Multithreading",
      "Java Socket Programming",
      "ThreadPoolExecutor",
      "Concurrency",
      "Synchronization",
      "Atomic Variables",
      "Concurrent Collections",
      "HTTP",
      "CPU Scheduling",
    ],

    features: [
      "Process multiple client connections concurrently.",
      "Manage worker threads with configurable core and maximum thread limits.",
      "Visualize ready queues, running threads, context switching, and Round Robin scheduling.",
      "Restrict excessive requests using thread-safe, per-client request counters.",
      "Monitor active clients, peak connections, completed requests, and response times.",
      "Track worker states such as IDLE, RUNNING, PROCESSING, and WAITING.",
      "Maintain timestamped server activity and error logs.",
      "Simulate 50 clients with 10 concurrent client threads for load testing.",
    ],

    challenges: [
      {
        challenge: "Handling multiple client connections concurrently.",
        solution:
          "Used Java multithreading and ThreadPoolExecutor to manage worker threads.",
      },
      {
        challenge: "Managing shared resources safely between threads.",
        solution:
          "Applied synchronization, atomic variables, and concurrent collections.",
      },
      {
        challenge: "Monitoring server activity and worker thread states.",
        solution:
          "Implemented server monitoring and timestamped activity logging.",
      },
    ],

    learnings: [
      "Understanding multithreading and concurrent execution.",
      "Managing thread pools and worker threads.",
      "Exploring CPU scheduling and context switching concepts.",
      "Handling shared resources in a concurrent environment.",
      "Implementing thread-safe operations.",
      "Monitoring server performance and handling multiple client connections.",
    ],

    githubUrl:
      "https://github.com/Nujhath-Tabassum/Multithreaded-Backend-Server",

    status: "Completed",
  },

  // 5. Uddipon
  {
    slug: "uddipon",
    title: "Uddipon",
    subtitle: "Together for a Better Tomorrow",
    description:
      "Uddipon is a social development events platform that connects people through meaningful community initiatives. Users can discover upcoming events, participate in social activities, and organize initiatives that create a positive impact on society.",

    category: "Full Stack Web Application",

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Lucide React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Better Auth",
      "Google OAuth",
      "JWT",
      "React Toastify",
    ],

    features: [
      "Sign up and log in using email/password or Google.",
      "Discover upcoming events with dates, locations, and categories.",
      "Browse Donation, Cleanup, Plantation, Blood Donation, and Food Distribution events.",
      "Create and publish community initiatives.",
      "Join meaningful social activities.",
      "Track joined events in one place.",
      "Edit or delete events created by the user.",
      "Enjoy responsive layouts across desktop, tablet, and mobile.",
      "Receive toast notifications and loading skeletons.",
    ],

    challenges: [
      {
        challenge:
          "Building a full-stack application with separate frontend and backend responsibilities.",
        solution:
          "Used Next.js for the frontend and Express.js for backend API development.",
      },
      {
        challenge: "Securing authentication and protected API routes.",
        solution:
          "Integrated Better Auth, Google OAuth, and JWT validation.",
      },
      {
        challenge: "Managing event creation, participation, and updates.",
        solution:
          "Used MongoDB and REST APIs to manage application data and event operations.",
      },
    ],

    learnings: [
      "Full-stack development with Next.js and Express.js.",
      "Authentication using Better Auth and Google OAuth.",
      "Securing APIs with JWT validation.",
      "MongoDB database management.",
      "REST API development and protected routes.",
      "Full-stack application deployment.",
    ],

    liveUrl: "https://uddipon-eight.vercel.app/",
    githubUrl: "https://github.com/Nujhath-Tabassum/Uddipon",
    image: "/assets/projects/Uddipon.PNG",

    status: "Completed",
  },
];