import { Badge } from '@/components/ui/badge';

interface SkillBadgeProps {
  skill: string;
  level?: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  className?: string;
  style?: React.CSSProperties;
}

const SkillBadge = ({ skill, level = 'intermediate', className = "", style }: SkillBadgeProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'intermediate':
        return 'bg-skill-badge text-skill-badge-foreground';
      case 'advanced':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'expert':
        return 'bg-accent text-accent-foreground';
      default:
        return 'bg-skill-badge text-skill-badge-foreground';
    }
  };

  return (
    <Badge 
      variant="secondary" 
      className={`${getLevelColor(level)} hover:scale-105 transition-transform duration-200 ${className}`}
      style={style}
    >
      {skill}
    </Badge>
  );
};

export default SkillBadge;