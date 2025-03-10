import { link } from "fs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

const images = await db.query.images.findMany({
  orderBy: (model, {desc}) => desc(model.id),
});

  return (
    <main className="">
      <div className="flex flex-wrap justify-items-center gap-4">
        {images.map((image) => (
          <div key = {image.id} className="w-48">
            <img src={image.url} />
          {<div>{image.name}</div>}
          </div>
        ))}
        
      </div>
    </main>
  );
}
