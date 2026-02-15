import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { formatCurrency } from '../utils/formatting'

interface ModelComparisonProps {
  data: any
}

export default function ModelComparison({ data }: ModelComparisonProps) {
  const modelData = data.models.map((model: any) => ({
    name: model.name,
    cost: model.cost,
    tokens: model.tokens / 1000, // Convert to thousands
    costPerToken: model.costPerToken * 1000, // Cost per 1K tokens
  }))

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Model Cost Comparison</h3>
        <p className="text-sm text-gray-600">Compare costs across different AI models</p>
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={modelData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis 
            dataKey="name" 
            stroke="#6b7280"
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={100}
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
              if (name === 'cost') return [formatCurrency(value), 'Total Cost']
              if (name === 'tokens') return [`${value.toFixed(1)}K tokens`, 'Tokens Used']
              if (name === 'costPerToken') return [`$${value.toFixed(4)}`, 'Cost per 1K tokens']
              return value
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="cost" fill="#3b82f6" name="Total Cost ($)" />
          <Bar yAxisId="right" dataKey="tokens" fill="#10b981" name="Tokens (K)" />
        </BarChart>
      </ResponsiveContainer>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.models.map((model: any) => (
          <div key={model.name} className="p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">{model.name}</h4>
            <div className="space-y-1 text-sm">
              <p className="text-gray-600">
                Cost: <span className="font-medium text-gray-900">{formatCurrency(model.cost)}</span>
              </p>
              <p className="text-gray-600">
                Tokens: <span className="font-medium text-gray-900">{(model.tokens / 1000).toFixed(1)}K</span>
              </p>
              <p className="text-gray-600">
                Cost/1K tokens: <span className="font-medium text-gray-900">${(model.costPerToken * 1000).toFixed(4)}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}





