export const getDatesFromTomorrowToEndOfYear = () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const year = tomorrow.getFullYear()
  const nextYear = year + 1
  const firstDayOfNextYear = new Date(nextYear, 0, 1)
  const lastDayOfYear = new Date(firstDayOfNextYear - 1)
  const dates = []

  for (
    const currentDate = tomorrow;
    currentDate <= lastDayOfYear;
    currentDate.setDate(currentDate.getDate() + 1)
  ) {
    const formattedDate = currentDate.toISOString().split('T')[0]
    dates.push(formattedDate)
  }

  return dates
}
