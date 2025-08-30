import Link from 'next/link';

interface ToolcardProps {
  title: string;
  description: string;
  href: string;
}

/**
 * بطاقة أداة تعرض عنوانًا ووصفًا ورابطًا للصفحة المقابلة.
 * تستخدم عناصر Semantics وأوصاف aria لدعم الوصول.
 */
export default function ToolCard({ title, description, href }: ToolcardProps) {
  return (
    <Link href={href}>
      <div
        className="block p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring transition-colors"
        role="button"
        aria-label={title}
      >
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
    </Link>
  );
}
