import { DollarSign, TrendingUp, TrendingDown, Activity } from 'lucide-react'
import { formatCurrency } from '../utils/formatting'

interface SpendingOverviewProps {
  data: any
}

export default function SpendingOverview({ data }: SpendingOverviewProps) {
  const stats = [
    {
      label: 'Total Spending',
      value: formatCurrency(data.totalSpending),
      change: data.spendingChange,
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      label: 'This Month',
      value: formatCurrency(data.monthlySpending),
      change: data.monthlyChange,
      icon: Activity,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
    {
      label: 'Avg Daily Cost',
      value: formatCurrency(data.avgDailyCost),
      change: data.dailyChange,
      icon: TrendingUp,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    {
      label: 'Projected Monthly',
      value: formatCurrency(data.projectedMonthly),
      change: data.projectionChange,
      icon: TrendingDown,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        const isPositive = stat.change >= 0
        return (
          <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div className={`flex items-center space-x-1 text-sm ${
                isPositive ? 'text-red-600' : 'text-green-600'
              }`}>
                {isPositive ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                <span>{Math.abs(stat.change)}%</span>
              </div>
            </div>
            <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.label}</h3>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        )
      })}
    </div>
  )
}





