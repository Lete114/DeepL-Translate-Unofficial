export function isDev() {
  return import.meta.env.DEV
}

/**
 * Debounce a function
 * @param fn The function to debounce
 * @param delay The debounce delay in milliseconds
 * @param immediate Whether to trigger the function on the leading edge
 * @returns A debounced version of the function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  delay: number,
  immediate = false,
) {
  let timer: ReturnType<typeof setTimeout> | null = null
  let lastResult: ReturnType<T> | undefined

  const debounced = (...args: Parameters<T>): ReturnType<T> | Promise<ReturnType<T>> => {
    return new Promise<ReturnType<T>>((resolve) => {
      const callNow = immediate && !timer

      if (timer) {
        clearTimeout(timer)
      }

      timer = setTimeout(() => {
        timer = null
        if (!immediate) {
          lastResult = fn(...args)
          resolve(lastResult as ReturnType<T>)
        }
      }, delay)

      if (callNow) {
        lastResult = fn(...args)
        resolve(lastResult as ReturnType<T>)
      }
    }) as ReturnType<T>
  }

  debounced.cancel = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  debounced.flush = () => {
    if (timer) {
      clearTimeout(timer)
      timer = null
      lastResult = fn()
    }
  }

  return debounced
}
