
import { Users, Target, Lightbulb, Heart } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const About = () => {
  const values = [
    {
      icon: <Target className="h-6 w-6" />,
      title: "Student-Focused",
      description: "Every feature is designed with UIT students' needs in mind, from academic guidance to career development."
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovation",
      description: "We leverage cutting-edge AI technology to provide personalized recommendations and smart solutions."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Community",
      description: "Building a connected campus where students can share, learn, and grow together."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Excellence",
      description: "We're committed to delivering the highest quality platform to support your academic journey."
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-16 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in">
            About <span className="text-primary">Orbi UIT</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed animate-slide-up">
            We're dedicated to empowering University of Information Technology students with AI-powered tools 
            and comprehensive campus solutions that enhance your academic journey and career prospects.
          </p>
        </section>

        {/* Mission Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              At Orbi UIT, we believe every student deserves personalized guidance and support throughout 
              their academic journey. Our mission is to bridge the gap between academic learning and 
              real-world career preparation through innovative AI technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're building more than just a platform – we're creating a comprehensive ecosystem that 
              connects students, facilitates learning, and opens doors to future opportunities.
            </p>
          </div>
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 text-center">
            <div className="space-y-4">
              <div className="text-4xl font-bold text-primary">1000+</div>
              <div className="text-sm text-muted-foreground">Students Supported</div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve the UIT community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="space-y-4">
                  <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    {value.icon}
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="leading-relaxed">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Story Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Orbi UIT was born from the recognition that UIT students needed a centralized platform 
              that could address their diverse academic and career needs. What started as an idea to 
              help fellow students navigate their university experience has evolved into a comprehensive 
              AI-powered platform.
            </p>
          </div>
          
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12">
            <blockquote className="text-center space-y-4">
              <p className="text-lg italic text-muted-foreground">
                "We saw students struggling to find the right resources, connect with opportunities, 
                and get personalized guidance for their unique career paths. Orbi UIT is our answer 
                to these challenges – a platform that grows with you and adapts to your needs."
              </p>
              <footer className="text-sm font-medium">
                — The Orbi UIT Team
              </footer>
            </blockquote>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center space-y-6 bg-primary/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold">Ready to Transform Your UIT Experience?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of UIT students who are already using Orbi UIT to enhance their 
            academic journey and career prospects.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default About
