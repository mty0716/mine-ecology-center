#!/usr/bin/env node

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// 新闻主题
const NEWS_THEME = "李晶团队至山西煤矿进行调研"

// 生成新闻标题
function generateTitle() {
  const titles = [
    {
      zh: "李晶团队赴山西煤矿开展生态修复技术调研",
      en: "Li Jing Team Conducts Ecological Restoration Technology Research at Shanxi Coal Mine"
    },
    {
      zh: "我中心李晶教授团队深入山西煤矿调研生态修复现状",
      en: "Professor Li Jing's Team from Our Center Conducts In-depth Research on Ecological Restoration at Shanxi Coal Mine"
    },
    {
      zh: "李晶团队山西煤矿调研：探索矿区生态修复新路径",
      en: "Li Jing Team's Shanxi Coal Mine Research: Exploring New Paths for Mine Ecological Restoration"
    }
  ]
  
  return titles[Math.floor(Math.random() * titles.length)]
}

// 生成新闻摘要
function generateSummary() {
  const summaries = [
    {
      zh: "为深入了解矿区生态修复技术应用现状，李晶教授带领团队赴山西煤矿进行实地调研，重点考察了矿区生态修复项目的实施效果和技术创新。",
      en: "To gain an in-depth understanding of the current application status of mine ecological restoration technology, Professor Li Jing led her team to conduct field research at Shanxi Coal Mine, focusing on the implementation effects and technological innovations of mine ecological restoration projects."
    },
    {
      zh: "李晶团队此次山西煤矿调研活动，旨在探索矿区生态修复的最新技术进展，为后续的科研项目和技术推广提供重要参考。",
      en: "This Shanxi Coal Mine research activity by Li Jing's team aims to explore the latest technological advances in mine ecological restoration, providing important references for subsequent research projects and technology promotion."
    }
  ]
  
  return summaries[Math.floor(Math.random() * summaries.length)]
}

// 生成新闻内容
function generateContent() {
  return {
    zh: `## 调研背景

为进一步推进矿山生态修复技术的研究与应用，我中心李晶教授团队于近日赴山西省某大型煤矿进行实地调研。此次调研活动旨在深入了解矿区生态修复项目的实施现状，探索技术创新路径，为后续的科研工作提供重要支撑。

## 调研内容

### 实地考察
调研团队深入矿区一线，实地考察了多个生态修复项目现场，包括：
- 矿区植被恢复工程
- 土壤改良技术应用
- 水资源保护措施
- 生物多样性恢复项目

### 技术交流
与矿区技术人员进行了深入的技术交流，重点讨论了：
- 生态修复技术的实际应用效果
- 技术创新面临的挑战与机遇
- 未来技术发展方向

### 数据收集
团队收集了大量一手资料，包括：
- 生态修复项目的实施数据
- 环境监测结果
- 技术应用案例
- 项目管理经验

## 调研成果

### 技术创新发现
通过此次调研，团队发现了多项技术创新点：
- 新型土壤改良材料的应用效果显著
- 植被恢复技术的适应性得到验证
- 水资源循环利用技术取得突破

### 问题与挑战
调研中也发现了一些需要解决的问题：
- 部分技术在大规模应用中的稳定性有待提高
- 成本控制需要进一步优化
- 长期监测体系需要完善

## 后续计划

基于此次调研成果，团队将：
1. 制定详细的技术改进方案
2. 开展针对性的实验研究
3. 建立长期合作机制
4. 推进技术成果转化

## 意义与影响

此次调研活动不仅为团队的研究工作提供了宝贵的一手资料，也为推动矿区生态修复技术的发展做出了积极贡献。通过实地调研，团队更加深入地了解了技术应用的实际情况，为后续的科研项目和技术推广奠定了坚实基础。

李晶教授表示："实地调研是科研工作的重要组成部分，只有深入一线，才能真正了解技术的实际应用效果和存在的问题。我们将以此次调研为契机，进一步推进矿区生态修复技术的研究与应用。"`,
    
    en: `## Research Background

To further advance the research and application of mine ecological restoration technology, Professor Li Jing's team from our center recently conducted field research at a large coal mine in Shanxi Province. This research activity aims to gain an in-depth understanding of the current implementation status of mine ecological restoration projects, explore technological innovation paths, and provide important support for subsequent research work.

## Research Content

### Field Investigation
The research team went deep into the mining area front line and conducted on-site investigations of multiple ecological restoration project sites, including:
- Mine vegetation restoration projects
- Soil improvement technology applications
- Water resource protection measures
- Biodiversity restoration projects

### Technical Exchange
In-depth technical exchanges were conducted with mining area technical personnel, focusing on:
- Actual application effects of ecological restoration technologies
- Challenges and opportunities faced by technological innovation
- Future technology development directions

### Data Collection
The team collected a large amount of first-hand information, including:
- Implementation data of ecological restoration projects
- Environmental monitoring results
- Technology application cases
- Project management experience

## Research Results

### Technological Innovation Discoveries
Through this research, the team discovered several technological innovation points:
- Significant application effects of new soil improvement materials
- Verification of vegetation restoration technology adaptability
- Breakthroughs in water resource recycling technology

### Problems and Challenges
Some problems that need to be solved were also discovered during the research:
- Stability of some technologies in large-scale applications needs improvement
- Cost control needs further optimization
- Long-term monitoring systems need improvement

## Follow-up Plans

Based on the research results, the team will:
1. Develop detailed technology improvement plans
2. Conduct targeted experimental research
3. Establish long-term cooperation mechanisms
4. Promote technology achievement transformation

## Significance and Impact

This research activity not only provided valuable first-hand information for the team's research work but also made positive contributions to promoting the development of mine ecological restoration technology. Through field research, the team gained a deeper understanding of the actual application of technology, laying a solid foundation for subsequent research projects and technology promotion.

Professor Li Jing stated: "Field research is an important component of research work. Only by going deep into the front line can we truly understand the actual application effects and existing problems of technology. We will take this research as an opportunity to further advance the research and application of mine ecological restoration technology."`
  }
}

