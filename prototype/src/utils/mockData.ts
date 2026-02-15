export function generateMockData() {
  // Generate daily spending for last 30 days
  const dailySpending = Array.from({ length: 30 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (29 - i))
    return {
      date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      spending: Math.random() * 200 + 100,
      tokens: Math.random() * 50000 + 25000,
    }
  })

  // Provider data
  const providers = [
    { name: 'OpenAI', spending: 4500, percentage: 45 },
    { name: 'Anthropic', spending: 2800, percentage: 28 },
    { name: 'Google', spending: 1500, percentage: 15 },
    { name: 'Azure', spending: 800, percentage: 8 },
    { name: 'AWS', spending: 400, percentage: 4 },
  ]

  // Model data
  const models = [
    { name: 'GPT-4', cost: 3200, tokens: 2500000, costPerToken: 0.00128 },
    { name: 'GPT-3.5-turbo', cost: 1800, tokens: 4500000, costPerToken: 0.0004 },
    { name: 'Claude-3', cost: 2800, tokens: 2200000, costPerToken: 0.00127 },
    { name: 'Claude-2', cost: 1200, tokens: 3000000, costPerToken: 0.0004 },
    { name: 'Gemini-Pro', cost: 1500, tokens: 3500000, costPerToken: 0.00043 },
  ]

  // Calculate totals
  const totalSpending = providers.reduce((sum, p) => sum + p.spending, 0)
  const monthlySpending = dailySpending.reduce((sum, d) => sum + d.spending, 0)
  const avgDailyCost = monthlySpending / 30
  const projectedMonthly = avgDailyCost * 30

  return {
    totalSpending,
    monthlySpending,
    avgDailyCost,
    projectedMonthly,
    spendingChange: 12.5,
    monthlyChange: 8.3,
    dailyChange: -2.1,
    projectionChange: 5.2,
    dailySpending,
    providers,
    models,
    totalPotentialSavings: 2330,
  }
}





