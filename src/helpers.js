// 將字串從 kebab case 轉換為 title case 的轉換
// export function kebabCaseToTitleCase() {} 
export function kebabCaseToTitleCase(colorName) {
  const colorWithSpaces = colorName.replaceAll('-', '')
  const colorWithCaps = colorWithSpaces.replace(/\b([a-z])/g, (match) => {
    match.toUpperCase()
  })
  return colorWithCaps;
}