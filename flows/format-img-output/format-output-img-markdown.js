// reg 这则匹配
// 1. 以`![`开头
// 2. 中间可以有任意字符
// 3. 以`]`结尾

// 换行符
const matchReg = /\[[^\]+]+\]/;

const $output = "![ 粉红色的大象\n首先，我会通过findKeyWords()方法，从你所描述的“粉红色的大象”中，提取出两个关键词，即“粉红色”和“大象”。\n\n然后，基于这两个关键字，我将它们转化为具体的绘画描述词汇。\n\n**主题:** 野生动物\n主题选择野生动物是因为“大象”通常出现在野生动物的主题中。\n\n**风格:** 超现实主义\n风格选择超现实主义，因为在现实中，我们通常不会看到“粉红色的大象”，这更符合超现实主义风格。\n\n**色彩:** 粉红色\n色彩选择粉红，因为用户描述中明确提到了“粉红色”。\n\n**细节:** 明快的粉红色调，强烈的对比和略显夸张的形象使画面充满了梦幻般的色彩，这是一种彻底颠覆现实的艺术手法。\n\n希望这个描述能帮到你，如果你对某部分有任何特定的想法，欢迎提出，我会进行相应调整。](https://p16-flow-sign-va.ciciai.com/ocean-cloud-tos-us/68be8cf15650487aac7a4d9b317f9629.png~tplv-6bxrjdptv7-image.png?rk3s=18ea6f23&x-expires=1739978719&x-signature=uPuIMm7vhGyMz4C94XDqatDnL3o%3D)"

// 替换 (.*) 为 ([^)]*)，避免匹配到多个 )，导致匹配错误
const mdImg = $output.replace(matchReg, '[Image]');

console.log(mdImg);
