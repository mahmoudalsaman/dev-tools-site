import { useState } from 'react';
import Layout from '../../components/Layout';

/**
 * صفحة تنسيق JSON: تسمح للمستخدم بإدخال نص JSON وتحويله إلى شكل منظم أو اكتشاف الأخطاء.
 */
export default function JsonTool() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [error, setError] = useState('');

  const handleFormat = () => {
    try {
      const obj = JSON.parse(input);
      setOutput(JSON.stringify(obj, null, 2));
      setError('');
    } catch (e) {
      setError((e as Error).message);
      setOutput('');
    }
  };

  return (
    <Layout>
     <h2 className="text-xl font-semibold mb-4">تنسيق JSON</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded mb-2 focus:outline-none focus:ring"
        placeholder="أدخل JSON هنا"
        aria-label="حقل إدخال JSON"
      />
      <button
        onClick={handleFormat}
        className="mb-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:outline-none focus:ring"
      >
        تنسيق
      </button>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {output && (
        <pre className="mt-4 p-4 bg-gray-100 dark:bg-gray-800 rounded overflow-x-auto">
          {output}
        </pre>
      )}
    </Layout>
  );
}
