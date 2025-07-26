import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import RepoCard from '@/components/ui/repo-card';
import SkillBadge from '@/components/ui/skill-badge';
import { Github, ExternalLink, Server, Cloud, Code, Database, Terminal, Shield, Zap, Globe, TrendingUp, Award } from 'lucide-react';

// Mock GitHub API response for demonstration
const mockRepos = [
  {
    id: 1,
    name: "kubernetes-monitoring-stack",
    description: "Complete monitoring solution for Kubernetes clusters using Prometheus, Grafana, and AlertManager",
    html_url: "https://github.com/username/kubernetes-monitoring-stack",
    language: "YAML",
    stargazers_count: 156,
    forks_count: 42,
    topics: ["kubernetes", "monitoring", "prometheus", "grafana"],
    updated_at: "2024-01-15T10:30:00Z"
  },
  {
    id: 2,
    name: "terraform-aws-infrastructure",
    description: "Terraform modules for provisioning scalable AWS infrastructure with best practices",
    html_url: "https://github.com/username/terraform-aws-infrastructure",
    language: "HCL",
    stargazers_count: 89,
    forks_count: 23,
    topics: ["terraform", "aws", "infrastructure", "iac"],
    updated_at: "2024-01-20T14:15:00Z"
  },
  {
    id: 3,
    name: "ci-cd-pipeline-templates",
    description: "Reusable CI/CD pipeline templates for various programming languages and deployment targets",
    html_url: "https://github.com/username/ci-cd-pipeline-templates",
    language: "JavaScript",
    stargazers_count: 234,
    forks_count: 67,
    topics: ["cicd", "jenkins", "github-actions", "devops"],
    updated_at: "2024-01-18T09:45:00Z"
  },
  {
    id: 4,
    name: "docker-compose-apps",
    description: "Collection of production-ready Docker Compose configurations for popular applications",
    html_url: "https://github.com/username/docker-compose-apps",
    language: "Dockerfile",
    stargazers_count: 312,
    forks_count: 89,
    topics: ["docker", "docker-compose", "containerization"],
    updated_at: "2024-01-22T16:20:00Z"
  }
];

const DevOps = () => {
  const [repos, setRepos] = useState(mockRepos);
  const [loading, setLoading] = useState(false);

  const devopsSkills = [
    { category: "Cloud Platforms", skills: ["AWS", "Azure", "Google Cloud", "DigitalOcean"] },
    { category: "Containerization", skills: ["Docker", "Kubernetes", "Helm", "OpenShift"] },
    { category: "Infrastructure as Code", skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"] },
    { category: "CI/CD Tools", skills: ["Jenkins", "GitHub Actions", "GitLab CI", "Azure DevOps"] },
    { category: "Monitoring & Logging", skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"] },
    { category: "Programming Languages", skills: ["Python", "Bash", "Go", "JavaScript", "YAML"] }
  ];

  const certifications = [
    { name: "AWS Certified DevOps Engineer - Professional", year: "2023" },
    { name: "Certified Kubernetes Administrator (CKA)", year: "2023" },
    { name: "HashiCorp Certified: Terraform Associate", year: "2022" },
    { name: "Docker Certified Associate", year: "2022" }
  ];

  const projects = [
    {
      title: "Multi-Cloud Kubernetes Platform",
      description: "Designed and implemented a multi-cloud Kubernetes platform serving 500+ microservices across AWS, Azure, and GCP.",
      technologies: ["Kubernetes", "Istio", "Terraform", "ArgoCD"],
      impact: "Reduced deployment time by 75% and increased system reliability to 99.9%"
    },
    {
      title: "Automated CI/CD Pipeline",
      description: "Built comprehensive CI/CD pipelines supporting 50+ development teams with automated testing, security scanning, and deployment.",
      technologies: ["Jenkins", "Docker", "SonarQube", "Nexus"],
      impact: "Accelerated release cycles from monthly to daily deployments"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Header Section */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-accent/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-semibold">
                <Terminal className="mr-2 h-4 w-4" />
                DevOps Engineering Expertise
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Building the{' '}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Future
                </span>
                {' '}of Infrastructure
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Architecting scalable, secure, and automated infrastructure solutions that power 
                modern applications at enterprise scale
              </p>
            </div>
            
            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Microservices Deployed</div>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">99.9%</div>
                  <div className="text-sm text-muted-foreground">System Uptime</div>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">75%</div>
                  <div className="text-sm text-muted-foreground">Deployment Speed Increase</div>
                </CardContent>
              </Card>
              <Card className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Teams Supported</div>
                </CardContent>
              </Card>
            </div>

            {/* Expertise Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
              <div className="group flex items-center space-x-3 bg-card/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/30 hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Cloud className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Multi-Cloud Architecture</span>
              </div>
              <div className="group flex items-center space-x-3 bg-card/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/30 hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <span className="font-semibold text-foreground">Security & Compliance</span>
              </div>
              <div className="group flex items-center space-x-3 bg-card/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/30 hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <span className="font-semibold text-foreground">Performance Optimization</span>
              </div>
              <div className="group flex items-center space-x-3 bg-card/60 backdrop-blur-sm rounded-lg px-4 py-3 border border-border/30 hover:border-primary/50 transition-all duration-300">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Globe className="h-5 w-5 text-accent" />
                </div>
                <span className="font-semibold text-foreground">Global Infrastructure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Repositories */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-foreground">Featured Repositories</h2>
              <Button variant="outline" asChild>
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All on GitHub
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground">
              Open-source DevOps tools and infrastructure solutions I've developed and maintain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, index) => (
              <RepoCard 
                key={repo.id} 
                repo={repo} 
                className={`animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section with Tabs */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Technical Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skills across the entire DevOps lifecycle
            </p>
          </div>
          
          <Tabs defaultValue="overview" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview" className="text-sm">Skills Overview</TabsTrigger>
              <TabsTrigger value="tools" className="text-sm">Tools & Technologies</TabsTrigger>
              <TabsTrigger value="experience" className="text-sm">Experience Level</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {devopsSkills.map((category, index) => (
                  <Card 
                    key={category.category} 
                    className="group hover:shadow-large transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2 group-hover:text-primary transition-colors">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Code className="h-4 w-4 text-primary" />
                        </div>
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <SkillBadge key={skill} skill={skill} level="expert" />
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="tools">
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {devopsSkills.flatMap(category => category.skills).map((skill, index) => (
                  <Card key={skill} className="p-4 text-center hover:shadow-medium transition-all duration-200 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                    <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                      <Server className="h-6 w-6 text-primary" />
                    </div>
                    <p className="text-sm font-medium text-foreground">{skill}</p>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="experience">
              <div className="space-y-6">
                {devopsSkills.map((category, index) => (
                  <Card key={category.category} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          Expert Level
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {category.skills.map((skill) => (
                          <div key={skill} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm text-foreground">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Notable Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="animate-slide-up hover:shadow-large transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-2">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <SkillBadge key={tech} skill={tech} level="advanced" />
                      ))}
                    </div>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm text-accent font-medium">Impact: {project.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Certifications & Recognition
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry-recognized expertise and continuous learning
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-12">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name} 
                className="group hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">Certified {cert.year}</p>
                      <Badge variant="outline" className="text-xs">
                        Professional Level
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Achievement Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <div className="text-sm font-medium text-foreground">Professional Certifications</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
              <div className="text-3xl font-bold text-accent mb-2">8+</div>
              <div className="text-sm font-medium text-foreground">Years Experience</div>
            </Card>
            <Card className="text-center p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-border">
              <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
              <div className="text-sm font-medium text-foreground">System Monitoring</div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOps;