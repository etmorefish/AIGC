export function FormatDate(dateStr: string) {
  const date = new Date(dateStr)
  // 格式化逻辑

  return dateStr + (date.getHours() >= 12 ? ' PM' : ' AM')
}