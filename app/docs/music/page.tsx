import { RepoCard } from "@/components/RepoCard"

export default function MusicDocsPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Shiroの唱歌学日语 (Music App)</h1>
      <p>
        这是一个专为日语学习者设计的唱歌学日语网页应用。集成网易云音乐资源，支持歌词同步显示、罗马音转换、播放速度调节等核心学习功能。
      </p>
      
      <div className="not-prose my-6 w-full max-w-md">
        <RepoCard username="luojisama" repository="music_learn" />
      </div>
      
      <h2 id="features">核心功能</h2>
      <ul>
        <li><strong>音频播放控制</strong>:
          <ul>
            <li>支持多档播放速度调节（0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x）。</li>
            <li>支持单句循环播放（通过点击歌词跳转）。</li>
            <li>集成 VKeys API 自动获取高音质（Master/Hi-Res）音源。</li>
          </ul>
        </li>
        <li><strong>歌词学习系统</strong>:
          <ul>
            <li>中日双语歌词对照。</li>
            <li>自动生成并可编辑的罗马音（Romaji）。</li>
            <li>歌词滚动高亮与点击跳转进度。</li>
          </ul>
        </li>
        <li><strong>UI/UX 体验</strong>:
          <ul>
            <li>统一的 <strong>Fuwari</strong> 主题风格（悬浮卡片、毛玻璃效果）。</li>
            <li>完善的深色/浅色模式适配。</li>
            <li>响应式设计，支持移动端访问。</li>
          </ul>
        </li>
        <li><strong>音乐库</strong>:
          <ul>
            <li>搜索网易云音乐歌曲及歌单。</li>
            <li>自动获取高清歌曲封面（集成网易云 <code>song/detail</code> 接口）。</li>
            <li>收藏夹与播放历史功能（持久化存储）。</li>
          </ul>
        </li>
      </ul>

      <h2 id="tech-stack">技术栈</h2>
      <ul>
        <li><strong>框架</strong>: Next.js 16.1.4 (App Router, Turbopack)</li>
        <li><strong>样式</strong>: Tailwind CSS (Fuwari Theme)</li>
        <li><strong>状态管理</strong>: Zustand</li>
        <li><strong>国际化</strong>: next-intl (支持 中/日/英)</li>
        <li><strong>API 集成</strong>:
          <ul>
            <li><code>NeteaseCloudMusicApi</code> (后端代理)</li>
            <li><code>VKeys API</code> (高音质音源)</li>
            <li><code>kuroshiro</code> (罗马音转换)</li>
          </ul>
        </li>
      </ul>

      <h2 id="development">本地开发指南</h2>
      
      <h3 id="env-req">环境要求</h3>
      <ul>
        <li>Node.js 20+</li>
        <li>npm 或 pnpm</li>
      </ul>

      <h3 id="install">安装步骤</h3>
      <ol>
        <li>
          <p>克隆仓库:</p>
          <pre><code>git clone https://github.com/luojisama/music_learn.git
cd music_learn</code></pre>
        </li>
        <li>
          <p>安装依赖:</p>
          <pre><code>npm install</code></pre>
        </li>
        <li>
          <p>配置环境变量:</p>
          <p>复制 <code>.env.example</code> 为 <code>.env.local</code> 并填写相关配置。</p>
        </li>
        <li>
          <p>启动开发服务器:</p>
          <pre><code>npm run dev</code></pre>
        </li>
      </ol>

      <h2 id="api-integration">API 集成说明</h2>

      <h3 id="netease-proxy">1. 网易云音乐代理</h3>
      <p>
        应用通过 <code>app/api/music/[...path]/route.ts</code> 代理所有对网易云的请求，解决跨域问题。
      </p>
      <ul>
        <li>主要接口：<code>search</code>, <code>song_url/v1</code>, <code>lyric</code>, <code>song/detail</code>, <code>playlist/detail</code>。</li>
      </ul>

      <h3 id="audio-quality">2. 音质增强 (VKeys)</h3>
      <p>
        在播放歌曲时，系统会优先请求 <code>https://api.vkeys.cn/v2/music/netease</code> 以尝试获取最高音质链接。若失败，则回退至官方标准音质。
      </p>

      <h3 id="cover-fix">3. 封面图修复逻辑</h3>
      <p>
        由于搜索接口不直接返回封面，系统会自动调用批量详情接口获取 <code>picUrl</code>，确保列表显示完整。
      </p>

      <h2 id="deploy">部署步骤 (Vercel)</h2>
      <p>本项目针对 Vercel 平台进行了深度优化：</p>
      <ol>
        <li>将代码推送至 GitHub 仓库。</li>
        <li>在 Vercel 面板中导入该项目。</li>
        <li>确保 <strong>Build Command</strong> 为 <code>next build</code>。</li>
        <li>在 <strong>Environment Variables</strong> 中添加必要的变量。</li>
        <li>点击 <strong>Deploy</strong> 即可完成部署。</li>
      </ol>

      <h2 id="license">开源协议</h2>
      <p>MIT License</p>
    </div>
  )
}
