// 清除非中文字符
function clearOtherCharacters(input) {
  return input.replace(/[^\u4e00-\u9fa5]/g, '');
}

/**
 * 提取引号中的内容
 * @param {*} input
 * @returns
 */
function getKeywordWithQuotation(input) {
  const matchResult = input.match(/["“”](.*)["“”]/);
  if (matchResult && matchResult.index && input.length > 12) {
    const keyword = matchResult[1];
    return keyword;
  } else {
    return input;
  }
}

function buildPromptWithFirstWord(input) {
  const keywords = clearOtherCharacters(input);
  let result = '';
  for (let i = 0; i < keywords.length; i++) {
    const word = keywords[i];
    result += `${word}_______${i % 2 ? '，' : '。'}\n`;
  }

  return result;
}

// 填充 引导词
function paddingInitialization(input) {
  // 长度 < 12 且 包含引号
  if (input.length < 12 && /["“”]/.test(input)) {
    return `以 “${input}” 为主题写一首藏头诗，内容为新春祝福。诗词风格为七言律诗。 `;
  }
  return input;
}

// 兼容 2 个字 和 3 个字的名字
function hack23wordsName(input) {
  if (input.length === 2 || input.length === 4) {
    return `${input}新春快乐`;
  }
  if (input.length === 3) {
    return `祝${input}新春快乐`;
  }
  return input;
}

function buildPrompt(input) {
  //  兼容 2 个字 和 3 个字的名字
  const paddingInput = hack23wordsName(input);

  const keyword = getKeywordWithQuotation(paddingInput);

  const prefix = '诗词内容为:\n\n';
  const padding = buildPromptWithFirstWord(keyword);

  return `${paddingInitialization(paddingInput)} \n${prefix}${padding}`;
}

return buildPrompt($query);
