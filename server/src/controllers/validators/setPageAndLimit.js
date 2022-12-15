export const setPageAndLimit = (page, limit) => {
    const choosePage = Number(page) || 1
    const chooseLimit = Number(limit) || 10
    const skip = (choosePage - 1) * chooseLimit
    
    return [skip, chooseLimit]
  }
