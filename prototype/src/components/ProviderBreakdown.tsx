import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { formatCurrency } from '../utils/formatting'

interface ProviderBreakdownProps {
  data: any
}

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899']

export default function ProviderBreakdown({ data }: ProviderBreakdownProps) {
  const providerData = data.providers.map((provider: any) => ({
    name: provider.name,
    value: provider.spending,
    percentage: provider.percentage,
  }))

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold">{payload[0].name}</p>
          <p className="text-sm text-gray-600">
            {formatCurrency(payload[0].value)} ({payload[0].payload.percentage}%)
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Spending by Provider</h3>
        <p className="text-sm text-gray-600">Breakdown of costs across AI providers</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={providerData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={({ name, percentage }) => `${name}: ${percentage}%`}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {providerData.map((entry: any, index: number) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div className="space-y-4">
          {data.providers.map((provider: any, index: number) => (
            <div key={provider.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div 
                  className="w-4 h-4 rounded-full" 
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="font-medium text-gray-900">{provider.name}</span>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">{formatCurrency(provider.spending)}</p>
                <p className="text-sm text-gray-600">{provider.percentage}%</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





