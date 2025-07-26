import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import RepoCard from '@/components/ui/repo-card';
import SkillBadge from '@/components/ui/skill-badge';
import { Github, ExternalLink, Server, Cloud, Code, Database } from 'lucide-react';

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
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                DevOps Engineering
              </h1>
              <p className="text-xl text-muted-foreground">
                Building scalable, reliable, and secure infrastructure for modern applications
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <Server className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Infrastructure Automation</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <Cloud className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Cloud Architecture</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <Code className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">CI/CD Pipelines</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <Database className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Monitoring & Observability</span>
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

      {/* Skills Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Technical Skills & Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devopsSkills.map((category, index) => (
              <Card 
                key={category.category} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-lg">{category.category}</CardTitle>
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

      {/* Certifications */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground">Earned in {cert.year}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <ExternalLink className="h-5 w-5 text-primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DevOps;