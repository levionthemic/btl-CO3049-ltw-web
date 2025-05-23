export const calculateChildrenHeight = (el, deep = false) => {
  const children = el.children

  let height = 0
  for (let i = 0; i < el.childElementCount; i++) {
    const child = children[i]
    height += child.querySelector('.submenu-link').clientHeight

    // 2-level menu
    if (deep && child.classList.contains('has-sub')) {
      const subsubmenu = child.querySelector('.submenu')

      if (subsubmenu.classList.contains('submenu-open')) {
        const childrenHeight = ~~[...subsubmenu.querySelectorAll('.submenu-link')].reduce((acc, curr) => acc + curr.clientHeight, 0)
        height += childrenHeight
      }
    }

  }
  el.style.setProperty('--submenu-height', height + 'px')
  return height
}

export const countDays = (startDateStr, endDateStr) => {
  const start = new Date(startDateStr)
  const end = new Date(endDateStr)
  const diffTime = Math.abs(end - start)
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24))
}

export const getTodayDate = () => {
  const today = new Date()
  const yyyy = today.getFullYear()
  const mm = String(today.getMonth() + 1).padStart(2, '0')
  const dd = String(today.getDate()).padStart(2, '0')
  return `${yyyy}-${mm}-${dd}`
}

export default (window) => window.innerWidth > 1200