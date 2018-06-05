const call = (...args) => {
  const fn = args.shift()
  if (typeof fn === 'function') {
    return fn(...args)
  }
}

export default call
