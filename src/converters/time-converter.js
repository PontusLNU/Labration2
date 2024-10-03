export default class TimeConverter {
  handle24HourInput(time) {
    let formattedTime = time.toString().replace(/[^0-9]/g, '')

    if (formattedTime.length === 3) {
      formattedTime = '0' + formattedTime
    }

    if (formattedTime.length !== 4) {
      throw new Error('Invalid time format, please provide a time in 24-hour format')
    }

    const hours24 = formattedTime.slice(0, 2)
    const minutes = formattedTime.slice(2, 4)

    if (hours24 < 0 || hours24 > 23 || minutes < 0 || minutes > 59) {
      throw new Error('Invalid time format, please provide a time in 24-hour format')
    }

    return { hours24, minutes }
  }

  handle12HourInput(time) {
    let formattedTime = time.toString().replace(/[^0-9aAmpPmM]/g, '')

    if (formattedTime.length === 5) {
      formattedTime = '0' + formattedTime
    }

    if (formattedTime.length !== 6) {
      throw new Error('Invalid time format, please provide a time in 12-hour format')
    }

    const hours12 = parseInt(formattedTime.slice(0, 2))
    const minutes = formattedTime.slice(2, 4)
    const period = formattedTime.slice(4, 6).toUpperCase()

    if (!/^(AM|PM)$/i.test(period)) {
      throw new Error('Invalid time format, please provide a time in 12-hour format')
    }

    if (hours12 < 0 || hours12 > 12 || minutes < 0 || minutes > 59) {
      throw new Error('Invalid time format, please provide a time in 12-hour format')
    }

    return { hours12, minutes, period }
  }

  convert24HourTo12Hour(time) {
    const { hours24, minutes } = this.handle24HourInput(time)

    const period = hours24 >= 12 ? 'PM' : 'AM'
    const hours12 = hours24 % 12 || 12

    return `${hours12}:${minutes}${period}`
  }

  convert12HourTo24Hour(time) {
    const { hours12, minutes, period } = this.handle12HourInput(time)

    let hours24 = hours12

    if ( period === 'PM' && hours12 < 12) {
      hours24 = hours24 + 12
    }

    if ( period === 'AM' && hours12 === 12) {
      hours24 = 0
    }

    if ( period === 'AM' && hours24 < 10) {
      hours24 = '0' + hours24
    }

    return `${hours24}:${minutes}`
  }
}