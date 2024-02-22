const $output =
  '📝主题：\n张伟元宵快乐\n- 🧩创作计划:\n在理解了“张伟元宵快乐”这个主题后，我将根据每个字来创作诗篇。首先，“张”可以象征开张、展开；“伟”可以表达壮丽、伟大；“元”则代表开始、源头；“宵”对应夜晚、月光；“快”表示愉快、快速；“乐”意指音乐、欢乐。\n- 🎶诗篇：\n张灯结彩映长空，\n伟业宏图春意浓。\n元夜灯火连天照，\n宵寒渐暖春风送。\n快马加鞭赴明晨，\n乐意融融共欢庆。\n\n这首诗描绘了元宵节的热闹景象和对未来的美好祝愿，同时也表达了对张伟的祝福和期待。';

// 匹配 诗篇: 之后的所有内容
const $pattern = /诗篇[:：]\n([\s\S]*)/;
const $match = $output.match($pattern);
if ($match) {
  console.log($match[1]);
}
console.log($output);