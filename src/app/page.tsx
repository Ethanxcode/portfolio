import About from '@/components/about';
import Contact from '@/components/contact';
import CanvasPlatformer from '@/components/custom/canvas-platformer';
import Experiences from '@/components/experiences';
import Feedbacks from '@/components/feedbacks';
import Hero from '@/components/hero';
import Projects from '@/components/projects';
import Skills from '@/components/skills';
import { Separator } from '@/components/ui/separator';
import Card from '../components/custom/matrix-card';
import MatrixLoader from '@/components/custom/matrix-loader';

export default function Home() {
    return (
        <div className="flex flex-col overflow-x-hidden">
            <Hero />
            <Separator />
            <About />
            <Separator />
            <Experiences />
            <Separator />
            <Projects />
            <Separator />
            <Feedbacks />
            <Separator />
            <Skills />
            <Separator />
            <MatrixLoader />
            <Separator />
            <Contact />
            <Card mode={0}>
                <CanvasPlatformer />
            </Card>
        </div>
    );
}
