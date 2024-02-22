// reg 这则匹配
// 1. 以`![](`开头
// 2. 中间可以有任意字符
// 3. 以`)`结尾

const matchReg = new RegExp(/\!\[Image\]\(.*\)/);

const $output = 'https://www.baidu.com![Image](https://www.baidu.com)';
const $output2 = '![image](https://www.baidu.com)';

const matchArr = matchReg.exec($output);
if (matchArr?.length) {
  console.log(matchArr[0]);
}
console.log($output);
 // ["![image](https://www.baidu.com)", index: 0, input: "https://www.baidu.com![image](https://www.baidu.com)", groups: undefined]

