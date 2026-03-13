const pluginDocs = [
  {
    id: "account_manager",
    name: "账号管理",
    desc: "管理 Bot 账号，包括好友申请、邀群管理、修改头像和昵称、群发消息、发说说",
    trigger: "command",
    methods: "Commands: /修改昵称 ; /修改头像 ; /申请列表 ; /同意 ; /拒绝 ; /发布群消息 (aliases: 发送群消息) ; /发布说说 (aliases: 发说说) ; /更新空间Cookie (aliases: 获取空间Cookie)",
  },
  {
    id: "ai_painting",
    name: "ai_painting",
    desc: "-",
    trigger: "command",
    methods: "Commands: /绘图 (aliases: 画图, ai画图) ; /绘图黑名单 ; /绘图白名单 ; /查询余额 (aliases: 额度, 查询额度, ai余额)",
  },
  {
    id: "astroblog",
    name: "astro-blog",
    desc: "通过 GitHub 管理 Astro 博客，支持文章管理、小事记录及图片自动 Base64 渲染",
    trigger: "command",
    methods: "Commands: /blog",
  },
  {
    id: "bili_bangumi",
    name: "B站追番查询",
    desc: "查询B站用户的追番列表",
    trigger: "command",
    methods: "Usage: 追番 [用户名/UID]\nCommands: /追番 (aliases: 查追番, b站追番)",
  },
  {
    id: "bot_manager",
    name: "Bot管理",
    desc: "Bot综合管理：上下线提醒、重启关闭、插件管理、账号设置、群发消息、空间说说及群务监控",
    trigger: "command, notice, scheduler",
    methods: "Commands: /重启 ; /关闭 ; /插件列表 (aliases: 查看插件) ; /告诉管理员 ; /禁言 ; /解禁 (aliases: 解除禁言) ; /踢出 (aliases: 踢人) ; /确认 ; /取消 (aliases: 撤销) ; /插件帮助 (aliases: 帮助, help) ; /商店查询 ; /安装插件 ; /更新插件 ; /同意申请 ; /本群禁用 (aliases: 禁用插件) ; /本群启用 (aliases: 启用插件) ; /本群禁用列表 (aliases: 群禁用列表) ; /修改昵称 ; /修改头像 ; /申请列表 ; /拒绝申请 ; /发布群消息 (aliases: 发送群消息) ; /发布说说 (aliases: 发说说) ; /更新空间Cookie (aliases: 获取空间Cookie)",
  },
  {
    id: "cs_pro",
    name: "CS Pro & Stats",
    desc: "CS职业选手查询、5E/完美/官匹战绩、绑定与每把详细战绩分析",
    trigger: "command",
    methods: "Commands: /cs查询 (aliases: cs选手, csplayer) ; /cs赛事 (aliases: 赛事, csgo赛事, cs2赛事) ; /5e (aliases: 5e战绩, 5e查询, cs战绩) ; /pw (aliases: pw战绩, pw查询, 完美战绩) ; /pwlogin (aliases: 完美登录) ; /bind (aliases: 绑定, 添加, 绑定用户, 添加用户) ; /match (aliases: 战绩, 查询战绩)",
  },
  {
    id: "daily_tools",
    name: "日常工具箱",
    desc: "Epic免费游戏、发病、KFC、冷笑话等日常小工具",
    trigger: "command",
    methods: "Commands: /epic (aliases: epic免费游戏, 喜加一) ; /发病 ; /疯狂星期四 (aliases: kfc, 肯德基) ; /冷笑话 (aliases: 讲个笑话) ; /黄金价格 (aliases: 金价, 今日金价) ; /健康分析 (aliases: 身体健康分析, 健康指数)",
  },
  {
    id: "daily_waifu",
    name: "daily_waifu",
    desc: "-",
    trigger: "command, message",
    methods: "Commands: /菜单 (aliases: 帮助, menu, help) ; /抽卡 (aliases: ck) ; /我的后宫 ; /离婚 ; /交换 ; /最爱 ; /许愿 ; /愿望单 ; /删除许愿 ; /查询 ; /搜索 ; /添加图片 ; /清除图片 ; /强制离婚 ; /清理后宫 ; /系统设置 ; /刷新 ; /群排行 ; /终极轮回",
  },
  {
    id: "drift_bottle",
    name: "漂流瓶",
    desc: "支持扔、捡漂流瓶，跨群互通",
    trigger: "command",
    methods: "Usage: 扔漂流瓶 [内容] : 扔出一个漂流瓶（支持图片、文字、表情）\n    捡漂流瓶 : 随机捡到一个漂流瓶\n    查看漂流瓶 [页码] : 管理员分页查看所有漂流瓶（默认第1页，每页20个）\n    删除漂流瓶 [编号] : 管理员删除指定编号的漂流瓶\nCommands: /扔漂流瓶 ; /捡漂流瓶 ; /查看漂流瓶 (aliases: 查看所有漂流瓶, 漂流瓶列表) ; /删除漂流瓶",
  },
  {
    id: "earthquake_monitor",
    name: "灾害监测",
    desc: "地震/台风/天气预警/海啸多灾种监测推送",
    trigger: "command, scheduler",
    methods: "Commands: /地震推送 ; /台风推送 ; /天气预警推送 ; /海啸推送 ; /历史地震 (aliases: 地震历史, 最近地震) ; /地震源状态 (aliases: 地震数据源, 地震源) ; /当前台风 (aliases: 台风动态, 最新台风) ; /当前天气预警 (aliases: 天气预警, 最新天气预警) ; /当前海啸 (aliases: 海啸动态, 最新海啸)",
  },
  {
    id: "gemini_chat",
    name: "Gemini 问答",
    desc: "基于 Google Gemini 模型的智能问答插件，支持联网搜索和图片输入",
    trigger: "command",
    methods: "Usage: 指令：gemini / 问 / 提问 [内容]\nCommands: /gemini_whitelist_add (aliases: gemini添加白名单) ; /gemini_whitelist_remove (aliases: gemini移除白名单) ; /gemini (aliases: 问, 提问)",
  },
  {
    id: "group_analytics",
    name: "群活跃报告",
    desc: "统计群聊活跃度并生成可视化报告",
    trigger: "command, message",
    methods: "Usage: /活跃报告 [今日/本周]\nCommands: /活跃报告 (aliases: 水群榜, 活跃榜)",
  },
  {
    id: "guess_song",
    name: "猜歌游戏",
    desc: "从网易云获取歌词进行猜歌",
    trigger: "command, scheduler",
    methods: "Usage: 猜歌: 开始游戏\\n点歌 <歌名>: 搜索并点歌\\n下载歌曲 <歌名>: 下载歌曲文件\\n添加歌曲 <歌名> <歌手>: 添加歌曲到库\\n导入歌曲 <网易云链接/ID>: 从网易云导入歌曲或歌单\\n删除歌曲 <歌名>: 从库中删除歌曲\\n歌曲列表: 查看库中所有歌曲\nCommands: /猜歌 ; /添加歌曲 ; /删除歌曲 ; /导入歌曲 ; /歌曲列表 ; /查询歌词 (aliases: 查歌词, 歌词) ; /点歌 ; /下载歌曲 (aliases: 下载) ; /猜歌帮助 (aliases: 猜歌指令, 猜歌菜单)",
  },
  {
    id: "keyword",
    name: "关键词回复",
    desc: "支持精确和模糊匹配的关键词回复插件",
    trigger: "command, message",
    methods: "Usage: 使用 JSON 存储关键词及回复内容\nCommands: /添加关键词 ; /查看关键词 ; /删除关键词",
  },
  {
    id: "lovelive_gacha",
    name: "lovelive_gacha",
    desc: "-",
    trigger: "command",
    methods: "Commands: /lovelive单抽 (aliases: ll单抽, LL单抽) ; /lovelive十连 (aliases: ll十连, LL十连)",
  },
  {
    id: "lovelive_schedule",
    name: "LoveLive日程爬虫",
    desc: "定时爬取 ll-ch.com 的 LoveLive 活动日程并生成精美卡片",
    trigger: "command, scheduler",
    methods: "Usage: 使用命令：ll日程, ll访华, ll开启推送, ll关闭推送\nCommands: /ll日程 (aliases: lovelive日程, ll日程表) ; /ll全部日程 (aliases: ll日程全部, lovelive全部日程) ; /ll访华 (aliases: 声优访华, ll访华日程) ; /ll开启推送 (aliases: ll启用推送, ll加入白名单) ; /ll关闭推送 (aliases: ll停用推送, ll退出白名单)",
  },
  {
    id: "personification",
    name: "群聊拟人",
    desc: "实现拟人化的群聊回复，支持好感度系统及自主回复决策",
    trigger: "command, message, notice, scheduler",
    methods: "Commands: /申请白名单 ; /同意白名单 ; /拒绝白名单 ; /添加白名单 ; /移除白名单 ; /群好感 (aliases: 群好感度) ; /设置群好感 ; /设置人设 ; /查看人设 ; /重置人设 ; /开启拟人 ; /关闭拟人 ; /开启表情包 ; /关闭表情包 ; /拟人作息 ; /拟人配置 ; /永久拉黑 ; /取消永久拉黑 ; /永久黑名单列表 ; /发个说说 ; /拟人联网 ; /拟人主动消息 ; /清除记忆 (aliases: 清除上下文, 重置记忆) ; /学习群聊风格 (aliases: 分析群聊风格) ; /查看群聊风格 (aliases: 群聊风格)",
  },
  {
    id: "pixiv",
    name: "Pixiv 助手",
    desc: "提供 Pixiv 插画搜索、画师推荐、作品关注、定时推送及群聊黑名单管理功能",
    trigger: "command, scheduler",
    methods: "Commands: /pixiv登录 (aliases: pixiv login) ; /pixiv黑名单 (aliases: pixiv blacklist, 黑名单管理) ; /pixiv订阅 (aliases: pixiv subscription) ; /pixiv日榜订阅",
  },
  {
    id: "resource_search",
    name: "资源搜索",
    desc: "-",
    trigger: "command",
    methods: "Commands: /资源搜索 (aliases: 搜资源, 找资源, 磁力搜索)",
  },
  {
    id: "screenshot",
    name: "网页快照",
    desc: "将网页转换为图片",
    trigger: "command",
    methods: "Usage: /截图 [URL]\nCommands: /截图 (aliases: screenshot, webshot)",
  },
  {
    id: "sign_in",
    name: "签到系统",
    desc: "支持签到、好感度查询及设置的插件",
    trigger: "command, scheduler",
    methods: "Usage: 基础功能：\n签到: 每日签到获取金币/好感度/行动值\n查询好感度: 查看个人信息卡片\n好感度排行: 查看群内好感度排名\n商店: 购买道具\n背包: 查看持有道具\n使用 <道具名>: 使用道具\n打工: 消耗打工次数赚取金币\n行动: 消耗行动值增加好感度\n发红包 <金额> <数量>: 发送拼手气红包\n发世界红包 <金额> <数量>: 发送全服红包\n抢红包: 领取红包\n偷窃 <@某人>: 消耗1行动值尝试偷窃金币（慎用！）\n银行 [存/取] <金额>: 存取金币赚利息\n改名 <新称号>: 使用改名卡修改称号\n转账 <@某人/QQ号> <金额>: 给群友转账\n富豪榜: 查看金币排行榜\n决斗 <@某人>: 消耗2行动值发起PK\n掷骰子 [赌注]: 与真寻比大小赚金币\n买彩票: 20金币一张，次日开奖\n彩票池: 查看彩票奖池信息\nCommands: /签到 ; /好感度排行 (aliases: 好感度榜, 排行榜) ; /查询好感度 (aliases: 好感度, 我的好感度, 个人信息) ; /设置好感度 ; /设置金币 ; /设置行动值 ; /行动 (aliases: 进行行动, 互动) ; /商店 (aliases: 绪山商店, 绪山百货) ; /购买 ; /使用 (aliases: 使用道具, 吃, 穿, 玩) ; /背包 (aliases: 我的背包, 仓库) ; /打工 (aliases: 工, 上班) ; /发红包 ; /发世界红包 ; /抢红包 ; /偷窃 (aliases: 抢劫, 偷) ; /银行 (aliases: 真寻银行) ; /银行明细 (aliases: 账单, 流水, 余额明细) ; /改名 (aliases: 修改称号, 设置称号) ; /添加红包黑名单 ; /移除红包黑名单 ; /红包黑名单 ; /转账 ; /富豪榜 (aliases: 金币榜, 富豪排行) ; /决斗 (aliases: PK, 挑战) ; /掷骰子 (aliases: 摇骰子, 比大小) ; /买彩票 ; /彩票池 (aliases: 奖池) ; /银行排行榜 (aliases: 存款榜, 银行榜)",
  },
  {
    id: "steam_info",
    name: "steam_info",
    desc: "-",
    trigger: "command",
    methods: "Commands: /steam (aliases: steam状态, steam最近, steam游戏)",
  },
  {
    id: "touchgal",
    name: "TouchGal 查询",
    desc: "TouchGal Galgame 搜索与下载资源查询",
    trigger: "command",
    methods: "Commands: /查询gal ; /下载gal ; /gal nsfw",
  },
  {
    id: "universal_parser",
    name: "Link Share Parser Alconna",
    desc: "Parse shared links from Kuaishou, Weibo, Xiaohongshu, XiaoHeiHe, YouTube, TikTok, Twitter, AcFun and NGA",
    trigger: "scheduler",
    methods: "Passive plugin: triggered by message/notice/scheduler without explicit command.",
  },
  {
    id: "user_analysis",
    name: "用户成分分析",
    desc: "记录用户发言并使用 AI 分析其成分",
    trigger: "command, message",
    methods: "Usage: 成分分析 [@用户/QQ号]\nCommands: /成分分析 (aliases: 查成分, 分析用户)",
  },
  {
    id: "user_persona",
    name: "用户画像",
    desc: "记录用户聊天记录并生成用户画像",
    trigger: "command, message",
    methods: "Usage: 查看画像 [@用户/QQ号]\\n刷新画像 [@用户/QQ号]\nCommands: /查看画像 ; /刷新画像",
  },
  {
    id: "web_console",
    name: "Web 控制台",
    desc: "通过浏览器查看和发送消息",
    trigger: "command, message",
    methods: "Usage: 访问 /web_console 查看\nCommands: /web控制台 (aliases: console, 控制台) ; /web密码 (aliases: 修改web密码)",
  },
  {
    id: "zongjie",
    name: "群聊总结",
    desc: "-",
    trigger: "command",
    methods: "Commands: /总结 (aliases: zongjie, 群总结) ; /总结模型 (aliases: list_models)",
  }
]

export default function BotDocsPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1>Bot Plugin Usage</h1>
      <p>
        Source: <code>D:\bot\nbplugin\plugin</code> ({pluginDocs.length} plugins scanned from source).
        <br />
        Generic helper command: <code>/plugin_help [name|index]</code>
      </p>

      <div className="not-prose relative w-full overflow-auto my-8">
        <table className="w-full caption-bottom text-sm border-collapse">
          <thead className="[&_tr]:border-b">
            <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted text-left">
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Plugin Dir</th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Plugin Name</th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Description</th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground">Trigger</th>
              <th className="h-12 px-4 align-middle font-medium text-muted-foreground w-[42%]">Usage</th>
            </tr>
          </thead>
          <tbody className="[&_tr:last-child]:border-0">
            {pluginDocs.map((row) => (
              <tr key={row.id} className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted odd:bg-muted/20 align-top">
                <td className="p-4 align-top font-mono text-xs">{row.id}</td>
                <td className="p-4 align-top font-medium">{row.name}</td>
                <td className="p-4 align-top whitespace-pre-wrap">{row.desc}</td>
                <td className="p-4 align-top">{row.trigger}</td>
                <td className="p-4 align-top whitespace-pre-wrap leading-6">{row.methods}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
