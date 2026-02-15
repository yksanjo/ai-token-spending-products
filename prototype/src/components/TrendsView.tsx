import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { formatCurrency } from '../utils/formatting'

interface TrendsViewProps {
  data: any
}

export default function TrendsView({ data }: TrendsViewProps) {
  // Generate monthly trend data
  const monthlyData = Array.from({ length: 12 }, (_, i) => {
    const month = new Date(2024, i, 1)
    const monthName = month.toLocaleDateString('en-US', { month: 'short' })
    return {
      month: monthName,
      spending: Math.random() * 5000 + 2000,
      tokens: Math.random() * 5000000 + 2000000,
      aiActivity: Math.random() * 10000 + 5000,
      humanActivity: Math.random() * 5000 + 2000,
    }
  })

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">Monthly Spending Trends</h3>
          <p className="text-sm text-gray-600">12-month overview of AI token spending</p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorSpending" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis 
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${value.toFixed(0)}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
              formatter={(value: number) => formatCurrency(value)}
            />
            <Legend />
            <Area 
              type="monotone" 
              dataKey="spending" 
              stroke="#3b82f6" 
              fillOpacity={1} 
              fill="url(#colorSpending)"
              name="Spending"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900">AI vs Human Activity</h3>
          <p className="text-sm text-gray-600">Comparison of AI token spending vs human labor costs</p>
        </div>
        <ResponsiveContainer width="100%" height={400}>
          <AreaChart data={monthlyData}>
            <defs>
              <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorHuman" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis dataKey="month" stroke="#6b7280" tick={{ fontSize: 12 }} />
            <YAxis 
              stroke="#6b7280"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => `$${value.toFixed(0)}`}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#fff', 
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
              formatter={(value: number, name: string) => {
                const label = name === 'aiActivity' ? 'AI Activity' : 'Human Activity'
                return [formatCurrency(value), label]
              }}
            />
            <Legend 
              formatter={(value) => value === 'aiActivity' ? 'AI Activity' : 'Human Activity'}
            />
            <Area 
              type="monotone" 
              dataKey="aiActivity" 
              stroke="#10b981" 
              fillOpacity={1} 
              fill="url(#colorAI)"
              name="AI Activity"
            />
            <Area 
              type="monotone" 
              dataKey="humanActivity" 
              stroke="#f59e0b" 
              fillOpacity={1} 
              fill="url(#colorHuman)"
              name="Human Activity"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">AI Growth Rate</h4>
          <p className="text-3xl font-bold text-green-600">+247%</p>
          <p className="text-sm text-gray-500 mt-1">Year over year</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Human Activity Change</h4>
          <p className="text-3xl font-bold text-gray-600">-12%</p>
          <p className="text-sm text-gray-500 mt-1">Year over year</p>
        </div>
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">Cost Efficiency</h4>
          <p className="text-3xl font-bold text-blue-600">3.2x</p>
          <p className="text-sm text-gray-500 mt-1">AI vs Human ROI</p>
        </div>
      </div>
    </div>
  )
}





