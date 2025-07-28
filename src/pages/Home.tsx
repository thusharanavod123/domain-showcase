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
    // DevOps Skills
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD",
    "Terraform",
    "Jenkins",
    // PM Skills
    "Agile",
    "Scrum",
    "Project Planning",
    "Risk Management",
    "Stakeholder Management",
    // Finance Skills
    "Financial Analysis",
    "Budgeting",
    "Forecasting",
    "Risk Assessment",
    "Investment Analysis",
  ];

  const expertise = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "DevOps Engineering",
      description:
        "Cloud infrastructure, automation, and CI/CD pipeline expertise with modern tools and practices.",
      link: "/devops",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Project Management",
      description:
        "Leading cross-functional teams and delivering complex projects on time and within budget.",
      link: "/project-management",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Finance & Analysis",
      description:
        "Strategic financial planning, analysis, and data-driven decision making for business growth.",
      link: "/finance",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Full-Screen Hero Section with Background Image */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

        {/* Animated Tech Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
          <div
            className="absolute top-40 right-32 w-1 h-12 bg-accent/20 animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-1 h-8 bg-primary/20 animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-20 right-20 w-2 h-2 bg-accent/30 rounded-full animate-pulse"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight"
                style={{
                  textShadow: "var(--hero-text-shadow)",
                  filter: "drop-shadow(var(--hero-text-glow))",
                }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Thushara Navod
                </span>
              </h1>{" "}
              {/*import heroImage from '@/assets/hero-image.jpg'; */}
              <p
                className="text-2xl md:text-3xl lg:text-4xl text-white/90 font-light"
                style={{
                  textShadow: "var(--hero-text-shadow)",
                  filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))",
                }}
              >
                Expert in DevOps, Project Management & Finance
              </p>
            </div>

            <p
              className="text-lg md:text-xl lg:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed"
              style={{
                textShadow: "var(--hero-text-shadow)",
                filter: "drop-shadow(0 0 8px rgba(255,255,255,0.2))",
              }}
            >
              Driving digital transformation and delivering exceptional results
              through technical expertise, strategic leadership, and financial
              acumen.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
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
                className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                style={{
                  textShadow: "var(--hero-text-shadow)",
                  backdropFilter: "blur(10px)",
                }}
                asChild
              >
                <Link to="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Core Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive skill set spanning technology, leadership, and
              financial analysis
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {coreSkills.map((skill, index) => (
              <SkillBadge
                key={skill}
                skill={skill}
                level="advanced"
                className={`animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized knowledge across three critical business domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {expertise.map((area, index) => (
              <Card
                key={area.title}
                className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 cursor-pointer animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                    {area.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {area.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6">
                    {area.description}
                  </CardDescription>
                  <Button
                    variant="outline"
                    className="w-full group-hover:border-primary group-hover:text-primary"
                    asChild
                  >
                    <Link to={area.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Ready to Work Together?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how my expertise in DevOps, project management, and
              finance can drive your next project to success.
            </p>
            <Button size="lg" variant="cta" asChild>
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
