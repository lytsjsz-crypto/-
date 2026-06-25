const languageText = {
  zh: {
    appTitle: "注销之前",
    subtitle: "在彻底退出SNS之前，先撑过这一年",
    turnLabel: "当前回合",
    phaseLabel: "阶段",
    energyLabel: "行动点",
    langButton: "日本語",
    restart: "重新开始",
    rolePanel: "开局角色",
    reroll: "随机重抽",
    abilityLabel: "能力",
    weaknessLabel: "弱点",
    statsPanel: "状态属性",
    actionPanel: "应对手牌",
    eraPanel: "时代卡",
    riskPanel: "危险条件",
    logPanel: "事件日志",
    logSub: "最近记录",
    nextTurn: "进入下一回合",
    endingRestart: "重新开始",
  },
  ja: {
    appTitle: "ログアウトする前に",
    subtitle: "SNSから完全に離れる前に、この一年を生き延びる",
    turnLabel: "現在ターン",
    phaseLabel: "フェーズ",
    energyLabel: "行動力",
    langButton: "中文",
    restart: "最初から",
    rolePanel: "初期キャラクター",
    reroll: "引き直す",
    abilityLabel: "能力",
    weaknessLabel: "弱点",
    statsPanel: "状態パラメータ",
    actionPanel: "対処カード",
    eraPanel: "時代カード",
    riskPanel: "危険条件",
    logPanel: "ログ",
    logSub: "最近の記録",
    nextTurn: "次のターンへ",
    endingRestart: "最初から",
  },
};

function getStoredLanguage() {
  try {
    return localStorage.getItem("logoutBeforeLanguage");
  } catch {
    return null;
  }
}

let currentLang = getStoredLanguage() || "ja";

function isJapanese() {
  return currentLang === "ja";
}

function uiText(key) {
  return languageText[currentLang]?.[key] ?? languageText.zh[key] ?? key;
}

const statMeta = {
  sns: { name: "SNS依存", jp: "SNS依存", color: "#0f766e" },
  approval: { name: "承认欲求", jp: "承認欲求", color: "#c28a20" },
  self: { name: "自己肯定感", jp: "自己肯定感", color: "#3e8d65" },
  fatigue: { name: "疲劳", jp: "疲労", color: "#d95a4e" },
  reality: { name: "现实连接", jp: "現実とのつながり", color: "#2f6f9f" },
};

function statName(key) {
  const meta = statMeta[key];
  return isJapanese() ? meta.jp : meta.name;
}

const roles = [
  {
    id: "influencer",
    name: "小网红",
    jp: "小インフルエンサー",
    stats: { sns: 8, approval: 9, self: 3, fatigue: 7, reality: 2 },
    snsHours: "18小时",
    introTitle: "你是小网红。你已经快被自己的账号吞掉了。",
    intro:
      "你每天使用SNS时间高达18小时。除了睡觉，你几乎一直在线：醒来第一件事是看通知，吃饭时刷评论，睡前最后一件事是刷新数据。点赞变多时，你会短暂觉得自己还存在；但失眠、心悸和现实关系的断线已经开始逼近。如果继续这样，不超过五回合，你会进入非常危险的状态。",
    arc: "粉丝、商单、催更和数据下滑会不断把你推回账号里。被看见很甜，也很容易把人拖垮。",
    ability: "点赞和爆红事件收益+1。",
    weakness: "炎上伤害更大。",
  },
  {
    id: "honorStudent",
    name: "焦虑优等生",
    jp: "不安な優等生",
    stats: { sns: 6, approval: 7, self: 2, fatigue: 8, reality: 4 },
    snsHours: "17.5小时",
    introTitle: "你是焦虑优等生。你把人生过成了公开排名。",
    intro:
      "你每天使用SNS时间高达17.5小时。除了睡觉，你几乎一直在比较、查询、刷新。表面上你在学习、申请、准备未来，实际上每隔几分钟就会打开SNS看同龄人的成绩、实习和录取。你已经分不清努力是为了自己，还是为了不被别人甩下。",
    arc: "排名截图、申请截止和老师评价会反复追上你。你越想证明自己，越容易被比较掏空。",
    ability: "学习类事件额外获得自己肯定感。",
    weakness: "比较类事件额外失去自己肯定感。",
  },
  {
    id: "shutIn",
    name: "社恐宅人",
    jp: "引きこもり気味の若者",
    stats: { sns: 7, approval: 4, self: 3, fatigue: 6, reality: 1 },
    snsHours: "18.5小时",
    introTitle: "你是社恐宅人。网络世界是你的房间，也是你的牢笼。",
    intro:
      "你每天使用SNS时间高达18.5小时。除了几段短睡，你几乎没有真正离开过屏幕。吃饭、休息、聊天、看世界都在手机里完成。你不太追求很多点赞，但你害怕现实中的目光、声音和临场反应。现实连接已经接近断线。",
    arc: "房间和屏幕让你觉得安全，也让现实关系越来越远。每一次出门邀请都既像机会，也像威胁。",
    ability: "休息类事件恢复效果更强。",
    weakness: "社交类事件收益减弱。",
  },
  {
    id: "flamePoster",
    name: "炎上型发信者",
    jp: "炎上型発信者",
    stats: { sns: 8, approval: 10, self: 4, fatigue: 6, reality: 3 },
    snsHours: "18小时",
    introTitle: "你是炎上型发信者。你太擅长把自己放进风暴中心。",
    intro:
      "你每天使用SNS时间高达18小时。除了睡觉，你几乎一直在看评论、找话题、等待下一次回应。你知道什么话题会引爆评论区，也知道争议能带来关注。每一次对线都让你觉得自己还掌握着场面，但身体已经被愤怒、兴奋和失眠推到极限。",
    arc: "评论串、平台警告和旧发言会持续追上你。争议带来的快感很强，无法收场的代价也很近。",
    ability: "争议话题更容易获得关注。",
    weakness: "炎上事件伤害更大。",
  },
];

const roleJa = {
  influencer: {
    snsHours: "18時間",
    introTitle: "あなたは小インフルエンサー。自分のアカウントに飲み込まれかけている。",
    intro:
      "あなたのSNS利用時間は一日18時間。寝ている時間以外、ほとんどオンラインにいる。起きた瞬間に通知を見て、食事中にコメントを読み、眠る直前まで数字を更新する。いいねが増えると少しだけ自分が存在している気がするが、不眠、動悸、現実の人間関係の断線はもう近くまで来ている。このままだと、5ターン以内にかなり危険な状態に入る。",
    arc: "フォロワー、PR案件、更新を求める声、数字の低下が、何度もあなたをアカウントへ引き戻す。見られることは甘い。でも、簡単に人をすり減らす。",
    ability: "いいね・バズ関連の効果が少し強くなる。",
    weakness: "炎上によるダメージが大きい。",
  },
  honorStudent: {
    snsHours: "17.5時間",
    introTitle: "あなたは不安な優等生。人生が公開ランキングのようになっている。",
    intro:
      "あなたのSNS利用時間は一日17.5時間。寝ている時間以外、ほとんど比較し、検索し、更新している。表面上は勉強や申請、将来の準備をしているが、数分おきにSNSを開き、同世代の成績、インターン、合格通知を見てしまう。努力が自分のためなのか、置いていかれないためなのか、もうわからなくなっている。",
    arc: "成績スクショ、申請締切、先生の評価が何度も追いかけてくる。証明しようとするほど、比較に削られていく。",
    ability: "学習系イベントで自己肯定感を得やすい。",
    weakness: "比較系イベントで自己肯定感を失いやすい。",
  },
  shutIn: {
    snsHours: "18.5時間",
    introTitle: "あなたは引きこもり気味の若者。ネット世界は部屋であり、檻でもある。",
    intro:
      "あなたのSNS利用時間は一日18.5時間。短い睡眠以外、ほとんど画面から離れていない。食事、休憩、会話、世界を見ることまでスマホの中で完結している。大量のいいねを強く求めているわけではないが、現実の視線、声、その場の反応が怖い。現実とのつながりは、もう切れかけている。",
    arc: "部屋と画面は安全に見えるが、現実の関係を遠ざけてもいる。外に誘われるたび、それは機会にも脅威にも見える。",
    ability: "休息系イベントの回復効果が強い。",
    weakness: "社交系イベントの利益が弱くなる。",
  },
  flamePoster: {
    snsHours: "18時間",
    introTitle: "あなたは炎上型発信者。自分を嵐の中心に置くのがうますぎる。",
    intro:
      "あなたのSNS利用時間は一日18時間。寝ている時間以外、コメントを見て、話題を探し、次の反応を待っている。どんな話題がコメント欄を燃やすか、争いが注目を呼ぶことも知っている。言い返すたびに場を支配している気がするが、身体は怒り、興奮、不眠で限界に近づいている。",
    arc: "コメント欄、プラットフォームからの警告、過去の発言がずっと追いかけてくる。争いの快感は強いが、収拾不能になる代償も近い。",
    ability: "論争系の話題で注目を集めやすい。",
    weakness: "炎上イベントのダメージが大きい。",
  },
};

const routes = [
  {
    id: "route-delete-video",
    tag: "断舍离",
    title: "删除短视频App七天",
    desc: "你没有注销账号，只是先砍掉最会吞时间的入口。空下来的时间很刺耳，也很真实。",
    destiny: "会大幅降低SNS依存，但错过感和焦虑会反扑。",
    effects: { sns: -3, fatigue: 1, self: 1, approval: 1 },
    tags: ["boundary", "rest", "sns"],
    story: { boundary: 2 },
  },
  {
    id: "route-alt-account",
    tag: "小号",
    title: "开一个全新的匿名小号",
    desc: "你告诉自己这只是重新开始，但新的身份也可能变成新的牢笼。",
    destiny: "会把你推向更深的SNS循环，后续更容易遇到争议和爆红事件。",
    effects: { sns: 2, approval: 2, self: -2, fatigue: 1 },
    tags: ["sns", "likes", "controversy"],
    story: { loop: 2, flame: 1 },
  },
  {
    id: "route-old-friend",
    tag: "旧友",
    title: "给旧友打电话坦白近况",
    desc: "你没有说得很漂亮，只是承认自己最近不太好。电话另一端的沉默，比评论区温柔得多。",
    destiny: "会把剧情拉向现实关系，也会让后续线下选择更容易出现。",
    effects: { reality: 3, fatigue: 1, self: 1, approval: 1 },
    tags: ["social", "reflect"],
    story: { rin: 3, boundary: 1 },
  },
  {
    id: "route-public-essay",
    tag: "长文",
    title: "发一篇解释自己近况的长文",
    desc: "你想让别人理解你为什么变成这样。写出来会轻一点，但也会把脆弱放到人群中央。",
    destiny: "会增加被看见的机会，也更容易引来误解。",
    effects: { approval: 2, sns: 1, fatigue: 2, self: -1 },
    tags: ["likes", "reflect", "flame"],
    story: { creator: 1, flame: 1 },
  },
  {
    id: "route-silent-day",
    tag: "消失",
    title: "一天不发任何东西",
    desc: "你没有解释，也没有营业。数据会掉，但身体第一次不用立刻回应所有人。",
    destiny: "会让你远离平台节奏，但短期内承认欲求会明显不安。",
    effects: { sns: -2, approval: -2, fatigue: -1, self: 1 },
    tags: ["boundary", "rest"],
    story: { boundary: 2 },
  },
  {
    id: "route-allnight-work",
    tag: "通宵",
    title: "通宵赶完一份作品",
    desc: "你终于做出了东西。它属于你，但代价是身体被狠狠透支。",
    destiny: "会推进创作者方向，也会把疲劳推到危险线。",
    effects: { self: 2, approval: 1, fatigue: 3, sns: 1 },
    tags: ["study", "compare", "real"],
    story: { creator: 2, future: 1 },
  },
  {
    id: "route-offline-event",
    tag: "线下",
    title: "参加一个线下活动",
    desc: "你站在人群里，觉得自己有点笨拙。但至少这一刻，别人不是头像，你也不是数据。",
    destiny: "会增强现实连接，后续更容易出现线下机会。",
    effects: { reality: 3, fatigue: 2, self: 1, sns: -1 },
    tags: ["social", "real"],
    story: { rin: 1, future: 2 },
  },
  {
    id: "route-live-response",
    tag: "回应",
    title: "开直播回应质疑",
    desc: "你想把话说清楚，也想证明自己没有输。直播会带来流量，也会扩大风险。",
    destiny: "会把剧情推向炎上和高曝光，短期收益很大，代价也很大。",
    effects: { approval: 3, sns: 2, fatigue: 2, self: -2 },
    tags: ["flame", "controversy", "viral"],
    story: { flame: 3, loop: 1 },
  },
  {
    id: "route-sleep-log",
    tag: "睡眠",
    title: "开始记录睡眠和使用时间",
    desc: "你第一次认真看见自己到底把多少时间交给了屏幕。数字很难看，但真实。",
    destiny: "会打开自救路线，但也会让你短暂焦虑。",
    effects: { fatigue: -2, self: 1, sns: 1, approval: 1 },
    tags: ["rest", "reflect", "boundary"],
    story: { boundary: 2, future: 1 },
  },
  {
    id: "route-private-account",
    tag: "私密",
    title: "把账号设为私密",
    desc: "你把门关上一点。外面的声音小了，错过感却变得更清楚。",
    destiny: "会降低平台压力，也会减少被看见的机会。",
    effects: { sns: -2, approval: -2, self: 1, fatigue: 1 },
    tags: ["boundary", "reflect"],
    story: { boundary: 2 },
  },
  {
    id: "route-full-logout",
    tag: "注销",
    title: "注销主账号",
    desc: "你真的按下了那个按钮。安静来得很猛，像失去一部分自己。",
    destiny: "只有SNS依存很高时才会出现。它会强行改变后续路线池。",
    effects: { sns: -5, approval: -3, self: 2, reality: 1, fatigue: 2 },
    tags: ["boundary", "rest"],
    story: { boundary: 4, future: 1 },
    unlock: { sns: { min: 8 } },
  },
  {
    id: "route-face-reveal",
    tag: "露脸",
    title: "接受一次露脸直播合作",
    desc: "这是一次巨大的曝光机会。你会被更多人记住，也更难退回普通生活。",
    destiny: "承认欲求高时解锁，会明显推向爆红或炎上结局。",
    effects: { approval: 4, sns: 2, fatigue: 3, self: -1, reality: -1 },
    tags: ["viral", "likes", "flame"],
    story: { loop: 2, flame: 2 },
    unlock: { approval: { min: 8 } },
  },
  {
    id: "route-counseling",
    tag: "求助",
    title: "预约学校或社区咨询",
    desc: "你承认自己不是简单地“玩手机太多”。这句话说出口，很难，也很重要。",
    destiny: "自己肯定感很低时解锁，会打开恢复路线。",
    effects: { self: 2, fatigue: -2, reality: 1, approval: 1 },
    tags: ["social", "rest", "reflect"],
    story: { boundary: 3, future: 1 },
    unlock: { self: { max: 3 } },
  },
  {
    id: "route-stop-updating",
    tag: "停更",
    title: "请假停更三天",
    desc: "你写下停更通知，手指停了很久才发出去。休息终于有了一个正式理由。",
    destiny: "疲劳很高时解锁，是从崩溃边缘撤退的路线。",
    effects: { fatigue: -3, sns: -1, approval: 2, self: 1 },
    tags: ["boundary", "rest", "likes"],
    story: { boundary: 3 },
    unlock: { fatigue: { min: 8 } },
  },
  {
    id: "route-emergency-call",
    tag: "求救",
    title: "给现实中的人打求救电话",
    desc: "你没有包装自己，只说：我可能真的撑不住了。",
    destiny: "现实连接很低时解锁，会强行把你拉回现实关系。",
    effects: { reality: 3, fatigue: 1, self: 1, sns: -1 },
    tags: ["social", "real"],
    story: { rin: 3, boundary: 1 },
    unlock: { reality: { max: 2 } },
  },
  {
    id: "route-no-data-work",
    tag: "不看数据",
    title: "做一件完全不看数据的作品",
    desc: "你关掉后台，只看作品本身。它可能不会红，但它终于不是为了喂算法。",
    destiny: "自己肯定感较高时解锁，会推进内在稳定结局。",
    effects: { self: 3, approval: -1, fatigue: 1, sns: -1 },
    tags: ["study", "reflect", "boundary"],
    story: { creator: 3, future: 1 },
    unlock: { self: { min: 6 } },
  },
  {
    id: "route-small-exhibition",
    tag: "小展",
    title: "把作品带去线下小展",
    desc: "这里没有算法推荐，但会有人站在作品前停留。那种反馈很慢，也很重。",
    destiny: "现实连接足够时解锁，会推进创作者和现实回归路线。",
    effects: { reality: 2, self: 2, fatigue: 2, approval: 1 },
    tags: ["social", "study", "real"],
    story: { creator: 3, future: 2 },
    unlock: { reality: { min: 6 } },
  },
  {
    id: "route-counterattack",
    tag: "反击",
    title: "公开反击一条恶评",
    desc: "你明知道它会扩大争议，但你就是不想再忍。",
    destiny: "承认欲求高、自己肯定感低时解锁，会显著增加炎上风险。",
    effects: { approval: 3, sns: 2, fatigue: 3, self: -2 },
    tags: ["flame", "controversy"],
    story: { flame: 4 },
    unlock: { approval: { min: 8 }, self: { max: 4 } },
  },
  {
    id: "route-reinstall",
    tag: "复吸",
    title: "重新安装刚删掉的App",
    desc: "你告诉自己只是确认一下消息。十分钟后，你已经回到熟悉的推荐流里。",
    destiny: "SNS依存降低后才会出现，代表复吸风险。",
    effects: { sns: 3, fatigue: -1, approval: 1, self: -1 },
    tags: ["sns", "likes"],
    story: { loop: 3 },
    unlock: { sns: { max: 4 } },
  },
  {
    id: "route-hard-project",
    tag: "高压项目",
    title: "接下一个高强度项目",
    desc: "你觉得自己终于有力气了，于是立刻把新的压力放到肩上。",
    destiny: "疲劳较低且自己肯定感较高时解锁，可能通向成就，也可能再次耗竭。",
    effects: { self: 2, approval: 2, fatigue: 3, reality: 1 },
    tags: ["study", "real", "likes"],
    story: { creator: 2, future: 2 },
    unlock: { fatigue: { max: 4 }, self: { min: 5 } },
  },
  {
    id: "route-confess-burnout",
    tag: "承认崩溃",
    title: "发动态承认自己撑不住了",
    desc: "你没有再装成一切都好。有人会靠近，也有人会把它当成表演。",
    destiny: "疲劳和承认欲求都高时解锁，会改变他人对你的回应方式。",
    effects: { approval: 2, reality: 1, fatigue: -1, self: 1, sns: 1 },
    tags: ["likes", "reflect", "social"],
    story: { boundary: 2, rin: 1 },
    unlock: { fatigue: { min: 7 }, approval: { min: 7 } },
  },
  {
    id: "route-delete-comparison",
    tag: "清理关注",
    title: "删除一批比较对象",
    desc: "你不再每天把自己放进别人的进度条里。少了很多刺激，也少了很多自我惩罚。",
    destiny: "承认欲求较高时解锁，会削弱比较路线。",
    effects: { approval: -3, self: 2, fatigue: 1, sns: -1 },
    tags: ["boundary", "compare"],
    story: { boundary: 2, future: 1 },
    unlock: { approval: { min: 7 } },
  },
  {
    id: "route-workshop",
    tag: "工作坊",
    title: "参加一个线下创作工作坊",
    desc: "你把作品从屏幕里拿出来，和真实的人一起讨论。很累，但不是空耗。",
    destiny: "现实连接和自己肯定感足够时解锁，会推进创作者方向。",
    effects: { reality: 2, self: 2, fatigue: 2, sns: -1 },
    tags: ["study", "social", "real"],
    story: { creator: 2, future: 2 },
    unlock: { reality: { min: 4 }, self: { min: 4 } },
  },
  {
    id: "route-hot-topic",
    tag: "热点",
    title: "追一个争议热点",
    desc: "你知道这件事会吵起来，也知道吵起来就会有人看。",
    destiny: "SNS依存较高时解锁，会把你推向流量和炎上。",
    effects: { approval: 3, sns: 2, fatigue: 2, self: -1 },
    tags: ["controversy", "viral", "sns"],
    story: { flame: 2, loop: 2 },
    unlock: { sns: { min: 7 } },
  },
  {
    id: "route-therapy",
    tag: "专业求助",
    title: "预约心理咨询",
    desc: "你终于承认，这不是靠意志力就能解决的问题。",
    destiny: "自己肯定感极低且疲劳高时解锁，是危险状态下的强恢复路线。",
    effects: { self: 3, fatigue: -1, reality: 2, approval: 1 },
    tags: ["rest", "social", "reflect"],
    story: { boundary: 3, future: 2 },
    unlock: { self: { max: 2 }, fatigue: { min: 7 } },
  },
  {
    id: "route-phone-guard",
    tag: "托管手机",
    title: "把手机交给别人保管一晚",
    desc: "你不是不想拿回来。你只是第一次承认，靠自己放下它太难了。",
    destiny: "SNS依存极高时解锁，会强制切断一部分循环。",
    effects: { sns: -4, fatigue: -2, approval: 2, self: 1 },
    tags: ["boundary", "rest", "social"],
    story: { boundary: 4, rin: 1 },
    unlock: { sns: { min: 9 } },
  },
  {
    id: "route-clean-room",
    tag: "整理房间",
    title: "整理房间并丢掉旧物",
    desc: "你没有直接改变人生，只是先让现实空间不再像废墟。",
    destiny: "疲劳较高且现实连接低时解锁，会把注意力拉回身体和房间。",
    effects: { fatigue: -2, reality: 1, self: 1, sns: 1 },
    tags: ["real", "rest", "reflect"],
    story: { boundary: 1, future: 1 },
    unlock: { fatigue: { min: 6 }, reality: { max: 4 } },
  },
  {
    id: "route-show-failure",
    tag: "失败公开",
    title: "公开一件失败作品",
    desc: "你不再只展示漂亮的结果。这个决定很丢脸，也很自由。",
    destiny: "自己肯定感达到一定程度时解锁，会削弱评价依赖。",
    effects: { self: 2, approval: -1, fatigue: 1, reality: 1 },
    tags: ["reflect", "study", "real"],
    story: { creator: 2, boundary: 1 },
    unlock: { self: { min: 4 }, approval: { max: 6 } },
  },
  {
    id: "route-trend-month",
    tag: "追热点",
    title: "连续一个月追热点",
    desc: "你把生活排进热点日历里。数字可能会上来，但你很难再听见自己的声音。",
    destiny: "承认欲求较高时解锁，明显推向爆红或耗竭。",
    effects: { approval: 3, sns: 2, fatigue: 3, self: -1 },
    tags: ["viral", "likes", "sns"],
    story: { loop: 3, flame: 1 },
    unlock: { approval: { min: 6 } },
  },
  {
    id: "route-community",
    tag: "志愿活动",
    title: "参加一次线下志愿活动",
    desc: "没有人给你点赞，但有人真的因为你轻松了一点。",
    destiny: "现实连接较高时解锁，会强化现实回归。",
    effects: { reality: 3, self: 1, fatigue: 2, sns: -1 },
    tags: ["social", "real"],
    story: { future: 2, rin: 1 },
    unlock: { reality: { min: 5 }, fatigue: { max: 7 } },
  },
];

