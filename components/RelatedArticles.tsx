import Link from 'next/link';

interface Article {
  title: string;
  href: string;
}

interface RelatedArticlesProps {
  articles: Article[];
}

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <div className="rounded-2xl border border-neutral-200 p-6">
      <h2 className="text-base font-semibold leading-7 text-neutral-900">
        Related Articles
      </h2>
      <ul className="mt-4 space-y-4">
        {articles.map((article) => (
          <li key={article.href} className="border-b border-neutral-100 pb-4 last:border-0 last:pb-0">
            <Link 
              href={article.href} 
              className="text-sm leading-6 text-neutral-700 hover:text-neutral-900"
            >
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 