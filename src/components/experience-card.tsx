import { Reveal } from './reveal';
import { Badge } from './ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from './ui/card';

interface ExperienceCardProps {
  isBlurred?: boolean;
  title: string;
  company: string;
  date: string;
  description: string;
  skills?: string[];
}

export function ExperienceCard({
  // isBlurred,
  title,
  company,
  date,
  description,
  skills
}: ExperienceCardProps) {
  return (
    <Card className="w-full bg-gradient-to-b from-[rgb(20,15,20)] to-black shadow-inner shadow-gray-400 ">
      <Reveal
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.4 }
        }}
      >
        <CardHeader>
          <div className="flex items-center gap-1 py-2">
            <span className="size-3 rounded-full bg-red-500"></span>
            <span className="size-3  rounded-full bg-yellow-500"></span>
            <span className="size-3   rounded-full bg-green-500"></span>
          </div>
          <CardTitle>
            {title} · {company}
          </CardTitle>
          <CardDescription>{date}</CardDescription>
        </CardHeader>
      </Reveal>
      <CardContent className="flex flex-col gap-4">
        <Reveal
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
          }}
        >
          <p className="leading-7">{description}</p>
        </Reveal>
        {skills && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <Reveal
                key={skill}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.1,
                    delay: index / 40
                  }
                }}
              >
                <Badge variant="default">{skill}</Badge>
              </Reveal>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
