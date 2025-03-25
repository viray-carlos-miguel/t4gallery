"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const dialogRef = useRef<HTMLDialogElement | null>(null); // Corrected useRef type

    useEffect(() => {
        if (dialogRef.current && !dialogRef.current.open) {
            dialogRef.current.showModal(); // Open modal if it's not open
        }
    }, []); // Add empty dependency array to run effect only once

    function onDismiss() {
        if (dialogRef.current) {
            dialogRef.current.close(); // Close the dialog before going back
        }
        router.back(); // Navigate back
    }

    return createPortal(
        <dialog
            ref={dialogRef}
            className="m-0 h-screen w-screen bg-black/90 text-white"
            onClose={onDismiss}
        >
            {children}
        </dialog>,
        document.getElementById("modal-root")!
    );
}
