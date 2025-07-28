import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SkillBadge from "@/components/ui/skill-badge";
import { ArrowRight, Code2, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.png";

const Home = () => {
  const coreSkills = [
    "Docker","Kubernetes","AWS","CI/CD","Terraform","Jenkins",
    "Agile","Scrum","Project Planning","Risk Management","Stakeholder Management",
    "Financial Analysis","Budgeting","Forecasting","Risk Assessment","Investment Analysis"
  ];

  const expertise = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "DevOps Engineering",
      description:"Cloud infrastructure, automation, and CI/CD pipeline expertise with modern tools and practices.",
      link: "/devops",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Project Management",
      description:"Leading cross-functional teams and delivering complex projects on time and within budget.",
      link: "/project-management",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Finance & Analysis",
      description:"Strategic financial planning, analysis, and data-driven decision making for business growth.",
      link: "/finance",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section - Vercel energy */}
      <section
        className="relative min-h-screen flex items-center justify-center w-full overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay & Blurs */}
        <div className="absolute inset-0 bg-black/85 backdrop-blur-2xl"></div>
        {/* Animated Gradient Accents */}
        <div
          className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -z-1 w-[70vw] h-[36vw]"
          style={{
            background: "radial-gradient(ellipse at 80% 40%, #00ffa3 0%, transparent 70%), radial-gradient(ellipse at 20% 70%, #6d32ff 5%, transparent 80%)",
            opacity: 0.20,
            filter: "blur(48px)",
          }}
        ></div>
        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-8 px-4 py-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-2xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#00ffa3] via-white to-[#6d32ff] bg-clip-text text-transparent">
              Thushara Navod
            </span>
          </h1>
          <p className="text-2xl md:text-3xl text-white/90 font-normal mb-2 drop-shadow-xl leading-tight">
            Expert in DevOps, Project Management &amp; Finance
          </p>
          <p className="text-lg md:text-xl text-white/75 max-w-2xl leading-relaxed drop-shadow font-light">
            Driving digital transformation and delivering exceptional results through technical expertise, strategic leadership, and financial acumen.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 pt-6 justify-center items-center">
            <Button
              size="lg"
              variant="hero"
              className="text-lg px-8 py-4 shadow-glow hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link to="/devops">
                View My Work <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-4 border-white/25 text-white bg-black/50 hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur"
              asChild
            >
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        {/* Subtle Scroll Indicator */}
        {/* <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div> */}
      </section>

      {/* Core Skills Section */}
   <section className="py-20 bg-[#111213]">
  <div className="container mx-auto px-6 max-w-4xl text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white tracking-tight">
      My Core Skills
    </h2>
    <p className="text-lg text-white/70 mb-10 max-w-xl mx-auto">
      Deep hands-on expertise across cloud, automation, project delivery, and business analysis.
    </p>
    <div className="flex flex-wrap justify-center gap-3">
      {[
        "Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Jenkins",
        "Agile", "Scrum", "Project Planning", "Risk Management", "Stakeholder Management",
        "Financial Analysis", "Budgeting", "Forecasting", "Risk Assessment", "Investment Analysis",
      ].map((skill) => (
        <span
          key={skill}
          className="bg-gradient-to-br from-[#222249] via-[#212136] to-[#191c25] px-5 py-2 rounded-full text-base text-white/90 font-medium shadow-lg hover:from-[#1e90ff] hover:to-[#00ffa3] hover:text-black transition-colors duration-200 cursor-pointer"
        >
          {skill}
        </span>
      ))}
    </div>
  </div>
</section>


      {/* Areas of Expertise */}
  <section className="py-20 bg-black">
  <div className="container mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-white tracking-tight">Areas of Expertise</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
      {[
        {
          icon: <Code2 className="h-8 w-8 text-cyan-400" />,
          title: "DevOps Engineering",
          description: "Cloud infrastructure engineering, CI/CD automations, Kubernetes, Docker & IaC. Modern, scalable, resilient.", 
          link: "/devops",
        },
        {
          icon: <Users className="h-8 w-8 text-violet-400" />,
          title: "Project Management",
          description: "Agile & Scrum mastery, risk mitigation, and cross-functional team leadership for on-time, in-budget delivery.", 
          link: "/project-management",
        },
        {
          icon: <TrendingUp className="h-8 w-8 text-pink-400" />,
          title: "Finance & Analysis",
          description: "Financial planning, forecasting, investment modeling, and data-driven business growth strategies.", 
          link: "/finance",
        },
      ].map((area) => (
        <div
          key={area.title}
          className="group bg-[#17181c] rounded-2xl p-8 flex flex-col items-center text-center shadow-2xl hover:bg-gradient-to-br hover:from-[#0e223e] hover:to-[#562099] transition-all duration-300"
        >
          <div className="mb-3">{area.icon}</div>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">{area.title}</h3>
          <p className="text-base text-white/80 mb-6">{area.description}</p>
          <Button
            asChild
  variant="outline"
  className="
    group-hover:border-green-400
    group-hover:text-green-400
    transition-all
    duration-200
  "
          >
            <Link to={area.link}>Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
     <section className="py-20 bg-[#10101a] relative">
  <div className="container mx-auto px-6 text-center max-w-2xl">
    {/* Optional Animated Gradient Accent for Premium Feel */}
    <div
      className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 w-[340px] h-[180px] z-0"
      style={{
        background:
          'radial-gradient(ellipse at 60% 40%, #00ffa3 0%, transparent 70%), radial-gradient(ellipse at 20% 70%, #6d32ff 8%, transparent 75%)',
        opacity: 0.22,
        filter: 'blur(32px)',
      }}
    ></div>

    <div className="relative z-10 space-y-8">
      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
        Ready to Work Together?
      </h2>
      <p className="text-lg text-white/75">
        Let’s discuss how my experience in <span className="text-accent font-semibold">DevOps</span>,{' '}
        <span className="text-accent font-semibold">Project Management</span>, and{' '}
        <span className="text-accent font-semibold">Finance</span> can drive your next project to success.
      </p>
      <Button size="lg" variant="cta" className="px-8 py-4 rounded-full text-lg font-semibold shadow-md" asChild>
        <Link to="/contact">
          Start a Conversation <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </Button>
    </div>
  </div>
</section>
    </div>
  );
};

export default Home;
