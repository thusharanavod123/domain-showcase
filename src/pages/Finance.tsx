import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import SkillBadge from '@/components/ui/skill-badge';
import { DollarSign, TrendingUp, PieChart, BarChart3, Calculator, Target } from 'lucide-react';

const Finance = () => {
  const financeSkills = [
    { category: "Financial Analysis", skills: ["Financial Modeling", "Variance Analysis", "Ratio Analysis", "Cash Flow Analysis"] },
    { category: "Investment & Valuation", skills: ["DCF Modeling", "Portfolio Management", "Risk Assessment", "Market Analysis"] },
    { category: "Budgeting & Planning", skills: ["Budget Creation", "Forecasting", "Scenario Planning", "Cost Management"] },
    { category: "Tools & Software", skills: ["Excel/VBA", "SQL", "Python", "Power BI", "Tableau", "SAP"] },
    { category: "Risk Management", skills: ["Credit Risk", "Market Risk", "Operational Risk", "Compliance"] },
    { category: "Strategic Finance", skills: ["Business Valuation", "M&A Analysis", "Capital Structure", "Performance Metrics"] }
  ];

  const achievements = [
    {
      title: "Cost Optimization Program",
      description: "Led comprehensive cost reduction initiative across multiple business units",
      impact: "$2.5M annual savings achieved",
      metric: "15% cost reduction",
      icon: <Calculator className="h-6 w-6 text-primary" />
    },
    {
      title: "Investment Portfolio Analysis",
      description: "Developed risk-adjusted portfolio strategies for institutional clients",
      impact: "18% average annual return",
      metric: "25% risk reduction",
      icon: <TrendingUp className="h-6 w-6 text-primary" />
    },
    {
      title: "Financial Planning & Forecasting",
      description: "Implemented advanced forecasting models improving accuracy by 40%",
      impact: "Enhanced decision-making",
      metric: "40% accuracy improvement",
      icon: <PieChart className="h-6 w-6 text-primary" />
    },
    {
      title: "M&A Financial Due Diligence",
      description: "Conducted financial analysis for $50M acquisition deal",
      impact: "Deal successfully closed",
      metric: "$50M transaction value",
      icon: <BarChart3 className="h-6 w-6 text-primary" />
    }
  ];

  const certifications = [
    { name: "Chartered Financial Analyst (CFA)", issuer: "CFA Institute", year: "2022" },
    { name: "Financial Risk Manager (FRM)", issuer: "GARP", year: "2021" },
    { name: "Certified Public Accountant (CPA)", issuer: "AICPA", year: "2020" },
    { name: "Advanced Excel & Financial Modeling", issuer: "Wharton Online", year: "2023" }
  ];

  const caseStudies = [
    {
      title: "Revenue Optimization Analysis",
      challenge: "Client experiencing declining profit margins despite revenue growth",
      solution: "Conducted comprehensive cost structure analysis and identified inefficiencies in operations",
      result: "Improved profit margins by 8% and identified $1.2M in cost savings opportunities",
      tools: ["Excel", "Power BI", "SQL"]
    },
    {
      title: "Capital Allocation Strategy",
      challenge: "Technology startup needed optimal capital allocation for growth initiatives",
      solution: "Developed scenario-based financial models and ROI analysis for different investment options",
      result: "Guided $5M investment allocation resulting in 25% faster product development cycle",
      tools: ["DCF Modeling", "Monte Carlo Simulation", "Python"]
    }
  ];

  const keyMetrics = [
    { value: "$100M+", label: "Assets Analyzed", icon: <DollarSign className="h-5 w-5" /> },
    { value: "25+", label: "Financial Models Built", icon: <Calculator className="h-5 w-5" /> },
    { value: "40%", label: "Cost Reduction Achieved", icon: <TrendingUp className="h-5 w-5" /> },
    { value: "15+", label: "Investment Strategies", icon: <Target className="h-5 w-5" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-background to-section-bg">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                Finance & Analysis
              </h1>
              <p className="text-xl text-muted-foreground">
                Strategic financial planning and data-driven analysis for business growth
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 animate-slide-up">
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <DollarSign className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Financial Modeling</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Investment Analysis</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <PieChart className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Risk Management</span>
              </div>
              <div className="flex items-center space-x-2 bg-card rounded-lg px-4 py-2 shadow-medium">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Strategic Planning</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Impact & Results
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {keyMetrics.map((metric, index) => (
              <Card 
                key={metric.label} 
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-primary">{metric.icon}</div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{metric.value}</div>
                  <div className="text-sm text-muted-foreground">{metric.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Achievements */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Key Achievements
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title} 
                className="animate-slide-up hover:shadow-large transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      {achievement.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Impact:</span>
                    <span className="font-semibold text-accent">{achievement.impact}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Key Metric:</span>
                    <span className="font-semibold text-primary">{achievement.metric}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Case Studies
          </h2>
          
          <div className="space-y-8 max-w-4xl mx-auto">
            {caseStudies.map((study, index) => (
              <Card 
                key={study.title} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{study.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Result</h4>
                      <p className="text-sm text-accent font-medium">{study.result}</p>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-sm text-foreground mb-3">Tools & Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.tools.map((tool) => (
                        <SkillBadge key={tool} skill={tool} level="expert" />
                      ))}
                    </div>
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
            Financial Expertise
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {financeSkills.map((category, index) => (
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

      {/* Certifications */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Professional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <Card 
                key={cert.name} 
                className="animate-fade-in hover:shadow-medium transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground text-lg mb-1">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <p className="text-sm text-accent font-medium">Earned {cert.year}</p>
                    </div>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <DollarSign className="h-5 w-5 text-primary" />
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

export default Finance;