import { Zap, TrendingDown, CheckCircle } from 'lucide-react'
import { formatCurrency } from '../utils/formatting'

interface OptimizationSuggestionsProps {
  data: any
}

export default function OptimizationSuggestions({ data }: OptimizationSuggestionsProps) {
  const suggestions = [
    {
      id: 1,
      type: 'model_switch',
      title: 'Switch GPT-4 to GPT-3.5-turbo for non-critical tasks',
      description: 'You\'re using GPT-4 for 45% of requests that could use GPT-3.5-turbo',
      potentialSavings: 1250,
      impact: 'high',
      status: 'pending',
    },
    {
      id: 2,
      type: 'prompt_optimization',
      title: 'Optimize prompt length',
      description: 'Average prompt is 450 tokens. Reduce by 30% to save costs',
      potentialSavings: 380,
      impact: 'medium',
      status: 'pending',
    },
    {
      id: 3,
      type: 'caching',
      title: 'Enable response caching',
      description: '23% of your queries are repeated. Cache responses to save',
      potentialSavings: 520,
      impact: 'high',
      status: 'pending',
    },
    {
      id: 4,
      type: 'batch_processing',
      title: 'Batch similar requests',
      description: 'Group similar API calls to reduce overhead costs',
      potentialSavings: 180,
      impact: 'low',
      status: 'applied',
    },
  ]

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high':
        return 'bg-red-100 text-red-800 border-red-200'
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200'
      case 'low':
        return 'bg-blue-100 text-blue-800 border-blue-200'
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-2">
          <Zap className="w-5 h-5 text-primary-600" />
          <h3 className="text-lg font-semibold text-gray-900">Optimization Recommendations</h3>
        </div>
        <p className="text-sm text-gray-600">
          AI-powered suggestions to reduce your costs by up to {formatCurrency(data.totalPotentialSavings)}
        </p>
      </div>
      <div className="space-y-4">
        {suggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className={`p-5 rounded-lg border-2 ${
              suggestion.status === 'applied'
                ? 'bg-green-50 border-green-200'
                : 'bg-white border-gray-200 hover:border-primary-300 transition-colors'
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h4 className="font-semibold text-gray-900">{suggestion.title}</h4>
                  <span className={`px-2 py-1 text-xs font-medium rounded border ${getImpactColor(suggestion.impact)}`}>
                    {suggestion.impact.toUpperCase()}
                  </span>
                  {suggestion.status === 'applied' && (
                    <span className="flex items-center space-x-1 text-green-600 text-sm">
                      <CheckCircle className="w-4 h-4" />
                      <span>Applied</span>
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mb-3">{suggestion.description}</p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <TrendingDown className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-600">
                      Potential Savings: {formatCurrency(suggestion.potentialSavings)}/month
                    </span>
                  </div>
                </div>
              </div>
              {suggestion.status === 'pending' && (
                <div className="flex space-x-2 ml-4">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium">
                    Apply
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium">
                    Dismiss
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-primary-50 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-primary-900">Total Potential Monthly Savings</p>
            <p className="text-2xl font-bold text-primary-600 mt-1">
              {formatCurrency(suggestions.reduce((sum, s) => sum + s.potentialSavings, 0))}
            </p>
          </div>
          <button className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Apply All Recommendations
          </button>
        </div>
      </div>
    </div>
  )
}





