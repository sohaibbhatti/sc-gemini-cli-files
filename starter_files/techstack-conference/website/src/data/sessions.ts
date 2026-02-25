export interface Session {
  id: string;
  title: string;
  speaker: string;
  category: 'Keynote' | 'Breakout' | 'Learning Lab' | 'Customer Story' | 'Expo';
  day: 'Day 1' | 'Day 2' | 'Day 3';
  time: string;
  location: string;
  description: string;
  details: {
    fullDescription: string;
    takeaways: string[];
    tracks: string[];
    level: 'Beginner' | 'Intermediate' | 'Advanced';
    speakerBio: string;
  };
}

export const SESSIONS: Session[] = [
  {
    id: "s1",
    title: "The Future of AI is Here",
    speaker: "Dr. Elena Rostova",
    category: "Keynote",
    day: "Day 1",
    time: "09:00 AM - 10:30 AM",
    location: "Main Hall A",
    description: "Join our CEO for the opening keynote as we explore the groundbreaking advancements in AI technology and what lies ahead for the industry.",
    details: {
      fullDescription: "In this visionary keynote, Dr. Elena Rostova will deconstruct the current state of artificial intelligence and provide a roadmap for the next decade. We will explore the shift from narrow AI to more generalizable systems, the impact of large-scale foundation models, and how businesses can stay ahead in an AI-first world.",
      takeaways: ["Understand the current AI landscape", "Strategic roadmap for AI implementation", "Insights into future AI trends"],
      tracks: ["AI/ML", "Strategy", "Future Tech"],
      level: "Beginner",
      speakerBio: "Dr. Elena Rostova is the CEO of TechStack and a leading voice in AI research and ethics."
    }
  },
  {
    id: "s2",
    title: "End-to-End MLOps with Kubernetes",
    speaker: "Marcus Chen",
    category: "Learning Lab",
    day: "Day 1",
    time: "09:00 AM - 11:00 AM",
    location: "Lab C",
    description: "Learn the entire MLOps lifecycle. From data ingestion to model training, containerization, and deployment to a Kubernetes cluster.",
    details: {
      fullDescription: "This hands-on lab takes you through the complexities of MLOps. Participants will build a complete pipeline using open-source tools, learning how to manage model versions, automate deployments, and monitor performance at scale on Kubernetes.",
      takeaways: ["Hands-on experience with Kubernetes for ML", "Building automated deployment pipelines", "Model monitoring best practices"],
      tracks: ["MLOps", "Cloud Native", "Kubernetes"],
      level: "Advanced",
      speakerBio: "Marcus Chen is a Senior Principal Engineer specializing in distributed systems and machine learning infrastructure."
    }
  },
  {
    id: "s3",
    title: "Micro-Frontends at Scale",
    speaker: "Priya Patel",
    category: "Breakout",
    day: "Day 1",
    time: "11:00 AM - 12:00 PM",
    location: "Room 101",
    description: "Learn how to brand distributed niches effectively.",
    details: {
      fullDescription: "As applications grow, monolithic frontends become a bottleneck. Priya Patel shares strategies for breaking down large frontends into manageable micro-frontends, covering orchestration, styling isolation, and deployment strategies used at scale.",
      takeaways: ["Architectural patterns for micro-frontends", "Communication between micro-frontends", "CI/CD for frontend modules"],
      tracks: ["Web Development", "Architecture", "Scaling"],
      level: "Intermediate",
      speakerBio: "Priya Patel is a Lead Architect known for her work on high-traffic web applications."
    }
  },
  {
    id: "s4",
    title: "Real-Time Event Streaming with Kafka",
    speaker: "Sarah Johnson",
    category: "Breakout",
    day: "Day 1",
    time: "11:00 AM - 12:00 PM",
    location: "Room 201",
    description: "Real-world case study on unleashing real-time initiatives.",
    details: {
      fullDescription: "Discover how to build resilient, high-throughput event-driven architectures using Apache Kafka. This session covers core Kafka concepts, stream processing with KSQL, and common pitfalls to avoid when implementing event streaming.",
      takeaways: ["Kafka architecture fundamentals", "Stream processing patterns", "Designing for high availability"],
      tracks: ["Data Engineering", "Real-Time", "Kafka"],
      level: "Intermediate",
      speakerBio: "Sarah Johnson is a Data Engineer with extensive experience in building real-time data platforms."
    }
  },
  {
    id: "s5",
    title: "Graph Neural Networks in Practice",
    speaker: "Isabella Martinez",
    category: "Learning Lab",
    day: "Day 1",
    time: "11:00 AM - 01:00 PM",
    location: "Lab A",
    description: "Workshop: Generating extensible relationships.",
    details: {
      fullDescription: "Graph Neural Networks (GNNs) are revolutionizing how we handle relational data. In this lab, you'll learn how to implement GNNs for recommendation systems and fraud detection using modern deep learning frameworks.",
      takeaways: ["Understanding graph representation learning", "Implementing GNNs with PyTorch Geometric", "Real-world applications of graphs"],
      tracks: ["AI/ML", "Data Science", "Deep Learning"],
      level: "Advanced",
      speakerBio: "Isabella Martinez is a Research Scientist focusing on graph algorithms and their applications in social networks."
    }
  },
  {
    id: "s6",
    title: "Optimizing React Performance",
    speaker: "David Kim",
    category: "Breakout",
    day: "Day 1",
    time: "01:00 PM - 02:00 PM",
    location: "Room 102",
    description: "Strategies for streamlining customized eyeballs.",
    details: {
      fullDescription: "React is fast, but complex apps can slow down. David Kim dives deep into Profiler tools, memoization strategies, and the new concurrent features in React 19 to help you build buttery-smooth user interfaces.",
      takeaways: ["Advanced memoization techniques", "Optimizing re-renders", "Leveraging React 19 concurrent features"],
      tracks: ["Web Development", "React", "Performance"],
      level: "Advanced",
      speakerBio: "David Kim is a Frontend Engineer and frequent contributor to the React ecosystem."
    }
  },
  {
    id: "s7",
    title: "Building Scalable Community Platforms",
    speaker: "James Wilson",
    category: "Breakout",
    day: "Day 1",
    time: "01:00 PM - 02:00 PM",
    location: "Room 202",
    description: "How we e-enabled dynamic communities.",
    details: {
      fullDescription: "Learn the technical and social aspects of building platforms that can support millions of engaged users. James Wilson discusses architectural choices, moderation systems, and scaling database writes for high-engagement scenarios.",
      takeaways: ["Database sharding strategies", "Building robust moderation tools", "Scalable notification systems"],
      tracks: ["Product", "Architecture", "Community"],
      level: "Intermediate",
      speakerBio: "James Wilson is a Product Lead with a background in social media architecture."
    }
  },
  {
    id: "s8",
    title: "High-Throughput Data Pipelines",
    speaker: "Robert Garcia",
    category: "Learning Lab",
    day: "Day 1",
    time: "02:00 PM - 04:00 PM",
    location: "Lab B",
    description: "Hands-on: Transitioning efficient channels.",
    details: {
      fullDescription: "A deep dive into building data pipelines that can handle terabytes of data daily. This lab covers Apache Spark, Flink, and modern data lakehouse architectures like Delta Lake and Iceberg.",
      takeaways: ["Building ETL pipelines with Spark", "Stream processing with Flink", "Implementing a Data Lakehouse"],
      tracks: ["Data Engineering", "Big Data", "Cloud Computing"],
      level: "Advanced",
      speakerBio: "Robert Garcia is a Big Data Architect who has designed data platforms for global enterprises."
    }
  },
  {
    id: "s9",
    title: "Open Source Stewardship Strategy",
    speaker: "Thomas Lee",
    category: "Breakout",
    day: "Day 1",
    time: "02:30 PM - 03:30 PM",
    location: "Room 103",
    description: "Implementing strategic communities for growth.",
    details: {
      fullDescription: "Managing a successful open-source project requires more than just code. Thomas Lee shares insights on building community trust, managing contributions, and creating sustainable governance models for open-source initiatives.",
      takeaways: ["Governance models for OSS", "Strategies for contributor growth", "Measuring community health"],
      tracks: ["Open Source", "Strategy", "Management"],
      level: "Beginner",
      speakerBio: "Thomas Lee is an Open Source Advocate and maintainer of several popular libraries."
    }
  },
  {
    id: "s10",
    title: "Securing Modern Web APIs",
    speaker: "Michael Brown",
    category: "Breakout",
    day: "Day 1",
    time: "02:30 PM - 03:30 PM",
    location: "Room 203",
    description: "Targeting holistic web services effectively.",
    details: {
      fullDescription: "Security is paramount in an API-driven world. This session covers OAuth2, OIDC, JWT best practices, and defending against common API attacks like injection, broken object-level authorization (BOLA), and rate-limiting bypasses.",
      takeaways: ["Implementing secure OAuth2 flows", "API security best practices", "Vulnerability assessment for APIs"],
      tracks: ["Security", "Web Development", "API"],
      level: "Intermediate",
      speakerBio: "Michael Brown is a Security Consultant specializing in web application security."
    }
  },
  {
    id: "s11",
    title: "Next-Gen WebAssembly (Wasm)",
    speaker: "Lisa Wang",
    category: "Learning Lab",
    day: "Day 1",
    time: "04:00 PM - 06:00 PM",
    location: "Lab A",
    description: "E-Enabling next-generation web services.",
    details: {
      fullDescription: "WebAssembly is moving beyond the browser. Learn how to use Wasm for high-performance server-side tasks, plugin systems, and edge computing. This lab includes building a serverless function in Rust and deploying it as a Wasm module.",
      takeaways: ["Writing high-performance Wasm", "Wasm on the server with WASI", "Building extensible plugin systems"],
      tracks: ["Web Development", "Rust", "Edge Computing"],
      level: "Advanced",
      speakerBio: "Lisa Wang is a Software Engineer and early adopter of Wasm technology."
    }
  },
  {
    id: "s12",
    title: "Building Ethical AI Systems",
    speaker: "Prof. Emily Carter",
    category: "Keynote",
    day: "Day 2",
    time: "09:00 AM - 10:00 AM",
    location: "Main Hall A",
    description: "A deep dive into the importance of ethics in AI development, ensuring safety, fairness, and transparency.",
    details: {
      fullDescription: "As AI becomes more integrated into our lives, ethical considerations must be at the forefront. Prof. Emily Carter discusses bias mitigation, interpretability, and the responsibility of developers in building fair and transparent AI systems.",
      takeaways: ["Understanding AI bias and fairness", "Techniques for model interpretability", "Ethical frameworks for AI development"],
      tracks: ["AI/ML", "Ethics", "Strategy"],
      level: "Beginner",
      speakerBio: "Prof. Emily Carter is a renowned researcher in AI ethics and a professor at a leading technical university."
    }
  },
  {
    id: "s13",
    title: "Personalization at Scale with AI",
    speaker: "Maria Hernandez",
    category: "Learning Lab",
    day: "Day 2",
    time: "09:00 AM - 11:00 AM",
    location: "Lab C",
    description: "Streamlining B2C experiences lab.",
    details: {
      fullDescription: "Delivering personalized experiences for millions of users requires advanced AI and robust infrastructure. This lab covers recommendation engine architectures, real-time feature engineering, and A/B testing personalized models.",
      takeaways: ["Building recommendation systems", "Real-time personalization strategies", "Measuring personalization impact"],
      tracks: ["AI/ML", "Product", "Data Science"],
      level: "Intermediate",
      speakerBio: "Maria Hernandez is a Machine Learning Engineer with expertise in recommendation systems and consumer tech."
    }
  },
  {
    id: "s14",
    title: "Building Vertical AI Agents",
    speaker: "Christopher Davis",
    category: "Breakout",
    day: "Day 2",
    time: "11:00 AM - 12:00 PM",
    location: "Room 101",
    description: "Optimizing vertical applications for better performance.",
    details: {
      fullDescription: "General AI is powerful, but vertical-specific agents are where the value lies. Learn how to build and fine-tune AI agents for specific industries like legal, healthcare, or finance, focusing on domain-specific knowledge and reliability.",
      takeaways: ["Domain-specific LLM fine-tuning", "Building reliable AI agents", "Vertical AI market insights"],
      tracks: ["AI/ML", "Product", "Strategy"],
      level: "Intermediate",
      speakerBio: "Christopher Davis is a Founder and Engineer building specialized AI solutions for the enterprise."
    }
  },
  {
    id: "s15",
    title: "Distributed Tracing & Observability",
    speaker: "Jennifer Martinez",
    category: "Breakout",
    day: "Day 2",
    time: "11:00 AM - 12:00 PM",
    location: "Room 201",
    description: "Aggregating granular synergies for success.",
    details: {
      fullDescription: "In complex microservices architectures, debugging is a challenge. Jennifer Martinez explains how to implement distributed tracing using OpenTelemetry to gain deep visibility into your system's performance and behavior.",
      takeaways: ["OpenTelemetry implementation guide", "Analyzing trace data", "Improving MTTR with observability"],
      tracks: ["DevOps", "Cloud Native", "Observability"],
      level: "Intermediate",
      speakerBio: "Jennifer Martinez is an SRE focused on building observable and resilient distributed systems."
    }
  },
  {
    id: "s16",
    title: "Real-Time Analytics with Apache Flink",
    speaker: "Kevin Anderson",
    category: "Learning Lab",
    day: "Day 2",
    time: "11:00 AM - 01:00 PM",
    location: "Lab A",
    description: "Maximize real-time eyeballs workshop.",
    details: {
      fullDescription: "Traditional batch processing is no longer enough. This hands-on lab covers stream processing with Apache Flink, including event time processing, state management, and building low-latency analytical applications.",
      takeaways: ["Flink stream processing fundamentals", "Stateful stream processing", "Windowing and event time"],
      tracks: ["Data Engineering", "Real-Time", "Big Data"],
      level: "Advanced",
      speakerBio: "Kevin Anderson is a Data Engineer and Apache Flink contributor."
    }
  },
  {
    id: "s17",
    title: "Edge AI: Running Models Locally",
    speaker: "Susan Taylor",
    category: "Breakout",
    day: "Day 2",
    time: "01:00 PM - 02:00 PM",
    location: "Room 102",
    description: "Redefining world-class bandwidth standards.",
    details: {
      fullDescription: "Privacy and latency are driving AI to the edge. Learn how to optimize and run machine learning models on mobile devices, IoT hardware, and local browsers using tools like TensorFlow Lite, ONNX Runtime, and WebGPU.",
      takeaways: ["Model quantization and optimization", "Cross-platform edge AI deployment", "Leveraging hardware acceleration"],
      tracks: ["AI/ML", "Edge Computing", "IoT"],
      level: "Intermediate",
      speakerBio: "Susan Taylor is an Embedded Software Engineer and Edge AI researcher."
    }
  },
  {
    id: "s18",
    title: "Benchmarking Large Language Models",
    speaker: "Daniel White",
    category: "Breakout",
    day: "Day 2",
    time: "01:00 PM - 02:00 PM",
    location: "Room 202",
    description: "Benchmarking synergistic vortals in the industry.",
    details: {
      fullDescription: "With new LLMs released daily, how do you choose the right one? Daniel White discusses evaluation frameworks, latency-cost-quality trade-offs, and building robust benchmarking suites for your specific AI use cases.",
      takeaways: ["LLM evaluation frameworks", "Cost-benefit analysis of different models", "Continuous benchmarking in production"],
      tracks: ["AI/ML", "Strategy", "Testing"],
      level: "Intermediate",
      speakerBio: "Daniel White is an AI Product Manager focused on model selection and optimization."
    }
  },
  {
    id: "s19",
    title: "WebTransport & WebSockets Deep Dive",
    speaker: "Jessica Thomas",
    category: "Learning Lab",
    day: "Day 2",
    time: "02:00 PM - 04:00 PM",
    location: "Lab B",
    description: "Seize next-generation bandwidth tutorial.",
    details: {
      fullDescription: "WebTransport is the modern successor to WebSockets for many use cases. In this lab, you'll compare both protocols and build a real-time, high-frequency data streaming application leveraging the power of HTTP/3.",
      takeaways: ["Deep dive into WebTransport", "Optimizing WebSocket performance", "Building real-time apps with HTTP/3"],
      tracks: ["Web Development", "Networking", "Performance"],
      level: "Advanced",
      speakerBio: "Jessica Thomas is a Browser Engineer who works on high-performance networking protocols."
    }
  },
  {
    id: "s20",
    title: "Serverless vs. Edge Functions",
    speaker: "Paul Moore",
    category: "Breakout",
    day: "Day 2",
    time: "02:30 PM - 03:30 PM",
    location: "Room 103",
    description: "Techniques to disintermediate back-end web services.",
    details: {
      fullDescription: "Where should your code run? Paul Moore explores the trade-offs between traditional serverless platforms and the new breed of edge computing services, focusing on latency, cold starts, and data locality.",
      takeaways: ["Serverless vs. Edge comparison", "Architecting for minimal latency", "Cost-effective serverless design"],
      tracks: ["Cloud Computing", "Architecture", "DevOps"],
      level: "Intermediate",
      speakerBio: "Paul Moore is a Cloud Architect with experience in massive-scale serverless deployments."
    }
  },
  {
    id: "s21",
    title: "Optimizing 5G for IoT",
    speaker: "Mark Jackson",
    category: "Breakout",
    day: "Day 2",
    time: "02:30 PM - 03:30 PM",
    location: "Room 203",
    description: "Transforming bleeding-edge bandwidth case study.",
    details: {
      fullDescription: "5G is a game-changer for IoT, but only if you use it right. Learn how to leverage network slicing, low-latency communication, and massive machine-type communication features of 5G for your IoT projects.",
      takeaways: ["Leveraging 5G network slicing", "Reducing latency in IoT apps", "Scaling IoT with 5G"],
      tracks: ["IoT", "Networking", "Hardware"],
      level: "Intermediate",
      speakerBio: "Mark Jackson is a Telecommunications Engineer and IoT enthusiast."
    }
  },
  {
    id: "s22",
    title: "Scaling Rust for Web Services",
    speaker: "Laura Martin",
    category: "Learning Lab",
    day: "Day 3",
    time: "09:00 AM - 11:00 AM",
    location: "Lab C",
    description: "Scaling next-generation e-business strategies.",
    details: {
      fullDescription: "Rust is becoming the language of choice for high-performance web services. This lab covers building a scalable API with Axum, handling async operations, and integrating with high-performance databases like ScyllaDB.",
      takeaways: ["Building web services with Axum", "Async programming in Rust", "Rust database integration best practices"],
      tracks: ["Web Development", "Rust", "Backend"],
      level: "Advanced",
      speakerBio: "Laura Martin is a Systems Engineer and active member of the Rust community."
    }
  },
  {
    id: "s23",
    title: "Migrating from Monolith to Microservices",
    speaker: "Michelle Wu",
    category: "Breakout",
    day: "Day 3",
    time: "11:00 AM - 12:00 PM",
    location: "Room 101",
    description: "Transitioning to holistic models seamlessly.",
    details: {
      fullDescription: "The road to microservices is paved with good intentions but also many pitfalls. Michelle Wu shares a step-by-step strategy for migrating legacy monoliths using the Strangler Fig pattern, ensuring minimal downtime and risk.",
      takeaways: ["Strangler Fig migration pattern", "Designing microservice boundaries", "Managing cross-service consistency"],
      tracks: ["Architecture", "Scaling", "Management"],
      level: "Intermediate",
      speakerBio: "Michelle Wu is a Software Architect with a track record of successful digital transformations."
    }
  },
  {
    id: "s24",
    title: "Service Mesh with Istio & Linkerd",
    speaker: "David O'Connell",
    category: "Breakout",
    day: "Day 3",
    time: "11:00 AM - 12:00 PM",
    location: "Room 201",
    description: "Meshing customized web services seamlessly.",
    details: {
      fullDescription: "As microservices multiply, a service mesh becomes essential. Learn how to manage traffic, implement security policies, and gain visibility using Istio and Linkerd in a production Kubernetes environment.",
      takeaways: ["Service Mesh fundamentals", "Traffic management with Istio", "Securing service-to-service communication"],
      tracks: ["DevOps", "Kubernetes", "Observability"],
      level: "Advanced",
      speakerBio: "David O'Connell is a Cloud Infrastructure Engineer and service mesh expert."
    }
  },
  {
    id: "s25",
    title: "Efficient Video Streaming Protocols",
    speaker: "Steven Thompson",
    category: "Learning Lab",
    day: "Day 3",
    time: "11:00 AM - 01:00 PM",
    location: "Lab A",
    description: "Cultivating efficient bandwidth deep dive.",
    details: {
      fullDescription: "Video traffic dominates the web. Learn about modern video codecs like AV1, adaptive bitrate streaming protocols (HLS/DASH), and how to optimize delivery using edge-based transcoding and delivery.",
      takeaways: ["Implementing adaptive bitrate streaming", "Codec optimization for web and mobile", "Edge-based video processing"],
      tracks: ["Web Development", "Networking", "Performance"],
      level: "Intermediate",
      speakerBio: "Steven Thompson is a Video Engineer and expert in media delivery technologies."
    }
  },
  {
    id: "s26",
    title: "Headless Commerce Architectures",
    speaker: "Kenneth Lewis",
    category: "Breakout",
    day: "Day 3",
    time: "01:00 PM - 02:00 PM",
    location: "Room 102",
    description: "Redefining world-class e-commerce experiences.",
    details: {
      fullDescription: "Traditional e-commerce is too rigid. Kenneth Lewis explores headless commerce architectures that decouple the frontend from the backend, allowing for truly omnichannel and highly personalized shopping experiences.",
      takeaways: ["Headless commerce architecture benefits", "Integrating with modern commerce APIs", "Omnichannel strategy implementation"],
      tracks: ["Web Development", "E-commerce", "Architecture"],
      level: "Beginner",
      speakerBio: "Kenneth Lewis is an E-commerce Architect and consultant for global retail brands."
    }
  },
  {
    id: "s27",
    title: "DevRel: Building Developer Trust",
    speaker: "Patricia Walker",
    category: "Breakout",
    day: "Day 3",
    time: "01:00 PM - 02:00 PM",
    location: "Room 202",
    description: "Monetizing next-generation relationships.",
    details: {
      fullDescription: "Developer relations is about more than just marketing. Patricia Walker shares how to build authentic connections with developer communities, focusing on documentation, open-source contribution, and advocacy.",
      takeaways: ["Building developer-centric documentation", "Authentic community engagement strategies", "Measuring DevRel impact"],
      tracks: ["DevRel", "Community", "Strategy"],
      level: "Beginner",
      speakerBio: "Patricia Walker is a Developer Advocate and community builder with a passion for developer experience."
    }
  },
  {
    id: "s28",
    title: "GraphQL Federation at Scale",
    speaker: "Brian Garcia",
    category: "Learning Lab",
    day: "Day 3",
    time: "02:00 PM - 04:00 PM",
    location: "Lab B",
    description: "Driving rich web services masterclass.",
    details: {
      fullDescription: "Apollo Federation allows multiple teams to work on a single graph. In this lab, you'll learn how to implement federation, manage schema changes, and optimize query performance across distributed subgraphs.",
      takeaways: ["Implementing Apollo Federation", "Schema governance at scale", "Optimizing federated queries"],
      tracks: ["Web Development", "API", "Architecture"],
      level: "Advanced",
      speakerBio: "Brian Garcia is a Backend Engineer and GraphQL expert."
    }
  },
  {
    id: "s29",
    title: "Multi-Cloud Infrastructure Management",
    speaker: "Amara Okafor",
    category: "Breakout",
    day: "Day 3",
    time: "02:30 PM - 03:30 PM",
    location: "Room 103",
    description: "Engaging distributed infrastructures at scale.",
    details: {
      fullDescription: "Don't get locked into one cloud. Amara Okafor discusses strategies and tools like Terraform and Crossplane for managing infrastructure across AWS, GCP, and Azure from a single control plane.",
      takeaways: ["Multi-cloud infrastructure as code", "Cross-cloud workload migration", "Managing multi-cloud costs"],
      tracks: ["Cloud Computing", "DevOps", "Infrastructure"],
      level: "Intermediate",
      speakerBio: "Amara Okafor is a Cloud Architect and infrastructure automation expert."
    }
  },
  {
    id: "s30",
    title: "Accessibility in Modern Web Apps",
    speaker: "Tariq Al-Fayed",
    category: "Breakout",
    day: "Day 3",
    time: "02:30 PM - 03:30 PM",
    location: "Room 203",
    description: "Re-intermediating rich communities for growth.",
    details: {
      fullDescription: "The web should be accessible to everyone. Tariq Al-Fayed shares techniques for building highly interactive yet accessible web applications, covering ARIA patterns, keyboard navigation, and testing for inclusivity.",
      takeaways: ["Advanced ARIA implementations", "Keyboard navigation best practices", "Accessibility testing workflows"],
      tracks: ["Web Development", "Accessibility", "UX"],
      level: "Beginner",
      speakerBio: "Tariq Al-Fayed is a Frontend Engineer and accessibility advocate."
    }
  },
  {
    id: "s31",
    title: "Advanced PostgreSQL Patterns",
    speaker: "Wei Zhang",
    category: "Breakout",
    day: "Day 3",
    time: "04:00 PM - 05:00 PM",
    location: "Room 104",
    description: "E-Enabling efficient schemas for data.",
    details: {
      fullDescription: "PostgreSQL is more than just a relational database. Learn about JSONB performance, advanced indexing (GIN/GiST), partitioning, and leveraging window functions for complex analytical queries.",
      takeaways: ["PostgreSQL JSONB optimization", "Advanced indexing strategies", "Efficient database partitioning"],
      tracks: ["Data Engineering", "Databases", "Performance"],
      level: "Advanced",
      speakerBio: "Wei Zhang is a Database Engineer and PostgreSQL contributor."
    }
  },
  {
    id: "s32",
    title: "Bridging Digital & Physical Retail",
    speaker: "Mateo Fernandez",
    category: "Breakout",
    day: "Day 3",
    time: "04:00 PM - 05:00 PM",
    location: "Room 204",
    description: "Streamlining clicks-and-mortar functionalities.",
    details: {
      fullDescription: "The future of retail is hybrid. Mateo Fernandez discusses how to build technical solutions that connect online experiences with physical stores, focusing on real-time inventory, local fulfillment, and in-store interactive tech.",
      takeaways: ["Building hybrid retail solutions", "Real-time inventory synchronization", "In-store tech integration best practices"],
      tracks: ["Product", "E-commerce", "IoT"],
      level: "Intermediate",
      speakerBio: "Mateo Fernandez is a Product Strategist focusing on retail innovation."
    }
  }
];
