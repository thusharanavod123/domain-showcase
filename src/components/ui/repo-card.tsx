import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Star, GitFork } from 'lucide-react';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
}

interface RepoCardProps {
  repo: Repository;
  className?: string;
  style?: React.CSSProperties;
}

const RepoCard = ({ repo, className = "", style }: RepoCardProps) => {
  return (
    <Card className={`group hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-repo-card border-repo-card-border ${className}`} style={style}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
            {repo.name}
          </CardTitle>
          <Button variant="ghost" size="sm" asChild className="opacity-0 group-hover:opacity-100 transition-opacity">
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
        <CardDescription className="text-sm text-muted-foreground line-clamp-2">
          {repo.description || 'No description available'}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Language and Topics */}
        <div className="flex flex-wrap gap-2">
          {repo.language && (
            <Badge variant="secondary" className="bg-tech-badge text-tech-badge-foreground">
              {repo.language}
            </Badge>
          )}
          {repo.topics?.slice(0, 3).map((topic) => (
            <Badge key={topic} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
        </div>

        {/* Stats and Link */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Star className="h-3 w-3" />
              <span>{repo.stargazers_count}</span>
            </div>
            <div className="flex items-center space-x-1">
              <GitFork className="h-3 w-3" />
              <span>{repo.forks_count}</span>
            </div>
          </div>
          
          <Button size="sm" asChild>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RepoCard;