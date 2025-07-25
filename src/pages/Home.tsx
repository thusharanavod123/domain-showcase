import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SkillBadge from '@/components/ui/skill-badge';
import { ArrowRight, Code2, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Home = () => {
  const coreSkills = [
    // DevOps Skills
    'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Jenkins',
    // PM Skills
    'Agile', 'Scrum', 'Project Planning', 'Risk Management', 'Stakeholder Management',
    // Finance Skills
    'Financial Analysis', 'Budgeting', 'Forecasting', 'Risk Assessment', 'Investment Analysis'
  ];

  const expertise = [
    {
      icon: <Code2 className="h-8 w-8 text-primary" />,
      title: "DevOps Engineering",
      description: "Cloud infrastructure, automation, and CI/CD pipeline expertise with modern tools and practices.",
      link: "/devops"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Project Management", 
      description: "Leading cross-functional teams and delivering complex projects on time and within budget.",
      link: "/project-management"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-primary" />,
      title: "Finance & Analysis",
      description: "Strategic financial planning, analysis, and data-driven decision making for business growth.",
      link: "/finance"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-background to-section-bg py-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                  Hi, I'm{' '}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Alex Johnson
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground">
                  Expert in DevOps, Project Management & Finance
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                Driving digital transformation and delivering exceptional results through 
                technical expertise, strategic leadership, and financial acumen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="hero" asChild>
                  <Link to="/devops">
                    View My Work <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">Get In Touch</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="relative z-10">
                <img 
                  src={heroImage} 
                  alt="Professional portrait" 
                  className="rounded-2xl shadow-extra-large w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
            </div>
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
              A comprehensive skill set spanning technology, leadership, and financial analysis
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
                  <Button variant="outline" className="w-full group-hover:border-primary group-hover:text-primary" asChild>
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
              Let's discuss how my expertise in DevOps, project management, and finance 
              can drive your next project to success.
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