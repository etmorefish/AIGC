import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-5 text-center bg-white border-t border-gray-200 dark:bg-green-500">
      <p className="text-gray-500">
        A free platform by{" "}
        <Link
          href="https://github.com/etmorefish"
          className="font-medium text-gray-800 underline transition-colors"
        >
          Eatmorefish
        </Link>
      </p>
    </footer>
  );
}
