import { 
  LayoutDashboard, 
  DollarSign, 
  TrendingUp, 
  Settings, 
  BarChart3,
  Zap,
  FileText
} from 'lucide-react'

interface SidebarProps {
  selectedView: string
  onViewChange: (view: string) => void
}

const menuItems = [
  { id: 'overview', label: 'Overview', icon: LayoutDashboard },
  { id: 'spending', label: 'Spending', icon: DollarSign },
  { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  { id: 'optimizations', label: 'Optimizations', icon: Zap },
  { id: 'trends', label: 'Trends', icon: TrendingUp },
  { id: 'reports', label: 'Reports', icon: FileText },
  { id: 'settings', label: 'Settings', icon: Settings },
]

export default function Sidebar({ selectedView, onViewChange }: SidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h1 className="text-2xl font-bold text-primary-600">AICostPro</h1>
        <p className="text-xs text-gray-500 mt-1">AI Token Analytics</p>
      </div>
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = selectedView === item.id
          return (
            <button
              key={item.id}
              onClick={() => onViewChange(item.id)}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-primary-50 text-primary-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="bg-primary-50 rounded-lg p-4">
          <p className="text-sm font-medium text-primary-900">Pro Plan</p>
          <p className="text-xs text-primary-600 mt-1">$299/month</p>
        </div>
      </div>
    </aside>
  )
}





