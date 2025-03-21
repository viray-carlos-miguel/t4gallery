import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { eq } from "drizzle-orm";
import { link } from "fs";
import Link from "next/link";
import Image from "next/image";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";


export const dynamic = "force-dynamic";

 async function Images (){
const images = await getMyImages();

return (
  <div className="flex flex-wrap justify-center gap-4">
  {images.map((image) => (
    <div key = {image.id} className="w-48">
      <Image src={image.url} style={{objectFit: "contain"}}
      width={192}
      height={192}
      alt = {image.name} />
    {<div>{image.name}</div>}
    </div>
  ))}
  
</div>

);
}
export default async function HomePage() {
  return (
    <main className="">
           <SignedOut>
         <div className="h-full w-full text-center text-2xl">
           Please sign in Above
         </div>
       </SignedOut>
       <SignedIn>
         <Images />
       </SignedIn>

    </main>
  );
}