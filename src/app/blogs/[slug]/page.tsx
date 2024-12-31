import { getBlogPosts } from "@/app/db/blog";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/reusable/footer";
import { CustomMDX } from "@/components/reusable/mdx";
import Navbar from "@/components/reusable/navbar";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `https://your-site.com${image}`
    : `https://your-site.com/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `https://your-site.com/blogs/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  let currentDate = new Date();
  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }
  let targetDate = new Date(date);

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  let daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedDate = "";

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = "Today";
  }

  let fullDate = targetDate.toLocaleString("en-us", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return `${fullDate} (${formattedDate})`;
}

export async function generateStaticParams() {
  let posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Blog({ params }) {
  let post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section className="flex items-center justify-center w-full flex-col p-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `https://your-site.com${post.metadata.image}`
              : `https://your-site.com/og?title=${post.metadata.title}`,
            url: `https://your-site.com/blogs/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Raviteja Daggupati",
            },
          }),
        }}
      />
      <div className="w-full max-w-3xl">
        <Navbar />
        <div className="mb-4 group">
          <Link href="/blogs" className="text-xs flex items-center">
            <Image
              src="/images/icons/chevron-left.svg"
              width={14}
              height={14}
              alt="chevron-back"
              className="group-hover:-translate-x-1 transition-all ease-linear duration-300"
            />
            BACK
          </Link>
        </div>
        <h1 className="title font-medium text-2xl md:text-4xl tracking-tighter font-heading">
          {post.metadata.title}
        </h1>
        <div className="flex justify-between items-center mt-2 mb-8 text-sm">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </div>
        <article className="prose prose-quoteless prose-gray max-w-3xl">
          <CustomMDX source={post.content} />
        </article>
        {/* Border */}
        <div className="border mt-16 border-gray-100"></div>
        <Newsletter />
        <Footer />
      </div>
    </section>
  );
}
