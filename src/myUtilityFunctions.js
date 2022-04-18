export const generateCreatedAtMsg = createdAt => {
  const DateObj = new Date()
  const y = parseInt(DateObj.getFullYear())
  const m = parseInt(DateObj.getMonth())
  const d = parseInt(DateObj.getDate())
  const h = parseInt(DateObj.getHours())
  const min = parseInt(DateObj.getMinutes())
  let createdAtMsg;
  if (createdAt.y < y) {
    createdAtMsg = (y - createdAt.y) + ' year(s) ago'
  } else if (createdAt.m < m){
    createdAtMsg = (m - createdAt.m) + ' month(s) ago'
  } else if (createdAt.d < d) {
    createdAtMsg = (d - createdAt.d) + ' day(s) ago'
  } else if (createdAt.h < h) {
    createdAtMsg = (h - createdAt.h) + ' hour(s) ago'
  } else if (createdAt.min < min) {
    createdAtMsg = (min - createdAt.min) + ' minute(s) ago'
  } else {
    createdAtMsg = 'now'
  }
  return createdAtMsg
}

export const generateCreatedAt = () => {
  const DateObj = new Date()
  const y = parseInt(DateObj.getFullYear())
  const m = parseInt(DateObj.getMonth())
  const d = parseInt(DateObj.getDate())
  const h = parseInt(DateObj.getHours())
  const min = parseInt(DateObj.getMinutes())
  return {y, m, d, h, min}
}