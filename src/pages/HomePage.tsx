import { Helmet } from 'react-helmet-async'

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>矿山生态安全教育部工程研究中心 | 首页</title>
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">
          矿山生态安全教育部工程研究中心
        </h1>
        <p className="text-xl text-center text-gray-600 mb-8">
          Engineering Research Center of Mining Environment and Ecological Safety, Ministry of Education
        </p>
        <div className="text-center">
          <p className="text-lg text-gray-700">
            欢迎访问我们的官方网站
          </p>
        </div>
      </div>
    </>
  )
}


