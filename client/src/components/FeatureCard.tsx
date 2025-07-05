
import { ReactNode } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  className?: string
}

const FeatureCard = ({ icon, title, description, className = '' }: FeatureCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <CardHeader className="space-y-4">
        <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  )
}

export default FeatureCard