const routeJa = {
  "route-delete-video": {
    tag: "デトックス",
    title: "ショート動画アプリを7日間削除する",
    desc: "アカウントを消すのではなく、まず一番時間を奪う入口を切る。空いた時間は少し痛い。でも確かに現実だ。",
    destiny: "SNS依存は大きく下がるが、取り残される不安も反動として戻ってくる。",
  },
  "route-alt-account": {
    tag: "裏アカ",
    title: "新しい匿名アカウントを作る",
    desc: "これはやり直しだと自分に言い聞かせる。でも、新しい名前もまた新しい檻になりうる。",
    destiny: "SNSのループを深め、後半で炎上やバズ系イベントに近づきやすくなる。",
  },
  "route-old-friend": {
    tag: "旧友",
    title: "旧友に電話して近況を話す",
    desc: "きれいに説明できたわけではない。ただ、最近あまりよくないと認めた。電話の向こうの沈黙は、コメント欄よりずっとやさしい。",
    destiny: "物語が現実の人間関係へ寄り、後のオフライン選択が出やすくなる。",
  },
  "route-public-essay": {
    tag: "長文",
    title: "今の自分について長文で説明する",
    desc: "なぜこうなったのか、誰かにわかってほしい。書けば少し軽くなるが、弱さを人前に置くことにもなる。",
    destiny: "見られる機会は増えるが、誤解されるリスクも増える。",
  },
  "route-silent-day": {
    tag: "沈黙",
    title: "一日なにも投稿しない",
    desc: "説明も営業もしない。数字は落ちるが、身体は初めてすぐ返事をしなくてよくなる。",
    destiny: "プラットフォームの速度から離れる一方、承認欲求は短期的に不安定になる。",
  },
  "route-allnight-work": {
    tag: "徹夜",
    title: "徹夜で作品を仕上げる",
    desc: "やっと形になった。それはあなたのものだ。でも代償として身体は強く削られる。",
    destiny: "創作ルートを進めるが、疲労も危険ラインへ近づく。",
  },
  "route-offline-event": {
    tag: "オフライン",
    title: "オフラインイベントに参加する",
    desc: "人の中に立つと少しぎこちない。でもこの瞬間、相手はアイコンではなく、あなたも数字ではない。",
    destiny: "現実とのつながりが強まり、後のオフライン機会が出やすくなる。",
  },
  "route-live-response": {
    tag: "応答",
    title: "ライブ配信で疑問に答える",
    desc: "言いたいことを説明したいし、負けていないことも示したい。配信は流量を生むが、リスクも広げる。",
    destiny: "炎上と高露出へ向かいやすい。短期利益は大きいが、代償も大きい。",
  },
  "route-sleep-log": {
    tag: "睡眠",
    title: "睡眠時間と使用時間を記録する",
    desc: "自分がどれだけの時間を画面に渡しているのか、初めて正面から見る。数字はひどい。でも本当だ。",
    destiny: "自助ルートを開くが、短期的な不安も生む。",
  },
  "route-private-account": {
    tag: "非公開",
    title: "アカウントを非公開にする",
    desc: "少しだけ扉を閉める。外の声は小さくなるが、取り残される感じはむしろはっきりする。",
    destiny: "プラットフォームからの圧力は下がるが、見られる機会も減る。",
  },
  "route-full-logout": {
    tag: "ログアウト",
    title: "メインアカウントを削除する",
    desc: "本当にそのボタンを押した。静けさは強烈で、自分の一部を失ったようにも感じる。",
    destiny: "SNS依存が高い時だけ現れる。後のルートプールを強制的に変える。",
  },
  "route-face-reveal": {
    tag: "顔出し",
    title: "顔出し配信の案件を受ける",
    desc: "大きな露出の機会だ。多くの人に覚えられる一方、普通の生活へ戻りにくくなる。",
    destiny: "承認欲求が高い時に解放され、バズまたは炎上エンドへ近づく。",
  },
  "route-counseling": {
    tag: "相談",
    title: "学校や地域の相談窓口を予約する",
    desc: "これは単にスマホを見すぎているだけではない、と認める。その言葉は難しいが重要だ。",
    destiny: "自己肯定感が低い時に解放され、回復ルートを開く。",
  },
  "route-stop-updating": {
    tag: "休止",
    title: "三日間の更新休止を告知する",
    desc: "休止のお知らせを書く。投稿するまで指が止まる。休むことに、ようやく理由ができた。",
    destiny: "疲労が高い時に解放され、崩壊寸前から退く選択になる。",
  },
  "route-emergency-call": {
    tag: "SOS",
    title: "現実の誰かに助けを求める",
    desc: "きれいに言えなくていい。ただ、もう本当に限界かもしれないと伝える。",
    destiny: "現実接続が低い時に解放され、強制的に現実関係へ引き戻す。",
  },
  "route-no-data-work": {
    tag: "データ遮断",
    title: "数字を見ずに作品を作る",
    desc: "管理画面を閉じ、作品そのものを見る。バズらないかもしれない。でもアルゴリズムの餌ではなくなる。",
    destiny: "自己肯定感が高い時に解放され、内的安定へ近づく。",
  },
  "route-small-exhibition": {
    tag: "小展示",
    title: "作品を小さな展示に出す",
    desc: "ここにはおすすめ欄はない。でも作品の前で足を止める人がいる。その反応は遅いが重い。",
    destiny: "現実接続が十分な時に解放され、創作者・現実回帰ルートを進める。",
  },
  "route-counterattack": {
    tag: "反撃",
    title: "悪いコメントに公然と反撃する",
    desc: "争いが広がるとわかっている。それでも、もう黙っていたくない。",
    destiny: "承認欲求が高く自己肯定感が低い時に解放され、炎上リスクを大きく上げる。",
  },
  "route-reinstall": {
    tag: "再インストール",
    title: "削除したアプリを入れ直す",
    desc: "ちょっと確認するだけ、と言い聞かせる。十分後には、もう見慣れたおすすめ欄に戻っている。",
    destiny: "SNS依存が下がった後に現れる、再依存の危険を表す。",
  },
  "route-hard-project": {
    tag: "高負荷",
    title: "高負荷のプロジェクトを引き受ける",
    desc: "少し元気が戻ったと思った瞬間、新しい重さを肩に乗せてしまう。",
    destiny: "疲労が低く自己肯定感がある時に解放され、成果にも消耗にもつながる。",
  },
  "route-confess-burnout": {
    tag: "限界告白",
    title: "もう限界だと投稿で認める",
    desc: "もう平気なふりをしない。近づく人もいるし、それを演出だと見る人もいる。",
    destiny: "疲労と承認欲求が高い時に解放され、周囲の反応を変える。",
  },
  "route-delete-comparison": {
    tag: "整理",
    title: "比較対象をまとめて外す",
    desc: "他人の進捗表に自分を置くのをやめる。刺激は減るが、自分への罰も減る。",
    destiny: "承認欲求が高い時に解放され、比較ルートを弱める。",
  },
  "route-workshop": {
    tag: "ワークショップ",
    title: "オフラインの創作ワークショップに参加する",
    desc: "作品を画面から外へ出し、現実の人と話す。疲れるが、空っぽな疲れ方ではない。",
    destiny: "現実接続と自己肯定感がある時に解放され、創作者方向を進める。",
  },
  "route-hot-topic": {
    tag: "話題",
    title: "論争中の話題を追う",
    desc: "荒れるとわかっている。でも荒れれば見られることも知っている。",
    destiny: "SNS依存が高い時に解放され、流量と炎上へ近づく。",
  },
  "route-therapy": {
    tag: "専門相談",
    title: "心理カウンセリングを予約する",
    desc: "これは意志力だけで解決する問題ではない、とようやく認める。",
    destiny: "自己肯定感が極端に低く疲労が高い時に解放される、強い回復ルート。",
  },
  "route-phone-guard": {
    tag: "スマホ預け",
    title: "一晩スマホを誰かに預ける",
    desc: "返してほしくないわけではない。ただ、自分だけで手放すのが難しいと初めて認めた。",
    destiny: "SNS依存が極めて高い時に解放され、一部のループを強制的に切る。",
  },
  "route-clean-room": {
    tag: "部屋を整える",
    title: "部屋を片づけ、古い物を捨てる",
    desc: "人生を直接変えるわけではない。ただ、現実の空間を廃墟のままにしない。",
    destiny: "疲労が高く現実接続が低い時に解放され、注意を身体と部屋へ戻す。",
  },
  "route-show-failure": {
    tag: "失敗公開",
    title: "失敗した作品を公開する",
    desc: "きれいな結果だけを見せるのをやめる。恥ずかしいが、少し自由でもある。",
    destiny: "自己肯定感が一定以上ある時に解放され、評価依存を弱める。",
  },
  "route-trend-month": {
    tag: "トレンド追跡",
    title: "一か月トレンドを追い続ける",
    desc: "生活を話題のカレンダーに合わせる。数字は上がるかもしれないが、自分の声は聞こえにくくなる。",
    destiny: "承認欲求が高い時に解放され、バズまたは消耗へ大きく傾く。",
  },
  "route-community": {
    tag: "ボランティア",
    title: "オフラインのボランティアに参加する",
    desc: "いいねはつかない。でも、誰かが少し楽になる。",
    destiny: "現実接続が高い時に解放され、現実回帰を強める。",
  },
};

const storyChapters = [
  {
    start: 1,
    end: 4,
    label: "第1章",
    title: "失控的开局",
    desc: "你不是普通地使用SNS，而是已经被通知、比较和失眠拖到边缘。",
  },
  {
    start: 5,
    end: 8,
    label: "第2章",
    title: "旧友的缝隙",
    desc: "旧友重新出现。现实关系开始敲门，但你还不知道自己敢不敢回应。",
  },
  {
    start: 9,
    end: 12,
    label: "第3章",
    title: "被看见的代价",
    desc: "作品和发言开始被更多人看到。被承认的兴奋，也带来了被误解的风险。",
  },
  {
    start: 13,
    end: 16,
    label: "第4章",
    title: "线下世界",
    desc: "现实给了你几个出口。它们不如推荐流刺激，却可能真的改变生活。",
  },
  {
    start: 17,
    end: 20,
    label: "第5章",
    title: "重新定义自己",
    desc: "你开始分辨：表达、工作、关系和数字评价，究竟哪一个才是你想留下的东西。",
  },
  {
    start: 21,
    end: 24,
    label: "第6章",
    title: "注销之前",
    desc: "一年接近结束。你必须决定，账号、关系和自己之间，谁来决定你的价值。",
  },
];

const chapterJa = {
  1: {
    label: "第1章",
    title: "制御不能な始まり",
    desc: "あなたは普通にSNSを使っているのではない。通知、比較、不眠に、もう端まで追い込まれている。",
  },
  5: {
    label: "第2章",
    title: "旧友からのすき間",
    desc: "旧友がまた現れる。現実の関係が扉を叩き始めるが、あなたはまだ応えられるかわからない。",
  },
  9: {
    label: "第3章",
    title: "見られることの代償",
    desc: "作品や発言が少しずつ多くの人に届き始める。承認の高揚は、誤解される危険も連れてくる。",
  },
  13: {
    label: "第4章",
    title: "オフラインの世界",
    desc: "現実はいくつかの出口を差し出す。おすすめ欄ほど刺激的ではないが、生活を本当に変えるかもしれない。",
  },
  17: {
    label: "第5章",
    title: "自分を定義し直す",
    desc: "表現、仕事、関係、数字の評価。その中で、何を残したいのかを少しずつ見分け始める。",
  },
  21: {
    label: "第6章",
    title: "ログアウトする前に",
    desc: "一年が終わりに近づく。アカウント、関係、自分自身のうち、何に価値を決めさせるのかを選ばなければならない。",
  },
};

const storyThreads = {
  loop: { name: "SNS循环", color: "#0f766e" },
  rin: { name: "旧友关系", color: "#2f6f9f" },
  creator: { name: "作品积累", color: "#3e8d65" },
  boundary: { name: "自救边界", color: "#6c5ab8" },
  flame: { name: "炎上阴影", color: "#d95a4e" },
  future: { name: "未来感", color: "#c28a20" },
};

const eraCards = [
  {
    id: "era_algorithm",
    name: "算法暴走",
    jp: "アルゴリズムの暴走",
    desc: "平台开始极端推送争议、比较和短视频内容。所有和SNS相关的选择更容易把人卷回去。",
    effects: { sns: 1, fatigue: 1 },
  },
  {
    id: "era_compare",
    name: "同龄人成功潮",
    jp: "同世代の成功ラッシュ",
    desc: "时间线上到处都是录取、实习、旅行、作品发布。比较压力像背景噪音一样持续存在。",
    effects: { self: -1, approval: 1 },
  },
  {
    id: "era_flame",
    name: "炎上频发",
    jp: "炎上が頻発する時代",
    desc: "任何一句话都可能被截图、误读和转发。表达会带来关注，也会带来更重的风险。",
    effects: { fatigue: 1, approval: 1 },
  },
  {
    id: "era_recession",
    name: "就业寒冬",
    jp: "就職氷河期ムード",
    desc: "现实前景突然变冷。学习、工作、申请和未来规划都变得更沉重。",
    effects: { fatigue: 2, self: -1 },
  },
  {
    id: "era_notice",
    name: "通知泛滥",
    jp: "通知の洪水",
    desc: "平台通知、私信和系统提醒不断涌来。即使你没有主动打开SNS，它也会来找你。",
    effects: { sns: 1, fatigue: 1, approval: 1 },
  },
  {
    id: "era_offline",
    name: "线下复兴",
    jp: "オフライン回帰",
    desc: "身边的人开始重新组织线下活动。现实世界给了你机会，但走出去也会消耗力气。",
    effects: { reality: 1, fatigue: 1 },
  },
  {
    id: "era_ai",
    name: "AI普及焦虑",
    jp: "AI普及への不安",
    desc: "所有人都在讨论效率、替代和新工具。你一边想追上，一边怀疑自己已经落后。",
    effects: { fatigue: 1, self: -1 },
  },
  {
    id: "era_detox",
    name: "反SNS风潮",
    jp: "反SNSライフスタイル",
    desc: "突然流行起退出SNS和数字断舍离。它给你出口，也让你害怕自己又错过潮流。",
    effects: { sns: -1, approval: 1 },
  },
];

const crisisEvents = [
  {
    id: "CR-01",
    type: "突发危机",
    title: "凌晨惊恐发作",
    jp: "深夜のパニック発作",
    desc: "你盯着屏幕到凌晨，突然心跳加速，手指发麻，像有什么东西从胸口往上顶。手机还在亮，身体却先替你发出了警报。",
    shock: { fatigue: 3, self: -2, sns: 1 },
    tags: ["rest", "sns"],
    choices: [
      { label: "A. 继续刷，假装没事", text: "你用更强的刺激压住恐惧，但身体已经不听话了。", effects: { sns: 2, fatigue: 2, self: -1 }, tags: ["sns"], flags: { loop: 2 } },
      { label: "B. 立刻把手机放到房间外", text: "你切断刺激源，但恐慌不会立刻消失。", effects: { sns: -2, fatigue: 1, self: 1 }, tags: ["boundary", "rest"], flags: { boundary: 2 } },
      { label: "C. 给一个现实中的人打电话", text: "你承认自己可能撑不住了。这个承认很痛，但也是真的求生。", effects: { reality: 2, fatigue: 1, self: 1 }, tags: ["social"], flags: { rin: 2, boundary: 1 } },
    ],
  },
  {
    id: "CR-02",
    type: "突发危机",
    title: "评论区集中攻击",
    jp: "コメント欄で集中的に攻撃される",
    desc: "短短十分钟，评论、私信、转发同时涌来。你明明坐在房间里，却像被很多陌生人围住。",
    shock: { fatigue: 3, self: -2, approval: 2, sns: 1 },
    tags: ["flame", "controversy"],
    choices: [
      { label: "A. 开始逐条反击", text: "你不想输，哪怕每一句反击都在扩大火场。", effects: { approval: 2, sns: 1, fatigue: 2, self: -1 }, tags: ["flame", "controversy"], flags: { flame: 3 } },
      { label: "B. 关闭评论并截图证据", text: "你放弃即时反击，先保护自己。", effects: { sns: -1, fatigue: 1, self: 1 }, tags: ["boundary", "flame"], flags: { boundary: 2, flame: 1 } },
      { label: "C. 找可信的人一起处理", text: "你把一个人的危机变成可以被分担的问题。", effects: { reality: 2, fatigue: -1, self: 1 }, tags: ["social", "flame"], flags: { rin: 2, boundary: 1 } },
    ],
  },
  {
    id: "CR-03",
    type: "突发危机",
    title: "身体检查异常",
    jp: "健康診断の異常",
    desc: "检查结果提示睡眠、心率和压力指标都很糟。医生说：再这样下去，身体会先替你停下来。",
    shock: { fatigue: 4, self: -1, reality: 1 },
    tags: ["real", "rest"],
    choices: [
      { label: "A. 把结果发动态自嘲", text: "你把恐惧变成内容，却没有真正面对身体。", effects: { approval: 2, sns: 1, fatigue: 1 }, tags: ["likes", "sns"], flags: { loop: 1 } },
      { label: "B. 预约复诊并设定睡眠底线", text: "你开始把身体当成不能再透支的现实。", effects: { fatigue: -2, reality: 1, approval: 1 }, tags: ["boundary", "real"], flags: { boundary: 2, future: 1 } },
      { label: "C. 告诉身边人你需要监督", text: "你失去一点自由，也得到一点活下去的结构。", effects: { reality: 2, fatigue: -1, self: 1 }, tags: ["social"], flags: { rin: 2 } },
    ],
  },
  {
    id: "CR-04",
    type: "突发危机",
    title: "账号异常限流",
    jp: "アカウントの制限",
    desc: "你突然发现内容无法正常展示，数据断崖式下跌。你像被平台从世界里拔掉了一根线。",
    shock: { sns: 2, approval: 2, self: -3 },
    tags: ["sns", "likes"],
    choices: [
      { label: "A. 疯狂测试和申诉", text: "你想夺回控制感，却被后台数字拖着跑。", effects: { sns: 2, fatigue: 2, approval: 1 }, tags: ["sns"], flags: { loop: 2 } },
      { label: "B. 暂停更新，备份作品", text: "你把作品从平台里拿出来，虽然心里还在发抖。", effects: { self: 1, sns: -1, fatigue: 1 }, tags: ["boundary", "study"], flags: { creator: 2, boundary: 1 } },
      { label: "C. 转向线下或私域分享", text: "你承认平台不等于全部观众。", effects: { reality: 2, self: 1, approval: 1 }, tags: ["real", "social"], flags: { future: 2 } },
    ],
  },
  {
    id: "CR-05",
    type: "突发危机",
    title: "三天没有现实对话",
    jp: "三日間、現実の会話がない",
    desc: "你突然意识到，过去三天除了外卖备注和表情包，没有和任何真实的人说过完整的话。",
    shock: { reality: -3, self: -1, fatigue: 2, sns: 1 },
    tags: ["social", "sns"],
    choices: [
      { label: "A. 继续用时间线填满空白", text: "你不再感到安静，但孤立没有变少。", effects: { sns: 2, fatigue: 1, reality: -1 }, tags: ["sns"], flags: { loop: 2 } },
      { label: "B. 给旧友发一个短消息", text: "你只发了几个字，却把现实重新打开一点。", effects: { reality: 2, fatigue: 1, self: 1 }, tags: ["social"], flags: { rin: 2 } },
      { label: "C. 去便利店和店员说话", text: "这不是亲密关系，但你的声音回到了现实里。", effects: { reality: 1, fatigue: 1, sns: -1 }, tags: ["real"], flags: { future: 1 } },
    ],
  },
  {
    id: "CR-06",
    type: "突发危机",
    title: "旧伤被翻出",
    jp: "過去の傷が掘り返される",
    desc: "一段你很久以前的失败经历被人重新提起。那些你以为已经过去的羞耻感，又一次冲上来。",
    shock: { self: -3, fatigue: 2, approval: 1 },
    tags: ["compare", "flame"],
    choices: [
      { label: "A. 发长文证明自己已经变了", text: "你想赢回叙事权，也再次把伤口暴露给所有人。", effects: { approval: 2, fatigue: 2, self: -1 }, tags: ["flame", "likes"], flags: { flame: 2 } },
      { label: "B. 只和可信的人谈这件事", text: "你没有公开表演痛苦，而是让它被真实接住。", effects: { reality: 2, fatigue: -1, self: 1 }, tags: ["social", "reflect"], flags: { rin: 2, boundary: 1 } },
      { label: "C. 写下来但不发布", text: "你把伤口整理成语言，却不再交给评论区审判。", effects: { self: 2, fatigue: 1, approval: 1 }, tags: ["reflect", "boundary"], flags: { boundary: 2, creator: 1 } },
    ],
  },
];