// 生成完整的新闻元数据
function generateNewsMetadata() {
  const title = generateTitle()
  const summary = generateSummary()
  const content = generateContent()
  
  return {
    title_zh: title.zh,
    title_en: title.en,
    summary_zh: summary.zh,
    summary_en: summary.en,
    content_zh: content.zh,
    content_en: content.en,
    category: "research"
  }
}

// 更新指定新闻的元数据
function updateNewsMetadata(folderPath, metadata) {
  const metadataPath = path.join(folderPath, 'metadata.json')
  
  try {
    fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2), 'utf-8')
    console.log(`✅ 已更新新闻元数据: ${metadataPath}`)
    console.log(`📝 标题: ${metadata.title_zh}`)
    console.log(`📅 分类: ${metadata.category}`)
  } catch (error) {
    console.error(`❌ 更新元数据失败: ${metadataPath}`, error.message)
  }
}

// 主函数
function main() {
  console.log('🤖 AI新闻内容生成器')
  console.log('='.repeat(50))
  console.log(`📋 主题: ${NEWS_THEME}`)
  console.log('')
  
  // 生成新闻内容
  const metadata = generateNewsMetadata()
  
  console.log('📄 生成的新闻内容:')
  console.log('')
  console.log(`📰 中文标题: ${metadata.title_zh}`)
  console.log(`📰 英文标题: ${metadata.title_en}`)
  console.log('')
  console.log(`📝 中文摘要: ${metadata.summary_zh}`)
  console.log('')
  console.log(`📝 英文摘要: ${metadata.summary_en}`)
  console.log('')
  console.log(`🏷️  分类: ${metadata.category}`)
  console.log('')
  
  // 直接更新现有新闻
  const newsFolder = '/Users/mty/Documents/consor/建站/素材/新闻与动态/2025.8.11'
  
  if (fs.existsSync(newsFolder)) {
    updateNewsMetadata(newsFolder, metadata)
    console.log('')
    console.log('🔄 请运行以下命令更新网站:')
    console.log('   npm run generate-news')
  } else {
    console.log('❌ 未找到新闻文件夹，请先创建文件夹')
  }
}

// 运行脚本
if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}

export {
  generateNewsMetadata,
  generateTitle,
  generateSummary,
  generateContent
}
