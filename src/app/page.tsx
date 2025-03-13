import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await getMyImages();

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <Image
            src={image.url}
            width={192} // Equivalent to w-48 (48 * 4)
            height={192}
            alt={image.name}
            className="object-cover"
          />
          <div className="text-center">{image.name}</div>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="h-full w-full flex justify-center items-center">
      <SignedOut>
      <div className="text-center text-2xl">Please sign in above</div>
      </SignedOut>
      <SignedIn>

        <Images />
      </SignedIn>
    </main>
  );
}