const suddenImpactEvents = [
  {
    id: "IMP-01",
    label: "命运冲击",
    title: "父母深夜进了急诊",
    jp: "親が深夜に救急搬送される",
    desc: "电话响起时，你还在刷短视频。家人说情况还不确定，让你别慌。屏幕上的推荐流突然变得很远，你第一次意识到，现实不会等你刷完这一条。",
    effects: { fatigue: 4, reality: 3, sns: -3, self: -1 },
  },
  {
    id: "IMP-02",
    label: "命运冲击",
    title: "家里被偷了",
    jp: "家に泥棒が入る",
    desc: "门锁被撬开，房间被翻得一团乱。你站在现实的废墟里，突然觉得自己这段时间一直守着账号，却没有守住生活。",
    effects: { fatigue: 5, self: -2, reality: -2, sns: -1 },
  },
  {
    id: "IMP-03",
    label: "命运冲击",
    title: "你突然中了大奖",
    jp: "突然、抽選に当たる",
    desc: "一条中奖通知跳出来。金额不至于改变阶层，却足够让你短暂喘口气。你兴奋得想立刻发动态，也害怕这点好运被所有人看见后变味。",
    effects: { self: 3, fatigue: -3, approval: 3, sns: 2, reality: 1 },
  },
  {
    id: "IMP-04",
    label: "命运冲击",
    title: "主账号被封禁七天",
    jp: "メインアカウントが七日間停止される",
    desc: "没有预告，没有解释。你刷新了很多次，页面只剩下冷冰冰的通知。你像被平台从世界上剪掉了一块。",
    effects: { sns: -4, approval: -4, self: -2, fatigue: 3, reality: 1 },
  },
  {
    id: "IMP-05",
    label: "命运冲击",
    title: "家人发现了你的账号",
    jp: "家族にアカウントを見つけられる",
    desc: "他们看见了那些你以为只属于网络的发言、照片和崩溃。饭桌安静得可怕，你突然不知道该保护自己，还是解释自己。",
    effects: { fatigue: 4, self: -3, reality: -2, approval: 1, sns: 1 },
  },
  {
    id: "IMP-06",
    label: "命运冲击",
    title: "旧友站在你家楼下",
    jp: "旧友が家の下まで来る",
    desc: "旧友没有问你为什么不回消息，只说：我刚好在附近。你知道这不是真的刚好。现实关系用一种很笨拙、很重的方式敲门了。",
    effects: { reality: 5, self: 2, fatigue: 2, sns: -2 },
  },
  {
    id: "IMP-07",
    label: "命运冲击",
    title: "房租和账单同时压下来",
    jp: "家賃と請求書が同時に来る",
    desc: "银行卡余额、房租提醒、分期扣款挤在同一天出现。那些被SNS暂时遮住的现实问题，一次性站到你面前。",
    effects: { fatigue: 5, self: -2, reality: 2, sns: -1 },
  },
  {
    id: "IMP-08",
    label: "命运冲击",
    title: "作品被大号转发",
    jp: "作品が大きなアカウントに拡散される",
    desc: "通知像暴雨一样落下来。有人夸你，有人质疑你，也有人开始翻你过去的动态。你终于被看见了，但不是以你能控制的方式。",
    effects: { approval: 5, sns: 3, fatigue: 3, self: 1 },
  },
  {
    id: "IMP-09",
    label: "命运冲击",
    title: "医生给出最后警告",
    jp: "医者から最後の警告を受ける",
    desc: "医生没有责备你，只是把检查结果推到你面前：再这样下去，不是意志力的问题，是身体会停下来的问题。",
    effects: { fatigue: 3, reality: 3, sns: -3, self: -1 },
  },
  {
    id: "IMP-10",
    label: "命运冲击",
    title: "重要作品文件损坏",
    jp: "大切な作品ファイルが壊れる",
    desc: "你打开文件时，只看到错误提示。几周的草稿、素材和修改记录像从现实里蒸发了一样。你第一反应不是哭，而是想发一条动态证明自己有多惨。",
    effects: { fatigue: 5, self: -4, sns: 2, approval: 1 },
  },
  {
    id: "IMP-11",
    label: "命运冲击",
    title: "突然收到工作机会",
    jp: "突然、仕事の話が来る",
    desc: "对方说看过你的作品，想约你聊一聊。你很兴奋，也立刻开始怀疑自己是不是配不上这个机会。",
    effects: { reality: 4, self: 3, fatigue: 2, approval: 2, sns: -1 },
  },
  {
    id: "IMP-12",
    label: "命运冲击",
    title: "现实中被陌生人认出",
    jp: "現実で知らない人に声をかけられる",
    desc: "有人在街上喊出你的账号名，还举起手机想拍你。你明明离开了屏幕，却发现屏幕里的身份追到了现实里。",
    effects: { approval: 4, sns: 2, fatigue: 4, self: -2, reality: -1 },
  },
];

const storyBeats = [
  {
    id: "MAIN-01",
    turn: 1,
    type: "主线事件",
    title: "注销按钮停在屏幕上",
    jp: "ログアウトボタンの前で止まる",
    desc: "凌晨，你打开设置页，手指停在注销账号的按钮上。你并不是真的想消失，只是不知道除了继续刷，还有什么办法能让自己安静下来。",
    choices: [
      { label: "A. 关掉设置页，继续刷", text: "你把不安塞回推荐流里。", effects: { sns: 1, approval: 1, fatigue: 1 }, tags: ["sns"], flags: { loop: 2 } },
      { label: "B. 先把账号设为非公开", text: "你没有注销，但第一次试着把外界挡在门外。", effects: { sns: -1, self: 1 }, tags: ["boundary"], flags: { boundary: 2 } },
      { label: "C. 给旧友发一句“最近还好吗”", text: "消息发出去后，你反而有点害怕对方真的回复。", effects: { reality: 1, fatigue: 1 }, tags: ["social"], flags: { rin: 2 } },
    ],
  },
  {
    id: "MAIN-04",
    turn: 4,
    type: "主线事件",
    title: "旧友回复了你",
    jp: "旧友から返信が来る",
    desc: "旧友说，其实也看见你最近更新变多了。对方没有责备，只问了一句：你是不是很累？",
    choices: [
      { label: "A. 用玩笑带过", text: "你不想让别人看见自己真的不好。", effects: { approval: 1, self: -1 }, tags: ["sns"], flags: { loop: 1 } },
      { label: "B. 承认最近状态不好", text: "你说得很短，但那是今年第一次诚实。", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["social", "reflect"], flags: { rin: 2, boundary: 1 } },
      { label: "C. 约她下周喝咖啡", text: "你把聊天变成了一个现实中的约定。", effects: { reality: 2, fatigue: 1 }, tags: ["social", "real"], flags: { rin: 3, future: 1 } },
    ],
  },
  {
    id: "MAIN-08",
    turn: 8,
    type: "主线事件",
    title: "有人认真保存了你的作品",
    jp: "誰かがあなたの作品を保存した",
    desc: "一个陌生人留言说，你的内容让他撑过了很糟糕的一周。这不是单纯的点赞，而像是一条线从屏幕另一端牵了过来。",
    choices: [
      { label: "A. 把留言截图发动态", text: "你想让所有人都知道自己被需要。", effects: { approval: 2, sns: 1 }, tags: ["likes"], flags: { creator: 1, loop: 1 } },
      { label: "B. 私下回复感谢", text: "你把对方当成一个人，而不是数据。", effects: { self: 2, reality: 1 }, tags: ["reflect", "social"], flags: { creator: 2, boundary: 1 } },
      { label: "C. 整理成新的创作计划", text: "这次反馈变成了你继续做下去的理由。", effects: { self: 2, fatigue: 1 }, tags: ["study"], flags: { creator: 3, future: 1 } },
    ],
  },
  {
    id: "MAIN-12",
    turn: 12,
    type: "主线事件",
    title: "旧动态被误解转发",
    jp: "昔の投稿が誤解されて拡散される",
    desc: "一条几个月前的动态被截出来转发。陌生人开始替你解释你是谁，甚至比你自己还确定。",
    choices: [
      { label: "A. 连续发文反击", text: "每一次解释都像在给争议续命。", effects: { approval: 2, sns: 2, fatigue: 2, self: -2 }, tags: ["flame", "controversy"], flags: { flame: 3, loop: 1 } },
      { label: "B. 写一条说明后下线", text: "你回应必要部分，但拒绝把整个人交出去。", effects: { self: 1, sns: -1, fatigue: 1 }, tags: ["boundary", "reflect"], flags: { boundary: 2, flame: 1 } },
      { label: "C. 找旧友和可信的人商量", text: "你第一次没有独自面对时间线。", effects: { reality: 2, fatigue: -1 }, tags: ["social"], flags: { rin: 2, boundary: 1 } },
    ],
  },
  {
    id: "MAIN-16",
    turn: 16,
    type: "主线事件",
    title: "线下小展邀请",
    jp: "小さな展示への誘い",
    desc: "有人邀请你把作品放到一个小型线下活动里。它不会爆红，但会让真实的人站在你的作品前。",
    choices: [
      { label: "A. 因害怕而拒绝", text: "你保住了舒适区，也错过了一次现实反馈。", effects: { fatigue: -1, self: -1 }, tags: ["boundary"], flags: { boundary: 1 } },
      { label: "B. 接受，但不公开宣传", text: "你先让作品见到真实的人，而不是算法。", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["real", "study"], flags: { creator: 2, future: 2 } },
      { label: "C. 大力宣传并追求热度", text: "线下机会又被你变成线上排名。", effects: { approval: 2, sns: 1, fatigue: 1 }, tags: ["likes", "viral"], flags: { loop: 1, creator: 1 } },
    ],
  },
  {
    id: "MAIN-20",
    turn: 20,
    type: "主线事件",
    title: "面谈：你想成为什么样的人",
    jp: "面談：どんな人になりたいのか",
    desc: "老师或前辈看了你的作品和近况，只问了一个问题：如果不靠数据证明自己，你还想继续做这件事吗？",
    choices: [
      { label: "A. 说自己只想被更多人看到", text: "你诚实地承认，数字仍然牵着你。", effects: { approval: 2, sns: 1, self: -1 }, tags: ["likes"], flags: { loop: 2 } },
      { label: "B. 说想把作品做完整", text: "你把目标从被看见，移动到做出来。", effects: { self: 2, fatigue: 1 }, tags: ["study"], flags: { creator: 2, future: 2 } },
      { label: "C. 说想先恢复正常生活", text: "你终于把生活本身放在内容之前。", effects: { reality: 2, sns: -1, fatigue: -1 }, tags: ["real", "rest"], flags: { boundary: 2, future: 1 } },
    ],
  },
  {
    id: "MAIN-24",
    turn: 24,
    type: "主线事件",
    title: "注销之前",
    jp: "ログアウトする前に",
    desc: "一年结束前的晚上，你再次打开设置页。注销按钮还在那里，但这一次，你旁边还有聊天记录、作品草稿、线下活动的票根，以及这一年留下的选择。",
    choices: [
      { label: "A. 直接注销", text: "你选择一刀切，把账号从生活里移开。", effects: { sns: -3, approval: -2, self: 1 }, tags: ["boundary"], flags: { boundary: 3 } },
      { label: "B. 保留账号，但关闭推荐流", text: "你不再把平台当作生活的入口。", effects: { sns: -2, fatigue: -1, self: 1 }, tags: ["boundary", "reflect"], flags: { boundary: 2, future: 1 } },
      { label: "C. 发最后一条给自己的动态", text: "不是道歉，不是求赞，而是给这一年的自己一个句号。", effects: { self: 2, reality: 1, fatigue: 1 }, tags: ["reflect"], flags: { creator: 1, future: 2 } },
    ],
  },
];

const roleStoryBeats = {
  influencer: [
    {
      id: "INF-02",
      turn: 2,
      type: "角色事件",
      title: "粉丝催更",
      jp: "フォロワーから更新を催促される",
      desc: "你刚想休息，私信和评论却开始问：今天怎么还没更新？你明明累到眼睛发酸，却又害怕一停下来就被忘记。",
      choices: [
        { label: "A. 立刻补一条动态", text: "你重新被看见，也把身体往后推了一步。", effects: { approval: 2, sns: 1, fatigue: 1 }, tags: ["likes", "sns"], flags: { loop: 2 } },
        { label: "B. 发一条请假说明", text: "你承认自己需要休息，但也把脆弱暴露给观众。", effects: { fatigue: -1, self: 1, approval: 1 }, tags: ["reflect", "likes"], flags: { boundary: 1, creator: 1 } },
        { label: "C. 不解释，直接休息", text: "你保住了身体，却要忍受数据下滑的焦虑。", effects: { fatigue: -2, approval: 1, sns: -1 }, tags: ["rest", "boundary"], flags: { boundary: 2 } },
      ],
    },
    {
      id: "INF-10",
      turn: 10,
      type: "角色事件",
      title: "第一个商单邀请",
      jp: "初めてのPR案件",
      desc: "品牌方发来合作邀请。报酬不高，但对现在的你来说像一张证明：你的账号终于有价值了。",
      choices: [
        { label: "A. 全部照品牌要求做", text: "你获得认可，也把表达交给了数据和甲方。", effects: { approval: 2, fatigue: 2, self: -1 }, tags: ["likes", "study"], flags: { creator: 1, loop: 1 } },
        { label: "B. 谈清边界后接受", text: "你保留了一部分自己的声音，但沟通让你很累。", effects: { self: 1, approval: 1, fatigue: 1 }, tags: ["study", "boundary"], flags: { creator: 2, boundary: 1 } },
        { label: "C. 拒绝这次合作", text: "你没有被短期机会绑架，但也担心自己错过了上升期。", effects: { self: 2, approval: 1, fatigue: -1 }, tags: ["boundary"], flags: { boundary: 2, future: 1 } },
      ],
    },
    {
      id: "INF-18",
      turn: 18,
      type: "角色事件",
      title: "数据突然下滑",
      jp: "数字が急に落ちる",
      desc: "连续几条内容表现都很差。你开始怀疑，是不是自己已经不值得被关注了。",
      choices: [
        { label: "A. 连续追热点救数据", text: "数字可能回来，但你几乎没有停下来的空间。", effects: { approval: 2, sns: 2, fatigue: 2 }, tags: ["viral", "sns"], flags: { loop: 2 } },
        { label: "B. 分析内容，但限制时间", text: "你面对问题，也不让问题吞掉整天。", effects: { self: 1, fatigue: 1, sns: -1 }, tags: ["study", "boundary"], flags: { creator: 2, boundary: 1 } },
        { label: "C. 暂停更新一周", text: "你失去短期热度，却第一次把自己放在账号前面。", effects: { fatigue: -2, sns: -1, approval: 1 }, tags: ["rest", "boundary"], flags: { boundary: 3 } },
      ],
    },
  ],
  honorStudent: [
    {
      id: "HON-02",
      turn: 2,
      type: "角色事件",
      title: "同龄人的成绩截图",
      jp: "同世代の成績スクショ",
      desc: "有人晒出高分、证书和导师夸奖。你明知道这只是别人生活的一角，却还是把它当成自己的判决书。",
      choices: [
        { label: "A. 对照自己所有不足", text: "你获得一点危机感，也把自己压得更低。", effects: { fatigue: 1, self: -2, approval: 1 }, tags: ["compare", "study"], flags: { loop: 1 } },
        { label: "B. 列出今天能做的一件事", text: "你把比较变成行动，但身体仍然很累。", effects: { self: 2, fatigue: 1 }, tags: ["study"], flags: { future: 1, boundary: 1 } },
        { label: "C. 问朋友真实准备进度", text: "你获得现实信息，也不得不面对差距。", effects: { reality: 1, fatigue: 1, self: 1 }, tags: ["social", "study"], flags: { rin: 1, future: 1 } },
      ],
    },
    {
      id: "HON-10",
      turn: 10,
      type: "角色事件",
      title: "老师推荐你参加选拔",
      jp: "先生から選抜への推薦",
      desc: "老师说你可以试试一个竞争很激烈的选拔。你听见机会，也听见失败的可能。",
      choices: [
        { label: "A. 拼命准备，不睡也要上", text: "你离目标更近，也离崩溃更近。", effects: { self: 2, fatigue: 2, sns: 1 }, tags: ["study"], flags: { future: 2 } },
        { label: "B. 设定最低准备线", text: "你允许自己努力，但不把身体押上去。", effects: { self: 1, fatigue: -1, approval: 1 }, tags: ["boundary", "study"], flags: { boundary: 2, future: 1 } },
        { label: "C. 拒绝推荐", text: "你暂时减轻压力，却担心自己不够上进。", effects: { fatigue: -2, self: -1, approval: 1 }, tags: ["rest", "compare"], flags: { boundary: 1 } },
      ],
    },
    {
      id: "HON-18",
      turn: 18,
      type: "角色事件",
      title: "申请截止前夜",
      jp: "締切前夜",
      desc: "材料还没有完全整理好。你一边打开文档，一边忍不住看别人说自己已经提交了。",
      choices: [
        { label: "A. 通宵补完", text: "你完成了提交，也几乎榨干自己。", effects: { self: 2, fatigue: 3, sns: 1 }, tags: ["study", "compare"], flags: { future: 2, loop: 1 } },
        { label: "B. 只提交能完成的版本", text: "你接受不完美，但心里仍有刺。", effects: { self: 1, fatigue: 1, approval: 1 }, tags: ["boundary", "study"], flags: { boundary: 2, future: 1 } },
        { label: "C. 请人帮你检查", text: "你把压力交出去一点，也承认自己需要别人。", effects: { reality: 1, fatigue: -1, self: 1 }, tags: ["social", "study"], flags: { rin: 1, future: 1 } },
      ],
    },
  ],
  shutIn: [
    {
      id: "SHU-02",
      turn: 2,
      type: "角色事件",
      title: "白天也没有拉开窗帘",
      jp: "昼になってもカーテンを開けない",
      desc: "外面已经很亮了，你却还躺在床上刷手机。网络世界很吵，房间里却安静到有点窒息。",
      choices: [
        { label: "A. 继续躲在被子里刷", text: "你暂时不用面对外界，但身体越来越沉。", effects: { sns: 2, fatigue: 1, reality: -1 }, tags: ["sns", "rest"], flags: { loop: 2 } },
        { label: "B. 拉开窗帘洗个脸", text: "只是很小的动作，却像把现实放进房间。", effects: { fatigue: -1, self: 1, sns: 1 }, tags: ["rest", "real"], flags: { boundary: 1, future: 1 } },
        { label: "C. 出门买一瓶水", text: "你没有社交，但让身体穿过了门。", effects: { reality: 1, fatigue: 1, self: 1 }, tags: ["real"], flags: { future: 2 } },
      ],
    },
    {
      id: "SHU-10",
      turn: 10,
      type: "角色事件",
      title: "线下聚会邀请",
      jp: "オフ会への誘い",
      desc: "一个常聊天的人邀请你参加小型线下聚会。你看着消息，心跳比通知声还明显。",
      choices: [
        { label: "A. 已读不回", text: "你保住安全感，也让现实连接继续变薄。", effects: { fatigue: -1, reality: -1, sns: 1 }, tags: ["boundary", "sns"], flags: { loop: 1 } },
        { label: "B. 说自己只能待半小时", text: "你给社交设了出口，所以它没那么可怕。", effects: { reality: 2, fatigue: 1, self: 1 }, tags: ["social", "boundary"], flags: { rin: 2, boundary: 1 } },
        { label: "C. 邀请对方先语音", text: "你没有出门，但让关系更接近现实。", effects: { reality: 1, fatigue: 1, sns: -1 }, tags: ["social"], flags: { rin: 1, future: 1 } },
      ],
    },
    {
      id: "SHU-18",
      turn: 18,
      type: "角色事件",
      title: "家人敲门",
      jp: "家族が部屋をノックする",
      desc: "门外的人没有催你，只说饭好了。你突然意识到，现实世界一直在等你回应。",
      choices: [
        { label: "A. 装作没听见", text: "你避免了尴尬，也继续把自己关起来。", effects: { sns: 1, reality: -1, fatigue: -1 }, tags: ["sns", "boundary"], flags: { loop: 1 } },
        { label: "B. 出去吃饭，但不多说", text: "你没有解释自己，只是坐到了桌边。", effects: { reality: 2, fatigue: 1 }, tags: ["social", "real"], flags: { rin: 2 } },
        { label: "C. 说最近状态不好", text: "话说出口很难，但房间不再只有你一个人。", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["social", "reflect"], flags: { rin: 2, boundary: 1 } },
      ],
    },
  ],
  flamePoster: [
    {
      id: "FLA-02",
      turn: 2,
      type: "角色事件",
      title: "争议评论串开始发酵",
      jp: "論争コメントが伸び始める",
      desc: "你的一条评论被截图转发。支持和攻击同时涌来，你感到害怕，也感到兴奋。",
      choices: [
        { label: "A. 继续追加嘲讽", text: "流量变大了，退路也变小了。", effects: { approval: 2, sns: 1, fatigue: 2 }, tags: ["controversy", "flame"], flags: { flame: 3, loop: 1 } },
        { label: "B. 停止回复", text: "你让热度自然降下去，但承认欲求还在发痒。", effects: { fatigue: -1, approval: 1, sns: -1 }, tags: ["boundary"], flags: { boundary: 2, flame: 1 } },
        { label: "C. 承认表达太冲", text: "你可能失去一部分支持，却重新拿回一点自己。", effects: { self: 1, fatigue: 1, approval: 1 }, tags: ["reflect", "flame"], flags: { boundary: 1, flame: 1 } },
      ],
    },
    {
      id: "FLA-10",
      turn: 10,
      type: "角色事件",
      title: "对线视频爆红",
      jp: "反論動画がバズる",
      desc: "有人剪辑了你和别人争论的视频。你看起来很强势，也看起来像另一个陌生人。",
      choices: [
        { label: "A. 借势继续输出", text: "你赢得注意，也把愤怒变成日常表演。", effects: { approval: 3, sns: 1, fatigue: 2 }, tags: ["viral", "controversy"], flags: { flame: 2, loop: 2 } },
        { label: "B. 把争论整理成观点文章", text: "你把情绪降温成表达，但热度会少一些。", effects: { self: 1, fatigue: 1, approval: 1 }, tags: ["study", "reflect"], flags: { creator: 2, boundary: 1 } },
        { label: "C. 删除转发入口", text: "你切断扩散，也切断一部分被看见的机会。", effects: { sns: -1, fatigue: -1, approval: 1 }, tags: ["boundary"], flags: { boundary: 2 } },
      ],
    },
    {
      id: "FLA-18",
      turn: 18,
      type: "角色事件",
      title: "平台警告",
      jp: "プラットフォームから警告",
      desc: "平台提示你近期内容多次被举报。账号没有被封，但那行警告像一堵墙，突然出现在你面前。",
      choices: [
        { label: "A. 发动态控诉平台", text: "支持者会来，但争议也会继续扩大。", effects: { approval: 2, sns: 1, fatigue: 2 }, tags: ["controversy", "flame"], flags: { flame: 3 } },
        { label: "B. 暂停争议话题", text: "你失去短期热度，却让自己离风暴远一点。", effects: { sns: -1, fatigue: -1, approval: 1 }, tags: ["boundary"], flags: { boundary: 2, flame: 1 } },
        { label: "C. 和现实朋友复盘", text: "你第一次让别人告诉你：这不是输赢，这是生活。", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["social", "reflect"], flags: { rin: 1, boundary: 1 } },
      ],
    },
  ],
};

