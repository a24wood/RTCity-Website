const Team_Cards = [
    {
        src: "/blog/authors/aidan.jpg",
        Name: "Aidan Wood",
        Bio: "This is just a filler bio to keep as a placeholder until i actually do this",
    },
    {
        src: "/blog/authors/aleks.jpg",
        Name: "Aleks Ficek",
        Bio: "aleks bio",
    },
    {
        src: "/blog/authors/braeden.jpg",
        Name: "Braeden Syrnyk",
        Bio: "braeden bio",
    },    
    {
        src: "/blog/authors/guragam.jpg",
        Name: "Guragam Bhalla",
        Bio: "guragam bio",
    },
    {
        src: "/blog/authors/steven_headshot.jpg",
        Name: "Steven Tuer",
        Bio: "Hi Everyone, I’m a 4th year Mechatronics student with a passion for firmware, controls  and robotics. During my time at Waterloo I have had the opportunity to work for multiple robotics and automotive companies, such as Tesla, Trexo Robotics, as well at a research lab on campus for autonomous vehicles (WISE Lab). I have also been involved with the WATonomous student design team during my 2A, 2B, and 3A terms as a member of the embedded software team. I’m currently planning on pursuing my masters in Mechatronics Engineering with a focus on research in vehicle controls.",
    }
]
const FEATURE_CARDS = [
    {
        Title: "The Mechatronics Vehicle Systems Lab",
        Brief: "Learn more about the lab we're working with",
        Description: "The Mechatronic Vehicle Systems (MVS) Lab—with over 40 graduate students, postdocs, engineers, and technicians—is one of the world’s largest vehicle control laboratories and a pioneer in developing holistic vehicle control systems. The laboratory has several test vehicles, including two electric SUVs, a Cadillac CTS, and an urban vehicle with MVS corner module technology plus a fleet of five autonomous shuttle buses (WATonoBus), and an autonomous utility truck (WATonoTruck) using MVS corner module technology. The vehicles are fully equipped with wheel sensors, Global Positioning Systems (GPS)/ Inertial Measurement Unit (IMU), cameras, lidars, and radars for evaluation of vehicle control, estimation, perception modules, and autonomous driving. The vehicles are controlled in real time using our estimation, control, and automated driving modules.",
        src:"/landing/MVSLogo.png",
    },
    {
        Title: "The Problem",
        Brief: "What problem are we trying to solve?",
        Description: "Despite sensor technology innovations leading to reduced costs, autonomous vehicles remain more expensive than human-operated alternatives. However, fully autonomous vehicles provide improved safety and productivity. Consequently, autonomous vehicles need a cost-effective alternative to their current sensor suite to become a feasible alternative to human-operated vehicles.",
        src: "/landing/problem.PNG",
    },
    {
        Title: "Our Objective",
        Brief: "What is the objective of this project?",
        Description: "This project aimed to develop a cost-effective real-time perception and localization infrastructure so that connected autonomous vehicle systems can safely and effectively navigate around the University of Waterloo's north campus. The WATonoBus will be used as a platform for a proof of concept for this project.",
        src: "/landing/objective.PNG",
    },
    {
        Title: "Node",
        Brief: "What are we walking about when we say 'Node'",
        Description: "Within the context of our project, a node refers to a single perception unit covering only a portion of the total route. Each node uses cameras and LiDAR to retrieve information on passing vehicles.",
        src: "/landing/node.PNG",
    },
    {
        Title: "Global Level Perception",
        Brief: "What does 'Global Level Perception' mean?",
        Description: "The route we have selected, unfortunately, cannot be covered by a single node. Therefore, we'll have to orchestrate perception data from multiple nodes to map the location of individual vehicles on our route.",
        src: "/landing/route.png", 
    }
]

export {
    Team_Cards,
    FEATURE_CARDS
}