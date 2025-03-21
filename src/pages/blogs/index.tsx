import BlogCard from "./components/blog-card";

export interface BlogType {
  img: string;
  text: string;
  des: string;
}

const Blog = () => {
  return (
    <section className=" max-w-6xl mx-auto px-3  pt-24 relative z-30  pb-10">
      <div className="flex items-center w-full flex-col space-y-2">
        <div className="w-10 h-1 gallery-bar"></div>
        <h1 className="text-2xl sm:text-3xl">Blogs</h1>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-5 w-full mt-10">
        {datas.map((data, i) => (
          <BlogCard key={i} data={data} />
        ))}
      </div>
    </section>
  );
};

export default Blog;

const datas = [
  {
    img: "https://i.pinimg.com/736x/d3/7e/71/d37e714cfd25fc46975fadc9a4e7d403.jpg",
    text: "Building Scalable Applications for 1 Million Users on AWS ",
    des: "In this blog post, we walk you through the steps required to build highly scalable applications on AWS that can effortlessly handle a user base of over 1 million. You’ll learn how to leverage AWS services like EC2, S3, Lambda, and RDS to architect an infrastructure that automatically scales according to user demand. Whether you’re building a web app or a mobile app, this guide will provide you with the best practices for ensuring high availability, performance, and reliability.",
  },
  {
    img: "https://i.pinimg.com/474x/34/d8/2b/34d82b044dc9d213c477f6464652bf83.jpg",
    text: "Mastering Kubernetes for Large-Scale Deployments ",
    des: "Kubernetes is a powerful platform for automating containerized application deployment, scaling, and management. In this post, we dive deep into Kubernetes and explore how it can be leveraged for large-scale deployments in production environments. Learn about key concepts like Pods, Nodes, Services, and Helm charts, as well as how to implement CI/CD pipelines for Kubernetes. This blog is perfect for developers and DevOps professionals looking to gain a deeper understanding of Kubernetes in large-scale applications.",
  },
  {
    img: "https://i.pinimg.com/736x/03/15/7f/03157fff40898fa8a89930891357d6db.jpg",
    text: "Leverage Machine Learning to Optimize Your Business Processes ",
    des: "Machine learning is revolutionizing how businesses operate by enabling smarter decision-making and automating tasks that were once time-consuming. In this blog, we discuss how businesses can incorporate machine learning models into their workflows to improve efficiency and reduce operational costs. You’ll learn how to use ML for predictive analytics, customer segmentation, and process automation, helping you make better business decisions and create more personalized experiences for your customers.",
  },
  {
    img: "https://i.pinimg.com/736x/82/fd/f1/82fdf1a98fcd36bbccd29d26da338ba6.jpg",
    text: "Integrating AI into Your Software Development Life Cycle ",
    des: "Artificial Intelligence (AI) is transforming software development by enabling more intelligent, efficient, and user-friendly applications. This blog explores the integration of AI throughout the software development lifecycle (SDLC), from the initial planning and design phases through to testing and deployment. We’ll highlight various AI tools and frameworks that enhance the SDLC, streamline development processes, and improve software quality. If you want to learn how to infuse AI into your dev workflow, this post is for you.",
  },
  {
    img: "https://i.pinimg.com/474x/50/ee/80/50ee8026d2be5a4aa2b4a95586b77eda.jpg",
    text: "Exploring Cloud-Native Development with Docker and Kubernetes ",
    des: "Cloud-native development is all about building applications that are designed to scale and run effectively in cloud environments. In this blog, we dive into how Docker and Kubernetes can be used together to create cloud-native applications. Docker allows you to containerize applications, while Kubernetes automates their deployment and management across clusters. Learn how these technologies work together to provide a seamless development experience and how they’re revolutionizing the way modern applications are built and maintained.",
  },
  {
    img: "https://i.pinimg.com/474x/ee/f8/33/eef833a9aac5604f3fd1289cfd0a7cae.jpg",
    text: "Cloud Security Best Practices for Protecting Your Data",
    des: "As businesses increasingly migrate their data and applications to the cloud, ensuring the security of that data becomes paramount. This blog covers cloud security best practices that every organization should implement to protect sensitive data and prevent cyberattacks. We’ll explore encryption techniques, multi-factor authentication, identity and access management (IAM), and other tools that will help you secure your cloud infrastructure. Stay ahead of potential security threats and learn how to implement a solid cloud security strategy.",
  },
  {
    img: "https://i.pinimg.com/474x/7c/6d/bd/7c6dbd5b27618f612b36a2b4ec1aae96.jpg",
    text: "Introduction to Serverless Architecture on AWS",
    des: "Serverless computing is changing the way applications are built by removing the need to manage infrastructure. In this post, we’ll introduce you to serverless architecture on AWS, explaining the benefits of using AWS Lambda, API Gateway, DynamoDB, and other serverless services. You’ll learn how to build and deploy applications without worrying about provisioning or managing servers. This blog will show you how serverless architecture can simplify your development process and reduce costs while scaling automatically based on demand.",
  },
  {
    img: "https://i.pinimg.com/736x/19/93/55/19935592a9d6de85735bcfa4dbf43078.jpg",
    text: " Big Data Analytics: Unlocking Insights for Your Business ",
    des: "Big data analytics allows businesses to gain valuable insights from large datasets, uncovering trends, patterns, and opportunities that were previously hidden. In this blog, we’ll discuss the role of big data in business decision-making and how you can use tools like Apache Hadoop, Spark, and AWS Redshift to process and analyze large volumes of data. Whether you’re working in marketing, finance, or operations, learn how to harness the power of big data to improve your strategies and drive innovation.",
  },
  {
    img: "https://i.pinimg.com/474x/58/34/46/583446127ce71adf1afb419db5fd580d.jpg",
    text: "Edge Computing: The Future of Distributed Applications ",
    des: "Edge computing is an emerging technology that brings computation closer to where data is generated, reducing latency and improving performance for real-time applications. In this blog, we’ll explore the rise of edge computing and how it’s changing the landscape of distributed applications. We’ll cover its role in IoT, 5G networks, and applications that require low-latency processing. If you’re looking to optimize your applications for the next generation of distributed computing, this post will give you a comprehensive understanding of edge computing.",
  },
  {
    img: "https://i.pinimg.com/474x/13/c0/7e/13c07e949d67d163eedde839b662a77c.jpg",
    text: "Enhancing User Experience with Progressive Web Apps (PWAs)",
    des: "Progressive Web Apps (PWAs) are a new breed of web applications that provide users with a native app-like experience while being accessed through the web. In this blog, we explore how PWAs can enhance user experience by offering faster load times, offline capabilities, and smooth transitions between web and app experiences. You’ll learn how to build your own PWA and the key benefits they offer over traditional websites and native apps. This post is a must-read for developers interested in improving engagement and performance with the latest web technologies.",
  },
];
