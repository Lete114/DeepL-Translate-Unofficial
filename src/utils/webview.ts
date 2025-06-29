import { isDev } from './public'

export function disableWebviewDefaultBehavior() {
  if (isDev()) {
    return
  }
  disableWebviewDefaultShortcuts()
  disableWebviewContextMenu()
}

export function disableWebviewDefaultShortcuts() {
  document.addEventListener('keydown', (event) => {
    const key = event.key.toLocaleLowerCase()
    const ctrl = event.ctrlKey || event.metaKey // Handle both Ctrl (Windows/Linux) and Command (macOS)
    const shift = event.shiftKey
    const alt = event.altKey

    const matchs = [
      // Function keys
      key === 'f5', // F5
      ctrl && shift && key === 'f5', // Ctrl + Shift + F5

      // Navigation keys
      key === 'pagedown', // PageDown
      key === 'pageup', // PageUp
      ctrl && key === 'pagedown', // Ctrl + PageDown
      ctrl && key === 'pageup', // Ctrl + PageUp
      alt && key === 'arrowleft', // Alt + ArrowLeft
      alt && key === 'arrowright', // Alt + ArrowRight
      alt && key === 'home', // Alt + Home

      // Common shortcuts (A-Z)
      ctrl && key === 'd', // Ctrl + D
      ctrl && key === 'e', // Ctrl + E
      ctrl && key === 'f', // Ctrl + F
      ctrl && key === 'g', // Ctrl + G
      ctrl && key === 'h', // Ctrl + H
      ctrl && key === 'j', // Ctrl + J
      ctrl && key === 'k', // Ctrl + K
      ctrl && key === 'l', // Ctrl + L
      ctrl && key === 'm', // Ctrl + M
      ctrl && key === 'n', // Ctrl + N
      ctrl && key === 'o', // Ctrl + O
      ctrl && key === 'p', // Ctrl + P
      ctrl && key === 'r', // Ctrl + R
      ctrl && key === 's', // Ctrl + S
      ctrl && key === 't', // Ctrl + T
      ctrl && key === 'u', // Ctrl + U
      ctrl && key === 'w', // Ctrl + W

      // Ctrl + Shift combinations (A-Z)
      ctrl && shift && key === 'b', // Ctrl + Shift + B
      ctrl && shift && key === 'd', // Ctrl + Shift + D
      ctrl && shift && key === 'e', // Ctrl + Shift + E
      ctrl && shift && key === 'g', // Ctrl + Shift + G
      ctrl && shift && key === 'i', // Ctrl + Shift + I
      ctrl && shift && key === 'k', // Ctrl + Shift + K
      ctrl && shift && key === 'l', // Ctrl + Shift + L
      ctrl && shift && key === 'm', // Ctrl + Shift + M
      ctrl && shift && key === 'n', // Ctrl + Shift + N
      ctrl && shift && key === 'o', // Ctrl + Shift + O
      ctrl && shift && key === 'p', // Ctrl + Shift + P
      ctrl && shift && key === 'r', // Ctrl + Shift + R
      ctrl && shift && key === 't', // Ctrl + Shift + T
      ctrl && shift && key === 'u', // Ctrl + Shift + U
      ctrl && shift && key === 'v', // Ctrl + Shift + V
      ctrl && shift && key === 'w', // Ctrl + Shift + W
      ctrl && shift && key === 'y', // Ctrl + Shift + Y

      // Alt combinations
      alt && key === 'd', // Alt + D
      alt && key === 'e', // Alt + E
      alt && key === 'f', // Alt + F
      alt && shift && key === 'b', // Alt + Shift + B
      alt && shift && key === 'i', // Alt + Shift + I
      alt && shift && key === 't', // Alt + Shift + T

      // Ctrl + Alt combinations
      ctrl && key === 'tab', // Ctrl + Tab
      ctrl && shift && key === 'tab', // Ctrl + Shift + Tab

      // Special keys
      ctrl && key === '0', // Ctrl + 0
      ctrl && key === 'enter', // Ctrl + Enter
      ctrl && key === '\\', // Ctrl + Backslash
      ctrl && key === '[', // Ctrl + [
      ctrl && key === ']', // Ctrl + ]
      ctrl && shift && key === 'delete', // Ctrl + Shift + Delete
      shift && key === ' ', // Shift + Space
      shift && key === 'tab', // Shift + Tab

      // Number keys (1-9)
      ctrl && (key === '1' || key === '2' || key === '3' || key === '4' || key === '5' || key === '6' || key === '7' || key === '8' || key === '9'), // Ctrl + 1-9
    ]

    if (matchs.some(Boolean)) {
      event.preventDefault()
    }
  })
}

export function disableWebviewContextMenu() {
  document.addEventListener('contextmenu', (event) => {
    event.preventDefault()
  })
}
