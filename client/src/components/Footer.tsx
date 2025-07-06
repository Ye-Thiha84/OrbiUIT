
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">O</span>
              </div>
              <span className="font-bold text-xl">Orbi UIT</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering UIT students with AI-powered recommendations and comprehensive campus solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Features</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>AI Recommendations</li>
              <li>Career Roadmap</li>
              <li>Job Portal</li>
              <li>Lost & Found</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>News & Events</li>
              <li>Social Media</li>
              <li>Student Connect</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Orbi UIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
