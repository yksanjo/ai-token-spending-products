import { useEffect, useState } from 'react'
import SpendingOverview from './SpendingOverview'
import SpendingChart from './SpendingChart'
import ProviderBreakdown from './ProviderBreakdown'
import ModelComparison from './ModelComparison'
import OptimizationSuggestions from './OptimizationSuggestions'
import TrendsView from './TrendsView'
import { generateMockData } from '../utils/mockData'

interface DashboardProps {
  view: string
}

export default function Dashboard({ view }: DashboardProps) {
  const [data, setData] = useState(generateMockData())

  useEffect(() => {
    // Simulate real-time updates
    const interval = setInterval(() => {
      setData(generateMockData())
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  switch (view) {
    case 'overview':
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Overview</h2>
            <p className="text-gray-600">Monitor your AI token spending and optimize costs</p>
          </div>
          <SpendingOverview data={data} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <SpendingChart data={data} />
            <ProviderBreakdown data={data} />
          </div>
          <OptimizationSuggestions data={data} />
        </div>
      )
    case 'spending':
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Spending Analysis</h2>
            <p className="text-gray-600">Detailed breakdown of your AI costs</p>
          </div>
          <SpendingOverview data={data} />
          <SpendingChart data={data} />
          <ModelComparison data={data} />
        </div>
      )
    case 'analytics':
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Analytics</h2>
            <p className="text-gray-600">Deep insights into your AI usage patterns</p>
          </div>
          <ProviderBreakdown data={data} />
          <ModelComparison data={data} />
        </div>
      )
    case 'optimizations':
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Optimization Recommendations</h2>
            <p className="text-gray-600">AI-powered suggestions to reduce your costs</p>
          </div>
          <OptimizationSuggestions data={data} />
        </div>
      )
    case 'trends':
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Usage Trends</h2>
            <p className="text-gray-600">Track your AI spending over time</p>
          </div>
          <TrendsView data={data} />
        </div>
      )
    default:
      return <div>View not implemented</div>
  }
}





