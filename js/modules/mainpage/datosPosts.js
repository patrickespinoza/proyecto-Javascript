let posts = {
    post1: {
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
        relevant: false,
        content: `First of all, React is not a JavaScript framework, it's simply a javascript library developed by Jordan Walke
        that helps you to create User Interfaces(UI). React was first used in Facebook’s newsfeed in 2011 and then later in Instagram, WhatsApp by 2012, and released to the public in 2013.
        Today, most of the applications are built using Model View Controller(MVC) architecture and in this MVC architecture React is the 'V' that stands for view.
        In ReactJS, everything is a component and each component is responsible for outputting a small, reusable piece of HTML code. It is mostly used to build reusable components and it reduces the re-rendering of the DOM with the help of Virtual DOM.
        `,
    },
    post2: {
        title: "Getting Started with Node.js",
        description: "Learn the basics of Node.js and build scalable server-side applications.",
        image: "https://picsum.photos/id/1018/600/900",
        author: "Author 3",
        tags: ["Node.js", "Backend", "WebDevelopment"],
        date: "2022-02-15",
        reactions: {
            likes: 25,
            dislikes: 1,
            wow: 3,
            sad: 0,
            comments: 8
        },
        rating: 4.8,
        relevant: true,
        content: `Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a web browser. It allows you to build scalable network applications and is commonly used for building web servers and APIs. With Node.js, you can use JavaScript to write both client-side and server-side code, which makes it a versatile choice for full-stack development.`,
    },
    post3: {
        title: "Introduction to Python Programming",
        description: "Learn the fundamentals of Python programming language and its applications.",
        image: "https://picsum.photos/id/1062/600/900",
        author: "Author 8",
        tags: ["Python", "Programming", "Beginner"],
        date: "2022-03-10",
        reactions: {
            likes: 30,
            dislikes: 5,
            wow: 2,
            sad: 0,
            comments: 12
        },
        rating: 4.5,
        relevant: true,
        content: `Python is a high-level, interpreted programming language known for its simplicity and readability. It is widely used in various domains such as web development, data science, artificial intelligence, and more. Python's syntax allows developers to write code in fewer lines compared to other programming languages, making it an ideal choice for beginners and experienced developers alike.`,
    },
    post4: {
        title: "Getting Started with React Native",
        description: "Learn how to build mobile applications using React Native framework.",
        image: "https://picsum.photos/id/1041/600/900",
        author: "Author 5",
        tags: ["React Native", "Mobile Development", "Cross-platform"],
        date: "2022-04-20",
        reactions: {
            likes: 15,
            dislikes: 0,
            wow: 4,
            sad: 1,
            comments: 6
        },
        rating: 4.2,
        relevant: true,
        content: `React Native is a JavaScript framework for building native mobile applications using React. It allows developers to use React to build mobile apps that are indistinguishable from apps built using native technologies such as Swift or Java. With React Native, you can write code once and deploy it across multiple platforms, saving time and effort.`,
    },
    post5: {
        title: "Mastering Data Structures and Algorithms",
        description: "Learn advanced data structures and algorithms for problem-solving.",
        image: "https://picsum.photos/id/1084/600/900",
        author: "Author 2",
        tags: ["Data Structures", "Algorithms", "Problem Solving"],
        date: "2022-05-05",
        reactions: {
            likes: 40,
            dislikes: 3,
            wow: 8,
            sad: 0,
            comments: 15
        },
        rating: 4.9,
        relevant: true,
        content: `Data structures and algorithms are essential concepts for every programmer. They form the foundation of computer science and are used to solve complex problems efficiently. By mastering data structures and algorithms, you'll be better equipped to tackle coding challenges, ace technical interviews, and write optimized code.`,
    },
    post7: {
        title: "Deep Learning Fundamentals with TensorFlow",
        description: "Discover the basics of deep learning and neural networks using TensorFlow.",
        image: "https://picsum.photos/id/1070/600/900",
        author: "Author 4",
        tags: ["Deep Learning", "TensorFlow", "Neural Networks"],
        date: "2022-07-10",
        reactions: {
            likes: 35,
            dislikes: 2,
            wow: 6,
            sad: 0,
            comments: 9
        },
        rating: 4.6,
        relevant: true,
        content: `TensorFlow is an open-source machine learning framework developed by Google for building and training deep neural networks. It provides a comprehensive ecosystem of tools, libraries, and community resources for developing advanced machine learning models. With TensorFlow, you can easily implement various deep learning architectures, such as convolutional neural networks (CNNs), recurrent neural networks (RNNs), and more, to solve a wide range of real-world problems.`,
    },
    post8: {
        title: "Introduction to Agile Methodology",
        description: "Learn the principles and practices of Agile methodology for software development.",
        image: "https://picsum.photos/id/1081/600/900",
        author: "Author 9",
        tags: ["Agile", "Software Development", "Project Management"],
        date: "2022-08-20",
        reactions: {
            likes: 27,
            dislikes: 1,
            wow: 3,
            sad: 0,
            comments: 11
        },
        rating: 4.4,
        relevant: true,
        content: `Agile methodology is an iterative approach to software development that prioritizes customer collaboration, adaptive planning, and incremental delivery. It emphasizes flexibility, teamwork, and continuous improvement throughout the development process. By embracing Agile principles and practices, teams can respond quickly to changing requirements, deliver high-quality software, and maximize customer satisfaction.`,
    },
    post9: {
        title: "Fundamentals of Cybersecurity",
        description: "Explore the essential concepts and practices of cybersecurity for protecting digital assets.",
        image: "https://picsum.photos/id/1045/600/900",
        author: "Author 7",
        tags: ["Cybersecurity", "Information Security", "Risk Management"],
        date: "2022-09-15",
        reactions: {
            likes: 45,
            dislikes: 4,
            wow: 7,
            sad: 1,
            comments: 13
        },
        rating: 4.7,
        relevant: true,
        content: `Cybersecurity is the practice of protecting computer systems, networks, and data from cyber threats, attacks, and unauthorized access. It encompasses various technologies, processes, and practices designed to safeguard digital assets and prevent security breaches. By understanding the fundamentals of cybersecurity, individuals and organizations can effectively mitigate risks, detect vulnerabilities, and respond to security incidents.`,
    },
    post10: {
        title: "Mastering DevOps Practices",
        description: "Learn how to implement DevOps practices for automating software development and deployment.",
        image: "https://picsum.photos/id/1083/600/900",
        author: "Author 10",
        tags: ["DevOps", "Continuous Integration", "Continuous Deployment"],
        date: "2022-10-25",
        reactions: {
            likes: 38,
            dislikes: 3,
            wow: 5,
            sad: 0,
            comments: 10
        },
        rating: 4.9,
        relevant: true,
        content: `DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the systems development life cycle and deliver high-quality software continuously. It emphasizes collaboration, automation, and monitoring throughout the software delivery process. By mastering DevOps practices, teams can improve productivity, accelerate time to market, and enhance overall software quality and reliability.`,
    },
    post11: {
        title: "Introduction to Cloud Computing",
        description: "Discover the basics of cloud computing and its benefits for modern businesses.",
        image: "https://picsum.photos/id/1050/600/900", 
        author: "Author 11",
        tags: ["Cloud Computing", "Infrastructure as a Service", "Platform as a Service"],
        date: "2022-11-15",
        reactions: {
            likes: 33,
            dislikes: 2,
            wow: 4,
            sad: 0,
            comments: 8
        },
        rating: 4.6,
        relevant: true,
        content: `Cloud computing is the delivery of computing services over the internet on a pay-as-you-go basis. It provides access to a wide range of resources, such as servers, storage, databases, networking, software, and more, without the need for on-premises infrastructure. By leveraging cloud computing, businesses can reduce costs, increase scalability, improve flexibility, and enhance security.`,
    },
    
};

export { posts };