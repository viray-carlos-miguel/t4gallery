import Link from "next/link";

const mockUrls = [
"https://0ohpf8hz2w.ufs.sh/f/rngcbwM3WeZaCD8NoLgtpH7lFrRWjvxXs3obGcVdYgKzfqZN",
"https://0ohpf8hz2w.ufs.sh/f/rngcbwM3WeZak7Jnx5NtMvR9sgITHlUf5EDq3VjwBAK0XLPa",
"https://0ohpf8hz2w.ufs.sh/f/rngcbwM3WeZageVRuQKNt6O3SVRDz5GEdC8Bhse4PLrQK9w0",
];

const mockImages = mockUrls.map((url, index) =>({
  id: index + 1, 
  url,

}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key = {image.id} className="w-48">
            <img src={image.url} />

          </div>
        ))}
        
      </div>
    </main>
  );
}
