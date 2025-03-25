import { getImage } from "~/server/queries";



export default async function PhotoModal({
    params,
}: {
    params: {
        id: string;
    };
}) {
    const photoId = (await params).id;
    // Convert the string `id` into a number
    const idAsNumber = Number(photoId);

    // If the ID is not a valid number, throw an error
    if (Number.isNaN(idAsNumber)) throw new Error("Invalid Photo ID");

    // Fetch the image details from the database using `getMyImage`
    const image = await getImage(idAsNumber);

    // Return the modal with the image
    return (
        <div>
            <img
                src={image.url}
                alt={image.name}
               className="w-96" // Apply your styling here
            />
        </div>
      
    );
}
