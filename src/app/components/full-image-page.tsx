import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: {id: number}) {
    const image = await getImage(props.id);

    const UploaderInfo = await (await clerkClient()).
    users.getUser(image.userId)

    return(
        <div className="flex h-full w-full min-w-0">
        <div className="flex items-center justify-center">
        <img src= {image.url} alt={image.name} className="h-4/5 w-auto flex-shrink object-contain "/>
        </div>
        <div className="flex flex-shrink-0 grow flex-col border-2">
            <div className="border-b p-2 text-center text-lg">{image.name}</div>
            <div className="flex flex-col p-2">
                <span>Uploaded By:</span>
                <span>{UploaderInfo.fullName}</span>
            </div>
            <div className="flex flex-col p-2">
            <span>Created At:</span>
                <span>{new Date(image.createdAt).toLocaleDateString()}</span>
            </div>

        </div>
        </div>
    );
}