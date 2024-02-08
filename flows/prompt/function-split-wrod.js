/**
 * 用于分割字符串
 * 1. 是否包含 中英文引号
 */

const mockInput0 = `请以 “王阳明春节快乐” 为主题写一首藏头诗，内容为新春祝福。诗词风格为七言律诗`;
const mockInput1 = `请以 "王阳明春节快乐" 为主题写一首藏头诗，内容为新春祝福。诗词风格为七言律诗`;
const mockInput2 = '张超宇';
const mockInput3 = '云鑫';
const mockInput5 = '张民宇，新年快乐';
const mockInput6 = '酷超新年快乐';
const mockInput7 = `请以 "错误标签' 为主题写一首藏头诗，内容为新春祝福。诗词风格为七言律诗`;

// clear other characters

/**
 * 去除 非中英文字符
 * @param input
 * @returns
 */
function clearOtherCharacters(input) {
  return input.replace(/[^\u4e00-\u9fa5]/g, '');
}

/**
 * 判断是否包含中英文引号
 */
function hasQuotationMarks(input) {
  return /["“”]/.test(input);
}

/**
 * 匹配出 引号中的内容, 以及引号前后的文字内容
 * @param {string} input
 * @returns
 */
function buildWithQuotationMarks(input) {
  const matchResult = input.match(/["“”](.*)["“”]/);
  if (matchResult && matchResult.index) {
    const keywords = keywordSplit3Group(matchResult[1]);
    return keywords.map((keyword) => input.replace(matchResult[1], keyword));
  } else {
    return [input];
  }
}

function keywordSplit3Group(input) {
  const result = [];
  const length = input.length;
  let index = 0;
  while (index < length) {
    if (index + 4 < length && result.length < 2) {
      result.push(input.slice(index, index + 4));
      index += 4;
    } else {
      result.push(input.slice(index));
      index = length;
    }
  }
  return result;
}

function buildPrompt(input) {
  if (hasQuotationMarks(input)) {
    return buildWithQuotationMarks(input);
  }
  const inputWithOutPunctuation = clearOtherCharacters(input);

  // 拆分成数组，前两个 4个字符一个组, 最后一个 其他字符一个组
  const result = keywordSplit3Group(inputWithOutPunctuation);

  return result.map(
    (keyword) =>
      `以 “${keyword}” 为主题写一首藏头诗，内容为新春祝福。诗词风格为七言律诗`,
  );
}

// expect(hasQuotationMarks(mockInput0)).toBe(true);
// expect(hasQuotationMarks(mockInput1)).toBe(true);
// expect(hasQuotationMarks(mockInput2)).toBe(false);

// expect(clearOtherCharacters(mockInput5)).toBe('张民宇，新年快乐');

console.log(buildPrompt(mockInput6));
console.log(buildPrompt(mockInput3));
console.log(buildPrompt(mockInput5));
console.log(buildPrompt(mockInput0));
