type ClassDictionary = Record<string, boolean | null | undefined>;
type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassDictionary
  | ClassValue[];

// 1. Объектыг боловсруулах (Complexity: 2)
const handleObject = (obj: ClassDictionary, acc: string[]): void => {
  Object.entries(obj).forEach(([key, enabled]) => {
    enabled && acc.push(key);
  });
};

// 2. Массив болон бусад утгыг салгах (Complexity: 2)
const handleComplex = (value: object, acc: string[]): void => {
  if (Array.isArray(value)) {
    value.forEach((v) => pushClass(v, acc));
  } else {
    handleObject(value as ClassDictionary, acc);
  }
};

// 3. Үндсэн функц (Complexity: 2 эсвэл 3)
function pushClass(value: ClassValue, acc: string[]): void {
  // Нөхцөл 1: Хоосон утга (Complexity +1)
  if (!value) return;

  // Нөхцөл 2: Текст/Тоо эсвэл Объектыг салгах (Complexity +1)
  if (typeof value === "object") {
    handleComplex(value, acc);
  } else {
    acc.push(String(value));
  }
}

export const cn = (...inputs: ClassValue[]): string => {
  const acc: string[] = [];
  inputs.forEach((input) => pushClass(input, acc));
  return acc.join(" ");
};