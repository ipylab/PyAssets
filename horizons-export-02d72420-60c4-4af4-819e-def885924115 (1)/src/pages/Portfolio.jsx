
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { ArrowRight, LineChart as ChartIcon, Zap, Target, BarChart, ChevronRight, PieChart as PieChartIcon, Percent, DollarSign } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

const mockData = [
  { name: '2019', value: 100 },
  { name: '2020', value: 120 },
  { name: '2021', value: 150 },
  { name: '2022', value: 180 },
  { name: '2023', value: 220 },
]

const RISK_PROFILES = {
  conservative: {
    stocks: 30,
    bonds: 50,
    cash: 15,
    alternatives: 5
  },
  moderate: {
    stocks: 50,
    bonds: 30,
    cash: 10,
    alternatives: 10
  },
  aggressive: {
    stocks: 70,
    bonds: 15,
    cash: 5,
    alternatives: 10
  }
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#6366f1']

function Portfolio() {
  const [currentStep, setCurrentStep] = useState(1)
  const [riskProfile, setRiskProfile] = useState("moderate")
  const [investmentAmount, setInvestmentAmount] = useState(50)
  const [timeHorizon, setTimeHorizon] = useState(10)
  const { toast } = useToast()

  const handleStartAnalysis = () => {
    setCurrentStep(2)
    toast({
      title: "Analysis Started",
      description: "We're preparing your personalized portfolio analysis.",
    })
  }

  const handleProfileSubmit = () => {
    setCurrentStep(3)
    toast({
      title: "Profile Created",
      description: "Your investment profile has been created successfully.",
    })
  }

  const pieData = Object.entries(RISK_PROFILES[riskProfile]).map(([name, value]) => ({
    name,
    value
  }))

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16 border-b">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Create and Optimize Your <span className="gradient-text">Investment Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Build a personalized investment strategy based on your risk profile and financial goals
            </p>
            <Button size="lg" onClick={handleStartAnalysis}>
              Start Portfolio Analysis
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Creation Process */}
      <AnimatePresence mode="wait">
        {currentStep === 2 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-16 bg-white"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Create Your Investment Profile</h2>
                
                <div className="space-y-12">
                  {/* Risk Profile Selection */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Select Your Risk Profile</h3>
                    <Tabs defaultValue="moderate" onValueChange={setRiskProfile}>
                      <TabsList className="w-full">
                        <TabsTrigger value="conservative" className="flex-1">Conservative</TabsTrigger>
                        <TabsTrigger value="moderate" className="flex-1">Moderate</TabsTrigger>
                        <TabsTrigger value="aggressive" className="flex-1">Aggressive</TabsTrigger>
                      </TabsList>
                    </Tabs>
                    
                    <div className="mt-6">
                      <div className="h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={pieData}
                              cx="50%"
                              cy="50%"
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="value"
                              label={({ name, value }) => `${name}: ${value}%`}
                            >
                              {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>

                  {/* Investment Amount */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Investment Amount</h3>
                    <div className="space-y-4">
                      <Slider
                        value={[investmentAmount]}
                        onValueChange={(value) => setInvestmentAmount(value[0])}
                        max={100}
                        step={1}
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>$0</span>
                        <span>${investmentAmount}k</span>
                        <span>$100k+</span>
                      </div>
                    </div>
                  </div>

                  {/* Time Horizon */}
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Investment Time Horizon</h3>
                    <div className="space-y-4">
                      <Slider
                        value={[timeHorizon]}
                        onValueChange={(value) => setTimeHorizon(value[0])}
                        max={30}
                        step={1}
                      />
                      <div className="flex justify-between text-sm text-gray-600">
                        <span>1 year</span>
                        <span>{timeHorizon} years</span>
                        <span>30 years</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <Button size="lg" onClick={handleProfileSubmit}>
                      Create Portfolio
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {currentStep === 3 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="py-16 bg-white"
          >
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Your Personalized Portfolio</h2>
                
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <PieChartIcon className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Asset Allocation</h3>
                    <p className="text-gray-600">Optimized for {riskProfile} risk profile</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <Percent className="h-8 w-8 text-green-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Expected Return</h3>
                    <p className="text-gray-600">7-9% annual return</p>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <DollarSign className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-lg font-semibold mb-2">Investment Amount</h3>
                    <p className="text-gray-600">${investmentAmount},000</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl mb-12">
                  <h3 className="text-xl font-semibold mb-6">Portfolio Growth Projection</h3>
                  <div className="h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={mockData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="text-center space-x-4">
                  <Button size="lg" variant="outline" onClick={() => setCurrentStep(2)}>
                    Adjust Portfolio
                  </Button>
                  <Button size="lg">
                    Download Report
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* Features Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ChartIcon className="h-8 w-8" />}
              title="Modern Portfolio Theory"
              description="Optimize your portfolio using advanced mathematical models"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Risk Analysis"
              description="Understand and manage your investment risks effectively"
            />
            <FeatureCard
              icon={<Target className="h-8 w-8" />}
              title="Goal Setting"
              description="Define and track your financial objectives"
            />
            <FeatureCard
              icon={<BarChart className="h-8 w-8" />}
              title="Performance Tracking"
              description="Monitor your portfolio's performance in real-time"
            />
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Advanced Portfolio Tools</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PremiumFeatureCard
              title="Risk Assessment"
              description="Complete risk profile analysis and personalized recommendations"
              included={["Risk tolerance evaluation", "Market scenario analysis", "Custom risk metrics"]}
            />
            <PremiumFeatureCard
              title="Portfolio Optimization"
              description="Advanced portfolio optimization tools and strategies"
              included={["Modern Portfolio Theory", "Black-Litterman model", "Rebalancing strategies"]}
            />
            <PremiumFeatureCard
              title="Premium Reports"
              description="Detailed analysis and professional reports"
              included={["PDF reports", "Interactive dashboards", "Monthly updates"]}
            />
          </div>
        </div>
      </section>
    </div>
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

function PremiumFeatureCard({ title, description, included }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition-shadow"
    >
      <h3 className="text-2xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {included.map((item, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default Portfolio