const events = [
  {
    id: "SNS-01",
    type: "事件卡",
    title: "看到朋友晒出海外旅行照片",
    jp: "友人の海外旅行の投稿を見る",
    desc: "你本来只是想看一眼动态，却突然开始比较自己和别人的生活。",
    choices: [
      { label: "A. 羡慕并持续刷SNS", text: "继续翻更多照片，想知道别人过得多好。", effects: { sns: 1, approval: 1, self: -1 }, tags: ["sns", "compare"] },
      { label: "B. 关闭手机", text: "承认自己被影响了，先把屏幕扣下。", effects: { sns: -1, self: 1 }, tags: ["boundary"] },
      { label: "C. 制定自己的旅行计划", text: "把比较变成一个现实中的小计划。", effects: { fatigue: 1, reality: 1, self: 1 }, tags: ["real", "study"] },
    ],
  },
  {
    id: "SNS-02",
    type: "事件卡",
    title: "凌晨两点还在刷短视频",
    jp: "深夜二時、まだショート動画を見ている",
    desc: "每一个视频都只有十几秒，但你已经忘了自己为什么还醒着。",
    choices: [
      { label: "A. 继续刷", text: "再看一个就睡。你已经这样想了一个小时。", effects: { sns: 2, fatigue: 2 }, tags: ["sns"] },
      { label: "B. 现在睡觉", text: "把手机放远，强制让身体先停下来。", effects: { fatigue: -1 }, tags: ["rest"] },
      { label: "C. 删除APP", text: "做一个有点激烈的边界动作。", effects: { sns: -2, self: 1 }, tags: ["boundary"] },
    ],
  },
  {
    id: "SNS-03",
    type: "事件卡",
    title: "发出的动态几乎没人点赞",
    jp: "投稿にほとんど反応がない",
    desc: "你开始怀疑是不是自己不够有趣，或者被算法抛弃了。",
    choices: [
      { label: "A. 反复刷新", text: "刷新一次，失望一次，但还是停不下来。", effects: { sns: 1, approval: 1, self: -1 }, tags: ["sns", "likes"] },
      { label: "B. 告诉自己不发也可以", text: "把注意力从数字上拿回来。", effects: { approval: -1, self: 1 }, tags: ["reflect"] },
      { label: "C. 问朋友真实感想", text: "让反馈回到具体的人身上。", effects: { reality: 1, fatigue: -1 }, tags: ["social"] },
    ],
  },
  {
    id: "SNS-04",
    type: "事件卡",
    title: "新的挑战标签突然流行",
    jp: "新しいチャレンジタグが流行する",
    desc: "所有人都在参与。你感觉如果不跟上，就会从时间线里消失。",
    choices: [
      { label: "A. 立刻跟风发布", text: "速度比内容重要，先抓住流量。", effects: { approval: 2, sns: 1, fatigue: 1 }, tags: ["viral", "likes"] },
      { label: "B. 只看不发", text: "保持旁观，但还是花了不少时间。", effects: { sns: 1, fatigue: -1 }, tags: ["sns"] },
      { label: "C. 改造成自己的创作", text: "不完全跟风，而是加入自己的表达。", effects: { self: 1, approval: 1, fatigue: 1 }, tags: ["study", "viral"] },
    ],
  },
  {
    id: "SNS-05",
    type: "事件卡",
    title: "群聊里又开始比较成绩和实习",
    jp: "グループチャットで成績とインターンの話になる",
    desc: "聊天内容看起来正常，却让你越来越觉得自己落后。",
    choices: [
      { label: "A. 默默比较所有人", text: "把每一句话都变成对自己的审判。", effects: { self: -2, fatigue: 1 }, tags: ["compare"] },
      { label: "B. 暂时屏蔽群聊", text: "把噪音关掉，不等于逃避人生。", effects: { sns: -1, fatigue: -1 }, tags: ["boundary"] },
      { label: "C. 向可信的人请教", text: "把模糊焦虑变成具体信息。", effects: { self: 1, reality: 1, fatigue: 1 }, tags: ["study", "social"] },
    ],
  },
  {
    id: "SNS-06",
    type: "事件卡",
    title: "看到别人因为发言被围攻",
    jp: "誰かが投稿で攻撃されているのを見る",
    desc: "你想表达自己的意见，但也害怕自己成为下一个目标。",
    choices: [
      { label: "A. 发一条尖锐评论", text: "越有争议，越容易被看见。", effects: { approval: 2, sns: 1, fatigue: 1 }, tags: ["controversy"] },
      { label: "B. 保持沉默", text: "不加入风暴，也不消耗自己。", effects: { approval: -1, fatigue: -1 }, tags: ["boundary"] },
      { label: "C. 和现实中的朋友讨论", text: "让观点先在安全关系里成形。", effects: { reality: 1, self: 1 }, tags: ["social", "reflect"] },
    ],
  },
  {
    id: "SNS-07",
    type: "事件卡",
    title: "朋友邀请你临时出门",
    jp: "友人から急な外出の誘いが来る",
    desc: "你已经有点累，但也知道自己很久没有真正见人了。",
    choices: [
      { label: "A. 拒绝，然后继续刷手机", text: "社交太麻烦，屏幕更容易。", effects: { sns: 1, reality: -1 }, tags: ["sns"] },
      { label: "B. 出门半小时", text: "不要求完美参与，只让自己出现。", effects: { reality: 2, fatigue: 1 }, tags: ["social"] },
      { label: "C. 改约安静的见面方式", text: "选择自己能承受的社交强度。", effects: { reality: 1, fatigue: -1, self: 1 }, tags: ["social", "rest"] },
    ],
  },
  {
    id: "SNS-08",
    type: "事件卡",
    title: "学习或工作中出现失误",
    jp: "勉強や仕事でミスをする",
    desc: "一个小错误让你开始怀疑自己是不是根本不行。",
    choices: [
      { label: "A. 发动态自嘲", text: "把尴尬变成可以被点赞的内容。", effects: { approval: 1, self: -1, sns: 1 }, tags: ["sns", "likes"] },
      { label: "B. 复盘问题", text: "虽然累，但你开始把错误拆开看。", effects: { self: 1, fatigue: 1 }, tags: ["study"] },
      { label: "C. 向他人求助", text: "承认自己需要帮助，也是一种能力。", effects: { reality: 1, self: 1 }, tags: ["social", "study"] },
    ],
  },
  {
    id: "SNS-09",
    type: "事件卡",
    title: "一条内容突然小范围爆红",
    jp: "投稿が小さくバズる",
    desc: "通知不断跳出来。兴奋和不安几乎同时出现。",
    choices: [
      { label: "A. 追着热度继续发", text: "趁现在所有人都在看你。", effects: { approval: 3, sns: 2, fatigue: 1 }, tags: ["viral", "likes"] },
      { label: "B. 回复感谢后停下", text: "承认开心，但不把自己交给数字。", effects: { approval: 1, self: 1, fatigue: -1 }, tags: ["likes", "reflect"] },
      { label: "C. 整理成作品集", text: "把短期反馈变成长期积累。", effects: { self: 2, approval: 1, fatigue: 1 }, tags: ["study", "viral"] },
    ],
  },
  {
    id: "SNS-10",
    type: "事件卡",
    title: "收到一句刺耳评论",
    jp: "きついコメントが届く",
    desc: "那句话并不长，却在你脑子里重复了很多遍。",
    choices: [
      { label: "A. 立刻回击", text: "你想证明自己没有输。", effects: { approval: 1, fatigue: 2, self: -1 }, tags: ["flame", "controversy"] },
      { label: "B. 拉黑并举报", text: "不把所有攻击都当成辩论邀请。", effects: { fatigue: -1, sns: -1 }, tags: ["boundary"] },
      { label: "C. 找朋友确认现实感", text: "让一句陌生评论回到它该有的重量。", effects: { reality: 1, fatigue: -1, self: 1 }, tags: ["social"] },
    ],
  },
  {
    id: "SNS-11",
    type: "事件卡",
    title: "推荐流变得异常精准",
    jp: "おすすめ欄が妙に自分に刺さる",
    desc: "平台好像比你更知道你会停留在哪里。",
    choices: [
      { label: "A. 接受无尽推荐", text: "每一条都像是专门推给你的。", effects: { sns: 2, fatigue: 1, approval: 1 }, tags: ["sns"] },
      { label: "B. 设置使用时间", text: "不是戒断，而是把边界调出来。", effects: { sns: -1, fatigue: -1 }, tags: ["boundary"] },
      { label: "C. 改看学习内容", text: "同样使用平台，但改变输入方向。", effects: { self: 1, sns: 1, fatigue: 1 }, tags: ["study", "sns"] },
    ],
  },
  {
    id: "SNS-12",
    type: "事件卡",
    title: "线下活动开始流行",
    jp: "オフラインイベントが流行し始める",
    desc: "大家开始晒真实见面的照片。你有一点想去，也有一点害怕。",
    choices: [
      { label: "A. 参加活动", text: "现场很吵，但你重新感到自己在生活里。", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["social"] },
      { label: "B. 不去，只刷别人的照片", text: "你没有消耗体力，却又被比较困住。", effects: { sns: 1, reality: -1, fatigue: -1 }, tags: ["sns", "compare"] },
      { label: "C. 和朋友一起去", text: "有熟人在身边，现实世界变得没那么硬。", effects: { reality: 2, fatigue: -1 }, tags: ["social", "rest"] },
    ],
  },
  {
    id: "SNS-13",
    type: "事件卡",
    title: "重要考试或面试临近",
    jp: "大事な試験や面接が近づく",
    desc: "现实压力变大，SNS反而变成最容易逃进去的地方。",
    choices: [
      { label: "A. 开着SNS硬学", text: "你看似坐在书桌前，其实一直被通知打断。", effects: { fatigue: 2, sns: 1, self: -1 }, tags: ["study", "sns"] },
      { label: "B. 分段专注", text: "把目标拆小，先完成一个小时。", effects: { self: 2, fatigue: 1, sns: -1 }, tags: ["study", "boundary"] },
      { label: "C. 找人一起准备", text: "让努力变得可见，也让压力被分担。", effects: { reality: 1, self: 1, fatigue: -1 }, tags: ["social", "study"] },
    ],
  },
  {
    id: "SNS-14",
    type: "事件卡",
    title: "翻到过去的照片",
    jp: "昔の写真を見つける",
    desc: "过去的自己看起来陌生。你不知道那是变好了，还是变累了。",
    choices: [
      { label: "A. 和过去的自己比较", text: "你把回忆也变成一场评价。", effects: { self: -1, approval: 1 }, tags: ["compare"] },
      { label: "B. 整理成私人相册", text: "把记忆留给自己，而不是交给时间线。", effects: { self: 1, fatigue: -1 }, tags: ["reflect"] },
      { label: "C. 联系旧朋友", text: "从照片回到真实关系。", effects: { reality: 2, fatigue: 1 }, tags: ["social"] },
    ],
  },
  {
    id: "SNS-15",
    type: "事件卡",
    title: "被种草昂贵的生活方式",
    jp: "高価なライフスタイルに影響される",
    desc: "你开始觉得，如果没有那些东西，自己的生活就不够好。",
    choices: [
      { label: "A. 为了形象下单", text: "短暂地感觉自己追上了别人。", effects: { approval: 1, fatigue: 1, self: -1 }, tags: ["compare", "sns"] },
      { label: "B. 加入愿望清单", text: "先延迟冲动，把决定交给明天。", effects: { fatigue: -1 }, tags: ["boundary"] },
      { label: "C. 做一个预算计划", text: "把欲望转成对现实的掌控。", effects: { self: 1, fatigue: -1 }, tags: ["reflect", "study"] },
    ],
  },
  {
    id: "SNS-16",
    type: "事件卡",
    title: "匿名提问箱收到敏感问题",
    jp: "匿名質問箱に答えにくい質問が来る",
    desc: "回答它可能会获得关注，也可能引来争议。",
    choices: [
      { label: "A. 大胆回答", text: "你知道这会被转发，但还是想被看见。", effects: { approval: 2, sns: 1 }, tags: ["controversy", "likes"] },
      { label: "B. 诚实但克制地回答", text: "表达自己，但不故意制造冲突。", effects: { self: 1, approval: 1 }, tags: ["reflect"] },
      { label: "C. 关闭提问箱", text: "不是每个问题都需要你回应。", effects: { sns: -1, fatigue: -1 }, tags: ["boundary"] },
    ],
  },
  {
    id: "SNS-17",
    type: "事件卡",
    title: "家人打来电话",
    jp: "家族から電話が来る",
    desc: "你有点烦，但也知道他们是真实生活里仍然关心你的人。",
    choices: [
      { label: "A. 不接，继续看动态", text: "现实关系被你暂时放到一边。", effects: { sns: 1, reality: -1 }, tags: ["sns"] },
      { label: "B. 简短接一下", text: "几分钟也能维持一点连接。", effects: { reality: 1, fatigue: -1 }, tags: ["social"] },
      { label: "C. 坦白最近状态", text: "你说得不多，但是真的说了。", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["social", "reflect"] },
    ],
  },
  {
    id: "SNS-18",
    type: "事件卡",
    title: "创作卡住了",
    jp: "制作が行き詰まる",
    desc: "你想做出新的东西，却忍不住去看别人做得多好。",
    choices: [
      { label: "A. 用刷SNS逃避", text: "看起来是在找灵感，其实是在惩罚自己。", effects: { sns: 2, fatigue: 1, self: -1 }, tags: ["sns", "compare"] },
      { label: "B. 出门走一圈", text: "让身体先离开屏幕。", effects: { fatigue: -2, reality: 1 }, tags: ["rest", "real"] },
      { label: "C. 练习一个小片段", text: "不追求完成，只恢复手感。", effects: { self: 1, fatigue: 1 }, tags: ["study"] },
    ],
  },
  {
    id: "SNS-19",
    type: "事件卡",
    title: "有人邀请你合作",
    jp: "コラボの誘いが来る",
    desc: "这是机会，也是压力。你担心拒绝之后就再也没人找你。",
    choices: [
      { label: "A. 立刻答应所有要求", text: "你想证明自己值得被邀请。", effects: { approval: 2, fatigue: 2 }, tags: ["social", "likes"] },
      { label: "B. 礼貌拒绝", text: "这次你选择保住自己的状态。", effects: { fatigue: -1, self: 1 }, tags: ["boundary"] },
      { label: "C. 说清合作条件", text: "既不逃避机会，也不牺牲边界。", effects: { reality: 1, approval: 1, self: 1 }, tags: ["social", "study"] },
    ],
  },
  {
    id: "SNS-20",
    type: "事件卡",
    title: "大家都在讨论AI工具",
    jp: "みんながAIツールについて話している",
    desc: "你一边好奇，一边害怕自己已经落后时代。",
    choices: [
      { label: "A. 觉得自己被淘汰", text: "还没开始学，你已经先输了。", effects: { self: -1, fatigue: 1, approval: 1 }, tags: ["compare"] },
      { label: "B. 学一个基础功能", text: "先让未知变小。", effects: { self: 2, fatigue: 1 }, tags: ["study"] },
      { label: "C. 用它完成一个小项目", text: "把技术变成自己的现实行动。", effects: { self: 1, reality: 1, fatigue: 1 }, tags: ["study", "real"] },
    ],
  },
  {
    id: "SNS-21",
    type: "事件卡",
    title: "深夜收到私信",
    jp: "深夜にDMが届く",
    desc: "你知道现在回复会影响睡眠，但又怕对方觉得你冷淡。",
    choices: [
      { label: "A. 立刻回复", text: "你用即时回应证明自己还在线。", effects: { sns: 1, approval: 1, fatigue: 1 }, tags: ["sns", "social"] },
      { label: "B. 明天再回", text: "关系不应该只靠秒回维持。", effects: { fatigue: -1, self: 1 }, tags: ["boundary"] },
      { label: "C. 关闭陌生人私信", text: "你减少了一些机会，也减少了一些噪音。", effects: { sns: -1, fatigue: -1, approval: -1 }, tags: ["boundary"] },
    ],
  },
  {
    id: "SNS-22",
    type: "事件卡",
    title: "现实中完成了一个小目标",
    jp: "現実で小さな目標を達成する",
    desc: "这件事不一定适合发出来，但它确实发生了。",
    choices: [
      { label: "A. 不告诉任何人", text: "这次满足感只属于你。", effects: { self: 2, reality: 1 }, tags: ["real", "reflect"] },
      { label: "B. 发动态证明自己", text: "你想让这份努力被看见。", effects: { approval: 2, sns: 1 }, tags: ["likes"] },
      { label: "C. 和朋友庆祝", text: "把成就放进现实关系里。", effects: { reality: 2, fatigue: -1 }, tags: ["social"] },
    ],
  },
  {
    id: "SNS-23",
    type: "事件卡",
    title: "发现自己的内容被搬运",
    jp: "自分の投稿が無断転載されている",
    desc: "愤怒、委屈和想要公开反击的冲动一起出现。",
    choices: [
      { label: "A. 公开点名", text: "你获得了支持，也把自己放进风暴中心。", effects: { approval: 2, fatigue: 2, self: -1 }, tags: ["flame", "controversy"] },
      { label: "B. 私下举报", text: "用规则处理，而不是用情绪处理。", effects: { self: 1, fatigue: 1 }, tags: ["boundary"] },
      { label: "C. 找朋友商量", text: "先确认自己不是一个人面对。", effects: { reality: 1, self: 1 }, tags: ["social"] },
    ],
  },
  {
    id: "SNS-24",
    type: "事件卡",
    title: "身体不舒服的一天",
    jp: "体調が悪い一日",
    desc: "你没有力气做什么，于是SNS变成最方便的麻醉。",
    choices: [
      { label: "A. 躺着刷一整天", text: "身体没有恢复，脑子也越来越吵。", effects: { sns: 2, fatigue: 1 }, tags: ["sns"] },
      { label: "B. 认真休息", text: "这一天不产出，也不需要解释。", effects: { fatigue: -2 }, tags: ["rest"] },
      { label: "C. 向身边人求助", text: "让现实中的支持进入你的生活。", effects: { reality: 1, fatigue: -1 }, tags: ["social"] },
    ],
  },
  {
    id: "SNS-25",
    type: "事件卡",
    title: "收到求职或申请拒信",
    jp: "応募や申請の不採用通知が届く",
    desc: "你很想马上打开SNS，看看是不是只有自己失败了。",
    choices: [
      { label: "A. 去看别人成功帖", text: "每一条成功经验都像在否定你。", effects: { self: -2, fatigue: 1, approval: 1 }, tags: ["compare"] },
      { label: "B. 修改下一版申请", text: "失败没有消失，但它变成了材料。", effects: { self: 1, fatigue: 1 }, tags: ["study"] },
      { label: "C. 下线散步", text: "先让身体离开失败的屏幕。", effects: { sns: -1, fatigue: -1, reality: 1 }, tags: ["rest", "real"] },
    ],
  },
  {
    id: "SNS-26",
    type: "事件卡",
    title: "合照发出前反复修图",
    jp: "集合写真を投稿する前に何度も加工する",
    desc: "你已经不像是在保存回忆，而是在准备被评价的版本。",
    choices: [
      { label: "A. 修到完美再发", text: "你获得一点安心，也消耗了很多力气。", effects: { approval: 1, fatigue: 2, sns: 1 }, tags: ["compare", "likes"] },
      { label: "B. 随意发出", text: "不完美也可以被看见。", effects: { approval: 1, self: 1 }, tags: ["likes", "reflect"] },
      { label: "C. 只留作私人回忆", text: "这张照片不需要成为展示品。", effects: { reality: 1, fatigue: -1 }, tags: ["real", "reflect"] },
    ],
  },
];

