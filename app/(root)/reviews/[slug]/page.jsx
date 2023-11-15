import Image from "next/image";
import { notFound } from "next/navigation";
import Heading from "@/components/Heading";
import ShareLinkButton from "@/components/ShareLinkButton";
import { reviews } from "../page";

export async function generateMetadata({ params: { slug } }) {
  const data = reviews.filter((item) => item.slug === slug);
  const review = data[0];
  if (!review) {
    notFound();
  }
  return {
    title: review.title
  };
}

export default async function ReviewPage({ params: { slug } }) {

  // const review = await getReview(slug);
  const data = reviews.filter((item) => item.slug === slug);
  const review = data[0];
  if (!review) {
    notFound();
  }
  return (
    <>
      <Heading>{review.title}</Heading>
      <p className="font-semibold pb-3">
        {review.subtitle}
      </p>
      <div className="flex gap-3 items-baseline">
        <p className="italic pb-2">{review.date}</p>
        <ShareLinkButton />
      </div>
      <Image src={review.image} alt="" priority
        width="640" height="360" className="mb-2 rounded"
      />
      {/* <article dangerouslySetInnerHTML={{ __html: review.body }}
        className="max-w-screen-sm prose prose-slate"
      /> */}
    </>
  );
}