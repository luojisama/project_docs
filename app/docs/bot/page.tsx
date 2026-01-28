export default function BotDocsPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Bot 插件使用方法</h1>
      <p>
        通用获取帮助指令：<code>/插件帮助 [序号]/[插件名]</code><br/>
        管理员QQ：2534316454
      </p>

      <h2 id="list">插件列表</h2>
      <div className="not-prose relative w-full overflow-auto my-8">
        <table className="w-full caption-bottom text-sm border-collapse">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted text-left">
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground">插件名称</th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground">功能</th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground w-[40%]">使用方法</th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground">是否需要@</th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground">备注</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {[
              { name: "JMComic插件", desc: "查询jm本子", usage: "<code>jm下载 [jm号]</code> :下载指定jm号的本子<br><code>jm查询 [jm号]</code> :查询指定jm号的本子<br><code>jm搜索 [关键词]</code> :搜索包含关键词的本子", at: "否", note: "仅私聊" },
              { name: "PixivBot", desc: "查询pixiv图片", usage: "<code>看看榜&lt;范围&gt;</code>：查看pixiv榜单<br><code>来张图</code>：从推荐插画随机抽选一张插画<br><code>来张&lt;关键字&gt;图</code>：搜索关键字...<br><code>还要</code>：重复上一次请求<br><code>不够色</code>：获取上一张插画的相关推荐", at: "否", note: "" },
              { name: "YetAnotherPicSearch", desc: "搜索图片出处", usage: "发送<code>/搜图 -h</code>查看详细帮助", at: "否", note: "" },
              { name: "三角洲助手", desc: "三角洲相关功能", usage: "<code>/三角洲帮助</code>查看详细帮助", at: "否", note: "" },
              { name: "人生重开", desc: "人生重开小游戏", usage: "<code>@bot /人生重开</code>", at: "是", note: "" },
              { name: "动漫资源插件", desc: "获取动漫资源的磁力链接", usage: "<code>/资源 动漫名</code>", at: "否", note: "" },
              { name: "天气查询", desc: "查询天气", usage: "<code>/天气 地名</code>", at: "否", note: "" },
              { name: "模板绘图", desc: "通过固定模板使用ai绘图", usage: "<code>画图 &lt;模板&gt; [图片]/@xxx </code> <br><code>模板列表</code>", at: "否", note: "" },
              { name: "活字印刷", desc: "电棍语音活字印刷", usage: "<code>/活字印刷 -h</code>查看详细帮助", at: "否", note: "" },
              { name: "火车迷铁路工具箱", desc: "查询火车相关信息", usage: "<code>/help 火车迷铁路工具箱</code>查看详细帮助", at: "否", note: "" },
              { name: "群聊语录库", desc: "上传群聊语录", usage: "回复图片 + 上传保存<br> @bot +语录随机获取", at: "可选", note: "" },
              { name: "蔚蓝档案今日运势", desc: "获取今日运势", usage: "<code>今日运势</code>", at: "否", note: "" },
              { name: "猜歌游戏", desc: "猜歌小游戏", usage: "<code>/猜歌帮助</code>查看详细帮助", at: "否", note: "" },
              { name: "CS_PRO", desc: "查询cs相关内容", usage: "<code>/cs查询 id</code><br><code>/cs赛事</code><br><code>/5e 用户名</code><br><code>/pw 用户名</code>", at: "否", note: "" },
              { name: "CSGO饰品查询", desc: "查询cs饰品价格", usage: "<code>/查询/搜索/查 饰品名称</code>", at: "否", note: "" },
              { name: "nonebot-plugin-simple-setu", desc: "随机涩图", usage: "<code>/setu </code>随机发送一张色图，可在后添加tag<br><code>/leg/腿子/来份腿子</code>随机发送一张腿子图<br><code>/girl/少女写真/来份写真</code>随机发送一张写真图<br><code>@bot /看看腿</code> 与leg相同", at: "否", note: "" },
              { name: "AI总结", desc: "使用ai对聊天记录进行总结", usage: "<code>/总结</code>", at: "否", note: "" },
              { name: "AI成分分析", desc: "使用ai通过分析你的聊天记录生成成分", usage: "<code>/成分分析 @某人 (分析指定的群友)</code>", at: "否", note: "" },
              { name: "网页截图", desc: "发送网址截图", usage: "<code>/截图 网址</code>", at: "否", note: "" },
              { name: "群聊活跃报告", desc: "查看群聊的活跃度", usage: "<code>/水群榜 （默认今日</code>）<br><code> /活跃报告 本周</code>", at: "否", note: "" },
              { name: "签到", desc: "签到插件，好感度直接影响ai对你的态度", usage: "<code>/签到</code><br><code>/查询好感度</code><br><code>/行动</code><br><code>/商店</code><br><code>/背包</code>", at: "否", note: "" },
              { name: "拟人回复", desc: "ai群聊回复，回复结果与`签到`的好感度挂钩", usage: "<code>@机器人 内容</code>", at: "白名单启用", note: "" },
              { name: "用户画像", desc: "通过30条最近聊天记录生成用户画像", usage: "<code>/查看画像</code><br><code>/刷新画像</code>", at: "否", note: "" },
              { name: "漂流瓶", desc: "跨群聊漂流瓶", usage: "<code>/扔漂流瓶 内容</code><br><code>/捡漂流瓶</code>", at: "否", note: "" },
              { name: "日常工具箱", desc: "一些小功能", usage: "<code>/kfc</code><br><code>/发病 @用户</code><br><code>/冷笑话</code>", at: "否", note: "" },
              { name: "steam", desc: "查看指定用户steam状态，游戏库，最近游戏", usage: "<code>/steam</code> 详细帮助", at: "否", note: "" },
              { name: "追番查看", desc: "查看指定用户/uid的追番列表", usage: "<code>/追番 用户名/uid</code>", at: "否", note: "" },
              { name: "ll活动", desc: "查看/推送拉拉活动<br>声优访华", usage: "<code>/ll日程</code><br><code>/ll访华</code>", at: "否", note: "" },
              { name: "天灾预测", desc: "地震与台风的推送", usage: "<code>/地震推送 [开启/关闭/状态]</code><br><code>/台风推送 [开启/关闭/状态]</code><br><code>/历史地震</code><br><code>/最近地震</code><br><code>/当前台风</code> <br><code>/最新台风</code>", at: "否", note: "" },
              { name: "今日老婆", desc: "查看今日二次元老婆", usage: "<code>/今日老婆</code><br><code>/刷新老婆</code>", at: "否", note: "" },
            ].map((row, i) => (
              <tr key={i} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted odd:bg-muted/20">
                <td className="p-4 align-middle font-medium">{row.name}</td>
                <td className="p-4 align-middle">{row.desc}</td>
                <td className="p-4 align-middle" dangerouslySetInnerHTML={{ __html: row.usage }} />
                <td className="p-4 align-middle">{row.at}</td>
                <td className="p-4 align-middle">{row.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
