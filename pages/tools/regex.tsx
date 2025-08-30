import { useState } from 'react';
import Layout from '../../components/Layout';

/**
 * صفحة اختبار التعبيرات النمطية: تسمح للمستخدم بإدخال نمط وتطبيقه على نص لمعرفة التطابقات.
 */
export default function RegexTool() {
  const [pattern, setPattern] = useState('');
  const [flags, setFlags] = useState('');
  const [text, setText] = useState('');
  const [matches, setMatches] = useState<RegExpMatchArray[] | null>(null);

  const handleTest = () => {
    try {
      const regex = new RegExp(pattern, flags);
      const m = Array.from(text.matchAll(regex));
      setMatches(m);
    } catch {
      setMatches(null);
    }
  };

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">اختبار Regex</h2>
      <div className="flex flex-col sm:flex-row gap-2 mb-2">
        <input
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          placeholder="النمط"
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring"
          aria-label="النمط"
        />
        <input
          value={flags}
          onChange={(e) => setFlags(e.target.value)}
          placeholder="العلامات (g, i, m)"
          className="p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring"
          aria-label="العلامات"
        />
      </div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={8}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-2 focus:outline-none focus:ring"
        placeholder="النص للاختبار"
        aria-label="النص للاختبار"
      />
      <button
        onClick={handleTest}
        className="mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring"
      >
        اختبار
      </button>
      {matches && (
        <div className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
          {matches.length === 0 && <div>لا توجد نتائج</div>}
          {matches.map((match, i) => (
            <div key={i} className="mb-1">
              {match[0]}
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
}
