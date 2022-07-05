import Head from "next/head";
import type { ReactChildren } from "react";
import { Post } from "@/types";
import Footer from "@/components/Footer";
import useSWR from "swr";
import Loader from "@/components/Loader";

const PostLayout = ({
  children,
  meta,
}: {
  children: ReactChildren;
  meta: Post;
}) => {
  const fetcher = async (url: string) => {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({ title: meta.title }),
    });
    return await response.json();
  };

  const { data, error } = useSWR("/api/generate-ogp", fetcher);

  if (error) return <div>failed to load</div>;

  return (
    <div className="my-8 mx-auto w-5/6 sm:flex sm:flex-col sm:items-center">
      <Head>
        <title>{`${meta.title} | Osin.`}</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.28.0/themes/prism-tomorrow.min.css"
        />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={data ? data.result.image : ""} />
      </Head>
      <article className="prose prose-invert prose-h1:text-transparent prose-h1:bg-clip-text prose-h1:bg-gradient-to-r prose-h1:from-teal-400 prose-h1:to-purple-500">
        <div className="w-full flex mb-4 gap-x-2 items-center">
          <span className="text-2xl">{meta.emoji}</span>
          <span className="text-slate-500">{meta.createdAt}</span>
        </div>
        {children}
      </article>
      <Footer />
    </div>
  );
};

export default PostLayout;
