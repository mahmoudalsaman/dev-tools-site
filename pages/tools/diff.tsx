import { useState } from 'react';
import Layout from '../../components/Layout';
import { diffLines } from '../../lib/utils';

/**
 * صفحة مقارنة النصوص: تقارن محتوى نصين وتظهر الاختلافات بإبراز الزيادات والحذف.
 */
export default function DiffTool() {
  const [textA, setTextA] = useState('');
  const [textB, setTextB] = useState('');
  const [diff, setDiff] = useState<ReturnType<typeof diffLines>>([]);

  const handleDiff = () => {
    setDiff(diffLines(textA, textB));
  };

  return (
    <Layout>
      <h2 className="text-xl font-semibold mb-4">مقارنة النصوص</h2>
      <div className="flex flex-col md:flex-row gap-2 mb-2">
        <textarea
          value={textA}
          onChange={(e) => setTextA(e.target.value)}
          rows={8}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring"
          placeholder="النص الأول"
          aria-label="النص الأول"
        />
        <textarea
          value={textB}
          onChange={(e) => setTextB(e.target.value)}
          rows={8}
          className="flex-1 p-2 border border-gray-300 dark:border-gray-600 rounded focus:outline-none focus:ring"
          placeholder="النص الثاني"
          aria-label="النص الثاني"
        />
      </div>
      <button
        onClick={handleDiff}
        className="mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring"
      >
        مقارنة
      </button>
      <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
        {diff.map((part, index) => {
          let color = '';
          if (part.added) color = 'green';
          else if (part.removed) color = 'red';
          return (
            <span key={index} style={{ color }}>{part.value}</span>
          );
        })}
      </pre>
    </Layout>
  );
}
