import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import RepoCard from '@/components/ui/repo-card';
import SkillBadge from '@/components/ui/skill-badge';
import { Github, Users, Target, TrendingUp, CheckCircle, Calendar } from 'lucide-react';

// Mock PM-related repositories
const pmRepos = [
  {
    id: 1,
    name: "project-management-templates",
    description: "Comprehensive collection of project management templates, workflows, and documentation standards",
    html_url: "https://github.com/username/project-management-templates",
    language: "Markdown",
    stargazers_count: 89,
    forks_count: 34,
    topics: ["project-management", "templates", "workflows", "documentation"],
    updated_at: "2024-01-20T10:30:00Z"
  },
  {
    id: 2,
    name: "agile-dashboard-automation",
    description: "Automated Jira and Confluence integration for real-time project tracking and reporting",
    html_url: "https://github.com/username/agile-dashboard-automation",
    language: "Python",
    stargazers_count: 145,
    forks_count: 28,
    topics: ["agile", "jira", "automation", "reporting"],
    updated_at: "2024-01-18T14:15:00Z"
  },
  {
    id: 3,
    name: "team-collaboration-tools",
    description: "Custom tools and scripts for enhancing team collaboration and communication workflows",
    html_url: "https://github.com/username/team-collaboration-tools",
    language: "JavaScript",
    stargazers_count: 67,
    forks_count: 19,
    topics: ["collaboration", "slack", "teams", "workflow"],
    updated_at: "2024-01-22T09:45:00Z"
  }
];

const ProjectManagement = () => {
  const pmSkills = [
    { category: "Methodologies", skills: ["Agile", "Scrum", "Kanban", "Waterfall", "Lean"] },
    { category: "Tools & Platforms", skills: ["Jira", "Confluence", "Trello", "Asana", "Monday.com"] },
    { category: "Leadership", skills: ["Team Management", "Stakeholder Engagement", "Conflict Resolution", "Change Management"] },
    { category: "Planning & Analysis", skills: ["Risk Assessment", "Resource Planning", "Budget Management", "Timeline Estimation"] },
    { category: "Communication", skills: ["Presentations", "Reporting", "Documentation", "Cross-functional Coordination"] },
    { category: "Technical PM", skills: ["Software Development Lifecycle", "DevOps Integration", "Quality Assurance", "Release Management"] }
  ];

  const projects = [
    {
      title: "Digital Transformation Initiative",
      description: "Led organization-wide digital transformation affecting 200+ employees across 5 departments.",
      duration: "18 months",
      budget: "$2.5M",
      outcome: "Achieved 40% efficiency improvement and $800K annual cost savings",
      methodologies: ["Agile", "Change Management", "Risk Assessment"],
      teamSize: "25 people"
    },
    {
      title: "Multi-Cloud Migration Project",
      description: "Managed migration of legacy systems to multi-cloud architecture with zero downtime requirement.",
      duration: "12 months",
      budget: "$1.8M",
      outcome: "100% uptime maintained, reduced infrastructure costs by 30%",
      methodologies: ["Scrum", "DevOps", "Risk Management"],
      teamSize: "15 people"
    },
    {
      title: "Product Launch Coordination",
      description: "Coordinated cross-functional teams for major product launch including marketing, development, and sales.",
      duration: "8 months",
      budget: "$950K",
      outcome: "Delivered 2 weeks ahead of schedule, exceeded launch targets by 25%",
      methodologies: ["Kanban", "Stakeholder Management", "Quality Assurance"],
      teamSize: "30 people"
    }
  ];

  const achievements = [
    { metric: "50+", label: "Projects Delivered", icon: <CheckCircle className="h-5 w-5" /> },
    { metric: "99.2%", label: "On-Time Delivery Rate", icon: <Calendar className="h-5 w-5" /> },
    { metric: "$15M+", label: "Budget Managed", icon: <TrendingUp className="h-5 w-5" /> },
    { metric: "200+", label: "Team Members Led", icon: <Users className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Project Management
              </h1>
              <p className="text-xl text-muted-foreground">
                Leading cross-functional teams to deliver complex projects on time and within budget
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <Target className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Strategic Planning</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <Users className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Team Leadership</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Performance Optimization</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Quality Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Key Achievements
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.label} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{achievement.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{achievement.metric}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Management Repositories */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-foreground">PM Tools & Templates</h2>
              <Button variant="outline" asChild>
                <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View All Repositories
                </a>
              </Button>
            </div>
            <p className="text-muted-foreground">
              Project management tools, templates, and automation scripts I've developed for team collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pmRepos.map((repo, index) => (
              <RepoCard 
                key={repo.id} 
                repo={repo} 
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Major Projects */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Major Projects Led
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="animate-fade-in hover:shadow-large transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Project Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Duration</div>
                      <div className="font-semibold">{project.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Budget</div>
                      <div className="font-semibold">{project.budget}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Team Size</div>
                      <div className="font-semibold">{project.teamSize}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground">Status</div>
                      <div className="font-semibold text-accent">Completed</div>
                    </div>
                  </div>

                  {/* Methodologies */}
                  <div>
                    <h4 className="font-medium text-sm text-foreground mb-3">Methodologies & Approaches:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.methodologies.map((method) => (
                        <SkillBadge key={method} skill={method} level="expert" />
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-sm text-foreground mb-2">Key Outcome:</h4>
                    <p className="text-accent font-medium">{project.outcome}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Project Management Skills
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pmSkills.map((category, index) => (
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
    </div>
  );
};

export default ProjectManagement;