type ClassDictionary = Record<string, boolean | null | undefined>
type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassDictionary
  | ClassValue[]

const pushClass = (value: ClassValue, acc: string[]): void => {
  if (!value) return

  if (typeof value === "string" || typeof value === "number") {
    acc.push(String(value))
    return
  }

  if (Array.isArray(value)) {
    value.forEach((item) => pushClass(item, acc))
    return
  }

  if (typeof value === "object") {
    Object.entries(value).forEach(([key, enabled]) => {
      if (enabled) acc.push(key)
    })
  }
}

export const cn = (...inputs: ClassValue[]): string => {
  const acc: string[] = []
  inputs.forEach((input) => pushClass(input, acc))
  return acc.join(" ")
}
