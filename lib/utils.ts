/**
 * تهرب علامات HTML لمنع التنفيذ غير المرغوب فيه عند عرض النص.
 * @param str النص المدخل
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * مقارنة سطرية بسيطة بين نصين. تعيد مصفوفة من الكائنات تمثل الاختلافات.
 * الكائن يحتوي على خاصية `added` إذا كانت السطر موجود في النص الثاني فقط،
 * وخاصية `removed` إذا كانت السطر موجودة في النص الأول فقط.
 * @param a النص الأول
 * @param b النص الثاني
 */
export function diffLines(a: string, b: string) {
  const aLines = a.split("\n");
  const bLines = b.split("\n");
  const result: { added?: boolean; removed?: boolean; value: string }[] = [];
  const maxLen = Math.max(aLines.length, bLines.length);
  for (let i = 0; i < maxLen; i++) {
    const left = aLines[i] ?? "";
    const right = bLines[i] ?? "";
    if (left === right) {
      result.push({ value: left + "\n" });
    } else {
      if (left !== "") result.push({ removed: true, value: left + "\n" });
      if (right !== "") result.push({ added: true, value: right + "\n" });
    }
  }
  return result;
}
