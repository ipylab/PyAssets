
import React from "react"
import { Routes, Route, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, BarChart2, Shield, Users, Wallet, Camera, FileText, BookOpen, Calendar, Newspaper, PieChart, Building, Zap, CreditCard, GraduationCap, MessageSquare } from "lucide-react"
import Portfolio from "@/pages/Portfolio"

function App() {
  return (
    <div className="min-h-screen">
      <nav className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold gradient-text">PyAssets.io</Link>
          <div className="hidden md:flex space-x-6">
            <Link to="/portfolio">
              <Button variant="ghost">Portfolio Analysis</Button>
            </Link>
            <Button variant="ghost">Tools</Button>
            <Button variant="ghost">Resources</Button>
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Contact</Button>
          </div>
          <Button>Get Started</Button>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  )
}

function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="py-20 hero-pattern">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete <span className="gradient-text">Financial Ecosystem</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Manage, analyze, and optimize your finances with innovative tools and real-time data
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/portfolio">
                <Button size="lg">
                  Create Portfolio
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Free Financial Tools</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Access our suite of powerful financial tools designed to help you make smarter decisions
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/portfolio">
              <FeatureCard
                icon={<PieChart className="h-8 w-8" />}
                title="Portfolio Creation"
                description="Build and optimize your investment portfolio based on your risk profile"
              />
            </Link>
            <FeatureCard
              icon={<Camera className="h-8 w-8" />}
              title="Expense Analysis"
              description="Upload bank statements and get detailed spending insights"
            />
            <FeatureCard
              icon={<FileText className="h-8 w-8" />}
              title="Financial History"
              description="Access historical data for thousands of financial assets"
            />
            <FeatureCard
              icon={<BookOpen className="h-8 w-8" />}
              title="FiLabs Python"
              description="Free financial mathematics tools for Python developers"
            />
            <FeatureCard
              icon={<Calendar className="h-8 w-8" />}
              title="Financial Calendar"
              description="Track important financial events and deadlines"
            />
            <FeatureCard
              icon={<Newspaper className="h-8 w-8" />}
              title="Weekly Newsletter"
              description="Stay updated with key market insights and analysis"
            />
          </div>
        </div>
      </section>

      {/* Premium Tools Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Advanced Financial Solutions</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our innovative tools designed for sophisticated investors
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<BarChart2 className="h-8 w-8" />}
              title="Crypto Analysis"
              description="Evaluate emerging crypto projects with detailed metrics"
            />
            <FeatureCard
              icon={<Building className="h-8 w-8" />}
              title="Asset Crowdfunding"
              description="Invest in physical assets and startups through blockchain"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Drawdown Protection"
              description="Automatic protection against market crashes"
            />
            <FeatureCard
              icon={<CreditCard className="h-8 w-8" />}
              title="Smart Prepaid Card"
              description="Control spending with intelligent alerts"
            />
          </div>
        </div>
      </section>

      {/* Educational Resources */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Educational Resources</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Enhance your financial knowledge with our comprehensive learning materials
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GraduationCap className="h-8 w-8" />}
              title="Advanced FiLabs Course"
              description="Master financial mathematics with Python"
            />
            <FeatureCard
              icon={<MessageSquare className="h-8 w-8" />}
              title="1:1 Consultations"
              description="Get personalized financial advice from experts"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Live Webinars"
              description="Join interactive sessions with financial experts"
            />
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join Our Financial Community</h2>
            <p className="text-xl mb-8 opacity-90">
              Connect with like-minded investors and access exclusive resources
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">1000+</h3>
                <p>Active Members</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">50+</h3>
                <p>Financial Tools</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-2xl font-bold mb-2">24/7</h3>
                <p>Expert Support</p>
              </div>
            </div>
            <Button size="lg" variant="secondary">
              Join Community
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-6">
              Subscribe to our weekly newsletter for the latest financial insights and market analysis
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">PyAssets.io</h3>
              <p className="text-gray-600">Building the future of financial management</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Portfolio Analysis</li>
                <li>Drawdown Insurance</li>
                <li>Crowdfunding</li>
                <li>Expense Tracking</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-600">
                <li>Blog</li>
                <li>Documentation</li>
                <li>Webinars</li>
                <li>Research</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
                <li>Legal</li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-12 pt-8 text-center text-gray-600">
            <p>&copy; 2025 PyAssets.io. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
    >
      <div className="text-blue-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default App