const mysteryEvents = [
  {
    id: "M-01",
    type: "神秘事件",
    title: "陌生人的私信",
    jp: "知らない人からのDM",
    desc: "有人认真感谢你的作品。这个反馈不像点赞那么快，却更具体。",
    choices: [
      { label: "A. 认真回复", text: "你把这次连接当成真实的人际回应。", effects: { self: 2, reality: 1 }, tags: ["social", "reflect"] },
      { label: "B. 截图发动态", text: "你把感谢变成新的展示材料。", effects: { approval: 2, sns: 1 }, tags: ["likes"] },
      { label: "C. 暂时不回复", text: "你保留一点距离，也少消耗一点。", effects: { fatigue: -1 }, tags: ["boundary"] },
    ],
  },
  {
    id: "M-02",
    type: "神秘事件",
    title: "算法推荐",
    jp: "アルゴリズムの推薦",
    desc: "你的内容突然被大量推荐，通知像潮水一样涌来。",
    choices: [
      { label: "A. 彻夜追数据", text: "你几乎无法从数字里离开。", effects: { approval: 3, sns: 2, fatigue: 2 }, tags: ["viral", "likes"] },
      { label: "B. 设定回复时间", text: "你承认它重要，但不给它全部时间。", effects: { approval: 1, sns: -1, self: 1 }, tags: ["boundary", "viral"] },
      { label: "C. 暂停更新一天", text: "你故意不立刻喂养算法。", effects: { sns: -2, fatigue: -1, approval: -1 }, tags: ["boundary", "rest"] },
    ],
  },
  {
    id: "M-03",
    type: "神秘事件",
    title: "旧友来电",
    jp: "昔の友人から電話が来る",
    desc: "这个电话和SNS无关。它来自你曾经真实生活的一部分。",
    choices: [
      { label: "A. 接受通话", text: "你们聊得不深，但某种连接回来了。", effects: { reality: 2, fatigue: -1 }, tags: ["social"] },
      { label: "B. 拒绝", text: "你还没准备好面对现实关系。", effects: {}, tags: ["boundary"] },
      { label: "C. 约下次见面", text: "你把短暂联系变成现实计划。", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["social", "real"] },
    ],
  },
  {
    id: "M-04",
    type: "神秘事件",
    title: "人生转机",
    jp: "人生の転機",
    desc: "你获得了一个新的工作或学习机会。它需要投入，也可能带你离开原来的循环。",
    choices: [
      { label: "A. 接受机会", text: "现实开始要求你行动。", effects: { reality: 2, self: 2, fatigue: 2 }, tags: ["study", "real"] },
      { label: "B. 先了解细节", text: "你没有逃走，也没有冲动答应。", effects: { reality: 1, self: 1 }, tags: ["study"] },
      { label: "C. 因害怕而放弃", text: "短期轻松了，但你知道自己错过了什么。", effects: { fatigue: -1, self: -1 }, tags: ["compare"] },
    ],
  },
  {
    id: "M-05",
    type: "神秘事件",
    title: "突然炎上",
    jp: "突然の炎上",
    desc: "一段旧内容被重新翻出。很多陌生人开始评价你。",
    choices: [
      { label: "A. 连续发文反击", text: "你越解释，争议越大。", effects: { approval: 2, sns: 2, fatigue: 2, self: -2 }, tags: ["flame", "controversy"] },
      { label: "B. 暂停发言并求助", text: "你先保护自己，再处理问题。", effects: { reality: 1, fatigue: -1, sns: -1 }, tags: ["flame", "social", "boundary"] },
      { label: "C. 诚恳说明并下线", text: "你承担必要部分，但拒绝无限消耗。", effects: { self: 1, fatigue: 1, sns: -1 }, tags: ["flame", "reflect", "boundary"] },
    ],
  },
  {
    id: "M-06",
    type: "神秘事件",
    title: "手机故障一天",
    jp: "スマホが一日使えない",
    desc: "最开始你很焦躁，后来才发现一天并没有因此消失。",
    choices: [
      { label: "A. 借设备继续登录", text: "你不能忍受自己不在线。", effects: { sns: 1, fatigue: 1 }, tags: ["sns"] },
      { label: "B. 接受这次断线", text: "被迫的空白变成一次休息。", effects: { sns: -2, fatigue: -1, self: 1 }, tags: ["rest", "boundary"] },
      { label: "C. 出门处理修理", text: "你和现实世界发生了一点具体接触。", effects: { reality: 1, fatigue: 1, sns: -1 }, tags: ["real"] },
    ],
  },
];

const actionCards = [
  { id: "A-01", name: "只刷十条短视频", jp: "脑子会安静一点，但手指又开始找屏幕。", cost: 1, text: "疲劳-1 / SNS依存+1 / 承认欲求+1", effects: { fatigue: -1, sns: 1, approval: 1 }, tags: ["sns", "rest"] },
  { id: "A-02", name: "关闭推荐流30分钟", jp: "关掉的一瞬间，房间里的声音回来了。", cost: 1, text: "SNS依存-1 / 自己肯定感+1 / 承认欲求+1", effects: { sns: -1, self: 1, approval: 1 }, tags: ["boundary"] },
  { id: "A-03", name: "给旧友发一句近况", jp: "哪怕只是一句“最近还好吗”，也能把你接回现实一点。", cost: 2, text: "现实连接+2 / 自己肯定感+1 / 疲劳+1", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["social"] },
  { id: "A-04", name: "把手机放到玄关", jp: "只是离开手边而已，却让你有点害怕。", cost: 2, text: "SNS依存-2 / 疲劳-1 / 承认欲求+1", effects: { sns: -2, fatigue: -1, approval: 1 }, tags: ["boundary", "rest"] },
  { id: "A-05", name: "用匿名小号发泄一句", jp: "会轻松一点，但也可能把刺留给别人。", cost: 1, text: "疲劳-1 / 承认欲求+1 / 自己肯定感-1 / SNS依存+1", effects: { fatigue: -1, approval: 1, self: -1, sns: 1 }, tags: ["sns", "controversy"] },
  { id: "A-06", name: "洗澡并换掉睡衣", jp: "还谈不上重启人生，但至少像回到人类状态。", cost: 1, text: "疲劳-1 / 自己肯定感+1 / SNS依存+1", effects: { fatigue: -1, self: 1, sns: 1 }, tags: ["rest", "real"] },
  { id: "A-07", name: "写三行日记但不发布", jp: "不发出去的文字，反而更像是在接住自己。", cost: 1, text: "自己肯定感+1 / 承认欲求-1 / 疲劳+1", effects: { self: 1, approval: -1, fatigue: 1 }, tags: ["reflect", "boundary"] },
  { id: "A-08", name: "反复查看后台数据", jp: "数字还在动，你也误以为自己还在前进。", cost: 1, text: "承认欲求+1 / SNS依存+1 / 疲劳+1 / 自己肯定感-1", effects: { approval: 1, sns: 1, fatigue: 1, self: -1 }, tags: ["sns", "likes"] },
  { id: "A-09", name: "去便利店买水", jp: "很小的外出，但你的脚确实离开了屏幕。", cost: 2, text: "现实连接+1 / 自己肯定感+1 / 疲劳+1", effects: { reality: 1, self: 1, fatigue: 1 }, tags: ["real", "social"] },
  { id: "A-10", name: "屏蔽一个比较对象", jp: "这不是逃避。今天先不看，也是一种选择。", cost: 1, text: "承认欲求-2 / 自己肯定感+1 / 疲劳+1", effects: { approval: -2, self: 1, fatigue: 1 }, tags: ["boundary", "compare"] },
  { id: "A-11", name: "整理20分钟作品草稿", jp: "不需要完成。先把作品拿回自己手里。", cost: 2, text: "自己肯定感+2 / 现实连接+1 / 疲劳+1", effects: { self: 2, reality: 1, fatigue: 1 }, tags: ["study", "real"] },
  { id: "A-12", name: "打开私信等一个回复", jp: "等待的时间里，你会短暂觉得自己被需要。", cost: 1, text: "承认欲求+1 / SNS依存+1 / 疲劳-1 / 自己肯定感-1", effects: { approval: 1, sns: 1, fatigue: -1, self: -1 }, tags: ["sns", "likes"] },
  { id: "A-13", name: "关闭通知一小时", jp: "太安静了，反而有点不安。但这份安静可能是必要的。", cost: 1, text: "SNS依存-1 / 疲劳-1 / 承认欲求+1", effects: { sns: -1, fatigue: -1, approval: 1 }, tags: ["boundary", "rest"] },
  { id: "A-14", name: "不回消息直接散步", jp: "罪恶感会跟着你走，但身体终于离开了原地。", cost: 2, text: "疲劳-2 / 现实连接+1 / 承认欲求+1", effects: { fatigue: -2, reality: 1, approval: 1 }, tags: ["real", "rest", "boundary"] },
  { id: "A-15", name: "向朋友坦白近况", jp: "说得不完整也没关系。至少你没有继续一个人扛。", cost: 2, text: "现实连接+2 / 自己肯定感+1 / 疲劳+1", effects: { reality: 2, self: 1, fatigue: 1 }, tags: ["social", "reflect"] },
  { id: "A-16", name: "删除一条旧动态", jp: "删掉并不代表没发生过，但你会轻一点。", cost: 1, text: "SNS依存-1 / 承认欲求-1 / 自己肯定感-1", effects: { sns: -1, approval: -1, self: -1 }, tags: ["boundary", "flame"] },
  { id: "A-17", name: "躲在被窝里打开X", jp: "你以为自己在休息，其实又开始接收别人的声音。", cost: 1, text: "疲劳-1 / SNS依存+2 / 自己肯定感-1", effects: { fatigue: -1, sns: 2, self: -1 }, tags: ["sns", "compare"] },
  { id: "A-18", name: "认真吃一顿饭", jp: "不会立刻改变人生，但身体会稍微回应你。", cost: 1, text: "疲劳-1 / 现实连接+1 / SNS依存+1", effects: { fatigue: -1, reality: 1, sns: 1 }, tags: ["real", "rest"] },
  { id: "A-19", name: "只把作品发给一个人看", jp: "不是公开发布，却也是真实地交给了某个人。", cost: 2, text: "自己肯定感+2 / 现实连接+1 / 承认欲求+1", effects: { self: 2, reality: 1, approval: 1 }, tags: ["social", "study", "likes"] },
  { id: "A-20", name: "回看今天的状态记录", jp: "变好的、变坏的，都先用自己的话整理一遍。", cost: 1, text: "自己肯定感+1 / 疲劳+1 / SNS依存-1", effects: { self: 1, fatigue: 1, sns: -1 }, tags: ["reflect", "boundary"] },
];

const actionJa = {
  "A-01": { name: "ショート動画を10本だけ見る", desc: "頭は少し静かになる。でも指はまた画面を探してしまう。" },
  "A-02": { name: "おすすめ欄を30分閉じる", desc: "閉じた瞬間、部屋の音が戻ってくる。" },
  "A-03": { name: "旧友に近況を一言送る", desc: "たった一言でも、現実へ少し戻してくれる。" },
  "A-04": { name: "スマホを玄関に置く", desc: "手元から離すだけなのに、少し怖い。" },
  "A-05": { name: "匿名アカウントで一言吐き出す", desc: "少し楽になる。でも、その棘は誰かに残るかもしれない。" },
  "A-06": { name: "シャワーを浴びて服を替える", desc: "人生の再起動ではない。でも少しだけ人間に戻る。" },
  "A-07": { name: "三行だけ日記を書く", desc: "公開しない言葉のほうが、自分を受け止めてくれることもある。" },
  "A-08": { name: "管理画面の数字を何度も見る", desc: "数字が動くと、自分も前に進んでいる気がしてしまう。" },
  "A-09": { name: "コンビニへ水を買いに行く", desc: "小さな外出。でも足は確かに画面から離れた。" },
  "A-10": { name: "比較してしまう相手を一人ミュートする", desc: "逃げではない。今日は見ない、という選択でもある。" },
  "A-11": { name: "作品の下書きを20分整理する", desc: "完成させなくていい。まず作品を自分の手に戻す。" },
  "A-12": { name: "DMを開いて返信を待つ", desc: "待っている間だけ、自分が必要とされている気がする。" },
  "A-13": { name: "通知を一時間切る", desc: "静かすぎて不安になる。でも、その静けさが必要かもしれない。" },
  "A-14": { name: "返信せずに散歩する", desc: "罪悪感はついてくる。それでも身体はようやく動き出す。" },
  "A-15": { name: "友人に今の状態を打ち明ける", desc: "うまく話せなくてもいい。少なくとも一人で抱え続けない。" },
  "A-16": { name: "昔の投稿を一つ消す", desc: "消したから無かったことにはならない。でも少し軽くなる。" },
  "A-17": { name: "布団の中でXを開く", desc: "休んでいるつもりで、また他人の声を浴び始める。" },
  "A-18": { name: "ちゃんと一食食べる", desc: "人生はすぐ変わらない。でも身体は少し返事をしてくれる。" },
  "A-19": { name: "作品を一人だけに見せる", desc: "公開ではない。でも確かに誰かへ手渡している。" },
  "A-20": { name: "今日の状態記録を見返す", desc: "よくなったことも悪くなったことも、自分の言葉で整理する。" },
};

const descJaById = {
  era_algorithm: "プラットフォームが争い、比較、ショート動画を極端に押し出す。SNSに関わる選択ほど、ループへ戻されやすくなる。",
  era_compare: "タイムラインは合格、インターン、旅行、作品発表で埋まる。比較圧力が背景音のように続く。",
  era_flame: "どんな一言も切り抜かれ、誤読され、拡散されるかもしれない。表現は注目と同時に危険も連れてくる。",
  era_recession: "現実の見通しが急に冷え込む。学習、仕事、申請、将来設計がすべて重くなる。",
  era_notice: "通知、DM、システムのお知らせが絶えず届く。自分から開かなくても、SNSのほうから来る。",
  era_offline: "周囲でオフライン活動が増え始める。現実世界は機会をくれるが、外に出ること自体も消耗する。",
  era_ai: "効率化、代替、新しいツールの話題が広がる。追いつきたい気持ちと、もう遅れている不安が同時に来る。",
  era_detox: "SNSを離れる生活やデジタルデトックスが流行する。出口に見える一方、それすら流行として追ってしまいそうになる。",
  "IMP-01": "スマホを見ていた深夜、家族から救急の電話が来る。おすすめ欄の続きよりも先に、現実があなたを呼び戻す。",
  "IMP-02": "家の鍵が壊され、部屋が荒らされている。アカウントばかり守っていた自分が、生活を守れていなかったように感じる。",
  "IMP-03": "突然、抽選に当たる。生活を一気に変える金額ではないが、少し息ができる。うれしさと、投稿したい衝動が同時に来る。",
  "IMP-04": "メインアカウントが七日間停止される。何度更新しても冷たい通知だけが残り、世界から切り離されたように感じる。",
  "IMP-05": "家族にアカウントを見つけられる。ネットだけのつもりだった言葉や写真が、食卓の沈黙の中に置かれる。",
  "IMP-06": "旧友が家の下まで来ている。『近くまで来たから』と言うが、偶然ではないとわかる。現実の関係が不器用に扉を叩く。",
  "IMP-07": "家賃、請求書、引き落としが同じ日に押し寄せる。SNSで隠していた現実問題が、一度に目の前へ立つ。",
  "IMP-08": "作品が大きなアカウントに拡散される。褒める人、疑う人、過去を掘る人が一気に現れ、見られることが制御不能になる。",
  "IMP-09": "医者は責めず、検査結果を見せる。このままでは意志ではなく身体が止まる、と静かに告げられる。",
  "IMP-10": "大切な作品ファイルが壊れる。数週間分の下書きと素材が消え、最初に浮かぶのは悲しみより投稿したい衝動だった。",
  "IMP-11": "作品を見た相手から仕事の話が来る。うれしいのに、自分にその価値があるのか疑ってしまう。",
  "IMP-12": "街で知らない人にアカウント名を呼ばれ、スマホを向けられる。画面の中の名前が現実まで追いかけてくる。",
  balanced: "SNSから完全に離れたわけではないが、もう一方的に振り回されてはいない。現実とのつながりと自己肯定感が支えになっている。",
  creator: "表現はアルゴリズムへの奉仕ではなく、自分の積み重ねへ変わっていった。SNSはまだあるが、価値の唯一の源ではない。",
  "offline-return": "現実の人間関係が再び生活の中心に戻ってきた。画面の外は遅く、面倒で、でも確かに残る。",
  "quiet-exit": "SNSとの距離を大きく取った。静けさは自由でもあり、まだ少し孤独でもある。",
  desireless: "オンラインの反応をほとんど追わなくなったが、現実のつながりも完全には戻っていない。静かだが、宙づりでもある。",
  "viral-life": "大きな注目を得たが、その注目にさらに依存するようにもなった。人生は賑やかに見えるが、内側はまだ揺れている。",
  burnout: "一年を乗り切ったが、疲労は生活の底に残っている。失敗ではなく、真剣に見つめるべきサインだ。",
  "still-online": "完全に壊れたわけでも、完全に抜け出したわけでもない。次の選択が、まだ方向を変える。",
  "bad-collapse": "SNS依存と疲労が同時に限界へ達した。通知、比較、不眠の中から回復できなくなっている。",
  "bad-flame": "承認欲求が限界まで高まり、自己肯定感はほとんど残っていない。外部評価だけで自分を確認しようとしている。",
  "bad-social": "現実とのつながりが切れ、自己肯定感も危険域まで落ちた。残っているのは、画面の中の評価システムだけに近い。",
};

const starterActionIds = actionCards.map((card) => card.id);
const actionCardById = Object.fromEntries(actionCards.map((card) => [card.id, card]));

const badEndings = [
  {
    id: "bad-collapse",
    name: "精神崩溃",
    jp: "精神的崩壊",
    label: "Bad Ending",
    desc: "SNS依存和疲劳同时达到极限。你已经无法从通知、比较和失眠里恢复过来。",
    check: (s) => s.sns >= 10 && s.fatigue >= 10,
  },
  {
    id: "bad-flame",
    name: "炎上失控",
    jp: "炎上の暴走",
    label: "Bad Ending",
    desc: "承认欲求达到顶点，而自己肯定感几乎归零。你开始完全依赖外部评价来确认自己。",
    check: (s) => s.approval >= 10 && s.self <= 1,
  },
  {
    id: "bad-social",
    name: "社会性死亡",
    jp: "社会的な孤立",
    label: "Bad Ending",
    desc: "现实连接断开，同时自己肯定感跌到危险线。你几乎只剩下屏幕中的评价系统。",
    check: (s) => s.reality <= 0 && s.self <= 1,
  },
];

const normalEndings = [
  {
    id: "balanced",
    name: "平衡人生",
    jp: "バランスのある人生",
    desc: "你没有完全离开SNS，但已经不再只被它牵着走。现实连接和自己肯定感重新成为支点。",
    check: (s) => s.sns >= 3 && s.sns <= 6 && s.reality >= 6 && s.self >= 6,
  },
  {
    id: "creator",
    name: "创作者结局",
    jp: "創作者として進む",
    desc: "你把表达从讨好算法慢慢转向自己的积累。SNS仍然存在，但不再是唯一的价值来源。",
    check: (s) => s.self >= 8 && s.reality >= 6,
  },
  {
    id: "real-return",
    name: "现实回归",
    jp: "現実への回帰",
    desc: "你把大量注意力从平台拿回现实生活。关系、身体和日常重新变得重要。",
    check: (s) => s.sns <= 3 && s.reality >= 8,
  },
  {
    id: "desireless",
    name: "无欲无求",
    jp: "欲望の少ない静けさ",
    desc: "你几乎不再追求线上反馈，但现实连接也没有完全恢复。这是一种安静，也是一种悬置。",
    check: (s) => s.sns <= 2 && s.approval <= 2 && s.reality <= 4,
  },
  {
    id: "viral-life",
    name: "爆红人生",
    jp: "バズった人生",
    desc: "你获得了大量关注，也更加依赖这种关注。人生看起来热闹，但内在稳定仍然摇晃。",
    check: (s) => s.approval >= 8 && s.sns >= 8,
  },
  {
    id: "burnout",
    name: "情绪耗竭",
    jp: "感情の消耗",
    desc: "你撑过了一年，但疲劳已经成为生活底色。不是失败，而是一个需要被认真看见的信号。",
    check: (s) => s.fatigue >= 8,
  },
  {
    id: "still-online",
    name: "仍在登录中",
    jp: "まだログインしている",
    desc: "你没有彻底崩溃，也还没有真正脱离循环。下一次选择，仍然会改变你的方向。",
    check: () => true,
  },
];

let state;

