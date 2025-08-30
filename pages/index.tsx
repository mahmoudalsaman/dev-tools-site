import { useState } from 'react';
import Layout from '../components/Layout';
import ToolCard from '../components/ToolCard';

interface Tool {
  title: string;
  description: string;
  href: string;
}

const tools: Tool[] = [
  {
    title: 'تنسيق JSON',
    description: 'تنسيق وتحليل ملفات JSON',
    href: '/tools/json',
  },
  {
    title: 'اختبار Regex',
    description: 'اختبر التعبيرات النمطية بسهولة',
    href: '/tools/regex',
  },
  {
    title: 'مقارنة النصوص',
    description: 'قارن بين نصين ولاحظ الاختلافات',
    href: '/tools/diff',
  },
];

/**
 * الصفحة الرئيسية: تعرض قائمة الأدوات المتاحة مع إمكانية البحث.
 */
export default function Home() {
  const [query, setQuery] = useState('');
  const normalizedQuery = query.trim();
  const filtered = tools.filter((tool) =>
    !normalizedQuery ||
    tool.title.includes(normalizedQuery) ||
    tool.description.includes(normalizedQuery)
  );

  return (
    <Layout>
      <div className="mb-4">
        <input
          type="text"
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring"
          placeholder="ابحث عن أداة..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="حقل البحث عن أداة"
        />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {filtered.map((tool, idx) => (
          <ToolCard key={idx} {...tool} />
        ))}
      </div>
    </Layout>
  );
}
