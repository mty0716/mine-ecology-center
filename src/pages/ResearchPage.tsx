import { Helmet } from 'react-helmet-async'

export default function ResearchPage() {
  return (
    <>
      <Helmet>
        <title>研究方向 | 矿山生态安全教育部工程研究中心</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">研究方向</h1>
        <p className="text-lg text-gray-700 text-center">
          研究方向信息将在这里显示
        </p>
      </div>
    </>
  )
}