const el = {
  roundText: document.querySelector("#roundText"),
  phaseText: document.querySelector("#phaseText"),
  energyText: document.querySelector("#energyText"),
  roleName: document.querySelector("#roleName"),
  roleNameJp: document.querySelector("#roleNameJp"),
  roleAbility: document.querySelector("#roleAbility"),
  roleWeakness: document.querySelector("#roleWeakness"),
  eraTimer: document.querySelector("#eraTimer"),
  eraName: document.querySelector("#eraName"),
  eraDesc: document.querySelector("#eraDesc"),
  statsList: document.querySelector("#statsList"),
  actionHint: document.querySelector("#actionHint"),
  actionCards: document.querySelector("#actionCards"),
  deckStatus: document.querySelector("#deckStatus"),
  eventType: document.querySelector("#eventType"),
  eventId: document.querySelector("#eventId"),
  eventTitle: document.querySelector("#eventTitle"),
  eventTitleJp: document.querySelector("#eventTitleJp"),
  eventDesc: document.querySelector("#eventDesc"),
  choiceList: document.querySelector("#choiceList"),
  afterChoice: document.querySelector("#afterChoice"),
  resultText: document.querySelector("#resultText"),
  nextTurnBtn: document.querySelector("#nextTurnBtn"),
  logList: document.querySelector("#logList"),
  riskList: document.querySelector("#riskList"),
  deathRiskText: document.querySelector("#deathRiskText"),
  endingModal: document.querySelector("#endingModal"),
  endingLabel: document.querySelector("#endingLabel"),
  endingTitle: document.querySelector("#endingTitle"),
  endingTitleJp: document.querySelector("#endingTitleJp"),
  endingDesc: document.querySelector("#endingDesc"),
  endingStats: document.querySelector("#endingStats"),
  impactModal: document.querySelector("#impactModal"),
  impactLabel: document.querySelector("#impactLabel"),
  impactTitle: document.querySelector("#impactTitle"),
  impactTitleJp: document.querySelector("#impactTitleJp"),
  impactDesc: document.querySelector("#impactDesc"),
  impactEffects: document.querySelector("#impactEffects"),
  impactContinueBtn: document.querySelector("#impactContinueBtn"),
  langToggleBtn: document.querySelector("#langToggleBtn"),
  restartBtn: document.querySelector("#restartBtn"),
  rerollBtn: document.querySelector("#rerollBtn"),
  endingRestartBtn: document.querySelector("#endingRestartBtn"),
};

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function clamp(value) {
  return Math.max(0, Math.min(10, value));
}

function getChapter(turn = state.turn) {
  return storyChapters.find((chapter) => turn >= chapter.start && turn <= chapter.end) ?? storyChapters[0];
}

function getChapterDisplay(turn = state.turn) {
  const chapter = getChapter(turn);
  if (!isJapanese()) return chapter;
  return chapterJa[chapter.start] ?? chapter;
}

function getStoryBeatForTurn(turn) {
  const roleBeats = roleStoryBeats[state.role.id] ?? [];
  const roleBeat = roleBeats.find((beat) => beat.turn === turn && !state.storySeen.includes(beat.id));
  if (roleBeat) return roleBeat;
  return storyBeats.find((beat) => beat.turn === turn && !state.storySeen.includes(beat.id));
}

function clampStory(value) {
  return Math.max(0, Math.min(10, value));
}

function applyStoryFlags(flags = {}) {
  Object.entries(flags).forEach(([key, value]) => {
    if (!storyThreads[key]) return;
    state.storyFlags[key] = clampStory((state.storyFlags[key] ?? 0) + value);
  });
}

function drawEraCard() {
  if (state.eraDeck.length === 0) state.eraDeck = shuffle(eraCards);
  return state.eraDeck.pop();
}

function activateEraCard() {
  state.activeEra = drawEraCard();
  state.eraStartedTurn = state.turn;
  applyEffects(state.activeEra.effects);
  addLog(
    isJapanese() ? "時代カード" : "时代卡",
    isJapanese()
      ? `「${titleOf(state.activeEra)}」が4ターン有効：${formatEffects(state.activeEra.effects)}。`
      : `「${titleOf(state.activeEra)}」生效4回合：${formatEffects(state.activeEra.effects)}。`
  );
}

function getEraRemainingTurns() {
  if (!state.activeEra || !state.eraStartedTurn) return 0;
  return Math.max(0, 4 - (state.turn - state.eraStartedTurn));
}

function applyEraModifiers(baseEffects, tags = []) {
  const effects = { ...baseEffects };
  const notes = [];
  const era = state.activeEra;
  if (!era) return { effects, notes };

  if (era.id === "era_algorithm" && (tags.includes("sns") || tags.includes("viral") || tags.includes("likes"))) {
    effects.sns = (effects.sns ?? 0) + 1;
    effects.fatigue = (effects.fatigue ?? 0) + 1;
    notes.push(isJapanese() ? "時代カード：SNS関連の選択は制御しにくくなる。" : "时代卡：SNS相关选择会变得更容易失控。");
  }

  if (era.id === "era_compare" && (tags.includes("compare") || tags.includes("study"))) {
    effects.self = (effects.self ?? 0) - 1;
    notes.push(isJapanese() ? "時代カード：比較と学習圧力が自己肯定感をさらに削る。" : "时代卡：比较和学习压力会额外削弱自己肯定感。");
  }

  if (era.id === "era_flame" && (tags.includes("flame") || tags.includes("controversy"))) {
    effects.fatigue = (effects.fatigue ?? 0) + 1;
    effects.self = (effects.self ?? 0) - 1;
    notes.push(isJapanese() ? "時代カード：論争関連の選択は疲労を増やしやすい。" : "时代卡：争议相关选择会更容易带来疲劳。");
  }

  if (era.id === "era_recession" && (tags.includes("study") || tags.includes("real"))) {
    effects.fatigue = (effects.fatigue ?? 0) + 1;
    notes.push(isJapanese() ? "時代カード：現実行動や積み重ねはさらに疲れる。" : "时代卡：现实行动和积累行动会更累。");
  }

  if (era.id === "era_notice" && (effects.sns ?? 0) > 0) {
    effects.fatigue = (effects.fatigue ?? 0) + 1;
    notes.push(isJapanese() ? "時代カード：通知が多すぎて、SNS依存が上がると疲労も上がる。" : "时代卡：通知太多，SNS依存上升时疲劳也会上升。");
  }

  if (era.id === "era_offline" && (tags.includes("social") || tags.includes("real"))) {
    effects.reality = (effects.reality ?? 0) + 1;
    effects.fatigue = (effects.fatigue ?? 0) + 1;
    notes.push(isJapanese() ? "時代カード：オフラインの機会は増えるが、体力も使う。" : "时代卡：线下机会增加，但也会消耗体力。");
  }

  if (era.id === "era_ai" && tags.includes("study")) {
    effects.self = (effects.self ?? 0) + 1;
    effects.fatigue = (effects.fatigue ?? 0) + 1;
    notes.push(isJapanese() ? "時代カード：学習行動は手応えが出るが、疲労も増える。" : "时代卡：学习行动更有手感，但也更疲劳。");
  }

  if (era.id === "era_detox" && (tags.includes("boundary") || tags.includes("rest"))) {
    effects.sns = (effects.sns ?? 0) - 1;
    effects.approval = (effects.approval ?? 0) + 1;
    notes.push(isJapanese() ? "時代カード：デトックスは効きやすいが、取り残される不安も残る。" : "时代卡：断舍离更有效，但错过感也会留下。");
  }

  return { effects, notes };
}

function makeStarterDrawPile() {
  return shuffle(starterActionIds.map((id) => actionCardById[id]));
}

function startGame(roleOverride = null) {
  const role = roleOverride ?? roles[Math.floor(Math.random() * roles.length)];
  state = {
    turn: 1,
    role,
    stats: { ...role.stats },
    eventDeck: shuffle(events),
    mysteryDeck: shuffle(mysteryEvents),
    crisisDeck: shuffle(crisisEvents),
    impactDeck: shuffle(suddenImpactEvents),
    eraDeck: shuffle(eraCards),
    activeEra: null,
    eraStartedTurn: null,
    drawPile: makeStarterDrawPile(),
    discardPile: [],
    hand: [],
    current: null,
    phase: "intro",
    energy: 0,
    maxEnergy: 2,
    routeOptions: [],
    selectedRoute: null,
    routeHistory: [],
    storySeen: [],
    storyFlags: { loop: 0, rin: 0, creator: 0, boundary: 0, flame: 0, future: 0 },
    crisisSeen: [],
    crisisCooldown: 0,
    impactCooldown: 0,
    pendingImpact: null,
    openingDeadlineChecked: false,
    deathRiskTurns: 0,
    badEndingWarnings: {},
    logs: [],
    ended: false,
    ending: null,
  };
  state.routeOptions = generateRouteOptions();
  addLog(
    isJapanese() ? "キャラクター序章" : "角色序章",
    isJapanese()
      ? `あなたは「${roleName(role)}」。一日のSNS利用時間は${roleText(role, "snsHours")}。`
      : `你是「${role.name}」，每天使用SNS ${role.snsHours}。`
  );
  el.endingModal.hidden = true;
  el.impactModal.hidden = true;
  render();
}

function beginJourney() {
  if (state.ended || state.phase !== "intro") return;
  state.phase = "route";
  activateEraCard();
  addLog(
    isJapanese() ? "ゲーム開始" : "游戏开始",
    isJapanese() ? "あなたはまだアカウントを消していない。少なくとも今は。この一年をまず生き延びることにした。" : "你没有注销账号。至少现在没有。你决定先撑过这一年。"
  );
  render();
}

function routeUnlocked(route) {
  if (!route.unlock) return true;
  return Object.entries(route.unlock).every(([key, rule]) => {
    const value = state.stats[key];
    if (typeof value !== "number") return true;
    if (rule.min !== undefined && value < rule.min) return false;
    if (rule.max !== undefined && value > rule.max) return false;
    return true;
  });
}

function generateRouteOptions() {
  const unlocked = routes.filter(routeUnlocked);
  const recentIds = state.routeHistory
    .slice(-6)
    .filter(Boolean)
    .map((entry) => entry.route?.id);
  const fresh = unlocked.filter((route) => !recentIds.includes(route.id));
  const pool = fresh.length >= 3 ? fresh : unlocked;
  return shuffle(pool).slice(0, 3);
}

function eventMatchesRoute(event, route) {
  return event.choices.some((choice) => (choice.tags ?? []).some((tag) => route.tags.includes(tag)));
}

function drawEvent(route = null) {
  if (state.eventDeck.length === 0) state.eventDeck = shuffle(events);

  if (!route) return state.eventDeck.pop();

  const index = state.eventDeck.findIndex((event) => eventMatchesRoute(event, route));
  if (index >= 0) {
    const [event] = state.eventDeck.splice(index, 1);
    return event;
  }

  state.eventDeck = shuffle(events);
  return state.eventDeck.pop();
}

function drawMystery() {
  if (state.mysteryDeck.length === 0) state.mysteryDeck = shuffle(mysteryEvents);
  return state.mysteryDeck.pop();
}

function drawCrisis() {
  if (state.crisisDeck.length === 0) state.crisisDeck = shuffle(crisisEvents);
  return state.crisisDeck.pop();
}

function drawImpact() {
  if (state.impactDeck.length === 0) state.impactDeck = shuffle(suddenImpactEvents);
  return state.impactDeck.pop();
}

function getDangerScore() {
  let score = 0;
  score += state.stats.fatigue >= 8 ? 3 : state.stats.fatigue >= 6 ? 1 : 0;
  score += state.stats.sns >= 9 ? 2 : state.stats.sns >= 7 ? 1 : 0;
  score += state.stats.self <= 2 ? 3 : state.stats.self <= 4 ? 1 : 0;
  score += state.stats.reality <= 1 ? 2 : state.stats.reality <= 3 ? 1 : 0;
  score += state.stats.approval >= 9 ? 1 : 0;
  return score;
}

function shouldTriggerImpact() {
  if (state.turn <= 1 || state.impactCooldown > 0 || state.pendingImpact) return false;
  const danger = getDangerScore();
  const chance = Math.min(0.45, 0.3 + danger * 0.015);
  return Math.random() < chance;
}

function triggerImpactPopup(event) {
  state.pendingImpact = event;
  state.impactCooldown = 2;
  applyEffects(event.effects);
  addLog(
    isJapanese() ? "運命の衝撃" : "突发事件",
    `「${titleOf(event)}」：${formatEffects(event.effects)}。`
  );
  render();
}

function dismissImpactPopup() {
  state.pendingImpact = null;
  el.impactModal.hidden = true;
  render();
}

function shouldTriggerCrisis() {
  if (state.turn <= 1 || state.crisisCooldown > 0) return false;
  const danger = getDangerScore();
  const baseChance = state.turn % 4 === 0 ? 0.12 : 0.06;
  const dangerChance = Math.min(0.32, danger * 0.035);
  return Math.random() < baseChance + dangerChance;
}

function enterCrisisEvent(event) {
  state.current = event;
  state.phase = "crisis";
  state.crisisSeen.push(event.id);
  state.crisisCooldown = 2;
  applyEffects(event.shock);
  addLog(
    isJapanese() ? "緊急危機" : "突发危机",
    isJapanese() ? `「${titleOf(event)}」即時衝撃：${formatEffects(event.shock)}。` : `「${titleOf(event)}」立刻冲击：${formatEffects(event.shock)}。`
  );
}

function drawActionCard() {
  const card = shuffle(actionCards)[0];
  state.discardPile.push(card);
  addLog(
    isJapanese() ? "対処カード獲得" : "获得行动卡",
    isJapanese()
      ? `「${actionName(card)}」を獲得し、捨て札に加えた。${actionEffectText(card)}。`
      : `你获得了「${card.name}」，已加入弃牌堆。${card.text}`
  );
}

function drawHand(count = 3) {
  state.hand = [];
  for (let i = 0; i < count; i += 1) {
    if (state.drawPile.length === 0 && state.discardPile.length > 0) {
      state.drawPile = shuffle(state.discardPile);
      state.discardPile = [];
    }
    if (state.drawPile.length === 0) break;
    state.hand.push(state.drawPile.pop());
  }
}

function discardHand() {
  state.discardPile.push(...state.hand);
  state.hand = [];
}

function formatEffects(effects) {
  const entries = Object.entries(effects).filter(([, value]) => value !== 0);
  if (!entries.length) return isJapanese() ? "変化なし" : "属性无变化";
  return entries
    .map(([key, value]) => `${statName(key)}${value > 0 ? "+" : ""}${value}`)
    .join(" / ");
}

const typeLabels = {
  zh: {
    "事件卡": "事件卡",
    "神秘事件": "特殊事件",
    "主线事件": "主线事件",
    "角色事件": "角色事件",
    "突发危机": "突发危机",
  },
  ja: {
    "事件卡": "イベントカード",
    "神秘事件": "特殊イベント",
    "主线事件": "メインイベント",
    "角色事件": "キャラクターイベント",
    "突发危机": "緊急危機",
  },
};

const phaseLabels = {
  zh: {
    intro: "序章",
    route: "路线",
    event: "事件",
    story: "主线",
    crisis: "突发危机",
    mystery: "特殊事件",
    action: "行动",
    ended: "结局",
  },
  ja: {
    intro: "序章",
    route: "ルート",
    event: "イベント",
    story: "メイン",
    crisis: "緊急危機",
    mystery: "特殊イベント",
    action: "行動",
    ended: "エンディング",
  },
};

function titleOf(item) {
  if (isJapanese()) {
    if (routeJa[item?.id]?.title) return routeJa[item.id].title;
    if (actionJa[item?.id]?.name) return actionJa[item.id].name;
    return item?.jp || item?.title || item?.name || "";
  }
  return item?.title || item?.name || item?.jp || "";
}

function eventTypeOf(item) {
  return typeLabels[currentLang]?.[item?.type] || item?.type || "";
}

const descById = {
  "SNS-01": "何気なく見ただけなのに、友人の旅行写真がまぶしすぎる。自分の部屋が急に狭く感じる。",
  "SNS-02": "一本だけのつもりだったショート動画が、もう何十本目かわからない。時計だけが正直だ。",
  "SNS-03": "投稿したあと、反応がほとんどない。誰も見ていない画面を、何度も更新してしまう。",
  "SNS-04": "新しいチャレンジタグが流れてくる。参加しないと、タイムラインから置いていかれる気がする。",
  "SNS-05": "グループチャットが成績やインターンの話になる。普通の会話なのに、胸の奥が削れる。",
  "SNS-06": "誰かが発言で攻撃されている。言いたいことはある。でも、次は自分かもしれない。",
  "SNS-07": "友人から急な誘いが来る。うれしいのに、身体はもう重い。",
  "SNS-08": "勉強や仕事で小さなミスをする。たったそれだけで、自分全体がだめに見える。",
  "SNS-09": "投稿が少し伸びる。通知が増えるたび、うれしさと怖さが同じ速度で来る。",
  "SNS-10": "きついコメントが届く。短い言葉なのに、頭の中では何度も長くなる。",
  "SNS-11": "おすすめ欄が妙に刺さる。まるで、自分より先に自分の弱いところを知っているみたいだ。",
  "SNS-12": "オフラインイベントの写真が増える。行きたい気持ちと、行けない自分を責める気持ちが混ざる。",
  "SNS-13": "大事な試験や面接が近い。やるべきことが増えるほど、SNSに逃げたくなる。",
  "SNS-14": "昔の写真を見つける。懐かしいのに、今の自分との差が少し痛い。",
  "SNS-15": "高価な生活スタイルの投稿が流れてくる。持っていないものばかりが目につく。",
  "SNS-16": "匿名質問箱に、答えにくい質問が来る。答えれば伸びるかもしれない。燃えるかもしれない。",
  "SNS-17": "家族から電話が来る。面倒に感じる。でも、画面の外でまだ気にしてくれる人がいる。",
  "SNS-18": "創作が止まる。参考にするつもりでSNSを開いたのに、いつの間にか比べている。",
  "SNS-19": "コラボの誘いが来る。チャンスなのに、断ったら次はない気がして怖い。",
  "SNS-20": "みんながAIツールの話をしている。便利そうだと思う前に、遅れている気がしてしまう。",
  "SNS-21": "深夜にDMが届く。今返せば眠れない。でも、返さないと冷たい人だと思われそうだ。",
  "SNS-22": "現実で小さな目標を達成した。投稿向きではない。でも、確かに自分の一日には残っている。",
  "SNS-23": "自分の投稿が無断転載されている。怒りと不安と、公開で言い返したい気持ちが一緒に来る。",
  "SNS-24": "体調が悪い。何もできないから、SNSだけがいちばん簡単な麻酔になる。",
  "SNS-25": "不採用の知らせが届く。すぐにSNSを開いて、成功している人を探してしまいそうになる。",
  "SNS-26": "集合写真を投稿する前に、何度も加工する。思い出ではなく、評価される画像を作っている気がする。",
  "CR-01": "画面を見ていただけなのに、急に息が浅くなる。心臓の音だけが大きい。",
  "CR-02": "コメント、DM、引用が一気に増える。部屋にいるのに、知らない人たちに囲まれているみたいだ。",
  "CR-03": "検査結果の紙が、思ったより重い。身体はもう、無視できないところまで来ている。",
  "CR-04": "投稿が急に伸びなくなる。世界から線を一本抜かれたような感覚がする。",
  "CR-05": "三日間、まともに声を出していないことに気づく。画面は騒がしいのに、部屋は静かすぎる。",
  "CR-06": "昔の失敗が掘り返される。忘れたふりをしていた痛みが、また戻ってくる。",
  "IMP-01": "スマホを置いても眠れない。頭の中だけが、まだ勝手に更新されている。",
  "IMP-02": "友人が、作品のどこがよかったのかを具体的に話してくれる。数字より遅く、でも深く届く。",
  "IMP-03": "もう閉じたはずの悪いコメントが、何度も頭の中で再生される。",
  "IMP-04": "短い動画が急に伸びる。うれしいのに、怖くて画面から離れられない。",
  "IMP-05": "友人からの誘いに気づくのが遅すぎた。相手は「大丈夫」と言うけれど、胸に残る。",
  "IMP-06": "スマホの電池が切れる。最初は焦る。少しして、窓の外の音に気づく。",
  "IMP-07": "同世代の合格報告が流れてくる。祝いたい気持ちより先に、体が沈む。",
  "IMP-08": "人に会って帰ってきた。疲れた。でも、空っぽになる疲れ方ではなかった。",
  "MAIN-01": "設定画面のログアウトボタンで指が止まる。消えたいわけではない。ただ、もう静かになりたい。",
  "MAIN-04": "旧友から返信が来る。責める言葉ではなく、「最近、疲れてない？」という短い一文だった。",
  "MAIN-08": "知らない人が、あなたの作品に救われたと書いている。いいねよりも遅く、でも確かに届く反応だった。",
  "MAIN-12": "数か月前の投稿が切り抜かれ、知らない人たちがあなたを説明し始める。",
  "MAIN-16": "小さな展示に誘われる。大きくバズるわけではない。でも、作品の前に本物の人が立つ。",
  "MAIN-20": "先生か先輩が、静かに聞く。数字で証明できなくても、それを続けたいと思えるか。",
  "MAIN-24": "一年の終わり、また設定画面を開く。ログアウトボタンの横に、この一年の選択が積もっている。",
  "INF-02": "休もうとした瞬間、更新を待つコメントが見える。止まれば忘れられる気がして、目が離せない。",
  "INF-10": "初めてのPR依頼が届く。金額よりも、『価値がある』と言われた気がしてしまう。",
  "INF-18": "数字が落ちる。数件の投稿が伸びないだけで、自分そのものが終わったように感じる。",
  "HON-02": "同世代の成績スクショが流れてくる。相手の一部だとわかっていても、自分への判決に見える。",
  "HON-10": "先生に選抜を勧められる。チャンスなのに、失敗する未来まで一緒に渡された気がする。",
  "HON-18": "締切前夜。書類はまだ途中で、SNSには『提出しました』の文字が並ぶ。",
  "SHU-02": "昼なのにカーテンを開けていない。ネットは騒がしいのに、部屋だけが息苦しい。",
  "SHU-10": "いつも話している相手から、オフ会に誘われる。通知音よりも心臓の音が大きい。",
  "SHU-18": "家族がドアをノックする。ただ『ご飯できたよ』と言われただけなのに、現実が近すぎる。",
  "FLA-02": "あなたのコメントが切り抜かれる。支持も攻撃も来る。怖いのに、少し興奮している。",
  "FLA-10": "反論動画が伸びる。強く見える自分が、だんだん知らない人に見えてくる。",
  "FLA-18": "プラットフォームから警告が届く。まだ凍結ではない。でも壁が目の前に立った。",
  "M-01": "知らない人から、作品への感謝が届く。短い反応ではなく、ちゃんとした文章だった。",
  "M-02": "投稿が突然おすすめに乗る。通知が波のように来て、うれしさと怖さが混ざる。",
  "M-03": "昔の友人から電話が来る。SNSとは関係ない、あなたの生活の一部だった人だ。",
  "M-04": "新しい仕事や学びの機会が来る。受ければ、今のループから少し外へ出られるかもしれない。",
  "M-05": "昔の投稿が掘り返される。知らない人たちが、あなたの過去を今の言葉で裁き始める。",
  "M-06": "スマホが一日使えない。最初は焦る。でも、一日そのものは消えなかった。",
};

