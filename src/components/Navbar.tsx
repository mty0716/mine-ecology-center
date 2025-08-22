import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-900">
            矿山生态安全教育部工程研究中心
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">首页</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">关于中心</Link>
            <Link to="/news" className="text-gray-700 hover:text-gray-900">新闻动态</Link>
            <Link to="/people" className="text-gray-700 hover:text-gray-900">团队成员</Link>
            <Link to="/research" className="text-gray-700 hover:text-gray-900">研究方向</Link>
            <Link to="/achievements" className="text-gray-700 hover:text-gray-900">研究成果</Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">联系我们</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
