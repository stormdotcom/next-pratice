import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/Heading";
import SearchBox from "@/components/SearchBox";


export const metadata = {
  title: "Reviews"
};

export const reviews = [
  { slug: "test", image: "https://picsum.photos/seed/picsum/200/300", title: "test", date: "10-11-2023", subtitle: "sgjfndgjsflgho usgousog osnginsi nismgijspigjpsigjp jpsioijg poskdpgo ksgdkpok" },
  { slug: "sample", image: "https://picsum.photos/200/300", title: "Sample", date: "10-11-2023", subtitle: "sgjfndgjsflgho usgousog osnginsi nismgijspigjpsigjp jpsioijg poskdpgo ksgdkpok" }
];
export default async function ReviewsPage() {

  // const { reviews, pageCount } = await getReviews(PAGE_SIZE, page);

  return (
    <>
      <Heading>Reviews</Heading>
      <div className="flex justify-between pb-3">
        <SearchBox />
      </div>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review, index) => (
          <li key={review.slug}
            className="bg-white border rounded shadow w-80 hover:shadow-xl">
            <Link href={`/reviews/${review.slug}`}>
              <Image src={review.image} alt="" priority={index === 0}
                width="320" height="180" className="rounded-t"
              />
              <h2 className="font-orbitron font-semibold py-1 text-center">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}


