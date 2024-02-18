import { SERVICES } from "@/lib/api/services/getAllServices";
import { useQuery } from "@apollo/client";
import Link from "next/link";

export default function Services() {
  const { data } = useQuery(SERVICES);
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6">
        {data?.services?.data.map((service: any, index: number) => (
          <Link
            className="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            href={service.attributes.href}
          >
            <div
              className="border h-fit w-fit p-5 rounded-full mr-5"
              dangerouslySetInnerHTML={{ __html: service.attributes.icon }}
            />

            <div>
              <div>
                <h3 className="block font-bold text-gray-800 dark:text-white">
                  {service.attributes.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {service.attributes.description}
                </p>
              </div>
              <p className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                Learn more
                <svg
                  className="flex-shrink-0 size-4 transition ease-in-out group-hover:translate-x-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