function generatedDesc(item) {
  const tags = item?.tags ?? item?.choices?.flatMap((choice) => choice.tags ?? []) ?? [];
  if (isJapanese()) {
    if (item?.shock) return "突然の出来事が、あなたを強く下へ引く。今はまず、これ以上崩れない方法を考えなければならない。";
    if (tags.includes("flame") || tags.includes("controversy")) return "画面の向こうの声が急に近くなる。反撃したい気持ちと、逃げたい気持ちが同時にある。";
    if (tags.includes("compare")) return "比べたくないのに、目が止まる。他人の生活がまぶしく、自分の輪郭が薄くなる。";
    if (tags.includes("social")) return "人との距離をもう一度選び直す必要がある。近づくのも、離れるのも簡単ではない。";
    if (tags.includes("study") || tags.includes("real")) return "画面の外にも向き合うべき現実がある。小さな一歩でも、今日は重く感じる。";
    if (tags.includes("sns") || tags.includes("likes") || tags.includes("viral")) return "少し見るだけのつもりが、画面はまた時間を奪い始める。";
    return "普通の出来事のはずなのに、今の状態では少し重い。それでも、どう反応するかは選べる。";
  }
  if (item?.shock) return "突然发生的事情把你往下拽了一下。现在必须先想办法别让自己继续崩下去。";
  if (tags.includes("flame") || tags.includes("controversy")) return "屏幕另一边的声音突然变得很近。你想反击，也想逃走。";
  if (tags.includes("compare")) return "你明明不想比较，眼睛却停住了。别人的生活太亮，自己的轮廓反而变淡。";
  if (tags.includes("social")) return "你需要重新决定和人的距离。靠近很难，离开也不轻松。";
  if (tags.includes("study") || tags.includes("real")) return "屏幕外还有必须面对的现实。哪怕只是很小一步，今天也显得很重。";
  if (tags.includes("sns") || tags.includes("likes") || tags.includes("viral")) return "你本来只是打开看一眼，但屏幕很快又开始拿走你的时间。";
  return "这本来只是很普通的一件事，但以你现在的状态，它变得有点重。你仍然可以选择怎么回应。";
}

function descOf(item) {
  if (isJapanese()) {
    if (routeJa[item?.id]?.desc) return routeJa[item.id].desc;
    if (actionJa[item?.id]?.desc) return actionJa[item.id].desc;
    if (descJaById[item?.id]) return descJaById[item.id];
    if (descById[item?.id]) return descById[item.id];
    if (item?.descJa) return item.descJa;
    return generatedDesc(item);
  }
  if (item?.desc) return item.desc;
  if (item?.descJa) return item.descJa;
  if (descById[item?.id]) return descById[item.id];
  return generatedDesc(item);
}

function choiceIntent(choice) {
  const tags = choice.tags ?? [];
  const effects = choice.effects ?? {};
  if (isJapanese()) {
    if (tags.includes("flame") || tags.includes("controversy")) return effects.fatigue > 0 || effects.self < 0 ? "すぐ反撃する" : "いったん距離を取る";
    if ((effects.sns ?? 0) > 0 && (tags.includes("sns") || tags.includes("likes") || tags.includes("viral"))) return "画面へ戻る";
    if ((effects.sns ?? 0) < 0 || tags.includes("boundary")) return "少し距離を置く";
    if (tags.includes("social")) return "誰かに話す";
    if (tags.includes("study")) return "手元のことを進める";
    if (tags.includes("real")) return "現実へ戻る";
    if (tags.includes("rest")) return "少し休む";
    if (tags.includes("compare")) return "比べてしまう";
    if ((effects.approval ?? 0) > 0) return "反応を求める";
    if ((effects.self ?? 0) > 0) return "自分の感覚を取り戻す";
    return "まず受け止める";
  }
  if (tags.includes("flame") || tags.includes("controversy")) return effects.fatigue > 0 || effects.self < 0 ? "立刻反击" : "先拉开距离";
  if ((effects.sns ?? 0) > 0 && (tags.includes("sns") || tags.includes("likes") || tags.includes("viral"))) return "回到屏幕里";
  if ((effects.sns ?? 0) < 0 || tags.includes("boundary")) return "暂时拉开距离";
  if (tags.includes("social")) return "找人说说";
  if (tags.includes("study")) return "推进手边的事";
  if (tags.includes("real")) return "走回现实";
  if (tags.includes("rest")) return "休息一下";
  if (tags.includes("compare")) return "忍不住比较";
  if ((effects.approval ?? 0) > 0) return "追求反应";
  if ((effects.self ?? 0) > 0) return "找回自己的感觉";
  return "先承受下来";
}

function choiceLabelOf(choice, index) {
  const prefix = ["A", "B", "C"][index] ?? `${index + 1}`;
  if (isJapanese()) return `${prefix}. ${choice.labelJa || choiceIntent(choice)}`;
  if (choice.labelJa) return `${prefix}. ${choice.labelJa}`;
  if (choice.label) return choice.label;
  return `${prefix}. ${choiceIntent(choice)}`;
}

function choiceTextOf(choice) {
  if (isJapanese()) {
    if (choice.textJa) return choice.textJa;
    const tags = choice.tags ?? [];
    const effects = choice.effects ?? {};
    if (tags.includes("flame") || tags.includes("controversy")) return "今反応すれば注目は集まる。でも、その火は自分にも燃え移る。";
    if ((effects.sns ?? 0) > 0 && (tags.includes("sns") || tags.includes("likes") || tags.includes("viral"))) return "短い安心は得られるが、その後さらに画面から離れにくくなる。";
    if ((effects.sns ?? 0) < 0 || tags.includes("boundary")) return "完全にやめるわけではない。今だけ少し離れる。";
    if (tags.includes("social")) return "うまく話せなくてもいい。少なくとも一人で抱え込まない。";
    if (tags.includes("study")) return "一気に完成させなくていい。手元のものを少し整える。";
    if (tags.includes("real")) return "画面の外の空気に触れる。刺激は弱いが、身体には残る。";
    if (tags.includes("rest")) return "何もしないことを、今日は失敗と呼ばない。";
    if (tags.includes("compare")) return "見れば苦しくなる。でも見てしまう理由もある。";
    if ((effects.self ?? 0) > 0) return "誰かに見せるためではなく、自分の感覚を取り戻すために動く。";
    return "正解かはわからない。それでも今のあなたが選べる反応だ。";
  }
  if (choice.textJa) return choice.textJa;
  if (choice.text) return choice.text;
  const tags = choice.tags ?? [];
  const effects = choice.effects ?? {};
  if (tags.includes("flame") || tags.includes("controversy")) return "现在反应会得到关注，但这把火也会烧到自己。";
  if ((effects.sns ?? 0) > 0 && (tags.includes("sns") || tags.includes("likes") || tags.includes("viral"))) return "会有短暂的安心，但之后更难离开屏幕。";
  if ((effects.sns ?? 0) < 0 || tags.includes("boundary")) return "不是彻底戒断，只是现在先离远一点。";
  if (tags.includes("social")) return "说不清楚也没关系，至少不用一个人扛。";
  if (tags.includes("study")) return "不需要一下子完成，只要把手边的东西整理一点。";
  if (tags.includes("real")) return "接触一点屏幕外的空气，它不刺激，但会留在身体里。";
  if (tags.includes("rest")) return "今天先不把什么都不做叫作失败。";
  if (tags.includes("compare")) return "越看越难受，但你还是有想看的理由。";
  if ((effects.self ?? 0) > 0) return "不是为了给别人看，而是为了找回自己的感觉。";
  return "不知道是不是正确答案，但这是现在的你能做出的回应。";
}

function addLog(title, body) {
  state.logs.unshift({ turn: state.turn, title, body });
  state.logs = state.logs.slice(0, 10);
}

function roleText(role, key) {
  if (isJapanese()) return roleJa[role.id]?.[key] ?? role[key] ?? "";
  return role[key] ?? "";
}

function roleName(role) {
  return isJapanese() ? role.jp : role.name;
}

function routeTag(route) {
  return isJapanese() ? routeJa[route.id]?.tag ?? route.tag : route.tag;
}

function routeDestiny(route) {
  return isJapanese() ? routeJa[route.id]?.destiny ?? route.destiny : route.destiny;
}

function actionName(card) {
  return isJapanese() ? actionJa[card.id]?.name ?? card.name : card.name;
}

function actionDesc(card) {
  return isJapanese() ? actionJa[card.id]?.desc ?? card.jp : card.jp;
}

function actionEffectText(card) {
  return isJapanese() ? formatEffects(card.effects) : card.text;
}

function isBeneficial(key, value) {
  if (value === 0) return false;
  if (["sns", "approval", "fatigue"].includes(key)) return value < 0;
  return value > 0;
}

function isHarmful(key, value) {
  if (value === 0) return false;
  if (["sns", "approval", "fatigue"].includes(key)) return value > 0;
  return value < 0;
}

function hasBeneficialEffect(effects) {
  return Object.entries(effects).some(([key, value]) => isBeneficial(key, value));
}

function hasHarmfulEffect(effects) {
  return Object.entries(effects).some(([key, value]) => isHarmful(key, value));
}

function addNonConflictingEffect(effects, candidates, desired) {
  const next = { ...effects };
  const candidate =
    candidates.find(([key]) => {
      const current = next[key] ?? 0;
      return desired === "good" ? !isHarmful(key, current) : !isBeneficial(key, current);
    }) ?? candidates[0];
  const [key, value] = candidate;
  next[key] = (next[key] ?? 0) + value;
  if (next[key] === 0) delete next[key];
  return next;
}

function getTradeoffEffects(effects = {}, tags = []) {
  let next = { ...effects };

  if (!hasBeneficialEffect(next)) {
    const goodCandidates = tags.includes("sns") || tags.includes("likes") || tags.includes("viral")
      ? [["self", 1], ["fatigue", -1], ["reality", 1], ["approval", -1]]
      : tags.includes("compare")
        ? [["fatigue", -1], ["reality", 1], ["approval", -1], ["self", 1]]
        : [["self", 1], ["reality", 1], ["fatigue", -1], ["sns", -1], ["approval", -1]];
    next = addNonConflictingEffect(next, goodCandidates, "good");
  }

  if (!hasHarmfulEffect(next)) {
    const badCandidates = tags.includes("boundary") || tags.includes("rest") || tags.includes("reflect")
      ? [["fatigue", 1], ["self", -1], ["reality", -1], ["approval", 1], ["sns", 1]]
      : tags.includes("social") || tags.includes("real") || tags.includes("study")
        ? [["fatigue", 1], ["sns", 1], ["approval", 1], ["self", -1]]
        : [["fatigue", 1], ["approval", 1], ["sns", 1], ["self", -1], ["reality", -1]];
    next = addNonConflictingEffect(next, badCandidates, "bad");
  }

  return next;
}

function doubleBeneficial(effects) {
  const next = { ...effects };
  Object.entries(next).forEach(([key, value]) => {
    if (isBeneficial(key, value)) next[key] = value * 2;
  });
  return next;
}

function doubleHarmful(effects) {
  const next = { ...effects };
  Object.entries(next).forEach(([key, value]) => {
    if (isHarmful(key, value)) next[key] = value * 2;
  });
  return next;
}

function halveSocialGains(effects) {
  const next = { ...effects };
  Object.entries(next).forEach(([key, value]) => {
    if (isBeneficial(key, value)) {
      next[key] = value > 0 ? Math.floor(value / 2) : Math.ceil(value / 2);
    }
  });
  return next;
}

function applyRoleModifiers(baseEffects, tags) {
  let effects = { ...baseEffects };
  const notes = [];

  if (state.role.id === "influencer") {
    if (tags.includes("likes") || tags.includes("viral")) {
      effects.approval = (effects.approval ?? 0) + 1;
      notes.push(isJapanese() ? "キャラクター能力：注目による利益が上がる。" : "角色能力：关注收益上升。");
    }
    if (tags.includes("flame")) {
      effects = doubleHarmful(effects);
      notes.push(isJapanese() ? "キャラクター弱点：炎上のダメージが大きい。" : "角色弱点：炎上伤害更大。");
    }
  }

  if (state.role.id === "honorStudent") {
    if (tags.includes("study")) {
      effects.self = (effects.self ?? 0) + 1;
      notes.push(isJapanese() ? "キャラクター能力：学習系イベントで自己肯定感が戻りやすい。" : "角色能力：学习事件更能恢复自己肯定感。");
    }
    if (tags.includes("compare")) {
      effects.self = (effects.self ?? 0) - 1;
      notes.push(isJapanese() ? "キャラクター弱点：比較系イベントで自己肯定感がさらに削られる。" : "角色弱点：比较事件会额外削弱自己肯定感。");
    }
  }

  if (state.role.id === "shutIn") {
    if (tags.includes("rest")) {
      effects = doubleBeneficial(effects);
      notes.push(isJapanese() ? "キャラクター能力：休息の回復が強い。" : "角色能力：休息恢复更明显。");
    }
    if (tags.includes("social")) {
      effects = halveSocialGains(effects);
      notes.push(isJapanese() ? "キャラクター弱点：社交による利益が弱くなる。" : "角色弱点：社交收益减弱。");
    }
  }

  if (state.role.id === "flamePoster") {
    if (tags.includes("controversy")) {
      effects.approval = (effects.approval ?? 0) + 2;
      effects.sns = (effects.sns ?? 0) + 1;
      notes.push(isJapanese() ? "キャラクター能力：論争系の話題で注目を得やすい。" : "角色能力：争议话题更容易获得关注。");
    }
    if (tags.includes("flame")) {
      effects = doubleHarmful(effects);
      notes.push(isJapanese() ? "キャラクター弱点：炎上のダメージが大きい。" : "角色弱点：炎上伤害更大。");
    }
  }

  return { effects, notes };
}

function applyEffects(effects) {
  Object.entries(effects).forEach(([key, value]) => {
    if (!statMeta[key]) return;
    state.stats[key] = clamp(state.stats[key] + value);
  });
}

function applyEndOfTurnBacklash() {
  const candidates = [];

  if (state.stats.self <= 1 && state.stats.approval >= 8) {
    candidates.push({
      priority: 5,
      delta: { fatigue: 1 },
      reason: isJapanese() ? "外部評価で自分を証明しようとしすぎて、身体がその圧力を引き受け始めている。" : "你太依赖外部评价来证明自己，身体开始替你承受压力。",
    });
  }

  if (state.stats.fatigue >= 9) {
    candidates.push({
      priority: 4,
      delta: { self: -1 },
      reason: isJapanese() ? "長い疲労のせいで、小さな出来事まで自分の失敗のように感じやすくなる。" : "长期疲劳让你更容易把小事理解成自己的失败。",
    });
  }

  if (state.stats.reality <= 0) {
    candidates.push({
      priority: 4,
      delta: { fatigue: 1 },
      reason: isJapanese() ? "現実とのつながりが切れると、休むことさえ休息らしくなくなる。" : "现实连接断线后，休息也变得不太像休息。",
    });
  }

  if (state.stats.sns >= 9) {
    candidates.push({
      priority: 3,
      delta: { fatigue: 1 },
      reason: "SNSが止まらず、睡眠と集中が細かく削られていく。",
    });
  }

  if (state.stats.approval >= 10) {
    candidates.push({
      priority: 3,
      delta: { self: -1 },
      reason: isJapanese() ? "承認欲求が限界まで高まると、数字が光るほど数字以外の自分を信じにくくなる。" : "承认欲求满格时，数字越亮，你越难相信数字之外的自己。",
    });
  }

  const backlash = candidates.sort((a, b) => b.priority - a.priority)[0];
  if (!backlash) return;

  applyEffects(backlash.delta);
  addLog(isJapanese() ? "状態の反動" : "状态反噬", `${backlash.reason} ${formatEffects(backlash.delta)}。`);
}

function resolveChoice(choice, sourceTitle) {
  const baseEffects = getTradeoffEffects(choice.effects ?? {}, choice.tags ?? []);
  const eraResult = applyEraModifiers(baseEffects, choice.tags ?? []);
  const { effects, notes } = applyRoleModifiers(eraResult.effects, choice.tags ?? []);
  applyEffects(effects);
  applyStoryFlags(choice.flags);
  const effectText = formatEffects(effects);
  const allNotes = [...eraResult.notes, ...notes];
  const noteText = allNotes.length ? ` ${allNotes.join(" ")}` : "";
  addLog(sourceTitle, `${choiceLabelOf(choice, 0).replace(/^.\.\s*/, "").replace(/^[ABC]\.\s*/, "")}：${effectText}。${noteText}`);
  return { effectText, noteText };
}

function chooseRoute(index) {
  if (state.ended || state.phase !== "route") return;
  const route = state.routeOptions[index];
  state.selectedRoute = route;
  state.routeHistory[state.turn - 1] = { route, lane: index };
  const routeEffects = getTradeoffEffects(route.effects ?? {}, route.tags ?? []);
  const eraResult = applyEraModifiers(routeEffects, route.tags ?? []);
  const { effects, notes } = applyRoleModifiers(eraResult.effects, route.tags ?? []);
  applyEffects(effects);
  applyStoryFlags(route.story);
  const effectText = formatEffects(effects);
  const allNotes = [...eraResult.notes, ...notes];
  const noteText = allNotes.length ? ` ${allNotes.join(" ")}` : "";
  addLog(
    isJapanese() ? "ルート選択" : "路线选择",
    isJapanese() ? `「${titleOf(route)}」を選んだ：${effectText}。${noteText}` : `你选择了「${titleOf(route)}」：${effectText}。${noteText}`
  );

  const storyBeat = getStoryBeatForTurn(state.turn);
  if (storyBeat) {
    state.storySeen.push(storyBeat.id);
    state.current = storyBeat;
    state.phase = "story";
    addLog(
      isJapanese() ? "メイン進行" : "主线推进",
      isJapanese() ? `第${state.turn}ターン、「${titleOf(storyBeat)}」へ進む。` : `第${state.turn}回合进入「${titleOf(storyBeat)}」。`
    );
    render();
    return;
  }

  if (shouldTriggerCrisis()) {
    enterCrisisEvent(drawCrisis());
    render();
    return;
  }

  const specialChance = state.turn >= 4 ? 0.28 : 0.12;
  if (Math.random() < specialChance) {
    state.current = drawMystery();
    state.phase = "mystery";
    addLog(
      isJapanese() ? "特殊イベント" : "特殊事件",
      isJapanese() ? `ルートが中断され、「${titleOf(state.current)}」が現れた。` : `路线中断，出现「${titleOf(state.current)}」。`
    );
  } else {
    state.current = drawEvent(route);
    state.phase = "event";
  }
  render();
}

function startActionPhase(result) {
  state.phase = "action";
  state.energy = state.maxEnergy;
  drawHand(3);
  el.resultText.textContent = isJapanese()
    ? `今回の選択結果：${result.effectText}。行動フェーズへ入ります。${state.maxEnergy}点の行動力で、3枚の手札から必要なカードを選べます。`
    : `本次选择结果：${result.effectText}。现在进入行动阶段：你有${state.maxEnergy}点行动点，可以从3张手牌中选择需要的卡来调整状态。`;
}

function choose(index) {
  if (state.phase === "route") {
    chooseRoute(index);
    return;
  }
  if (state.ended || !["event", "mystery", "story", "crisis"].includes(state.phase)) return;
  const choice = state.current.choices[index];
  const sourceTitle = titleOf(state.current);
  const result = resolveChoice(choice, sourceTitle);

  startActionPhase(result);
  render();
}

function useAction(index) {
  if (state.ended || state.phase !== "action") return;
  const card = state.hand[index];
  if (!card || card.cost > state.energy) return;
  state.hand.splice(index, 1);
  state.energy -= card.cost;
  const eraResult = applyEraModifiers(card.effects, card.tags);
  const { effects, notes } = applyRoleModifiers(eraResult.effects, card.tags);
  applyEffects(effects);
  state.discardPile.push(card);
  const allNotes = [...eraResult.notes, ...notes];
  const noteText = allNotes.length ? ` ${allNotes.join(" ")}` : "";
  addLog(
    isJapanese() ? "対処カード使用" : "打出行动卡",
    isJapanese()
      ? `${card.cost}点を消費し、「${actionName(card)}」を使った：${formatEffects(effects)}。${noteText}`
      : `消耗${card.cost}点，使用「${card.name}」：${formatEffects(effects)}。${noteText}`
  );
  render();
}

