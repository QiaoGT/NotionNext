// 注:process.env.XX是Vercel的环境变量，配置方式见：https://docs.tangly1024.com/article/how-to-config-notion-next#c4768010ae7d44609b744e79e2f9959a
const BLOG = {
  // Important page_id！！！Duplicate Template from  https://www.notion.so/tanghh/02ab3b8678004aa69e9e415905ef32a5
  NOTION_PAGE_ID:
    process.env.NOTION_PAGE_ID ||
    'd957864d275f4adf9945a0d0fe4aed31',
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false, // 伪静态路径，开启后所有文章URL都以 .html 结尾。
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 5, // 更新内容缓存间隔 单位(秒)；即每个页面有5秒的纯静态期、此期间无论多少次访问都不会抓取notion数据；调大该值有助于节省Vercel资源、同时提升访问速率，但也会使文章更新有延迟。
  THEME: process.env.NEXT_PUBLIC_THEME || 'matery', // 当前主题，在themes文件夹下可找到所有支持的主题；主题名称就是文件夹名，例如 example,fukasawa,gitbook,heo,hexo,landing,matery,medium,next,nobelium,plog,simple
  THEME_SWITCH: process.env.NEXT_PUBLIC_THEME_SWITCH || false, // 是否显示切换主题按钮
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN', // e.g 'zh-CN','en-US'  see /lib/lang.js for more.
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2023, // e.g if leave this empty, current year will be used.
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'auto', // ['light', 'dark', 'auto'], // light 日间模式 ， dark夜间模式， auto根据时间和主题自动夜间模式
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [19, 7], // 夜间模式起至时间，false时关闭根据时间自动切换夜间模式

  TAG_SORT_BY_COUNT: false, // 标签是否按照文章数量倒序排列，文章多的标签排在前。
  IS_TAG_COLOR_DISTINGUISHED:
    process.env.NEXT_PUBLIC_IS_TAG_COLOR_DISTINGUISHED === 'true' || true, // 对于名称相同的tag是否区分tag的颜色

  // 3.14.1版本后，欢迎语在此配置，英文逗号隔开 ,  即可支持多个欢迎语打字效果。
  GREETING_WORDS:
    process.env.NEXT_PUBLIC_GREETING_WORDS ||
    'Hi，欢迎你的到来🎉',

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true, // 支持Menu 类型，从3.12.0版本起，各主题将逐步支持灵活的二级菜单配置，替代了原来的Page类型，此配置是试验功能、默认关闭。

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || '✨智桥•Share✨', // 您的昵称 例如 tangly1024
  BIO: process.env.NEXT_PUBLIC_BIO || '爱探索，爱分享📚', // 作者简介
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://wobshare.us.kg/', // 网站地址
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || '智桥分享, 博客', // 网站关键词 英文逗号隔开

  // 社交链接，不需要可留空白，例如 CONTACT_WEIBO:''
  CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'wob@wobshare.us.kg', // 邮箱地址 例如mail@tangly1024.com
  CONTACT_WEIBO: process.env.NEXT_PUBLIC_CONTACT_WEIBO || '', // 你的微博个人主页
  CONTACT_TWITTER: process.env.NEXT_PUBLIC_CONTACT_TWITTER || 'https://x.com/', // 你的twitter个人主页
  CONTACT_GITHUB: process.env.NEXT_PUBLIC_CONTACT_GITHUB || 'https://github.com/', // 你的github个人主页 例如 https://github.com/tangly1024
  CONTACT_TELEGRAM: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || '', // 你的telegram 地址 例如 https://t.me/tangly_1024
  CONTACT_LINKEDIN: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN || '', // 你的linkedIn 首页
  CONTACT_INSTAGRAM: process.env.NEXT_PUBLIC_CONTACT_INSTAGRAM || 'https://www.instagram.com/', // 您的instagram地址
  CONTACT_BILIBILI: process.env.NEXT_PUBLIC_CONTACT_BILIBILI || 'https://www.bilibili.com/', // B站主页
  CONTACT_YOUTUBE: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE || 'https://www.youtube.com/', // Youtube主页
  CONTACT_XIAOHONGSHU: process.env.NEXT_PUBLIC_CONTACT_XIAOHONGSHU || '', // 小红书主页
  CONTACT_ZHISHIXINGQIU: process.env.NEXT_PUBLIC_CONTACT_ZHISHIXINGQIU || '', // 知识星球
  CONTACT_WEHCHAT_PUBLIC: process.env.NEXT_PUBLIC_CONTACT_WEHCHAT_PUBLIC || '', // 微信公众号 格式：https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=【xxxxxx】==#wechat_redirect

  NOTION_HOST: process.env.NEXT_PUBLIC_NOTION_HOST || 'https://www.notion.so', // Notion域名，您可以选择用自己的域名进行反向代理，如果不懂得什么是反向代理，请勿修改此项

  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/publicfavicon.ico', // blog favicon 配置, 默认使用 /public/favicon.ico，支持在线图片，如 https://img.imesong.com/favicon.png

  IMAGE_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMAGE_COMPRESS_WIDTH || 800, // 图片压缩宽度默认值，作用于博客封面和文章内容 越小加载图片越快
  IMAGE_ZOOM_IN_WIDTH: process.env.NEXT_PUBLIC_IMAGE_ZOOM_IN_WIDTH || 1200, // 文章图片点击放大后的画质宽度，不代表在网页中的实际展示宽度
  RANDOM_IMAGE_URL: process.env.NEXT_PUBLIC_RANDOM_IMAGE_URL || '', // 随机图片API,如果未配置下面的关键字，主页封面，头像，文章封面图都会被替换为随机图片
  RANDOM_IMAGE_REPLACE_TEXT:
    process.env.NEXT_PUBLIC_RANDOM_IMAGE_NOT_REPLACE_TEXT ||
    'images.unsplash.com', // 触发替换图片的 url 关键字(多个支持用英文逗号分开)，只有图片地址中包含此关键字才会替换为上方随机图片url
  // eg: images.unsplash.com(notion图床的所有图片都会替换),如果你在 notion 里已经添加了一个随机图片 url，恰巧那个服务跑路或者挂掉，想一键切换所有配图可以将该 url 配置在这里
  // 默认下会将你上传到 notion的主页封面图和头像也给替换，建议将主页封面图和头像放在其他图床，在 notion 里配置 link 即可。

  // START ************网站字体*****************
  // ['font-serif','font-sans'] 两种可选，分别是衬线和无衬线: 参考 https://www.jianshu.com/p/55e410bd2115
  // 后面空格隔开的font-light的字体粗细，留空是默认粗细；参考 https://www.tailwindcss.cn/docs/font-weight
  FONT_STYLE: process.env.NEXT_PUBLIC_FONT_STYLE || 'font-serif',
  // 字体CSS 例如 https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css
  FONT_URL: [
    // 'https://npm.elemecdn.com/lxgw-wenkai-webfont@1.6.0/style.css',
    'https://fonts.googleapis.com/css?family=Bitter&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@300&display=swap',
    'https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300&display=swap'
  ],
  // 无衬线字体 例如'"LXGW WenKai"'
  FONT_SANS: [
    // '"LXGW WenKai"',
    '"PingFang SC"',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Hiragino Sans GB"',
    '"Microsoft YaHei"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Segoe UI"',
    '"Noto Sans SC"',
    'HarmonyOS_Regular',
    '"Helvetica Neue"',
    'Helvetica',
    '"Source Han Sans SC"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"'
  ],
  // 衬线字体 例如'"LXGW WenKai"'
  FONT_SERIF: [
    // '"LXGW WenKai"',
    'Bitter',
    '"Noto Serif SC"',
    'SimSun',
    '"Times New Roman"',
    'Times',
    'serif',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
    '"Apple Color Emoji"'
  ],
  FONT_AWESOME:
    process.env.NEXT_PUBLIC_FONT_AWESOME_PATH ||
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css', // font-awesome 字体图标地址; 可选 /css/all.min.css ， https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/6.0.0/css/all.min.css

  // END ************网站字体*****************

  // 路径和组件映射，不同路径分别展示主题的什么组件
  LAYOUT_MAPPINGS: {
    '-1': 'LayoutBase',
    '/': 'LayoutIndex',
    '/archive': 'LayoutArchive',
    '/page/[page]': 'LayoutPostList',
    '/category/[category]': 'LayoutPostList',
    '/category/[category]/page/[page]': 'LayoutPostList',
    '/tag/[tag]': 'LayoutPostList',
    '/tag/[tag]/page/[page]': 'LayoutPostList',
    '/search': 'LayoutSearch',
    '/search/[keyword]': 'LayoutSearch',
    '/search/[keyword]/page/[page]': 'LayoutSearch',
    '/404': 'Layout404',
    '/tag': 'LayoutTagIndex',
    '/category': 'LayoutCategoryIndex',
    '/[prefix]': 'LayoutSlug',
    '/[prefix]/[slug]': 'LayoutSlug',
    '/[prefix]/[slug]/[...suffix]': 'LayoutSlug',
    '/auth/result': 'LayoutAuth',
    '/sign-in/[[...index]]': 'LayoutSignIn',
    '/sign-up/[[...index]]': 'LayoutSignUp'
  },

  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true, // 是否允许复制页面内容 默认允许，如果设置为false、则全栈禁止复制内容。
  // 自定义右键菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU || true, // 自定义右键菜单，覆盖系统菜单
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_SWITCH ||
    false, // 是否显示切换主题
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_DARK_MODE || true, // 是否显示深色模式
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_SHARE_LINK || true, // 是否显示分享链接
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_RANDOM_POST || true, // 是否显示随机博客
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_CATEGORY || true, // 是否显示分类
  CUSTOM_RIGHT_CLICK_CONTEXT_MENU_TAG:
    process.env.NEXT_PUBLIC_CUSTOM_RIGHT_CLICK_CONTEXT_MENU_THEME_TAG || true, // 是否显示标签

  // 自定义外部脚本，外部样式
  CUSTOM_EXTERNAL_JS: [''], // e.g. ['http://xx.com/script.js','http://xx.com/script.js']
  CUSTOM_EXTERNAL_CSS: [''], // e.g. ['http://xx.com/style.css','http://xx.com/style.css']

  // 侧栏布局 是否反转(左变右,右变左) 已支持主题: hexo next medium fukasawa example
  LAYOUT_SIDEBAR_REVERSE:
    process.env.NEXT_PUBLIC_LAYOUT_SIDEBAR_REVERSE || false,

  // 一个小插件展示你的facebook fan page~ @see https://tw.andys.pro/article/add-facebook-fanpage-notionnext
  FACEBOOK_PAGE_TITLE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_TITLE || null, // 邊欄 Facebook Page widget 的標題欄，填''則無標題欄 e.g FACEBOOK 粉絲團'
  FACEBOOK_PAGE: process.env.NEXT_PUBLIC_FACEBOOK_PAGE || null, // Facebook Page 的連結 e.g https://www.facebook.com/tw.andys.pro
  FACEBOOK_PAGE_ID: process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID || '', // Facebook Page ID 來啟用 messenger 聊天功能
  FACEBOOK_APP_ID: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || '', // Facebook App ID 來啟用 messenger 聊天功能 获取: https://developers.facebook.com/

  BEI_AN: process.env.NEXT_PUBLIC_BEI_AN || '', // 备案号 闽ICP备XXXXXXX

  // START********代码相关********
  // PrismJs 代码相关
  PRISM_JS_PATH: 'https://npm.elemecdn.com/prismjs@1.29.0/components/',
  PRISM_JS_AUTO_LOADER:
    'https://npm.elemecdn.com/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js',

  // 代码主题 @see https://github.com/PrismJS/prism-themes
  PRISM_THEME_PREFIX_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_PREFIX_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.css', // 代码块默认主题
  PRISM_THEME_SWITCH: process.env.NEXT_PUBLIC_PRISM_THEME_SWITCH || true, // 是否开启浅色/深色模式代码主题切换； 开启后将显示以下两个主题
  PRISM_THEME_LIGHT_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_LIGHT_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-solarizedlight.css', // 浅色模式主题
  PRISM_THEME_DARK_PATH:
    process.env.NEXT_PUBLIC_PRISM_THEME_DARK_PATH ||
    'https://cdn.jsdelivr.net/npm/prismjs@1.29.0/themes/prism-okaidia.min.css', // 深色模式主题

  CODE_MAC_BAR: process.env.NEXT_PUBLIC_CODE_MAC_BAR || true, // 代码左上角显示mac的红黄绿图标
  CODE_LINE_NUMBERS: process.env.NEXT_PUBLIC_CODE_LINE_NUMBERS || false, // 是否显示行号
  CODE_COLLAPSE: process.env.NEXT_PUBLIC_CODE_COLLAPSE || true, // 是否支持折叠代码框
  CODE_COLLAPSE_EXPAND_DEFAULT:
    process.env.NEXT_PUBLIC_CODE_COLLAPSE_EXPAND_DEFAULT || true, // 折叠代码默认是展开状态

  // END********代码相关********

  // Mermaid 图表CDN
  MERMAID_CDN:
    process.env.NEXT_PUBLIC_MERMAID_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/mermaid/10.2.4/mermaid.min.js', // CDN
  // QRCodeCDN
  QR_CODE_CDN:
    process.env.NEXT_PUBLIC_QR_CODE_CDN ||
    'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js',

  BACKGROUND_LIGHT: '#eeeeee', // use hex value, don't forget '#' e.g #fffefc
  BACKGROUND_DARK: '#000000', // use hex value, don't forget '#'
  SUB_PATH: '', // leave this empty unless you want to deploy in a folder

  POST_SHARE_BAR_ENABLE: process.env.NEXT_PUBLIC_POST_SHARE_BAR || 'true', // 文章分享功能 ，将在底部显示一个分享条
  POSTS_SHARE_SERVICES:
    process.env.NEXT_PUBLIC_POST_SHARE_SERVICES ||
    'link,wechat,qq,weibo,email,facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin', // 分享的服務，按顺序显示,逗号隔开
  // 所有支持的分享服务：link(复制链接),wechat(微信),qq,weibo(微博),email(邮件),facebook,twitter,telegram,messenger,line,reddit,whatsapp,linkedin,vkshare,okshare,tumblr,livejournal,mailru,viber,workplace,pocket,instapaper,hatena

  // 文章URL前缀
  POST_URL_PREFIX: process.env.NEXT_PUBLIC_POST_URL_PREFIX ?? '',
  // POST类型文章的默认路径前缀，例如默认POST类型的路径是  /article/[slug]
  // 如果此项配置为 '' 空， 则文章将没有前缀路径
  // 支援類似 WP 可自訂文章連結格式的功能：https://wordpress.org/documentation/article/customize-permalinks/，目前只先實作 %year%/%month%/%day%
  // 例：如想連結改成前綴 article + 時間戳記，可變更為： 'article/%year%/%month%/%day%'

  POST_LIST_STYLE: process.env.NEXT_PUBLIC_POST_LIST_STYLE || 'scroll', // ['page','scroll] 文章列表样式:页码分页、单页滚动加载
  POST_LIST_PREVIEW: process.env.NEXT_PUBLIC_POST_PREVIEW || 'false', //  是否在列表加载文章预览
  POST_PREVIEW_LINES: process.env.NEXT_PUBLIC_POST_POST_PREVIEW_LINES || 12, // 预览博客行数
  POST_RECOMMEND_COUNT: process.env.NEXT_PUBLIC_POST_RECOMMEND_COUNT || 6, // 推荐文章数量
  POSTS_PER_PAGE: process.env.NEXT_PUBLIC_POST_PER_PAGE || 12, // post counts per page
  POSTS_SORT_BY: process.env.NEXT_PUBLIC_POST_SORT_BY || 'notion', // 排序方式 'date'按时间,'notion'由notion控制

  POST_WAITING_TIME_FOR_404:
    process.env.NEXT_PUBLIC_POST_WAITING_TIME_FOR_404 || '8', // 文章加载超时时间，单位秒；超时后跳转到404页面

  ALGOLIA_APP_ID: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || null, // 在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_ADMIN_APP_KEY: process.env.ALGOLIA_ADMIN_APP_KEY || null, // 管理后台的KEY，不要暴露在代码中，在这里查看 https://dashboard.algolia.com/account/api-keys/
  ALGOLIA_SEARCH_ONLY_APP_KEY:
    process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_ONLY_APP_KEY || null, // 客户端搜索用的KEY
  ALGOLIA_INDEX: process.env.NEXT_PUBLIC_ALGOLIA_INDEX || null, // 在Algolia中创建一个index用作数据库
  //   ALGOLIA_RECREATE_DATA: process.env.ALGOLIA_RECREATE_DATA || process.env.npm_lifecycle_event === 'build', // 为true时重新构建索引数据; 默认在build时会构建

  PREVIEW_CATEGORY_COUNT: 16, // 首页最多展示的分类数量，0为不限制
  PREVIEW_TAG_COUNT: 16, // 首页最多展示的标签数量，0为不限制

  POST_TITLE_ICON: process.env.NEXT_PUBLIC_POST_TITLE_ICON || true, // 是否显示标题icon
  POST_DISABLE_GALLERY_CLICK:
    process.env.NEXT_PUBLIC_POST_DISABLE_GALLERY_CLICK || false, // 画册视图禁止点击，方便在友链页面的画册插入链接

  //   ********动态特效相关********
  // 鼠标点击烟花特效
  FIREWORKS: process.env.NEXT_PUBLIC_FIREWORKS || true, // 开关
  // 烟花色彩，感谢 https://github.com/Vixcity 提交的色彩
  FIREWORKS_COLOR: [
    '255, 20, 97',
    '24, 255, 146',
    '90, 135, 255',
    '251, 243, 140'
  ],

  // 鼠标跟随特效
  MOUSE_FOLLOW: process.env.NEXT_PUBLIC_MOUSE_FOLLOW || true, // 开关
  // 这两个只有在鼠标跟随特效开启时才生效
  // 鼠标类型 1：路劲散点 2：下降散点 3：上升散点 4：边缘向鼠标移动散点 5：跟踪转圈散点 6：路径线条 7：聚集散点 8：聚集网格 9：移动网格 10：上升粒子 11：转圈随机颜色粒子 12：圆锥放射跟随蓝色粒子
  MOUSE_FOLLOW_EFFECT_TYPE: 11, // 1-12
  MOUSE_FOLLOW_EFFECT_COLOR: '#ef672a', // 鼠标点击特效颜色 #xxxxxx 或者 rgba(r,g,b,a)

  // 樱花飘落特效
  SAKURA: process.env.NEXT_PUBLIC_SAKURA || true, // 开关
  // 漂浮线段特效
  NEST: process.env.NEXT_PUBLIC_NEST || false, // 开关
  // 动态彩带特效
  FLUTTERINGRIBBON: process.env.NEXT_PUBLIC_FLUTTERINGRIBBON || false, // 开关
  // 静态彩带特效
  RIBBON: process.env.NEXT_PUBLIC_RIBBON || false, // 开关
  // 星空雨特效 黑夜模式才会生效
  STARRY_SKY: process.env.NEXT_PUBLIC_STARRY_SKY || true, // 开关

  //   ********挂件组件相关********
  // AI 文章摘要生成 @see https://docs_s.tianli0.top/
  TianliGPT_CSS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_CSS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.css',
  TianliGPT_JS:
    process.env.NEXT_PUBLIC_TIANLI_GPT_JS ||
    'https://cdn1.tianli0.top/gh/zhheo/Post-Abstract-AI@0.15.2/tianli_gpt.js',
  TianliGPT_KEY: process.env.NEXT_PUBLIC_TIANLI_GPT_KEY || '',

  // Chatbase 是否显示chatbase机器人 https://www.chatbase.co/
  CHATBASE_ID: process.env.NEXT_PUBLIC_CHATBASE_ID || null,
  // WebwhizAI 机器人 @see https://github.com/webwhiz-ai/webwhiz
  WEB_WHIZ_ENABLED: process.env.NEXT_PUBLIC_WEB_WHIZ_ENABLED || false, // 是否显示
  WEB_WHIZ_BASE_URL:
    process.env.NEXT_PUBLIC_WEB_WHIZ_BASE_URL || 'https://api.webwhiz.ai', // 可以自建服务器
  WEB_WHIZ_CHAT_BOT_ID: process.env.NEXT_PUBLIC_WEB_WHIZ_CHAT_BOT_ID || null, // 在后台获取ID
  DIFY_CHATBOT_ENABLED: process.env.NEXT_PUBLIC_DIFY_CHATBOT_ENABLED || false,
  DIFY_CHATBOT_BASE_URL: process.env.NEXT_PUBLIC_DIFY_CHATBOT_BASE_URL || '',
  DIFY_CHATBOT_TOKEN: process.env.NEXT_PUBLIC_DIFY_CHATBOT_TOKEN || '',
  // 悬浮挂件
  WIDGET_PET: process.env.NEXT_PUBLIC_WIDGET_PET || true, // 是否显示宠物挂件
  WIDGET_PET_LINK:
    process.env.NEXT_PUBLIC_WIDGET_PET_LINK ||
    'https://imuncle.github.io/live2d/model/Violet/14.json', // 挂件模型地址 @see https://github.com/xiazeyu/live2d-widget-models
  WIDGET_PET_SWITCH_THEME:
    process.env.NEXT_PUBLIC_WIDGET_PET_SWITCH_THEME || false, // 点击宠物挂件切换博客主题

  // 音乐播放插件
  MUSIC_PLAYER: process.env.NEXT_PUBLIC_MUSIC_PLAYER || true, // 是否使用音乐播放插件
  MUSIC_PLAYER_VISIBLE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_VISIBLE || true, // 是否在左下角显示播放和切换，如果使用播放器，打开自动播放再隐藏，就会以类似背景音乐的方式播放，无法取消和暂停
  MUSIC_PLAYER_AUTO_PLAY:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_AUTO_PLAY || false, // 是否自动播放，不过自动播放时常不生效（移动设备不支持自动播放）
  MUSIC_PLAYER_LRC_TYPE: process.env.NEXT_PUBLIC_MUSIC_PLAYER_LRC_TYPE || '0', // 歌词显示类型，可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）（前提是有配置歌词路径，对 meting 无效）
  MUSIC_PLAYER_CDN_URL:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_CDN_URL ||
    'https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/aplayer/1.10.1/APlayer.min.js',
  MUSIC_PLAYER_ORDER: process.env.NEXT_PUBLIC_MUSIC_PLAYER_ORDER || 'random', // 默认播放方式，顺序 list，随机 random
  MUSIC_PLAYER_AUDIO_LIST: [
    // 示例音乐列表。除了以下配置外，还可配置歌词，具体配置项看此文档 https://aplayer.js.org/#/zh-Hans/
    {
      name: '若是月亮还没来',
      artist: '王宇宙Leto / 乔浚丞',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/5d230b8d-f8a4-4e98-a7fd-f18af361f738/%E8%8B%A5%E6%9C%88%E4%BA%AE%E6%B2%A1%E6%9D%A5_(%E8%8B%A5%E6%98%AF%E6%9C%88%E4%BA%AE%E8%BF%98%E6%B2%A1%E6%9D%A5)_-_%E7%8E%8B%E5%AE%87%E5%AE%99Leto%E3%80%81%E4%B9%94%E6%B5%9A%E4%B8%9E.mp3?table=block&id=69535408-6026-4f57-b5f9-645cbc76d59a&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=6ev7-HKKAntvJdDpe9L4IRdvs1evWp7bPfNmhWINRbE&downloadName=%E8%8B%A5%E6%9C%88%E4%BA%AE%E6%B2%A1%E6%9D%A5+%28%E8%8B%A5%E6%98%AF%E6%9C%88%E4%BA%AE%E8%BF%98%E6%B2%A1%E6%9D%A5%29+-+%E7%8E%8B%E5%AE%87%E5%AE%99Leto%E3%80%81%E4%B9%94%E6%B5%9A%E4%B8%9E.mp3',
      cover:
        'https://imgessl.kugou.com/stdmusic/20240122/20240122171638637928.jpg'
    },
    {
      name: '天空没有极限',
      artist: 'G.E.M. 邓紫棋',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/27158680-7653-4733-8db2-76beb2432f08/G.E.M._%E9%82%93%E7%B4%AB%E6%A3%8B_-_%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.mp3?table=block&id=565fa2dc-c87c-4593-bcf5-9b29859e8fe5&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731146400000&signature=yT8JoOToEN4aa3IhfrUU0ypKwnaApLoZom8Ipj6eS7M&downloadName=G.E.M.+%E9%82%93%E7%B4%AB%E6%A3%8B+-+%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.mp3',
      cover:
        'https://imgessl.kugou.com/stdmusic/20220811/20220811174703769289.jpg'
    },
    {
      name: '星空旅行者',
      artist: '亚久津',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/863fd2ea-b086-46bc-b16f-2c356ce57552/%E4%BA%9A%E4%B9%85%E6%B4%A5_-_%E6%98%9F%E7%A9%BA%E6%97%85%E8%A1%8C%E8%80%85.mp3?table=block&id=a3b209c1-f1c8-4731-843a-348de0eb16ce&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=3FohAmgLOD3ZxUj6IljSgLrCwEesqk8S-Mx5jMsZoz4&downloadName=%E4%BA%9A%E4%B9%85%E6%B4%A5+-+%E6%98%9F%E7%A9%BA%E6%97%85%E8%A1%8C%E8%80%85.mp3',
      cover:
        'http://p1.music.126.net/r-pUiyDSZyU3ZiituZXvfw==/109951168229070284.jpg?param=177y177'
    },
    {
      name: '未末(写给00后致以童年)',
      artist: 'SwevenG骨子哥',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/d1e0a354-13db-40af-81fe-fdc2433ad481/SwevenG%E9%AA%A8%E5%AD%90%E5%93%A5_-_%E6%9C%AA%E6%9C%AB(%E5%86%99%E7%BB%9900%E5%90%8E%E8%87%B4%E4%BB%A5%E7%AB%A5%E5%B9%B4).mp3?table=block&id=1cde0036-9330-42e1-85a9-eb3eaebcf6f3&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=j_PoLTHpL12hacjX8LANu991Kr8VN-XBpF58j4fADfA&downloadName=SwevenG%E9%AA%A8%E5%AD%90%E5%93%A5+-+%E6%9C%AA%E6%9C%AB%28%E5%86%99%E7%BB%9900%E5%90%8E%E8%87%B4%E4%BB%A5%E7%AB%A5%E5%B9%B4%29.mp3',
      cover:
        'http://p2.music.126.net/vPCu8b7A5Fabjk5_OyXhHQ==/109951167917209214.jpg?param=130y130'
    },
    {
      name: '遗忘月光',
      artist: '陆杰awr、袁小葳',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/a811f8ae-8025-4a1a-a029-cdac097eeee3/%E9%99%86%E6%9D%B0awr%E3%80%81%E8%A2%81%E5%B0%8F%E8%91%B3_-_%E9%81%97%E5%BF%98%E6%9C%88%E5%85%89.mp3?table=block&id=9996378b-93a2-41b3-a1d5-70fc46e43ad5&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=0QknMeCn8LFAp8SYdZ8JDTMAbUEmn-3pc3Qmg3veKzk&downloadName=%E9%99%86%E6%9D%B0awr%E3%80%81%E8%A2%81%E5%B0%8F%E8%91%B3+-+%E9%81%97%E5%BF%98%E6%9C%88%E5%85%89.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20230602/20230602155531170170.jpg'
    },
    {
      name: '星河回望',
      artist: '余又',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/dadf5fc1-7024-474e-bc85-184a6dd33535/%E4%BD%99%E5%8F%88_-_%E6%98%9F%E6%B2%B3%E5%9B%9E%E6%9C%9B.mp3?table=block&id=d16bc320-5410-4876-94a7-0d58dbd3f0f3&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=tWX8C983zB92oCce58NoR_8BIIRwYLeKBbtilfO9rD8&downloadName=%E4%BD%99%E5%8F%88+-+%E6%98%9F%E6%B2%B3%E5%9B%9E%E6%9C%9B.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20230601/20230601200247533844.jpg'
    },
    {
      name: '如果大雨下一整夜',
      artist: 'Big Cole',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/2ef815b1-72cc-4f97-bbf3-b27fa0ff9564/Big_Cole_-_%E5%A6%82%E6%9E%9C%E5%A4%A7%E9%9B%A8%E4%B8%8B%E4%B8%80%E6%95%B4%E5%A4%9C.mp3?table=block&id=e0d4b257-d2c5-4ebc-b92f-13e2fab37b0f&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=kSvgwOO6jM4DyoaDj2kQHvc-skkaG0FPr5WpMSjfFSo&downloadName=Big+Cole+-+%E5%A6%82%E6%9E%9C%E5%A4%A7%E9%9B%A8%E4%B8%8B%E4%B8%80%E6%95%B4%E5%A4%9C.mp3',
      cover:
        'http://p1.music.126.net/6WcdOzepOepG6qvFBNJFtA==/109951168646936451.jpg?param=177y177'
    },
    {
      name: '遇星 (纯享版)',
      artist: '韩帅（HS）',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/f741421d-97f1-4303-bc1a-c4c8c8c4dd39/%E9%9F%A9%E5%B8%85%EF%BC%88HS%EF%BC%89_-_%E9%81%87%E6%98%9F_(%E7%BA%AF%E4%BA%AB%E7%89%88).mp3?table=block&id=f510bf5d-de1f-405b-bf03-113d3a50e64d&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=d1s8QXU8jvn99z2F8UOGjhsV19UJWZBbU2AMG24tmsA&downloadName=%E9%9F%A9%E5%B8%85%EF%BC%88HS%EF%BC%89+-+%E9%81%87%E6%98%9F+%28%E7%BA%AF%E4%BA%AB%E7%89%88%29.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20230527/20230527163108913497.jpg'
    },
    {
      name: '雨是神的烟花',
      artist: '初月',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/f95f4adf-3255-4ac3-bb97-aaf85149b3c2/%E5%88%9D%E6%9C%88_-_%E9%9B%A8%E6%98%AF%E7%A5%9E%E7%9A%84%E7%83%9F%E8%8A%B1.mp3?table=block&id=03193819-68e4-4daa-8e5a-cfc24197d1a6&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=_MDDHthiNX8uOsjLjwsMfrSquPXEBfHb8lE3wCZIikk&downloadName=%E5%88%9D%E6%9C%88+-+%E9%9B%A8%E6%98%AF%E7%A5%9E%E7%9A%84%E7%83%9F%E8%8A%B1.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20231103/20231103101626830778.jpg'
    },
    {
      name: 'Fool For You',
      artist: 'REBORN',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/6e262efe-7fc5-4f8f-9315-8e5c3a53458a/REBORN_-_Fool_For_You.mp3?table=block&id=3c45e182-5b37-4bbc-ab1f-3a1baad41b03&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=Zc0nwXd6W5PWFYxVTOfSWyeZ2496EeAXMRn6St80hgY&downloadName=REBORN+-+Fool+For+You.mp3',
      cover:
        'http://imge.kugou.com/stdmusic/20220906/20220906131324119988.jpg'
    },
    {
      name: 'ありがとう… (谢谢…)',
      artist: 'KOKIA',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/f32023c3-743e-4cad-a1ac-20a9b8a92905/KOKIA_-_%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86_(%E8%B0%A2%E8%B0%A2).mp3?table=block&id=ab20c709-dd47-4000-ac25-763ad3c717e8&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=f5n_Vmi0T1d82x1ltjgo-h_f27K0D0icYwZmaFVlyPk&downloadName=KOKIA+-+%E3%81%82%E3%82%8A%E3%81%8C%E3%81%A8%E3%81%86%E2%80%A6+%28%E8%B0%A2%E8%B0%A2%E2%80%A6%29.mp3',
      cover:
        'http://p2.music.126.net/Oyai2N1oU4TOAQXitEqlgQ==/1674556209112992.jpg?param=130y130'
    },
    {
      name: '天ノ弱',
      artist: 'こはならむ',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/fcd5d56b-86fa-4a22-9578-01d432803213/%E3%81%93%E3%81%AF%E3%81%AA%E3%82%89%E3%82%80_-_%E5%A4%A9%E3%83%8E%E5%BC%B1_(%E5%A4%A9%E4%B9%8B%E5%BC%B1).mp3?table=block&id=f9d2ef6c-44f6-4759-a5cf-3212e7d6b49d&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=dXZaAqp-7iGghtXdTSoA6PnBwfb5n2Ivxzk3L3voLSM&downloadName=%E3%81%93%E3%81%AF%E3%81%AA%E3%82%89%E3%82%80+-+%E5%A4%A9%E3%83%8E%E5%BC%B1+%28%E5%A4%A9%E4%B9%8B%E5%BC%B1%29.mp3',
      cover:
        'http://p2.music.126.net/SNANZcu5PhfvFvM5Fuq_Rw==/109951167964524207.jpg?param=130y130'
    },
    {
      name: '那个远方',
      artist: '陈楚生',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/c12b7231-9fd0-4380-ae9a-0b96de014efe/%E9%99%88%E6%A5%9A%E7%94%9F_-_%E9%82%A3%E4%B8%AA%E8%BF%9C%E6%96%B9.mp3?table=block&id=e92cd334-bd01-4dd7-a571-9eab8b172fd3&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=WbBMY21bu1j_gFAveP3_bchFJfaBIsV_DrVtNXjuZXo&downloadName=%E9%99%88%E6%A5%9A%E7%94%9F+-+%E9%82%A3%E4%B8%AA%E8%BF%9C%E6%96%B9.mp3',
      cover:
        'http://p2.music.126.net/0OuSHTLwYv237yyGwVlx_A==/3352410953143847.jpg?param=130y130'
    },
    {
      name: 'Da Da Da (甜妹版)',
      artist: '芊芊龍',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/eefc3890-4dce-46db-acbd-1ede0d7d4e65/%E8%8A%8A%E8%8A%8A%E9%BE%8D_-_Da_Da_Da_(%E7%94%9C%E5%A6%B9%E7%89%88)_MQ.mp3?table=block&id=fbeb2779-2dc9-492c-8b81-631e722eaf1e&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=uDQP_wzyFRdzxFOK3CHgwude3TPF-zCQVjEO5d-KOWA&downloadName=%E8%8A%8A%E8%8A%8A%E9%BE%8D+-+Da+Da+Da+%28%E7%94%9C%E5%A6%B9%E7%89%88%29_MQ.mp3',
      cover:
        'https://p2.music.126.net/ifjrMa4g6_oV1pe0ruR53A==/109951169432548463.jpg?param=130y130'
    },
    {
      name: '缺氧',
      artist: '轩姨(相信光)',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/e7e98fb1-6914-416c-a8ea-5c03cee562a5/%E8%BD%A9%E5%A7%A8(%E7%9B%B8%E4%BF%A1%E5%85%89)_-_%E7%BC%BA%E6%B0%A7.mp3?table=block&id=dda30a52-c88d-4058-bcb9-b0cb60580722&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=Jmxe82f5gjODsVpNwdrRbNxBn57JmO75FDtY7cjkN4U&downloadName=%E8%BD%A9%E5%A7%A8%28%E7%9B%B8%E4%BF%A1%E5%85%89%29+-+%E7%BC%BA%E6%B0%A7.mp3',
      cover:
        'http://imge.kugou.com/stdmusic/20221008/20221008105215539681.jpg'
    },
    {
      name: 'Used to Losing You',
      artist: 'Helloworld / JT Roach / Blanke / Luma',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/1edbc56f-d9ab-4cca-ba91-de79fe00e013/HELLOWORLD%E3%80%81JT_Roach%E3%80%81Blanke%E3%80%81Luma_-_Used_to_Losing_You_(Explicit).mp3?table=block&id=c2304809-2bcd-4c10-8004-039a9c6a048c&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=L3n_KfxQcqt3W3pSR80sYKRs3ZrNeNlktS-rkxp7J8c&downloadName=HELLOWORLD%E3%80%81JT+Roach%E3%80%81Blanke%E3%80%81Luma+-+Used+to+Losing+You+%28Explicit%29.mp3',
      cover:
        'http://p2.music.126.net/YVrEjXe9kc3XCKiIqDg5uQ==/109951168241464795.jpg?param=130y130'
    },
    {
      name: '时间的声音',
      artist: 'K.D',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/99425e8a-9e22-4799-a1b2-47605b7f8523/K.D_-_%E6%97%B6%E9%97%B4%E7%9A%84%E5%A3%B0%E9%9F%B3.mp3?table=block&id=a5986553-5634-426d-94a2-7bcfd4890578&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=GoGTq79NK6E-pzvq_kHsuGanVeAu8WAmtYMcUCw3usg&downloadName=K.D+-+%E6%97%B6%E9%97%B4%E7%9A%84%E5%A3%B0%E9%9F%B3.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20230428/20230428125205683582.jpg'
    },
    {
      name: 'Infinity (Slowed & Reverb)',
      artist: 'Kaushal Shekhawat',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/d9681bae-661b-4d2d-9472-a98666a952c0/Kaushal_Shekhawat_-_Infinity_(Slowed__Reverb).mp3?table=block&id=8b89769f-f8ab-4b83-9215-4b3f0cc1a681&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=rHNGL8UzW0rBvsLJHCzvNEGwzPLxt955hvydQ9wVScY&downloadName=Kaushal+Shekhawat+-+Infinity+%28Slowed+%26+Reverb%29.mp3',
      cover:
        'https://is3-ssl.mzstatic.com/image/thumb/Music112/v4/04/74/5e/04745e76-2ca6-20d5-975c-33f1a10fe41d/cover.jpg/1200x1200bf-60.jpg'
    },
    {
      name: '麦田守望者',
      artist: 'Cifer',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/3650e980-5487-4613-ba02-290efc07db55/%E9%BA%A6%E7%94%B0%E5%AE%88%E6%9C%9B%E8%80%85_-_Cifer.mp3?table=block&id=4591fe64-fd31-4886-b9b3-28f7679a40ca&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=pSeWnMTgoTP1PEYRxSVY3bgjFmkV6XDvai3aABCyqD0&downloadName=%E9%BA%A6%E7%94%B0%E5%AE%88%E6%9C%9B%E8%80%85+-+Cifer.mp3',
      cover:
        'http://p1.music.126.net/HKyF46ekI7Gd1JRW9JwKHg==/109951168207468627.jpg?param=177y177'
    },
    {
      name: '指纹 ',
      artist: '杜宣达',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/84fb5105-01e2-4634-96ce-4f4103beb0f9/%E6%8C%87%E7%BA%B9_-_%E6%9D%9C%E5%AE%A3%E8%BE%BE_(mp3cut.net).mp3?table=block&id=63215f43-f770-441f-be53-c86207ef81db&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=eZCWmvmm_tnI6AnGd2okB5LX1oVf-fK0Uj803tewaEg&downloadName=%E6%8C%87%E7%BA%B9+-+%E6%9D%9C%E5%AE%A3%E8%BE%BE+%28mp3cut.net%29.mp3',
      cover:
        'http://p2.music.126.net/kT4AECoc13oVKLEg_-eFMA==/109951166578436098.jpg?param=130y130'
    },
    {
      name: '与我无关',
      artist: '阿冗',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/ebe35344-5d14-47db-a2de-edcfb98ea248/%E4%B8%8E%E6%88%91%E6%97%A0%E5%85%B3_-_%E9%98%BF%E5%86%97_(mp3cut.net).mp3?table=block&id=349bebb3-244a-4d43-b738-cae222919ddc&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=uvu1ThOeB227tI8nriHV8IriQCAzicKkg-JHIzhmTu8&downloadName=%E4%B8%8E%E6%88%91%E6%97%A0%E5%85%B3+-+%E9%98%BF%E5%86%97+%28mp3cut.net%29.mp3',
      cover:
        'http://p2.music.126.net/x-jReyGkM5OTKUEtTqXGoA==/109951164597332931.jpg?param=130y130'
    },
    {
      name: 'DJ 樱花树下的约定',
      artist: '恒升Dj阿宸',
      url: 'https://mp4.djuu.com/c4/22/2023/8fca73cdadc27c40.m4a',
      cover:
        'https://img.djuu.com/cover/202206/1a3194.jpg'
    },
    {
      name: 'DJ 希望你被这个世界爱着',
      artist: 'Dj豪大大',
      url: 'https://mp4.djuu.com/c4/41/2023/dba2be5d7aebb4f9.m4a',
      cover:
        'https://img.djuu.com/cover/201911/f24de3.jpg'
    },
    {
      name: 'DJ 谁的青春不迷茫',
      artist: 'DJ57',
      url: 'https://mp4.djuu.com/c115/88926/117/2024/9e1794d63b046bf3.m4a',
      cover:
        'https://img.djuu.com/cover/2023928/b1292f2c.jpg'
    },
    {
      name: 'DJ Faded Slowed V4',
      artist: 'Ada DJ',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/b99f56f1-7fcb-4a7a-b584-f1b68884ed68/Ada_DJ_-_DJ_Faded_Slowed_V4.mp3?table=block&id=5086b90d-d52c-491e-81d1-fcc51de9f68e&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731153600000&signature=Kt938UDBJisajQM_VYhsy4cCKbmaNgYfFzPYTN4YFF0&downloadName=Ada+DJ+-+DJ+Faded+Slowed+V4.mp3',
      cover:
        'https://p2.music.126.net/hpNqEh7tm67YSoO2v0PvsA==/109951168607628485.jpg?param=130y130'
    },
    {
      name: 'DJ 美丽的神话',
      artist: 'Dj伦大人',
      url: 'https://mp4.djuu.com/c4/26/2023/83c3d719e0596aa1.m4a',
      cover:
        'https://img.djuu.com/cover/201902/bb2057.jpg'
    },
    {
      name: 'DJ 说好的幸福',
      artist: 'DJ东东',
      url: 'https://mp4.djuu.com/c115/64152/117/2024/18149d5798764ca4.m4a',
      cover:
        'https://img.djuu.com/cover/20231001/178be933.jpg'
    },
    {
      name: '关于你的回忆 DJ串烧',
      artist: '南宁Dj阿罗',
      url: 'https://mp4.djuu.com/c2/16/2023/9b200505f8640380.m4a',
      cover:
        'https://img.djuu.com/cover/2023928/76fed753.jpg'
    },
    {
      name: '如果说你是海上的烟火 DJ越鼓串烧',
      artist: 'Dj钢仔',
      url: 'https://mp4.djuu.com/c2/16/2023/83e2210c65611211.m4a',
      cover:
        'https://img.djuu.com/cover/2023928/0f6ee318.jpg'
    },
    {
      name: '姑娘别哭泣 DJ串烧',
      artist: '湖南DjxGuo',
      url: 'https://mp4.djuu.com/c2/16/2023/9d76bdac28728599.m4a',
      cover:
        'https://img.djuu.com/cover/20231001/8cd458ac.jpg'
    },
    {
      name: '百听不厌高速车载音乐v42 DJ串烧',
      artist: '中山DJ嘉敏',
      url: 'https://mp4.djuu.com/c2/16/2024/995fc7feca739531.m4a',
      cover:
        'https://img.djuu.com/cover/20231001/5a71e1c9.jpg'
    },
    {
      name: 'Anima Libera',
      artist: 'Fmoel',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/1e297784-1b72-4f92-bee1-46d77364a61a/Fmoel_-_Anima_Libera.mp3?table=block&id=b1318987-5fb1-4fb4-a1e7-4b80d3b55f6f&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=4YuZk1w7swxu8DPBJyE2Bm9_J0PftEdh7D39xm4C1Ow&downloadName=Fmoel+-+Anima+Libera.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20231101/20231101125403972043.jpg'
    },
    {
      name: '离人赋',
      artist: '云汐',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/0a504b54-c5dd-4728-8dc6-6a0b7c0012c6/%E4%BA%91%E6%B1%90_-_%E7%A6%BB%E4%BA%BA%E8%B5%8B.mp3?table=block&id=5ddfd436-969d-484c-a820-ad37f31b57c2&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=OFdH78u49rWUFL2gYJtEo2TwbSQY9w-r3ZUq0EK8Az0&downloadName=%E4%BA%91%E6%B1%90+-+%E7%A6%BB%E4%BA%BA%E8%B5%8B.mp3',
      cover:
        'https://p2.music.126.net/31br_7J70NzB9Ngbi2Um4g==/109951168042206199.jpg?param=130y130'
    },
    {
      name: '灯火通明',
      artist: '小蓝背心',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/713e3cd1-acdd-4572-bf5a-4740f136ac67/%E5%B0%8F%E8%93%9D%E8%83%8C%E5%BF%83_-_%E7%81%AF%E7%81%AB%E9%80%9A%E6%98%8E.mp3?table=block&id=eb94da94-b2e7-4ca8-8ef1-9c64daf331d7&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=-XQjboG9KW4tPtDDx8OKOiKcu-p6ZTZVRRbo-F4ikoY&downloadName=%E5%B0%8F%E8%93%9D%E8%83%8C%E5%BF%83+-+%E7%81%AF%E7%81%AB%E9%80%9A%E6%98%8E.mp3',
      cover:
        'http://p2.music.126.net/d38VlMLVoS6S4yF8DreXzw==/109951168700655655.jpg?param=177y177'
    },
    {
      name: '降临',
      artist: '漆柚',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/bf955c78-5ca4-49c0-a3e5-8efabb957471/%E6%BC%86%E6%9F%9A_-_%E9%99%8D%E4%B8%B4.mp3?table=block&id=229d78d5-11b3-451a-b569-14bed5e6fdc5&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=tZOduGRxs1Ir-4sHLCeZ5aL8f5S3F9QYx4BlFnqXbpk&downloadName=%E6%BC%86%E6%9F%9A+-+%E9%99%8D%E4%B8%B4.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20220516/20220516175312267912.jpg'
    },
    {
      name: '坏女孩',
      artist: '白允y',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/0d04f260-4b1b-4fe1-ac10-4e34459801aa/%E7%99%BD%E5%85%81y_-_%E5%9D%8F%E5%A5%B3%E5%AD%A9.mp3?table=block&id=653dfdb5-b6d0-4b83-84e8-b5bfbe94a1eb&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=6Dtde-ZPtTrOqgGE7hrHql8EfcW96ixkVWcsRNM0UB4&downloadName=%E7%99%BD%E5%85%81y+-+%E5%9D%8F%E5%A5%B3%E5%AD%A9.mp3',
      cover:
        'http://p2.music.126.net/gskYwkKO6S8--GEoH144PA==/109951168822160401.jpg?param=177y177'
    },
    {
      name: '你在我眼中绽放',
      artist: '云汐',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/ea1f9a96-de25-4ce1-a235-9e48bd215795/%E4%BA%91%E6%B1%90_-_%E4%BD%A0%E5%9C%A8%E6%88%91%E7%9C%BC%E4%B8%AD%E7%BB%BD%E6%94%BE.mp3?table=block&id=7f659a85-71fa-469a-bf39-c69d36f1809b&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=vn_8PzMiiEIxu-czd3u35IODny0WVtS5oGVgWAB2u_Q&downloadName=%E4%BA%91%E6%B1%90+-+%E4%BD%A0%E5%9C%A8%E6%88%91%E7%9C%BC%E4%B8%AD%E7%BB%BD%E6%94%BE.mp3',
      cover:
        'https://p1.music.126.net/uyzUfT7CiTdBHPly5Dnu9A==/109951168636710041.jpg?param=130y130'
    },
    {
      name: '萤火',
      artist: '糯米Nomi',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/896c2476-683d-4776-9d88-6f96bc6af249/%E7%B3%AF%E7%B1%B3Nomi_-_%E8%90%A4%E7%81%AB.mp3?table=block&id=40c9d0e3-be88-44aa-bac2-a6a4a97cc52c&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=NDO19S82LmBRYSFRG11Q7l8Ra6QPBAfW_hwIl_0tuyY&downloadName=%E7%B3%AF%E7%B1%B3Nomi+-+%E8%90%A4%E7%81%AB.mp3',
      cover:
        'https://imgessl.kugou.com/stdmusic/20221121/20221121170742107298.jpg'
    },
    {
      name: '一格格',
      artist: 'Ayi阿怡',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/b4c684de-5307-4ba4-8e55-7e297851f5e4/Ayi%E9%98%BF%E6%80%A1_-_%E4%B8%80%E6%A0%BC%E6%A0%BC.mp3?table=block&id=f7d88478-8c3b-4972-aa15-5f6a2e4608f7&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731160800000&signature=MPS_wIhaDgI-aApa5N-IbF9gHEAI8W4UFYZDhpbYL-Q&downloadName=Ayi%E9%98%BF%E6%80%A1+-+%E4%B8%80%E6%A0%BC%E6%A0%BC.mp3',
      cover:
        'http://imge.kugou.com/stdmusic/20230417/20230417113118651691.jpg'
    },
    {
      name: '李如意 - DJ明天会更好',
      artist: 'Dj桃子阿',
      url: 'https://mp4.djuu.com/c4/26/2022/fb617d40cbda523e.m4a',
      cover:
        'https://img.djuu.com/cover/202209/4b7313.jpg'
    },
    {
      name: '朱雅 - DJ前度',
      artist: '南宁Dj杰仔',
      url: 'https://mp4.djuu.com/c4/22/2019/158a3b862c4cc58a.m4a',
      cover:
        'https://img.djuu.com/cover/201806/a65216.jpg'
    },
    {
      name: '陈一发儿 - DJ童话镇',
      artist: '贺州Dj小林',
      url: 'https://mp4.djuu.com/c4/26/2019/65de0fb3aa3265d9.m4a',
      cover:
        'https://img.djuu.com/cover/201806/75f079.jpg'
    },
    {
      name: 'DJ鞠文娴 - BINGBIAN病变',
      artist: 'Dj小晨',
      url: 'https://mp4.djuu.com/c4/24/2018/eb16d5270ed9bc2c.m4a',
      cover:
        'https://img.djuu.com/cover/202309/873fe7.jpg'
    },
    {
      name: 'Sing倩儿 - DJ体面',
      artist: 'Dj十三',
      url: 'https://mp4.djuu.com/c4/25/2018/518b533c4486f502.m4a',
      cover:
        'https://img.djuu.com/cover/2023929/1ed7980b.jpg'
    },
    {
      name: 'Simyee陈芯怡 - DJ青花瓷',
      artist: '岑溪DJ辉仔',
      url: 'https://mp4.djuu.com/c115/41838/117/2024/9c295b685669459e.m4a',
      cover:
        'https://img.djuu.com/cover/2023928/18ef1c35.jpg'
    },
    {
      name: '邓紫棋 - DJ我的秘密',
      artist: 'Dj小罗',
      url: 'https://mp4.djuu.com/c4/26/2023/8414bd05d5b14f09.m4a',
      cover:
        'https://img.djuu.com/cover/201806/a965f7.jpg'
    },
    {
      name: '邓紫棋 - DJ来自天堂的魔鬼',
      artist: '网络歌手',
      url: 'https://mp4.djuu.com/c4/107/2022/fc2ef1eb77f3cbe8.m4a',
      cover:
        'http://p1.music.126.net/kVwk6b8Qdya8oDyGDcyAVA==/1364493930777368.jpg?param=130y130'
    },
    {
      name: '曲肖冰 - DJ谁',
      artist: 'Dj光头',
      url: 'https://mp4.djuu.com/c4/26/2024/d09d0c752b54c40c.m4a',
      cover:
        'https://img.djuu.com/cover/202202/8e48bb.jpg'
    },
    {
      name: '指尖笑 - DJ不问别离',
      artist: 'Dj可仔',
      url: 'https://mp4.djuu.com/c4/26/2024/6af3faaa53f6382a.m4a',
      cover:
        'http://p2.music.126.net/CngdcKlEeF9AwfTcKbQFpQ==/109951168592751340.jpg?param=130y130'
    },
    {
      name: '收购美好',
      artist: '黄文文',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/dab8ae33-eae7-4077-8c00-94afdbdce3ab/%E9%BB%84%E6%96%87%E6%96%87_-_%E6%94%B6%E8%B4%AD%E7%BE%8E%E5%A5%BD.mp3?table=block&id=578fbc79-5b57-4aff-9d98-9640ecc4abb8&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=TY2pE-Qg2RYvsfV_rbncqxXx6eAyjxEbhtUTBBrXO4U&downloadName=%E9%BB%84%E6%96%87%E6%96%87+-+%E6%94%B6%E8%B4%AD%E7%BE%8E%E5%A5%BD.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20200225/20200225175718988729.jpg'
    },
    {
      name: '无归',
      artist: '咻咻满',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/d0dfce75-f3aa-4838-a3e7-9a6b4ecd1a7c/%E5%92%BB%E5%92%BB%E6%BB%A1_-_%E6%97%A0%E5%BD%92.mp3?table=block&id=edb9cd06-ff52-4063-9bcb-11daf64c081e&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=Ne2G80nt8Dv9UaPTxANqw71bkFAwjMFrQ7qTXoNFiRU&downloadName=%E5%92%BB%E5%92%BB%E6%BB%A1+-+%E6%97%A0%E5%BD%92.mp3',
      cover:
        'http://p1.music.126.net/7YeE_wdkWlyROCzQ-HuMPA==/109951168600979306.jpg?param=130y130'
    },
    {
      name: '半阙',
      artist: '灼夭',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/8f148f3d-c2d7-4a31-8202-02382e3e55ef/%E7%81%BC%E5%A4%AD_-_%E5%8D%8A%E9%98%99.mp3?table=block&id=0d13f618-04ab-413c-8af6-09a9e573618f&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=7H59vb3TDvBEjDqpvuolquLZT1gVgEHA86WHnPldo2g&downloadName=%E7%81%BC%E5%A4%AD+-+%E5%8D%8A%E9%98%99.mp3',
      cover:
        'http://p2.music.126.net/ZtGenDZY8CT4gsQ8Sn_l2Q==/109951167949078988.jpg?param=177y177'
    },
    {
      name: '夏天和你拥入怀中',
      artist: 'LBI利比（时柏尘）',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/8bc856f9-3335-4443-a14d-a92b749d02e6/LBI%E5%88%A9%E6%AF%94%EF%BC%88%E6%97%B6%E6%9F%8F%E5%B0%98%EF%BC%89_-_%E5%A4%8F%E5%A4%A9%E5%92%8C%E4%BD%A0%E6%8B%A5%E5%85%A5%E6%80%80%E4%B8%AD.mp3?table=block&id=cd9999fa-ad06-4bb7-a0b8-ee36d8e63a04&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=PigUz35YBudj42IgPUGvm8Le58BhGk7JMv-JXxf6bbo&downloadName=LBI%E5%88%A9%E6%AF%94%EF%BC%88%E6%97%B6%E6%9F%8F%E5%B0%98%EF%BC%89+-+%E5%A4%8F%E5%A4%A9%E5%92%8C%E4%BD%A0%E6%8B%A5%E5%85%A5%E6%80%80%E4%B8%AD.mp3',
      cover:
        'http://p2.music.126.net/h8VEJA2lZKepM12-rFdnhQ==/109951168663851535.jpg?param=130y130'
    },
    {
      name: '最后一页 (清新版)',
      artist: 'Ssweetxin',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/eacedf1b-f249-4b31-9e77-a9f69b2b99fb/Ssweetxin__-_%E6%9C%80%E5%90%8E%E4%B8%80%E9%A1%B5_(%E6%B8%85%E6%96%B0%E7%89%88).mp3?table=block&id=b3759095-a3c2-4566-a0a3-84de48a07f63&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=jOvXycKOfMAQGJPC1wesJILmfKIjF_2WyTnBp45D5XI&downloadName=Ssweetxin_+-+%E6%9C%80%E5%90%8E%E4%B8%80%E9%A1%B5+%28%E6%B8%85%E6%96%B0%E7%89%88%29.mp3',
      cover:
        'http://p2.music.126.net/XvVUZQTCxmhjNOcfEnJYew==/109951163610134059.jpg?param=130y130'
    },
    {
      name: '此刻的风',
      artist: '承桓',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/7564888d-86c8-4735-a938-1473ec8a2582/%E6%89%BF%E6%A1%93_-_%E6%AD%A4%E5%88%BB%E7%9A%84%E9%A3%8E.mp3?table=block&id=659591ca-b5c8-41de-9c5a-e625867c4825&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=wCRqoAfHUQmVEIe7ty7wClrb1E_10lcU1YAL72SzeZM&downloadName=%E6%89%BF%E6%A1%93+-+%E6%AD%A4%E5%88%BB%E7%9A%84%E9%A3%8E.mp3',
      cover:
        'http://p1.music.126.net/daqrD4GyZ5oxsOpf0rjT-A==/109951169482646177.jpg?param=130y130'
    },
    {
      name: '携风予你',
      artist: '小蓝背心',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/8a77f6aa-3712-4cb2-8062-9b0cc437fd54/%E5%B0%8F%E8%93%9D%E8%83%8C%E5%BF%83_-_%E6%90%BA%E9%A3%8E%E4%BA%88%E4%BD%A0.mp3?table=block&id=95941595-2b9d-4762-8ffc-0d37f66c6de5&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=KxNfF9w7CblJJFFTNsOsQQ7qQebGmnXMdmndsiEejfU&downloadName=%E5%B0%8F%E8%93%9D%E8%83%8C%E5%BF%83+-+%E6%90%BA%E9%A3%8E%E4%BA%88%E4%BD%A0.mp3',
      cover:
        'https://p1.music.126.net/GEKfzvI0Op5T_8Z-jm0bqA==/109951167523680350.jpg?param=130y130'
    },
    {
      name: '满江红遍',
      artist: '玄觞',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/49d1275a-e49a-406e-8d8d-bf95d41cae5f/%E7%8E%84%E8%A7%9E_-_%E6%BB%A1%E6%B1%9F%E7%BA%A2%E9%81%8D.mp3?table=block&id=92b9bd07-91f6-4cf8-88c8-9ff8c39b5ce1&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=2T7eyU3aCftTDsSAdPFAaZ6wyaCbTFKTaVd29qI2Vbw&downloadName=%E7%8E%84%E8%A7%9E+-+%E6%BB%A1%E6%B1%9F%E7%BA%A2%E9%81%8D.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20230331/20230331160157822368.jpg'
    },
    {
      name: '等一个对的人',
      artist: '范茹',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/4a0c248c-2c5c-47c0-b0c6-8bd150834227/%E8%8C%83%E8%8C%B9_-_%E7%AD%89%E4%B8%80%E4%B8%AA%E5%AF%B9%E7%9A%84%E4%BA%BA.mp3?table=block&id=883ec1d2-a246-4d61-bc03-7ab66a09285d&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=FTOzOm3Z_HxIGcLLK9TVm1xKU85tRuEPH2E1LJ5MhrI&downloadName=%E8%8C%83%E8%8C%B9+-+%E7%AD%89%E4%B8%80%E4%B8%AA%E5%AF%B9%E7%9A%84%E4%BA%BA.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20230608/20230608154436146620.jpg'
    },
    {
      name: '在等',
      artist: '陈亦洺、罗文Rown',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/43c95bd0-1ef3-42cc-ab48-c6684cbeb276/%E9%99%88%E4%BA%A6%E6%B4%BA%E3%80%81%E7%BD%97%E6%96%87Rown_-_%E5%9C%A8%E7%AD%89.mp3?table=block&id=aafdfabf-d3dc-4670-b891-465d35999ccc&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=WwUFIxpr5p_if-zUmoD4CKolqOx9YBI_73LjHeSVpbA&downloadName=%E9%99%88%E4%BA%A6%E6%B4%BA%E3%80%81%E7%BD%97%E6%96%87Rown+-+%E5%9C%A8%E7%AD%89.mp3',
      cover:
        'https://imgessl.kugou.com/stdmusic/20230707/20230707145719742668.jpg'
    },
    {
      name: 'DJ蔡健雅 - Letting Go',
      artist: 'DjRn',
      url: 'https://mp4.djuu.com/c4/26/2024/49318c0350787e82.m4a',
      cover:
        'https://imgessl.kugou.com/stdmusic/20220408/20220408121218498989.jpg'
    },
    {
      name: '陈雪凝 - DJ绿色',
      artist: 'Dj六少飞',
      url: 'https://mp4.djuu.com/c4/26/2024/7b3609110d9fef62.m4a',
      cover:
        'http://p2.music.126.net/R4ZP3AJ9xV0vvw8LX7AbMA==/109951163860425334.jpg?param=130y130'
    },
    {
      name: '言瑾羽 - DJ未必',
      artist: 'Dj六少飞',
      url: 'https://mp4.djuu.com/c4/26/2024/5c15f6c41c2f9081.m4a',
      cover:
        'http://p1.music.126.net/A65wzMHAqccx3IU8GYKyEA==/109951169244595192.jpg?param=130y130'
    },
    {
      name: '孙语赛vs萧全 - DJ不仅仅是喜欢',
      artist: 'DjYg',
      url: 'https://mp4.djuu.com/c4/21/2018/de87f6b04f6fe3a2.m4a',
      cover:
        'https://p2.music.126.net/SLKWLEray70Ki8VlHo1Vig==/109951163974008645.jpg?param=130y130'
    },
    {
      name: '就是南方凯 - DJ离别开出花',
      artist: 'Dj桃子啊',
      url: 'https://mp4.djuu.com/c4/26/2024/51e4254c2bc70fc2.m4a',
      cover:
        'http://p1.music.126.net/MgrERz_auwIi5Km64TxwjQ==/109951169154658797.jpg?param=177y177'
    },
    {
      name: '赵方婧 - DJ尽头',
      artist: 'DJK2',
      url: 'https://mp4.djuu.com/c115/16502/117/2023/2b032af31bf60382.m4a',
      cover:
        'https://imge.kugou.com/stdmusic/20200708/20200708162704632520.jpg'
    },
    {
      name: 'Dehors (外面)(Single Version)',
      artist: 'Jordann',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/7ca64712-9406-4dd7-8cee-daca35f7d522/Jordann_-_Dehors_(%E5%A4%96%E9%9D%A2)(Single_Version).mp3?table=block&id=2eed0815-9f2c-4ef5-9ff3-138290d024fd&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=Klbd8DfoKU5ngG86IXg2HVdPvh_VF1GbRC0D9es5uYI&downloadName=Jordann+-+Dehors+%28%E5%A4%96%E9%9D%A2%29%28Single+Version%29.mp3',
      cover:
        'http://p1.music.126.net/7IM_iRaCe2Pe9TU7PMTdqQ==/109951169635570073.jpg?param=130y130'
    },
    {
      name: '下雨天',
      artist: '旺仔小乔',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/0cf9c919-06bd-4c00-919f-c5d8a46a591a/%E6%97%BA%E4%BB%94%E5%B0%8F%E4%B9%94_-_%E4%B8%8B%E9%9B%A8%E5%A4%A9.mp3?table=block&id=f6ca3328-9aec-445d-9b87-9753b1a2e14c&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=VX2eSw4SmPQ3QhOHGXKsHTfrnm5LBjRlxDeHUyU1QPQ&downloadName=%E6%97%BA%E4%BB%94%E5%B0%8F%E4%B9%94+-+%E4%B8%8B%E9%9B%A8%E5%A4%A9.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20230705/20230705121501881683.jpg'
    },
    {
      name: '西游G',
      artist: '阿禹ayy',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/87f59ca7-d78e-44a0-997e-0c932cf282af/%E9%98%BF%E7%A6%B9ayy_-_%E8%A5%BF%E6%B8%B8G.mp3?table=block&id=7c0a470d-b459-4cb7-948a-c788a91e6dd4&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=B2FIJNBMte6OuIRzSwoHXb2gk7NN1J8nKHdC0whVlE0&downloadName=%E9%98%BF%E7%A6%B9ayy+-+%E8%A5%BF%E6%B8%B8G.mp3',
      cover:
        'https://p2.music.126.net/A14DLjwCLQbhJb-DYicTrg==/109951169003743919.jpg?param=130y130'
    },
    {
      name: '我们俩',
      artist: '不知名烟嗓',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/675dc556-ac49-4df7-b9d6-353b64e510d5/%E4%B8%8D%E7%9F%A5%E5%90%8D%E7%83%9F%E5%97%93_-_%E6%88%91%E4%BB%AC%E4%BF%A9.mp3?table=block&id=2ae67020-db9e-4913-b9ca-7fbdbfc7151e&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=VUp0pK_zIR6dZq9QQTldtCehcBEJZCEHiE3iG7nGiHU&downloadName=%E4%B8%8D%E7%9F%A5%E5%90%8D%E7%83%9F%E5%97%93+-+%E6%88%91%E4%BB%AC%E4%BF%A9.mp3',
      cover:
        'https://imge.kugou.com/stdmusic/20230616/20230616161424532843.jpg'
    },
    {
      name: '静悄悄',
      artist: '不够',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/dda1d756-092c-49dd-8d6c-3c5867051784/%E4%B8%8D%E5%A4%9F_-_%E9%9D%99%E6%82%84%E6%82%84.mp3?table=block&id=a678cde7-1bb7-44e6-a2eb-8f7f721b7418&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=IRjMU3lsDg04m7cUanzRek6sxM4e7ina58XrHtF9weU&downloadName=%E4%B8%8D%E5%A4%9F+-+%E9%9D%99%E6%82%84%E6%82%84.mp3',
      cover:
        'http://p2.music.126.net/uvEdB1dIkdJGCQrdM2i8Ag==/109951168221512786.jpg?param=130y130'
    },
    {
      name: '落单雪人',
      artist: '刘增瞳',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/f5ed705a-1bec-4273-ad50-964d3103b4f2/%E5%88%98%E5%A2%9E%E7%9E%B3_-_%E8%90%BD%E5%8D%95%E9%9B%AA%E4%BA%BA.mp3?table=block&id=3025e337-2a6a-4c88-bbf9-0856ad2e418a&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=ZtzBI_BhwlLbk7LXnuFS51bygQkPcum-oYexiPHEPx8&downloadName=%E5%88%98%E5%A2%9E%E7%9E%B3+-+%E8%90%BD%E5%8D%95%E9%9B%AA%E4%BA%BA.mp3',
      cover:
        'https://cdnmusic.migu.cn/picture/2023/0913/1921/AMd8e33f05cf92913cdf2985ad947f1341.jpg'
    },
    {
      name: '清晨有粥 黄昏有酒',
      artist: 'Uu (刘梦妤)',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/1d548625-0f98-4a17-b3eb-ca7f5a50d4a5/Uu_(%E5%88%98%E6%A2%A6%E5%A6%A4)_-_%E6%B8%85%E6%99%A8%E6%9C%89%E7%B2%A5_%E9%BB%84%E6%98%8F%E6%9C%89%E9%85%92.mp3?table=block&id=ccb1b616-3caf-41cd-93e3-570434ef2633&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=m96V2L54vV2xO-dk_3YMHlat2W3OHSbvDighfoUeaWM&downloadName=Uu+%28%E5%88%98%E6%A2%A6%E5%A6%A4%29+-+%E6%B8%85%E6%99%A8%E6%9C%89%E7%B2%A5+%E9%BB%84%E6%98%8F%E6%9C%89%E9%85%92.mp3',
      cover:
        'http://p1.music.126.net/hyJODphJ3949xK9kgMttcA==/109951168565359609.jpg?param=177y177'
    },
    {
      name: '佳衣',
      artist: '平生不晚',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/191f8197-8e93-4c88-a198-2108461d0c72/%E5%B9%B3%E7%94%9F%E4%B8%8D%E6%99%9A_-_%E4%BD%B3%E8%A1%A3.mp3?table=block&id=21f2d615-7cc4-4beb-a2fe-f60498b810d0&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=Y7o2p1xLLXzZAjKjd9myhyLiRsbPjGkUlJBJ3HjLeaA&downloadName=%E5%B9%B3%E7%94%9F%E4%B8%8D%E6%99%9A+-+%E4%BD%B3%E8%A1%A3.mp3',
      cover:
        'https://img.1ting.com/images/special/466/s300_8f556ad283dc84516a39813b0ef4f28a.jpg'
    },
    {
      name: '真的不快乐',
      artist: '李飘飘',
      url: 'https://file.notion.so/f/f/c5f193f6-61cd-47c5-82f2-ac6fc975398b/255a8f8a-0ae7-44db-82f7-328c049dd98e/%E6%9D%8E%E9%A3%98%E9%A3%98_-_%E7%9C%9F%E7%9A%84%E4%B8%8D%E5%BF%AB%E4%B9%90.mp3?table=block&id=cd741ec7-9d07-4601-958e-1bebd9466aff&spaceId=c5f193f6-61cd-47c5-82f2-ac6fc975398b&expirationTimestamp=1731168000000&signature=QI4ZUYvV45ZJ3TxeGtSBgmvWBXmSKkpBzYsWBFN2EkU&downloadName=%E6%9D%8E%E9%A3%98%E9%A3%98+-+%E7%9C%9F%E7%9A%84%E4%B8%8D%E5%BF%AB%E4%B9%90.mp3',
      cover:
        'http://p1.music.126.net/Cd8iZbgv7LYFWKv4MzJZ4w==/109951168015255045.jpg?param=130y130'
    },
    {
      name: '江语晨 - DJ最后一页',
      artist: 'Dj小邓',
      url: 'https://mp4.djuu.com/c4/26/2024/6ea6deb8c3e18845.m4a',
      cover:
        'http://imge.kugou.com/stdmusic/20191001/20191001174509470283.jpg'
    },
    {
      name: '阿肆 - DJ热爱105度的你',
      artist: 'Dj小邓',
      url: 'https://mp4.djuu.com/c4/26/2024/2abc457865f9c955.m4a',
      cover:
        'http://p1.music.126.net/6Herq6VjqEM2wJYiML3y4A==/109951166098679116.jpg?param=130y130'
    },
    {
      name: '单色凌 - DJ我想我不够好',
      artist: 'DjAn',
      url: 'https://mp4.djuu.com/c4/26/2024/0cfe5e094903638c.m4a',
      cover:
        'http://imge.kugou.com/stdmusic/20200620/20200620080504229934.jpg'
    },
    {
      name: '告五人 - DJ带我去找夜生活',
      artist: 'Dj泡面',
      url: 'https://mp4.djuu.com/c4/26/2024/4760bb54e92b7c10.m4a',
      cover:
        'http://p1.music.126.net/lmCtt6-3fOPSdA1uwGCY5Q==/109951164567402626.jpg?param=130y130'
    },
    {
      name: '锦零 - DJ豆花之歌',
      artist: 'Dj小雨',
      url: 'https://mp4.djuu.com/c4/26/2024/2069e614b1b4dccf.m4a',
      cover:
        'https://imge.kugou.com/stdmusic/20220222/20220222060106813121.jpg'
    },
    {
      name: '抖音流行 DJ串烧',
      artist: '网络歌手',
      url: 'https://mp4.djuu.com/c2/16/2024/48f743daeb837c40.m4a',
      cover:
        'https://img.djuu.com/upload/hot/202310/3aa827.jpg'
    }
  ],
  MUSIC_PLAYER_METING: process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING || false, // 是否要开启 MetingJS，从平台获取歌单。会覆盖自定义的 MUSIC_PLAYER_AUDIO_LIST，更多配置信息：https://github.com/metowolf/MetingJS
  MUSIC_PLAYER_METING_SERVER:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_SERVER || 'netease', // 音乐平台，[netease, tencent, kugou, xiami, baidu]
  MUSIC_PLAYER_METING_ID:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_ID || '3779629', // 对应歌单的 id
  MUSIC_PLAYER_METING_LRC_TYPE:
    process.env.NEXT_PUBLIC_MUSIC_PLAYER_METING_LRC_TYPE || '0', // 可选值： 3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）

  //   ********挂件组件相关********
  // ----> 评论互动 可同时开启多个支持 WALINE VALINE GISCUS CUSDIS UTTERRANCES GITALK

  COMMENT_HIDE_SINGLE_TAB:
    process.env.NEXT_PUBLIC_COMMENT_HIDE_SINGLE_TAB || false, // Whether hide the tab when there's no tabs. 只有一个评论组件时是否隐藏切换组件的标签页

  // artalk 评论插件
  COMMENT_ARTALK_SERVER: process.env.NEXT_PUBLIC_COMMENT_ARTALK_SERVER || '', // ArtalkServert后端地址 https://artalk.js.org/guide/deploy.html
  COMMENT_ARTALK_JS:
    process.env.NEXT_PUBLIC_COMMENT_ARTALK_JS ||
    'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.js', // ArtalkServert js cdn
  COMMENT_ARTALK_CSS:
    process.env.NEXT_PUBLIC_COMMENT_ARTALK_CSS ||
    'https://cdnjs.cloudflare.com/ajax/libs/artalk/2.5.5/Artalk.css', // ArtalkServert css cdn

  // twikoo
  COMMENT_TWIKOO_ENV_ID: process.env.NEXT_PUBLIC_COMMENT_ENV_ID || 'https://wobeegy.us.kg/', // TWIKOO后端地址 腾讯云环境填envId；Vercel环境填域名，教程：https://tangly1024.com/article/notionnext-twikoo
  COMMENT_TWIKOO_COUNT_ENABLE:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_COUNT_ENABLE || false, // 博客列表是否显示评论数
  COMMENT_TWIKOO_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_TWIKOO_CDN_URL ||
    'https://cdn.staticfile.net/twikoo/1.6.17/twikoo.min.js', // twikoo客户端cdn

  // utterance
  COMMENT_UTTERRANCES_REPO:
    process.env.NEXT_PUBLIC_COMMENT_UTTERRANCES_REPO || '', // 你的代码仓库名， 例如我是 'tangly1024/NotionNext'； 更多文档参考 https://utteranc.es/

  // giscus @see https://giscus.app/
  COMMENT_GISCUS_REPO: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO || '', // 你的Github仓库名 e.g 'tangly1024/NotionNext'
  COMMENT_GISCUS_REPO_ID: process.env.NEXT_PUBLIC_COMMENT_GISCUS_REPO_ID || '', // 你的Github Repo ID e.g ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_CATEGORY_ID:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CATEGORY_ID || '', // 你的Github Discussions 內的 Category ID ( 設定完 giscus 即可看到 )
  COMMENT_GISCUS_MAPPING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_MAPPING || 'pathname', // 你的Github Discussions 使用哪種方式來標定文章, 預設 'pathname'
  COMMENT_GISCUS_REACTIONS_ENABLED:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_REACTIONS_ENABLED || '1', // 你的 Giscus 是否開啟文章表情符號 '1' 開啟 "0" 關閉 預設開啟
  COMMENT_GISCUS_EMIT_METADATA:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_EMIT_METADATA || '0', // 你的 Giscus 是否提取 Metadata '1' 開啟 '0' 關閉 預設關閉
  COMMENT_GISCUS_INPUT_POSITION:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_INPUT_POSITION || 'bottom', // 你的 Giscus 發表留言位置 'bottom' 尾部 'top' 頂部, 預設 'bottom'
  COMMENT_GISCUS_LANG: process.env.NEXT_PUBLIC_COMMENT_GISCUS_LANG || 'zh-CN', // 你的 Giscus 語言 e.g 'en', 'zh-TW', 'zh-CN', 預設 'en'
  COMMENT_GISCUS_LOADING:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_LOADING || 'lazy', // 你的 Giscus 載入是否漸進式載入, 預設 'lazy'
  COMMENT_GISCUS_CROSSORIGIN:
    process.env.NEXT_PUBLIC_COMMENT_GISCUS_CROSSORIGIN || 'anonymous', // 你的 Giscus 可以跨網域, 預設 'anonymous'

  COMMENT_CUSDIS_APP_ID: process.env.NEXT_PUBLIC_COMMENT_CUSDIS_APP_ID || 'f0140b2e-4844-45b9-93b6-124548f51d2f', // data-app-id 36位 see https://cusdis.com/
  COMMENT_CUSDIS_HOST:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_HOST || 'https://cusdis.com', // data-host, change this if you're using self-hosted version
  COMMENT_CUSDIS_SCRIPT_SRC:
    process.env.NEXT_PUBLIC_COMMENT_CUSDIS_SCRIPT_SRC || '/js/cusdis.es.js', // change this if you're using self-hosted version

  // gitalk评论插件 更多参考 https://gitalk.github.io/
  COMMENT_GITALK_REPO: process.env.NEXT_PUBLIC_COMMENT_GITALK_REPO || '', // 你的Github仓库名，例如 'NotionNext'
  COMMENT_GITALK_OWNER: process.env.NEXT_PUBLIC_COMMENT_GITALK_OWNER || '', // 你的用户名 e.g tangly1024
  COMMENT_GITALK_ADMIN: process.env.NEXT_PUBLIC_COMMENT_GITALK_ADMIN || '', // 管理员用户名、一般是自己 e.g 'tangly1024'
  COMMENT_GITALK_CLIENT_ID:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_ID || '', // e.g 20位ID ， 在gitalk后台获取
  COMMENT_GITALK_CLIENT_SECRET:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CLIENT_SECRET || '', // e.g 40位ID， 在gitalk后台获取
  COMMENT_GITALK_DISTRACTION_FREE_MODE: false, // 类似facebook的无干扰模式
  COMMENT_GITALK_JS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_JS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js', // gitalk客户端 js cdn
  COMMENT_GITALK_CSS_CDN_URL:
    process.env.NEXT_PUBLIC_COMMENT_GITALK_CSS_CDN_URL ||
    'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css', // gitalk客户端 css cdn

  COMMENT_GITTER_ROOM: process.env.NEXT_PUBLIC_COMMENT_GITTER_ROOM || '', // gitter聊天室 see https://gitter.im/ 不需要则留空
  COMMENT_DAO_VOICE_ID: process.env.NEXT_PUBLIC_COMMENT_DAO_VOICE_ID || '', // DaoVoice http://dashboard.daovoice.io/get-started
  COMMENT_TIDIO_ID: process.env.NEXT_PUBLIC_COMMENT_TIDIO_ID || '', // [tidio_id] -> //code.tidio.co/[tidio_id].js

  COMMENT_VALINE_CDN:
    process.env.NEXT_PUBLIC_VALINE_CDN ||
    'https://unpkg.com/valine@1.5.1/dist/Valine.min.js',
  COMMENT_VALINE_APP_ID: process.env.NEXT_PUBLIC_VALINE_ID || '', // Valine @see https://valine.js.org/quickstart.html 或 https://github.com/stonehank/react-valine#%E8%8E%B7%E5%8F%96app-id-%E5%92%8C-app-key
  COMMENT_VALINE_APP_KEY: process.env.NEXT_PUBLIC_VALINE_KEY || '',
  COMMENT_VALINE_SERVER_URLS: process.env.NEXT_PUBLIC_VALINE_SERVER_URLS || '', // 该配置适用于国内自定义域名用户, 海外版本会自动检测(无需手动填写) @see https://valine.js.org/configuration.html#serverURLs
  COMMENT_VALINE_PLACEHOLDER:
    process.env.NEXT_PUBLIC_VALINE_PLACEHOLDER || '抢个沙发吧~', // 可以搭配后台管理评论 https://github.com/DesertsP/Valine-Admin  便于查看评论，以及邮件通知，垃圾评论过滤等功能

  COMMENT_WALINE_SERVER_URL: process.env.NEXT_PUBLIC_WALINE_SERVER_URL || '', // 请配置完整的Waline评论地址 例如 hhttps://preview-waline.tangly1024.com @see https://waline.js.org/guide/get-started.html
  COMMENT_WALINE_RECENT: process.env.NEXT_PUBLIC_WALINE_RECENT || false, // 最新评论

  // 此评论系统基于WebMention，细节可参考https://webmention.io
  // 它是一个基于IndieWeb理念的开放式评论系统，下方COMMENT_WEBMENTION包含的属性皆需配置：
  // ENABLE: 是否开启
  // AUTH: Webmention使用的IndieLogin，可使用Twitter或Github个人页面连结
  // HOSTNAME: Webmention绑定之网域，通常即为本站网址
  // TWITTER_USERNAME: 评论显示区域需要的资讯
  // TOKEN: Webmention的API token
  COMMENT_WEBMENTION_ENABLE: process.env.NEXT_PUBLIC_WEBMENTION_ENABLE || false,
  COMMENT_WEBMENTION_AUTH: process.env.NEXT_PUBLIC_WEBMENTION_AUTH || '',
  COMMENT_WEBMENTION_HOSTNAME:
    process.env.NEXT_PUBLIC_WEBMENTION_HOSTNAME || '',
  COMMENT_WEBMENTION_TWITTER_USERNAME:
    process.env.NEXT_PUBLIC_TWITTER_USERNAME || '',
  COMMENT_WEBMENTION_TOKEN: process.env.NEXT_PUBLIC_WEBMENTION_TOKEN || '',

  // <---- 评论插件

  // ----> 站点统计
  ANALYTICS_VERCEL: process.env.NEXT_PUBLIC_ANALYTICS_VERCEL || true, // vercel自带的统计 https://vercel.com/docs/concepts/analytics/quickstart https://github.com/tangly1024/NotionNext/issues/897
  ANALYTICS_BUSUANZI_ENABLE:
    process.env.NEXT_PUBLIC_ANALYTICS_BUSUANZI_ENABLE || true, // 展示网站阅读量、访问数 see http://busuanzi.ibruce.info/
  ANALYTICS_BAIDU_ID: process.env.NEXT_PUBLIC_ANALYTICS_BAIDU_ID || '', // e.g 只需要填写百度统计的id，[baidu_id] -> https://hm.baidu.com/hm.js?[baidu_id]
  ANALYTICS_CNZZ_ID: process.env.NEXT_PUBLIC_ANALYTICS_CNZZ_ID || '', // 只需要填写站长统计的id, [cnzz_id] -> https://s9.cnzz.com/z_stat.php?id=[cnzz_id]&web_id=[cnzz_id]
  ANALYTICS_GOOGLE_ID: process.env.NEXT_PUBLIC_ANALYTICS_GOOGLE_ID || '', // 谷歌Analytics的id e.g: G-XXXXXXXXXX

  // 51la 站点统计 https://www.51.la/
  ANALYTICS_51LA_ID: process.env.NEXT_PUBLIC_ANALYTICS_51LA_ID || '', // id，在51la后台获取 参阅 https://docs.tangly1024.com/article/notion-next-51-la
  ANALYTICS_51LA_CK: process.env.NEXT_PUBLIC_ANALYTICS_51LA_CK || '', // ck，在51la后台获取

  // Matomo 网站统计
  MATOMO_HOST_URL: process.env.NEXT_PUBLIC_MATOMO_HOST_URL || '', // Matomo服务器地址，不带斜杠
  MATOMO_SITE_ID: process.env.NEXT_PUBLIC_MATOMO_SITE_ID || '', // Matomo网站ID
  // ACKEE网站访客统计工具
  ANALYTICS_ACKEE_TRACKER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_TRACKER || '', // e.g 'https://ackee.tangly1024.com/tracker.js'
  ANALYTICS_ACKEE_DATA_SERVER:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DATA_SERVER || '', // e.g https://ackee.tangly1024.com , don't end with a slash
  ANALYTICS_ACKEE_DOMAIN_ID:
    process.env.NEXT_PUBLIC_ANALYTICS_ACKEE_DOMAIN_ID || '', // e.g '82e51db6-dec2-423a-b7c9-b4ff7ebb3302'

  SEO_GOOGLE_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  SEO_BAIDU_SITE_VERIFICATION:
    process.env.NEXT_PUBLIC_SEO_BAIDU_SITE_VERIFICATION || '', // Remove the value or replace it with your own google site verification code

  // 微软 Clarity 站点分析
  CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || null, // 只需要复制Clarity脚本中的ID部分，ID是一个十位的英文数字组合

  // <---- 站点统计

  // START---->营收相关

  // 谷歌广告
  ADSENSE_GOOGLE_ID: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_ID || '', // 谷歌广告ID e.g ca-pub-xxxxxxxxxxxxxxxx
  ADSENSE_GOOGLE_TEST: process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_TEST || false, // 谷歌广告ID测试模式，这种模式获取假的测试广告，用于开发 https://www.tangly1024.com/article/local-dev-google-adsense
  ADSENSE_GOOGLE_SLOT_IN_ARTICLE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_IN_ARTICLE || '', // Google AdScene>广告>按单元广告>新建文章内嵌广告 粘贴html代码中的data-ad-slot值
  ADSENSE_GOOGLE_SLOT_FLOW:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_FLOW || '', // Google AdScene>广告>按单元广告>新建信息流广告
  ADSENSE_GOOGLE_SLOT_NATIVE:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_NATIVE || '', // Google AdScene>广告>按单元广告>新建原生广告
  ADSENSE_GOOGLE_SLOT_AUTO:
    process.env.NEXT_PUBLIC_ADSENSE_GOOGLE_SLOT_AUTO || '', // Google AdScene>广告>按单元广告>新建展示广告 （自动广告）

  // 万维广告
  AD_WWADS_ID: process.env.NEXT_PUBLIC_WWAD_ID || null, // https://wwads.cn/ 创建您的万维广告单元ID
  AD_WWADS_BLOCK_DETECT: process.env.NEXT_PUBLIC_WWADS_AD_BLOCK_DETECT || false, // 是否开启WWADS广告屏蔽插件检测,开启后会在广告位上以文字提示 @see https://github.com/bytegravity/whitelist-wwads

  // END<----营收相关

  // 自定义配置notion数据库字段名
  NOTION_PROPERTY_NAME: {
    password: process.env.NEXT_PUBLIC_NOTION_PROPERTY_PASSWORD || 'password',
    type: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE || 'type', // 文章类型，
    type_post: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_POST || 'Post', // 当type文章类型与此值相同时，为博文。
    type_page: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_PAGE || 'Page', // 当type文章类型与此值相同时，为单页。
    type_notice:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_NOTICE || 'Notice', // 当type文章类型与此值相同时，为公告。
    type_menu: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_MENU || 'Menu', // 当type文章类型与此值相同时，为菜单。
    type_sub_menu:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_TYPE_SUB_MENU || 'SubMenu', // 当type文章类型与此值相同时，为子菜单。
    title: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TITLE || 'title', // 文章标题
    status: process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS || 'status',
    status_publish:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_PUBLISH || 'Published', // 当status状态值与此相同时为发布，可以为中文
    status_invisible:
      process.env.NEXT_PUBLIC_NOTION_PROPERTY_STATUS_INVISIBLE || 'Invisible', // 当status状态值与此相同时为隐藏发布，可以为中文 ， 除此之外其他页面状态不会显示在博客上
    summary: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SUMMARY || 'summary',
    slug: process.env.NEXT_PUBLIC_NOTION_PROPERTY_SLUG || 'slug',
    category: process.env.NEXT_PUBLIC_NOTION_PROPERTY_CATEGORY || 'category',
    date: process.env.NEXT_PUBLIC_NOTION_PROPERTY_DATE || 'date',
    tags: process.env.NEXT_PUBLIC_NOTION_PROPERTY_TAGS || 'tags',
    icon: process.env.NEXT_PUBLIC_NOTION_PROPERTY_ICON || 'icon',
    ext: process.env.NEXT_PUBLIC_NOTION_PROPERTY_EXT || 'ext' // 扩展字段，存放json-string，用于复杂业务
  },

  // RSS订阅
  ENABLE_RSS: process.env.NEXT_PUBLIC_ENABLE_RSS || false, // 是否开启RSS订阅功能
  MAILCHIMP_LIST_ID: process.env.MAILCHIMP_LIST_ID || null, // 开启mailichimp邮件订阅 客户列表ID ，具体使用方法参阅文档
  MAILCHIMP_API_KEY: process.env.MAILCHIMP_API_KEY || null, // 开启mailichimp邮件订阅 APIkey

  // ANIMATE.css 动画
  ANIMATE_CSS_URL:
    process.env.NEXT_PUBLIC_ANIMATE_CSS_URL ||
    'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css', // 动画CDN

  // 网站图片
  IMG_LAZY_LOAD_PLACEHOLDER:
    process.env.NEXT_PUBLIC_IMG_LAZY_LOAD_PLACEHOLDER ||
    'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==', // 懒加载占位图片地址，支持base64或url
  IMG_URL_TYPE: process.env.NEXT_PUBLIC_IMG_TYPE || 'Notion', // 此配置已失效，请勿使用；AMAZON方案不再支持，仅支持Notion方案。 ['Notion','AMAZON'] 站点图片前缀 默认 Notion:(https://notion.so/images/xx) ， AMAZON(https://s3.us-west-2.amazonaws.com/xxx)
  IMG_SHADOW: process.env.NEXT_PUBLIC_IMG_SHADOW || false, // 文章图片是否自动添加阴影
  IMG_COMPRESS_WIDTH: process.env.NEXT_PUBLIC_IMG_COMPRESS_WIDTH || 800, // Notion图片压缩宽度

  // 作废配置
  AVATAR: process.env.NEXT_PUBLIC_AVATAR || '/avatar.svg', // 作者头像，被notion中的ICON覆盖。若无ICON则取public目录下的avatar.png
  TITLE: process.env.NEXT_PUBLIC_TITLE || 'WobBLOG', // 站点标题 ，被notion中的页面标题覆盖；此处请勿留空白，否则服务器无法编译
  HOME_BANNER_IMAGE:
    process.env.NEXT_PUBLIC_HOME_BANNER_IMAGE || '/bg_image.jpg', // 首页背景大图, 会被notion中的封面图覆盖，若无封面图则会使用代码中的 /public/bg_image.jpg 文件
  DESCRIPTION:
    process.env.NEXT_PUBLIC_DESCRIPTION || '这是一个由NotionNext生成的站点', // 站点描述，被notion中的页面描述覆盖

  // 开发相关
  NOTION_ACCESS_TOKEN: process.env.NOTION_ACCESS_TOKEN || '', // Useful if you prefer not to make your database public
  DEBUG: process.env.NEXT_PUBLIC_DEBUG || false, // 是否显示调试按钮
  ENABLE_CACHE:
    process.env.ENABLE_CACHE ||
    process.env.npm_lifecycle_event === 'build' ||
    process.env.npm_lifecycle_event === 'export', // 在打包过程中默认开启缓存，开发或运行时开启此功能意义不大。
  isProd: process.env.VERCEL_ENV === 'production' || process.env.EXPORT, // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  BUNDLE_ANALYZER: process.env.ANALYZE === 'true' || false, // 是否展示编译依赖内容与大小
  VERSION: process.env.NEXT_PUBLIC_VERSION // 版本号
}

module.exports = BLOG
