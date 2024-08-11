const posts = [
  {
    postId: "1",
    title: "Introduction to React",
    excerpt: "Learn the basics of React and how to get started with it.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
      name: "John Doe",
    avatar: "https://via.placeholder.com/150",
    bio: "John is a frontend developer specializing in React.",
    profileLink: "/author/john-doe",
    socialMedia: {
      twitter: "@johndoe",
      facebook: "facebook.com/johndoe"
    }
  },
  link: "/posts/introduction-to-react",
    date: "August 1, 2024",
    content: `
      <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.</p>
      <p>In this article, we will explore the fundamentals of React, including components, JSX, and state management.</p>
      <img src="https://via.placeholder.com/800x400" alt="React">
      <p>React allows developers to create large web applications that can update and render efficiently in response to data changes.</p>
    `,
    categories: [{ name: "React", link: "/category/react" }],
    tags: [{ name: "JavaScript", link: "/tag/javascript" }, { name: "React", link: "/tag/react" }],
    comments: ["Great introduction!", "Very informative.", "Thanks for sharing!"],
    readTime: "8 min",
    viewsCount: 1200,
    shareCount: 100,
    commentCount: 3,
    likes: "250",
    upvotes: 230,
    downvotes: 10,
  },
  {
    postId: "2",
    title: "Understanding JavaScript Closures",
    excerpt: "A deep dive into closures in JavaScript and their practical uses.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
    name: "Jane Smith",
    avatar: "https://via.placeholder.com/150",
    bio: "Jane is a software engineer with a passion for JavaScript.",
    profileLink: "/author/jane-smith",
    socialMedia: {
      twitter: "@janesmith",
      facebook: "facebook.com/janesmith"
    }
  },
  link: "/posts/understanding-javascript-closures",
    date: "August 3, 2024",
    content: `
      <p>Closures are a fundamental concept in JavaScript, allowing functions to retain access to variables from their containing scope.</p>
      <p>In this article, we'll explore how closures work and provide examples of their use in real-world scenarios.</p>
      <img src="https://via.placeholder.com/800x400" alt="JavaScript Closures">
      <p>Closures are often used in functional programming patterns and can help manage private variables and functions.</p>
    `,
    categories: [{ name: "JavaScript", link: "/category/javascript" }],
    tags: [{ name: "JavaScript", link: "/tag/javascript" }, { name: "Closures", link: "/tag/closures" }],
    comments: ["Very helpful!", "Closures finally make sense to me.", "Great explanation."],
    readTime: "10 min",
    viewsCount: 1500,
    shareCount: 120,
    commentCount: 3,
    likes: "300",
    upvotes: 270,
    downvotes: 15,
  },
  {
    postId: "3",
    title: "CSS Grid vs Flexbox",
    excerpt: "Comparing CSS Grid and Flexbox for layout design.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
      name: "Michael Brown",
      avatar: "https://via.placeholder.com/150",
      bio: "Michael is a UI/UX designer with expertise in CSS and responsive design.",
      profileLink: "/author/michael-brown",
      socialMedia: {
        twitter: "@michaelbrown",
        facebook: "facebook.com/michaelbrown"
      }
    },
    link: "/posts/css-grid-vs-flexbox",
    date: "August 5, 2024",
    content: `
      <p>CSS Grid and Flexbox are two powerful layout modules in CSS, each with its strengths and use cases.</p>
      <p>This article will help you understand when to use CSS Grid vs. Flexbox and how to combine them effectively.</p>
      <img src="https://via.placeholder.com/800x400" alt="CSS Grid vs Flexbox">
      <p>While Flexbox is great for aligning items in a single dimension, CSS Grid excels in two-dimensional layouts.</p>
    `,
    categories: [{ name: "CSS", link: "/category/css" }],
    tags: [{ name: "CSS", link: "/tag/css" }, { name: "Grid", link: "/tag/grid" }, { name: "Flexbox", link: "/tag/flexbox" }],
    comments: ["Very clear comparison.", "Helped me decide when to use each.", "CSS is so powerful!"],
    readTime: "7 min",
    viewsCount: 1100,
    shareCount: 90,
    commentCount: 3,
    likes: "240",
    upvotes: 210,
    downvotes: 8,
  },
  {
    postId: "4",
    title: "Getting Started with Node.js",
    excerpt: "An introduction to building backend applications with Node.js.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
      name: "Emily Davis",
      avatar: "https://via.placeholder.com/150",
      bio: "Emily is a backend developer with a focus on Node.js and Express.",
      profileLink: "/author/emily-davis",
      socialMedia: {
        twitter: "@emilydavis",
        facebook: "facebook.com/emilydavis"
      }
    },
    link: "/posts/getting-started-with-nodejs",
    date: "August 7, 2024",
    content: `
      <p>Node.js is a powerful JavaScript runtime built on Chrome's V8 engine, allowing you to build scalable backend applications.</p>
      <p>This guide will walk you through setting up a Node.js environment and creating your first server-side application.</p>
      <img src="https://via.placeholder.com/800x400" alt="Node.js">
      <p>With Node.js, you can handle multiple requests concurrently, making it ideal for real-time applications like chat apps.</p>
    `,
    categories: [{ name: "Node.js", link: "/category/nodejs" }],
    tags: [{ name: "Node.js", link: "/tag/nodejs" }, { name: "Backend", link: "/tag/backend" }],
    comments: ["Great for beginners.", "Node.js is so versatile!", "Looking forward to more tutorials."],
    readTime: "9 min",
    viewsCount: 1300,
    shareCount: 110,
    commentCount: 3,
    likes: "260",
    upvotes: 240,
    downvotes: 12,
  },
  {
    postId: "5",
    title: "Building RESTful APIs with Express",
    excerpt: "Learn how to create RESTful APIs using Express.js and Node.js.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
      name: "Chris Johnson",
      avatar: "https://via.placeholder.com/150",
      bio: "Chris is a software engineer specializing in API development.",
      profileLink: "/author/chris-johnson",
      socialMedia: {
        twitter: "@chrisjohnson",
        facebook: "facebook.com/chrisjohnson"
      }
    },
    link: "/posts/building-restful-apis-with-express",
    date: "August 10, 2024",
    content: `
      <p>Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.</p>
      <p>In this article, you'll learn how to build a RESTful API from scratch using Express.js and Node.js.</p>
      <img src="https://via.placeholder.com/800x400" alt="Express.js">
      <p>Express allows you to define routes, handle requests, and interact with databases, making it a powerful tool for backend development.</p>
    `,
    categories: [{ name: "API", link: "/category/api" }],
    tags: [{ name: "Express.js", link: "/tag/expressjs" }, { name: "API", link: "/tag/api" }],
    comments: ["Very practical tutorial.", "Express.js makes API development so easy.", "Thanks for the detailed guide!"],
    readTime: "12 min",
    viewsCount: 1600,
    shareCount: 130,
    commentCount: 3,
    likes: "320",
    upvotes: 290,
    downvotes: 15,
  },
  {
    postId: "6",
    title: "Understanding TypeScript",
    excerpt: "A beginner's guide to using TypeScript in your projects.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
      name: "Sarah Lee",
      avatar: "https://via.placeholder.com/150",
      bio: "Sarah is a software engineer with a passion for TypeScript.",
      profileLink: "/author/sarah-lee",
      socialMedia: {
        twitter: "@sarahlee",
        facebook: "facebook.com/sarahlee"
      }
    },
    link: "/posts/understanding-typescript",
    date: "August 12, 2024",
    content: `
      <p>TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It adds optional static typing to the language, helping developers catch errors early.</p>
      <p>In this guide, we'll explore the basics of TypeScript, including types, interfaces, and classes.</p>
      <img src="https://via.placeholder.com/800x400" alt="TypeScript">
      <p>TypeScript is especially beneficial in large codebases, providing better tooling and making it easier to maintain and refactor code.</p>
    `,
    categories: [{ name: "TypeScript", link: "/category/typescript" }],
    tags: [{ name: "TypeScript", link: "/tag/typescript" }, { name: "JavaScript", link: "/tag/javascript" }],
    comments: ["Great introduction to TypeScript.", "TypeScript has improved my coding quality.", "Looking forward to more TypeScript content."],
    readTime: "10 min",
    viewsCount: 1400,
    shareCount: 115,
    commentCount: 3,
    likes: "280",
    upvotes: 250,
    downvotes: 10,
  },
  {
    postId: "7",
    title: "Exploring the New Features of ES2024",
    excerpt: "A look at the latest features introduced in ECMAScript 2024.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
      name: "Alex Green",
      avatar: "https://via.placeholder.com/150",
      bio: "Alex is a JavaScript enthusiast who loves staying updated with the latest ECMAScript standards.",
      profileLink: "/author/alex-green",
      socialMedia: {
        twitter: "@alexgreen",
        facebook: "facebook.com/alexgreen"
      }
    },
    link: "/posts/exploring-new-features-of-es2024",
    date: "August 15, 2024",
    content: `
      <p>ECMAScript 2024 introduces several new features and enhancements that make JavaScript even more powerful and expressive.</p>
      <p>This article covers the most significant changes and additions, including new syntax, features, and APIs.</p>
      <img src="https://via.placeholder.com/800x400" alt="ECMAScript 2024">
      <p>As JavaScript continues to evolve, staying updated with the latest ECMAScript standards is crucial for developers.</p>
    `,
    categories: [{ name: "JavaScript", link: "/category/javascript" }],
    tags: [{ name: "ECMAScript", link: "/tag/ecmascript" }, { name: "JavaScript", link: "/tag/javascript" }],
    comments: ["Excited to use these new features!", "ES2024 looks promising.", "Great overview of what's new."],
    readTime: "8 min",
    viewsCount: 1700,
    shareCount: 140,
    commentCount: 3,
    likes: "340",
    upvotes: 310,
    downvotes: 12,
  },
  {
    postId: "8",
    title: "Exploring WebAssembly for High-Performance Web Apps",
    excerpt: "WebAssembly (Wasm) is revolutionizing web development by enabling high-performance applications on the web.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
      name: "Laura White",
      avatar: "https://via.placeholder.com/150",
      bio: "Laura is a software engineer focused on performance optimization and WebAssembly.",
      profileLink: "/author/laura-white",
      socialMedia: {
        twitter: "@laurawhite",
        facebook: "facebook.com/laurawhite"
      }
    },
    link: "/posts/exploring-webassembly-for-high-performance-web-apps",
    date: "August 10, 2024",
    content: `
      <p>WebAssembly (Wasm) is a low-level binary format that enables high-performance applications to run on the web.</p>
      <p>This article introduces WebAssembly, its benefits, and how to get started with it in your projects.</p>
      <img src="https://via.placeholder.com/800x400" alt="WebAssembly">
      <p>Wasm is particularly useful for performance-critical applications like games, simulations, and video processing.</p>
    `,
    categories: [{ name: "WebAssembly", link: "/category/webassembly" }, { name: "Performance", link: "/category/performance" }],
    tags: [{ name: "WebAssembly", link: "/tag/webassembly" }, { name: "Wasm", link: "/tag/wasm" }, { name: "Performance", link: "/tag/performance" }],
    comments: ["WebAssembly is the future!", "Thanks for the clear explanation.", "Can't wait to try this out."],
    readTime: "7 min",
    viewsCount: 350,
    shareCount: 25,
    commentCount: 3,
    likes: "280",
    upvotes: 250,
    downvotes: 1,
  },
  {
    postId: "9",
    title: "Building Scalable Microservices with Docker and Kubernetes",
    excerpt: "Learn how to build and manage scalable microservices using Docker and Kubernetes.",
    featuredImage: "https://via.placeholder.com/600x400",
    author: {
      name: "David Lee",
      avatar: "https://via.placeholder.com/150",
      bio: "David is a DevOps engineer with a deep understanding of Docker, Kubernetes, and cloud infrastructure.",
      profileLink: "/author/david-lee",
      socialMedia: {
        twitter: "@davidlee",
        facebook: "facebook.com/davidlee"
      }
    },
    link: "/posts/building-scalable-microservices-with-docker-and-kubernetes",
    date: "August 15, 2024",
    content: `
      <p>Microservices are an architectural style that structures an application as a collection of loosely coupled services.</p>
      <p>This guide will help you understand the fundamentals of Docker and Kubernetes and how to use them to build scalable microservices.</p>
      <img src="https://via.placeholder.com/800x400" alt="Docker and Kubernetes">
      <p>Docker provides a platform for packaging, distributing, and running applications, while Kubernetes helps orchestrate and manage these containers.</p>
    `,
    categories: [{ name: "DevOps", link: "/category/devops" }, { name: "Microservices", link: "/category/microservices" }],
    tags: [{ name: "Docker", link: "/tag/docker" }, { name: "Kubernetes", link: "/tag/kubernetes" }, { name: "Microservices", link: "/tag/microservices" }],
    comments: ["Very insightful.", "Docker and Kubernetes made simple!", "Thanks for this comprehensive guide."],
    readTime: "15 min",
    viewsCount: 600,
    shareCount: 55,
    commentCount: 3,
    likes: "400",
    upvotes: 350,
    downvotes: 2,
  }
];

export default posts;