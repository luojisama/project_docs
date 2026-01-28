import { RepoCard } from "@/components/RepoCard"

export default function NavDocsPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>个人导航网站系统</h1>
      <p>
        这是一个基于 <a href="https://nextjs.org/" target="_blank">Next.js</a> 和 <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> 构建的现代化个人导航网站。它轻量、快速，并且非常容易修改和部署。
      </p>

      <div className="not-prose my-6 w-full max-w-md">
        <RepoCard username="luojisama" repository="nav_site" />
      </div>

      <h2 id="features">✨ 特性</h2>
      <ul>
        <li>⚡️ <strong>极速加载</strong>: 基于 Next.js 构建，性能优异</li>
        <li>🎨 <strong>现代设计</strong>: 使用 Tailwind CSS 构建的精美 UI</li>
        <li>📱 <strong>响应式布局</strong>: 完美适配手机、平板和桌面端</li>
        <li>🌙 <strong>暗黑模式</strong>: 支持系统级暗黑模式（跟随系统设置）</li>
        <li>🛠 <strong>易于配置</strong>: 只需修改一个配置文件即可更新内容</li>
        <li>🚀 <strong>一键部署</strong>: 完美支持 Vercel 部署</li>
      </ul>

      <h2 id="quick-start">🚀 快速开始</h2>
      
      <h3 id="local-dev">本地开发</h3>
      <ol>
        <li>
          <p>安装依赖：</p>
          <pre><code>npm install</code></pre>
        </li>
        <li>
          <p>启动开发服务器：</p>
          <pre><code>npm run dev</code></pre>
        </li>
        <li>
          <p>打开浏览器访问 <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></p>
        </li>
      </ol>

      <h2 id="customize">📝 如何修改内容</h2>
      <p>所有的网站配置和链接数据都存储在 <code>data/siteConfig.ts</code> 文件中。</p>

      <h3 id="basic-info">修改基本信息</h3>
      <p>修改 <code>siteConfig</code> 对象中的 <code>title</code>（标题）、<code>description</code>（描述）和 <code>author</code>（作者）字段。</p>

      <h3 id="social-links">修改社交链接</h3>
      <p>修改 <code>social</code> 数组。你可以从 <code>lucide-react</code> 导入更多的图标。</p>

      <h3 id="nav-links">添加/修改导航链接</h3>
      <p>在 <code>categories</code> 数组中添加或修改分类。每个分类包含一个 <code>items</code> 数组，其中存放具体的链接信息：</p>
      <pre>
        <code>{`{
  title: "分类名称",
  items: [
    {
      name: "链接名称",
      url: "https://example.com",
      description: "链接描述（可选）",
    }
  ]
}`}</code>
      </pre>

      <h3 id="path-prefix">路径前缀配置 (可选)</h3>
      <p>如果你希望将网站部署到子路径（例如 <code>your-domain.com/nav</code>），你可以通过环境变量进行配置：</p>
      <ol>
        <li>在 Vercel 的项目设置中，添加环境变量 <code>NEXT_PUBLIC_BASE_PATH</code>。</li>
        <li>将其值设置为你的子路径（例如 <code>/nav</code>）。</li>
      </ol>

      <h2 id="deploy">📦 部署到 Vercel</h2>
      <p>本项目可以通过 Vercel 进行一键部署，这是最推荐的方式。</p>
      <ol>
        <li>将代码提交到你的 GitHub 仓库。</li>
        <li>访问 <a href="https://vercel.com" target="_blank">Vercel</a> 并使用 GitHub 账号登录。</li>
        <li>点击 "Add New..." -&gt; "Project"。</li>
        <li>导入你刚才创建的 GitHub 仓库。</li>
        <li>点击 "Deploy" 按钮。</li>
      </ol>
      <p>部署完成后，你将获得一个免费的 <code>*.vercel.app</code> 域名。以后你只需要将修改推送到 GitHub，Vercel 会自动重新部署你的网站。</p>

      <h2 id="tech-stack">🛠 技术栈</h2>
      <ul>
        <li><a href="https://nextjs.org/" target="_blank">Next.js 14</a> - React 框架</li>
        <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> - CSS 框架</li>
        <li><a href="https://lucide.dev/" target="_blank">Lucide React</a> - 图标库</li>
        <li><a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> - 类型安全</li>
      </ul>

      <h2 id="icon-system">🖼️ 图标系统配置</h2>
      <p>本项目采用了智能的多源图标获取机制，确保在国内外不同网络环境下都能快速、稳定地显示网站图标。</p>
      
      <h3 id="how-it-works">工作原理</h3>
      <ol>
        <li><strong>多级缓存策略</strong>:
          <ul>
            <li>浏览器本地存储 (localStorage)</li>
            <li>CDN 边缘缓存</li>
            <li>浏览器 HTTP 缓存 (Cache-Control)</li>
          </ul>
        </li>
        <li><strong>自动回退机制</strong>:
          <p>系统会按优先级尝试以下图标源，直到成功加载：</p>
          <ol>
            <li><strong>内部 API 代理</strong> (<code>/api/favicon</code>): 解决跨域和混合内容问题</li>
            <li><strong>国内源</strong> (<code>api.iowen.cn</code>): 优化国内访问速度</li>
            <li><strong>备用源</strong> (<code>rss.ink</code>, <code>icon.horse</code>): 提高可用性</li>
            <li><strong>国际源</strong> (<code>unavatar.io</code>, <code>google</code>): 保证全球覆盖</li>
            <li><strong>文字头像</strong>: 当所有图标源都不可用时，自动生成基于名称首字母的文字头像</li>
          </ol>
        </li>
      </ol>

      <h3 id="api-config">API 配置</h3>
      <p>图标代理服务位于 <code>app/api/favicon/route.ts</code>，默认配置了长达 30 天的缓存，以减少上游请求并提高性能。</p>

      <h2 id="license">📄 许可证</h2>
      <p>MIT License</p>
    </div>
  )
}
