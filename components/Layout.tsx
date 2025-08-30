import { ReactNode, useEffect, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

/**
 * مكون التخطيط الأساسي الذي يضيف ترويسة وتبديل الوضع (فاتح/داكن).
 * يضمن كذلك تعيين ألوان النص والخلفية بناءً على الوضع الحالي.
 */
export default function Layout({ children }: LayoutProps) {
  const [isDark, setIsDark] = useState(false);

  // عند تغيير الوضع، نضيف أو نزيل فئة "dark" من العنصر الجذري.
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col">
      <header className="flex justify-between items-center px-4 py-4 border-b border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold">أدوات المطور</h1>
        <button
          onClick={() => setIsDark(!isDark)}
          className="p-2 rounded focus:outline-none focus:ring"
          aria-label="تبديل وضع اللون"
        >
          {isDark ? 'الوضع الفاتح' : 'الوضع الداكن'}
        </button>
      </header>
      <main className="flex-1 p-4">{children}</main>
    </div>
  );
}