function nextTurn() {
  if (state.ended || state.phase !== "action") return;

  applyEndOfTurnBacklash();

  const badEnding = evaluateBadEndingProgress();
  if (badEnding) {
    finishWithEnding(badEnding);
    return;
  }

  if (state.stats.self <= 0 && state.stats.fatigue >= 9) {
    state.deathRiskTurns += 1;
    addLog(
      isJapanese() ? "死の結末リスク" : "死亡结局风险",
      isJapanese()
        ? `自己肯定感が0、疲労が9以上。連続リスク ${state.deathRiskTurns}/2。`
        : `自己肯定感为0且疲劳≥9。连续风险 ${state.deathRiskTurns}/2。`
    );
    if (state.deathRiskTurns >= 2) {
      finishWithEnding({
        id: "bad-death",
        name: "死亡结局",
        jp: "死の結末",
        label: "Bad Ending",
        desc: isJapanese()
          ? "自己肯定感がゼロになり、疲労も限界に近い状態が2ターン続いた。ゲームは最も危険な状態で早期終了する。"
          : "自己肯定感归零，疲劳接近极限，并且连续两回合没有恢复。游戏以最危险的状态提前结束。",
      });
      return;
    }
  } else {
    state.deathRiskTurns = 0;
  }

  if (!state.openingDeadlineChecked && state.turn >= 5) {
    state.openingDeadlineChecked = true;
    if (getDangerScore() >= 9) {
      finishWithEnding({
        id: "bad-five-turn",
        name: "五回合崩溃",
        jp: "五ターン目の崩壊",
        label: "Bad Ending",
        desc: isJapanese()
          ? "開始5ターン以内に、身体と精神を危険ラインから戻せなかった。SNSのループはすぐに命を奪うわけではないが、選び続ける力を失わせた。"
          : "开局五回合内，你没能把身体和精神从危险线拉回来。SNS循环没有立刻杀死你，但它已经让你失去继续选择的能力。",
      });
      return;
    }
    addLog(
      isJapanese() ? "第一段階を生存" : "第一阶段存活",
      isJapanese() ? "最も危険な最初の5ターンを乗り越えた。ただし、安全になったわけではない。" : "你撑过了最危险的前五回合，但这不代表已经安全。"
    );
  }

  if (state.turn >= 24) {
    discardHand();
    finishWithEnding(findNormalEnding());
    return;
  }

  discardHand();
  if (state.turn % 3 === 0) drawActionCard();

  state.turn += 1;
  if ((state.turn - 1) % 4 === 0) activateEraCard();
  if (state.crisisCooldown > 0) state.crisisCooldown -= 1;
  if (state.impactCooldown > 0) state.impactCooldown -= 1;
  state.phase = "route";
  state.energy = 0;
  state.current = null;
  state.selectedRoute = null;
  state.routeOptions = generateRouteOptions();
  render();
  if (shouldTriggerImpact()) triggerImpactPopup(drawImpact());
}

function evaluateBadEndingProgress() {
  let triggered = null;

  badEndings.forEach((ending) => {
    if (ending.check(state.stats)) {
      state.badEndingWarnings[ending.id] = (state.badEndingWarnings[ending.id] ?? 0) + 1;
      if (state.badEndingWarnings[ending.id] === 1) {
        addLog(
          isJapanese() ? "危険状態" : "危险状态",
          isJapanese()
            ? `「${ending.jp ?? ending.name}」の条件が出ています。次のターン終了までに回復できないとBad Endingに入ります。`
            : `「${ending.name}」条件已经出现。下一回合结束前如果没有修复，就会进入 Bad Ending。`
        );
      }
      if (state.badEndingWarnings[ending.id] >= 2) triggered = ending;
    } else {
      state.badEndingWarnings[ending.id] = 0;
    }
  });

  return triggered;
}

function findNormalEnding() {
  return normalEndings.find((ending) => ending.check(state.stats));
}

function finishWithEnding(ending) {
  state.ended = true;
  state.phase = "ended";
  state.ending = ending;
  addLog(
    ending.label ?? (isJapanese() ? "エンディング" : "结局"),
    isJapanese() ? `「${ending.jp ?? ending.name}」に入った。` : `进入「${ending.name}」。`
  );
  render();
  renderEnding(ending);
}

function renderEraPanel() {
  if (state.phase === "intro" || !state.activeEra) {
    el.eraTimer.textContent = isJapanese() ? "公開待ち" : "等待翻开";
    el.eraName.textContent = isJapanese() ? "時代カード未発動" : "时代卡未生效";
    el.eraDesc.textContent = isJapanese()
      ? "第1ターン開始後に最初の時代カードを公開します。その後4ターンごとに変更され、制御できない社会環境を表します。"
      : "开始第一回合后翻开第一张时代卡。之后每4回合更换一次，代表不可控的社会环境。";
    return;
  }

  el.eraTimer.textContent = isJapanese() ? `残り${getEraRemainingTurns()}ターン` : `剩余${getEraRemainingTurns()}回合`;
  el.eraName.textContent = titleOf(state.activeEra);
  el.eraDesc.textContent = isJapanese()
    ? `${descOf(state.activeEra)} 影響：${formatEffects(state.activeEra.effects)}。`
    : `${descOf(state.activeEra)} 影响：${formatEffects(state.activeEra.effects)}。`;
}

function renderStats() {
  el.statsList.innerHTML = Object.entries(statMeta)
    .map(([key, meta]) => {
      const value = state.stats[key];
      return `
        <div class="stat-row">
          <div class="stat-head">
            <span>${statName(key)}</span>
            <strong>${value}</strong>
          </div>
          <div class="stat-track">
            <div class="stat-fill" style="width:${value * 10}%; background:${meta.color}"></div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderRole() {
  el.roleName.textContent = roleName(state.role);
  el.roleNameJp.textContent = isJapanese() ? state.role.name : state.role.jp;
  el.roleAbility.textContent = roleText(state.role, "ability");
  el.roleWeakness.textContent = roleText(state.role, "weakness");
}

function renderChoices() {
  if (state.phase === "intro") {
    el.choiceList.innerHTML = `
      <div class="empty-note">${roleText(state.role, "arc")}</div>
      <button class="primary-button intro-start" data-begin="true">${isJapanese() ? "第1ターンを始める" : "开始第一回合"}</button>
    `;
    const button = el.choiceList.querySelectorAll("[data-begin]")[0];
    if (button) button.addEventListener("click", beginJourney);
    return;
  }

  if (state.phase === "route") {
    el.choiceList.innerHTML = state.routeOptions
      .map(
        (route, index) => `
          <button class="route-button" data-choice="${index}">
            <span class="route-tag">${routeTag(route)}</span>
            <strong>${titleOf(route)}</strong>
            <p>${descOf(route)}</p>
            ${routeDestiny(route) ? `<p class="route-destiny">${routeDestiny(route)}</p>` : ""}
            <div class="effect-line">${renderEffectChips(getPreviewEffects(route.effects, route.tags, true))}</div>
          </button>
        `
      )
      .join("");
    el.choiceList.querySelectorAll("[data-choice]").forEach((button) => {
      button.addEventListener("click", () => choose(Number(button.dataset.choice)));
    });
    return;
  }

  if (!["event", "mystery", "story", "crisis"].includes(state.phase)) {
    el.choiceList.innerHTML = "";
    return;
  }
  el.choiceList.innerHTML = state.current.choices
    .map(
      (choice, index) => `
        <button class="choice-button" data-choice="${index}">
          <strong>${choiceLabelOf(choice, index)}</strong>
          <p>${choiceTextOf(choice)}</p>
          <div class="effect-line">${renderEffectChips(getPreviewEffects(choice.effects, choice.tags, true))}</div>
        </button>
      `
    )
    .join("");
  el.choiceList.querySelectorAll("[data-choice]").forEach((button) => {
    button.addEventListener("click", () => choose(Number(button.dataset.choice)));
  });
}

function getPreviewEffects(effects = {}, tags = [], withTradeoff = false) {
  const baseEffects = withTradeoff ? getTradeoffEffects(effects, tags) : { ...effects };
  const eraResult = applyEraModifiers(baseEffects, tags);
  return applyRoleModifiers(eraResult.effects, tags).effects;
}

function renderEffectChips(effects) {
  const entries = Object.entries(effects).filter(([, value]) => value !== 0);
  if (!entries.length) return `<span class="effect-chip">${isJapanese() ? "変化なし" : "属性无变化"}</span>`;
  return entries
    .map(([key, value]) => {
      const good = isBeneficial(key, value);
      return `<span class="effect-chip ${good ? "good" : "bad"}">${statName(key)}${value > 0 ? "+" : ""}${value}</span>`;
    })
    .join("");
}

function renderCurrentCard() {
  el.eventType.className = state.phase === "crisis" ? "event-type crisis" : "event-type";
  if (state.phase === "intro") {
    el.eventType.textContent = isJapanese() ? "キャラクター序章" : "角色序章";
    el.eventId.textContent = state.role.id.toUpperCase();
    el.eventTitle.textContent = roleText(state.role, "introTitle");
    el.eventTitleJp.textContent = isJapanese() ? "初期状態" : "角色初始状态";
    el.eventDesc.textContent = roleText(state.role, "intro");
  } else if (state.phase === "route") {
    const chapter = getChapterDisplay();
    el.eventType.textContent = isJapanese() ? "ルート選択" : "路线选择";
    el.eventId.textContent = "ROUTE";
    el.eventTitle.textContent = isJapanese()
      ? `${chapter.title}：自分をどこへ連れていく？`
      : `${chapter.title}：你要把自己带去哪里？`;
    el.eventTitleJp.textContent = isJapanese()
      ? "30本のルートの中から、今の状態で進める分岐だけが表示されます。"
      : "30条路线池中，只会出现当前状态能够走上的岔路。";
    el.eventDesc.textContent = isJapanese()
      ? `${chapter.desc} 現在解放されているルートから一つ選ぶ。状態がすぐ変わり、次に出会いやすいイベントや結末の方向も変わる。`
      : `${chapter.desc} 从当前解锁的路线里选择一条。它会立刻改变状态，也会影响接下来更容易遇到哪类事件和结局方向。`;
  } else if (state.phase === "action") {
    el.eventType.textContent = isJapanese() ? "行動フェーズ" : "行动阶段";
    el.eventId.textContent = "HAND";
    el.eventTitle.textContent = isJapanese() ? "限られた行動力で自分を整える" : "用有限行动点调整自己";
    el.eventTitleJp.textContent = isJapanese() ? "全部を一度に直すことはできない。優先順位を選ぶ。" : "你无法一次修好全部，所以必须选择优先级。";
    el.eventDesc.textContent = isJapanese()
      ? `${state.maxEnergy}点の行動力と3枚の手札がある。カードを使って状態を整えてもいいし、そのまま次のターンへ進んでもいい。`
      : `你有${state.maxEnergy}点行动点，手牌为3张。可以打出手牌修复状态，也可以直接进入下一回合。`;
  } else {
    el.eventType.textContent = eventTypeOf(state.current);
    el.eventId.textContent = state.current.id;
    el.eventTitle.textContent = titleOf(state.current);
    el.eventTitleJp.textContent = state.phase === "crisis"
      ? isJapanese() ? "今対処しなければ、状態はさらに崩れるかもしれない。" : "如果现在不处理，状态可能会继续崩坏。"
      : isJapanese() ? "あなたの反応が、この一週間の状態を変える。" : "你的反应会改变这一周的状态。";
    const routeLead = state.selectedRoute
      ? isJapanese() ? `ルート「${titleOf(state.selectedRoute)}」の後、` : `路线「${titleOf(state.selectedRoute)}」之后，`
      : "";
    if (state.phase === "crisis") {
      el.eventDesc.textContent = isJapanese()
        ? `${descOf(state.current)} 即時衝撃：${formatEffects(state.current.shock)}。今ここで状態を戻せないと、次のターンでBad Endingに入る可能性がある。`
        : `${descOf(state.current)} 立刻冲击：${formatEffects(state.current.shock)}。如果现在不把状态拉回来，下一回合可能直接进入Bad Ending。`;
    } else {
      el.eventDesc.textContent = state.phase === "story" ? descOf(state.current) : `${routeLead}${descOf(state.current)}`;
    }
  }
  el.afterChoice.hidden = state.phase !== "action";
  renderChoices();
}

function renderActions() {
  const turnsUntilCard = 3 - ((state.turn - 1) % 3);
  el.actionHint.textContent =
    state.phase === "action"
      ? isJapanese() ? `行動力 ${state.energy}/${state.maxEnergy}` : `行动点 ${state.energy}/${state.maxEnergy}`
      : isJapanese() ? `あと${turnsUntilCard}ターンで獲得` : `还有${turnsUntilCard}回合获得`;
  el.deckStatus.innerHTML = `
    <span>${isJapanese() ? "山札" : "抽牌堆"} ${state.drawPile.length}</span>
    <span>${isJapanese() ? "捨て札" : "弃牌堆"} ${state.discardPile.length}</span>
  `;

  if (!state.hand.length) {
    el.actionCards.innerHTML =
      state.phase === "action"
        ? `<div class="empty-note">${isJapanese() ? "このターンに使える手札はありません。そのまま次のターンへ進めます。" : "本回合没有可用手牌。你可以直接进入下一回合。"}</div>`
        : `<div class="empty-note">${isJapanese() ? "イベント解決後に3枚引き、2点の行動力を得ます。3ターンごとに新しい対処カードを1枚獲得します。" : "事件结算后会抽3张手牌，并获得2点行动点。每3回合结束时获得1张新行动卡。"}</div>`;
    return;
  }

  el.actionCards.innerHTML = state.hand
    .map(
      (card, index) => `
        <button class="action-card" data-action="${index}" ${state.phase !== "action" || card.cost > state.energy ? "disabled" : ""}>
          <div class="card-top">
            <strong>${actionName(card)}</strong>
            <span class="cost-badge">${card.cost}</span>
          </div>
          <p>${actionDesc(card)}</p>
          <p class="card-effect-text">${actionEffectText(card)}</p>
          <div class="effect-line">${renderEffectChips(getPreviewEffects(card.effects, card.tags, false))}</div>
        </button>
      `
    )
    .join("");
  el.actionCards.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => useAction(Number(button.dataset.action)));
  });
}

function renderRisks() {
  const dangerScore = getDangerScore();
  const risks = [
    {
      name: isJapanese() ? "精神的崩壊" : "精神崩溃",
      desc: isJapanese()
        ? `SNS依存≥10 かつ 疲労≥10｜危険${state.badEndingWarnings["bad-collapse"] ?? 0}/2`
        : `SNS依存≥10 且 疲劳≥10｜危险${state.badEndingWarnings["bad-collapse"] ?? 0}/2`,
      hot: state.stats.sns >= 9 || state.stats.fatigue >= 9,
    },
    {
      name: isJapanese() ? "炎上の暴走" : "炎上失控",
      desc: isJapanese()
        ? `承認欲求≥10 かつ 自己肯定感≤1｜危険${state.badEndingWarnings["bad-flame"] ?? 0}/2`
        : `承认欲求≥10 且 自己肯定感≤1｜危险${state.badEndingWarnings["bad-flame"] ?? 0}/2`,
      hot: state.stats.approval >= 9 || state.stats.self <= 2,
    },
    {
      name: isJapanese() ? "社会的孤立" : "社会性死亡",
      desc: isJapanese()
        ? `現実とのつながり=0 かつ 自己肯定感≤1｜危険${state.badEndingWarnings["bad-social"] ?? 0}/2`
        : `现实连接=0 且 自己肯定感≤1｜危险${state.badEndingWarnings["bad-social"] ?? 0}/2`,
      hot: state.stats.reality <= 1 || state.stats.self <= 2,
    },
    {
      name: isJapanese() ? "死の結末" : "死亡结局",
      desc: isJapanese() ? `自己肯定感=0 かつ 疲労≥9 が2ターン連続` : `自己肯定感=0 且 疲劳≥9，连续两回合`,
      hot: state.stats.self <= 1 || state.stats.fatigue >= 9,
    },
    {
      name: isJapanese() ? "5ターン目の崩壊" : "五回合崩溃",
      desc: isJapanese() ? `第5ターン終了時に危険度≥9` : `第5回合结束时危险指数≥9`,
      hot: !state.openingDeadlineChecked && state.turn <= 5 && dangerScore >= 5,
    },
  ];
  el.deathRiskText.textContent = isJapanese() ? `危険度 ${dangerScore}` : `危险指数 ${dangerScore}`;
  el.riskList.innerHTML = risks
    .map(
      (risk) => `
        <div class="risk-item ${risk.hot ? "hot" : ""}">
          <strong>${risk.name}</strong>
          <span>${risk.desc}</span>
        </div>
      `
    )
    .join("");
}

function renderLogs() {
  el.logList.innerHTML = state.logs
    .map(
      (log) => `
        <div class="log-entry">
          <strong>${isJapanese() ? `第${log.turn}ターン` : `第${log.turn}回合`}｜${log.title}</strong>
          <p>${log.body}</p>
        </div>
      `
    )
    .join("");
}

function renderEnding(ending) {
  el.endingLabel.textContent = ending.label ?? (isJapanese() ? "通常エンディング" : "普通结局");
  el.endingTitle.textContent = isJapanese() ? ending.jp ?? ending.name : ending.name;
  el.endingTitleJp.textContent = isJapanese() ? "これは、この一年のあなたの状態像です。" : "这是你这一年的状态画像。";
  el.endingDesc.textContent = `${isJapanese() ? descJaById[ending.id] ?? ending.desc : ending.desc} ${getStorySummary()}`;
  el.endingStats.innerHTML = Object.entries(statMeta)
    .map(
      ([key, meta]) => `
        <div class="ending-stat">
          <span>${statName(key)}</span>
          <strong>${state.stats[key]}</strong>
        </div>
      `
    )
    .join("");
  el.endingModal.hidden = false;
}

function renderImpactModal() {
  if (!state.pendingImpact) {
    el.impactModal.hidden = true;
    return;
  }
  const impact = state.pendingImpact;
  el.impactLabel.textContent = isJapanese() ? "運命の衝撃" : impact.label ?? "命运冲击";
  el.impactTitle.textContent = titleOf(impact);
  el.impactTitleJp.textContent = isJapanese() ? "予定外の変化" : "计划之外的变化";
  el.impactDesc.textContent = descOf(impact);
  el.impactEffects.innerHTML = renderEffectChips(impact.effects);
  el.impactModal.hidden = false;
}

function renderStaticText() {
  document.documentElement.lang = currentLang === "ja" ? "ja" : "zh-CN";
  document.title = uiText("appTitle");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = uiText(key);
  });
  el.langToggleBtn.textContent = uiText("langButton");
  el.restartBtn.title = uiText("restart");
  el.restartBtn.setAttribute("aria-label", uiText("restart"));
  el.rerollBtn.textContent = uiText("reroll");
  el.nextTurnBtn.textContent = uiText("nextTurn");
  el.endingRestartBtn.textContent = uiText("endingRestart");
}

function setLanguage(lang) {
  currentLang = lang;
  try {
    localStorage.setItem("logoutBeforeLanguage", lang);
  } catch {
    // Local files may run without storage access in some browsers.
  }
  render();
}

function getStorySummary() {
  const flags = state.storyFlags;
  const entries = Object.entries(flags).sort((a, b) => b[1] - a[1]);
  const [topKey, topValue] = entries[0] ?? ["", 0];

  if (isJapanese()) {
    if (topValue <= 2) return "この一年はたくさんの断片のように過ぎ、まだ一つの線としてはつかみきれていない。";
    if (topKey === "rin") return "振り返ると、旧友と現実の関係が、あなたをタイムラインから引き戻す線になっていた。";
    if (topKey === "creator") return "振り返ると、作品は注目を得るためだけでなく、自分を確かめる方法にもなっていた。";
    if (topKey === "boundary") return "振り返ると、本当に変えたのは一度の爆発ではなく、何度も引いた境界線だった。";
    if (topKey === "flame") return "振り返ると、炎上の影はずっとそばにあり、見られることが常に安全ではないと教えていた。";
    if (topKey === "future") return "振り返ると、あなたは即時反応の外側で、もう一度未来を想像し始めていた。";
    return "振り返ると、SNSのループはまだ強い。それでも、あなたはそれが自分をどう形作るかを見始めている。";
  }

  if (topValue <= 2) return "这一年像很多碎片一样掠过，你还没有真正抓住某一条线。";
  if (topKey === "rin") return "回头看，旧友和现实关系是把你从时间线里拉出来的那条线。";
  if (topKey === "creator") return "回头看，作品不只是为了获得关注，也慢慢变成你确认自己的方式。";
  if (topKey === "boundary") return "回头看，真正改变你的不是某一次爆发，而是一次次设下边界。";
  if (topKey === "flame") return "回头看，炎上阴影一直跟着你，提醒你被看见并不总是安全。";
  if (topKey === "future") return "回头看，你开始从即时反馈之外，重新想象自己的未来。";
  return "回头看，SNS循环仍然很强，但你已经开始看见它如何塑造自己。";
}

function render() {
  renderStaticText();
  el.roundText.textContent = `${state.turn} / 24`;
  el.phaseText.textContent =
    phaseLabels[currentLang]?.[state.phase] ?? phaseLabels.zh.event;
  el.energyText.textContent = `${state.energy} / ${state.maxEnergy}`;
  renderRole();
  renderEraPanel();
  renderStats();
  renderCurrentCard();
  renderActions();
  renderRisks();
  renderLogs();
  renderImpactModal();
}

el.nextTurnBtn.addEventListener("click", nextTurn);
el.impactContinueBtn.addEventListener("click", dismissImpactPopup);
el.langToggleBtn.addEventListener("click", () => setLanguage(isJapanese() ? "zh" : "ja"));
el.restartBtn.addEventListener("click", () => startGame());
el.endingRestartBtn.addEventListener("click", () => startGame());
el.rerollBtn.addEventListener("click", () => startGame());

startGame();
