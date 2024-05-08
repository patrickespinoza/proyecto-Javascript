let posts = {
    post1: {
        title: "Introducción a JavaScript ES6",
        description: "Aprende sobre las nuevas características de JavaScript ES6.",
        image: "https://picsum.photos/id/21/600/900",
        author: "Author 1",
        tags: ["JavaScript", "ES6", "Frontend", "WebDevelopment"],
        date: "2021-12-01",
        reactions: {
            likes: 10,
            dislikes: 2,
            wow: 5,
            sad: 1,
            comments: 5
        },
        rating: 4,
        relevant: false
    },
    post2: {
        title: "Desarrollo web con Python y Django",
        description: "Construye aplicaciones web poderosas utilizando Python y el framework Django.",
        image: "https://picsum.photos/id/22/600/900",
        author: "Author 2",
        tags: ["Python", "Django", "Backend", "WebDevelopment"],
        date: "2021-09-02",
        reactions: {
            likes: 12,
            dislikes: 1,
            wow: 4,
            sad: 0,
            comments: 8
        },
        rating: 4.5,
        relevant: true
    },
    post3: {
        title: "Desarrollo de aplicaciones móviles con Swift",
        description: "Explora el mundo del desarrollo de aplicaciones móviles con Swift.",
        image: "https://picsum.photos/id/137/600/900",
        author: "Author 3",
        tags: ["Swift", "iOS", "MobileDevelopment", "AppDevelopment"],
        date: "2021-10-03",
        reactions: {
            likes: 15,
            dislikes: 3,
            wow: 7,
            sad: 2,
            comments: 12
        },
        rating: 3.8,
        relevant: true
    },
    post4: {
        title: "Introducción al desarrollo web con Java Spring",
        description: "Descubre cómo construir aplicaciones web robustas con Java y el framework Spring.",
        image: "https://picsum.photos/id/234/600/900",
        author: "Author 4",
        tags: ["Java", "Spring", "Backend", "WebDevelopment"],
        date: "2021-11-04",
        reactions: {
            likes: 8,
            dislikes: 0,
            wow: 3,
            sad: 0,
            comments: 3
        },
        rating: 4.2,
        relevant: true
    },
    post5: {
        title: "Desarrollo de APIs RESTful con Go",
        description: "Aprende a construir APIs RESTful eficientes utilizando el lenguaje de programación Go.",
        image: "https://picsum.photos/id/32/600/900",
        author: "Author 5",
        tags: ["Go", "APIs", "Backend", "WebDevelopment"],
        date: "2021-05-05",
        reactions: {
            likes: 20,
            dislikes: 5,
            wow: 10,
            sad: 3,
            comments: 15
        },
        rating: 4.7,
        relevant: true
    },
    post6: {
        title: "Introduction to React.js",
        description: "Learn the fundamentals of React.js and build interactive user interfaces.",
        image: "https://picsum.photos/id/42/600/900",
        author: "Author 6",
        tags: ["React", "Frontend", "WebDevelopment"],
        date: "2022-01-01",
        reactions: {
            likes: 18,
            dislikes: 2,
            wow: 6,
            sad: 1,
            comments: 10
        },
        rating: 4.3,
        relevant: true
    },
    post7: {
        title: "Data Science with Python",
        description: "Explore the world of data science using Python and its powerful libraries.",
        image: "https://picsum.photos/id/53/600/900",
        author: "Author 7",
        tags: ["Python", "DataScience", "MachineLearning"],
        date: "2022-02-02",
        reactions: {
            likes: 14,
            dislikes: 3,
            wow: 8,
            sad: 0,
            comments: 6
        },
        rating: 4.6,
        relevant: true
    },
    post8: {
        title: "Building Mobile Apps with React Native",
        description: "Learn how to build cross-platform mobile apps using React Native.",
        image: "https://picsum.photos/id/64/600/900",
        author: "Author 8",
        tags: ["ReactNative", "MobileDevelopment", "AppDevelopment"],
        date: "2022-03-03",
        reactions: {
            likes: 16,
            dislikes: 1,
            wow: 5,
            sad: 2,
            comments: 8
        },
        rating: 4.2,
        relevant: true
    },
    post9: {
        title: "Introduction to Angular",
        description: "Get started with Angular and build scalable web applications.",
        image: "https://picsum.photos/id/75/600/900",
        author: "Author 9",
        tags: ["Angular", "Frontend", "WebDevelopment"],
        date: "2022-04-04",
        reactions: {
            likes: 12,
            dislikes: 0,
            wow: 4,
            sad: 0,
            comments: 4
        },
        rating: 4.8,
        relevant: true
    },
    post10: {
        title: "Backend Development with Node.js",
        description: "Learn how to build server-side applications using Node.js and Express.",
        image: "https://picsum.photos/id/10/600/900",
        author: "Author 10",
        tags: ["Node.js", "Backend", "WebDevelopment"],
        date: "2022-05-05",
        reactions: {
            likes: 22,
            dislikes: 4,
            wow: 12,
            sad: 3,
            comments: 18
        },
        rating: 5,
        relevant: true
    },
    post11: {
        title: "Introduction to Vue.js",
        description: "Learn the basics of Vue.js and build interactive web applications.",
        image: "https://picsum.photos/id/97/600/900",
        author: "Author 11",
        tags: ["Vue", "Frontend", "WebDevelopment"],
        date: "2022-06-06",
        reactions: {
            likes: 20,
            dislikes: 2,
            wow: 7,
            sad: 1,
            comments: 12
        },
        rating: 4.5,
        relevant: true
    },
    post12: {
        title: "Full Stack Development with MERN",
        description: "Build full stack web applications using the MERN stack (MongoDB, Express, React, Node.js).",
        image: "https://picsum.photos/id/108/600/900",
        author: "Author 12",
        tags: ["MERN", "FullStack", "WebDevelopment"],
        date: "2022-07-07",
        reactions: {
            likes: 25,
            dislikes: 3,
            wow: 9,
            sad: 2,
            comments: 15
        },
        rating: 4.7,
        relevant: true
    },
    post13: {
        title: "Introduction to TypeScript",
        description: "Learn the basics of TypeScript and enhance your JavaScript projects.",
        image: "https://picsum.photos/id/119/600/900",
        author: "Author 13",
        tags: ["TypeScript", "Frontend", "WebDevelopment"],
        date: "2022-08-08",
        reactions: {
            likes: 15,
            dislikes: 1,
            wow: 5,
            sad: 0,
            comments: 8
        },
        rating: 4.4,
        relevant: true
    },
    post14: {
        title: "Building RESTful APIs with Express",
        description: "Learn how to build RESTful APIs using Express.js and MongoDB.",
        image: "https://picsum.photos/id/130/600/900",
        author: "Author 14",
        tags: ["Express", "APIs", "Backend", "WebDevelopment"],
        date: "2022-09-09",
        reactions: {
            likes: 18,
            dislikes: 2,
            wow: 6,
            sad: 1,
            comments: 10
        },
        rating: 4.3,
        relevant: true
    },
    post15: {
        title: "Introduction to Ruby on Rails",
        description: "Get started with Ruby on Rails and build web applications with ease.",
        image: "https://picsum.photos/id/141/600/900",
        author: "Author 15",
        tags: ["Ruby", "Rails", "Backend", "WebDevelopment"],
        date: "2022-10-10",
        reactions: {
            likes: 14,
            dislikes: 3,
            wow: 8,
            sad: 0,
            comments: 6
        },
        rating: 4.6,
        relevant: true
    }
};

export { posts };