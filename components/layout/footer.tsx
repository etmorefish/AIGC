import Link from "next/link";

export default function Footer() {
    return (
        <div className="absolute w-full border-t border-gray-200 bg-white py-5 text-center dark:bg-green-500">
            <p className="text-gray-500">
                A free platform by {" "}
                <Link href='#' className="font-medium text-gray-800 underline transition-colors">Eatmorefish</Link>
            </p>
        </div>
    );
}