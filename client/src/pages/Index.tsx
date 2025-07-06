import {
  Bot,
  MapPin,
  Briefcase,
  Users,
  MessageSquare,
  Calendar,
  Search,
} from "lucide-react";
import { Button } from "../components/ui/button";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI-Powered Recommendations",
      description:
        "Get personalized course suggestions, study materials, and academic guidance tailored to your learning style and career goals.",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Career Roadmap Generator",
      description:
        "Create customized career paths with our AI chatbot that analyzes your skills, interests, and market trends to guide your future.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "Job Portal",
      description:
        "Discover internships, part-time jobs, and career opportunities specifically curated for UIT students and recent graduates.",
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "News & Events",
      description:
        "Stay updated with the latest campus news, upcoming events, workshops, and important announcements from the university.",
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "Lost & Found",
      description:
        "A digital platform to report and find lost items on campus, making it easier to reconnect with your belongings.",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Social Community",
      description:
        "Connect with fellow students, join study groups, share experiences, and build lasting relationships within the UIT community.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="container py-24 md:py-32 text-center space-y-8">
          <div className="space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight animate-fade-in">
              Your Complete <span className="text-primary">UIT Campus</span>{" "}
              Companion
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto animate-slide-up">
              Empowering University of Information Technology students with
              AI-powered recommendations, career guidance, and comprehensive
              campus solutions all in one platform.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Link to="/auth">
              <Button size="lg" className="text-lg px-8 py-6">
                Get Started
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Learn More
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="container py-16 md:py-24 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Everything You Need for{" "}
              <span className="text-primary">Academic Success</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From AI-powered recommendations to career guidance, we've built
              comprehensive tools to support every aspect of your university
              journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="animate-slide-up"
              />
            ))}
          </div>
        </section>

        {/* AI Chatbot Highlight */}
        <section className="bg-muted/50 py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Meet Your{" "}
                  <span className="text-primary">AI Study Companion</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our intelligent chatbot understands your academic needs and
                  provides personalized recommendations for courses, study
                  materials, and career paths. It's like having a personal
                  academic advisor available 24/7.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Personalized course recommendations
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Career path planning and guidance
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Study schedule optimization
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="h-2 w-2 bg-primary rounded-full"></div>
                    Academic resource suggestions
                  </li>
                </ul>
                <Button size="lg" className="mt-6">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat with AI Now
                </Button>
              </div>

              <div className="bg-background rounded-2xl p-8 shadow-lg border">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="bg-muted rounded-lg p-3 flex-1">
                      <p className="text-sm">
                        Hello! I'm here to help you plan your academic journey.
                        What would you like to know about your career path?
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 justify-end">
                    <div className="bg-primary rounded-lg p-3 text-primary-foreground max-w-xs">
                      <p className="text-sm">
                        I'm interested in AI and machine learning. What courses
                        should I take?
                      </p>
                    </div>
                    <div className="h-8 w-8 bg-muted rounded-full flex items-center justify-center">
                      <Users className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                      <Bot className="h-4 w-4 text-primary-foreground" />
                    </div>
                    <div className="bg-muted rounded-lg p-3 flex-1">
                      <p className="text-sm">
                        Great choice! Based on your interests, I recommend
                        starting with Python Programming, Statistics, and Linear
                        Algebra. Here's a personalized roadmap...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container py-16 md:py-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                1000+
              </div>
              <div className="text-sm text-muted-foreground">
                Active Students
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                500+
              </div>
              <div className="text-sm text-muted-foreground">
                Job Opportunities
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                24/7
              </div>
              <div className="text-sm text-muted-foreground">AI Support</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-primary">
                95%
              </div>
              <div className="text-sm text-muted-foreground">
                Student Satisfaction
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16 md:py-24">
          <div className="container text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your UIT Experience?
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Join thousands of UIT students who are already using Orbi UIT to
              enhance their academic journey and career prospects.
            </p>
            <Link to="/auth">
              {" "}
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-6"
              >
                Start Your Journey Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
