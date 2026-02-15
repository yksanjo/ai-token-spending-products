import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { formatCurrency } from '../utils/formatting'

interface SpendingChartProps {
  data: any
}

export default function SpendingChart({ data }: SpendingChartProps) {
  const chartData = data.dailySpending.map((day: any) => ({
    date: day.date,
    spending: day.spending,
    tokens: day.tokens / 1000, // Convert to thousands
  }))

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Spending Trend</h3>
        <p className="text-sm text-gray-600">Daily spending over the last 30 days</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="date" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
          />
          <YAxis 
            yAxisId="left"
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `$${value.toFixed(0)}`}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            tickFormatter={(value) => `${value}K`}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #e5e7eb',
              borderRadius: '8px'
            }}
            formatter={(value: number, name: string) => {
              if (name === 'spending') return [formatCurrency(value), 'Spending']
              if (name === 'tokens') return [`${value.toFixed(1)}K tokens`, 'Tokens']
              return value
            }}
          />
          <Legend />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="spending" 
            stroke="#3b82f6" 
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 3 }}
            name="Spending ($)"
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="tokens" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 3 }}
            name="Tokens (K)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}





