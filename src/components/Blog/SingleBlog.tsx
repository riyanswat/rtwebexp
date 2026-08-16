import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { title, image, paragraph, author, tags, publishDate } = blog;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-[var(--rt-ink)]/8 bg-white/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--rt-primary)]/20 hover:shadow-md">
      {/* Image */}
      <Link
        href="/blog-details"
        aria-label={`Read ${title}`}
        className="relative block aspect-[37/22] w-full overflow-hidden"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        {tags?.[0] && (
          <span className="absolute right-5 top-5 z-10 inline-flex items-center rounded-full border border-white/20 bg-black/50 px-3 py-1.5 text-xs font-semibold capitalize tracking-wide text-white backdrop-blur-sm">
            {tags[0]}
          </span>
        )}
      </Link>

      {/* Content */}
      <div className="p-6 sm:p-7">
        <h3 className="mb-3">
          <Link
            href="/blog-details"
            className="block text-xl font-bold leading-snug tracking-[-0.015em] text-[var(--rt-ink)] transition-colors duration-200 hover:text-[var(--rt-primary)] sm:text-2xl"
          >
            {title}
          </Link>
        </h3>

        <p className="mb-6 border-b border-[var(--rt-ink)]/8 pb-6 text-sm leading-6 text-[var(--rt-ink-dim)] sm:text-[15px]">
          {paragraph}
        </p>

        {/* Author + Date */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-[var(--rt-primary)]/10">
              <Image
                src={author.image}
                alt={author.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[var(--rt-ink)]">
                {author.name}
              </p>
              <p className="text-xs text-[var(--rt-ink-dim)]">
                {author.designation}
              </p>
            </div>
          </div>

          <div className="flex-shrink-0 text-right">
            <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--rt-ink)]/45">
              Published
            </p>
            <p className="mt-1 text-xs text-[var(--rt-ink-dim)]">
              {publishDate}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SingleBlog;