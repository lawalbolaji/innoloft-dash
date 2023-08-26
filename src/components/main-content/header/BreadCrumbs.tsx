import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import { HomeIcon } from "../../shared/icons/HomeIcon";
import { MainContentHeaderProps } from "./MainContentHeader";

export function BreadCrumbs({ paths }: { paths: MainContentHeaderProps["paths"] }) {
    return (
        <div className="flex-auto py-4">
            <ol className="flex items-center whitespace-nowrap min-w-0" aria-label="Breadcrumb">
                <li className="text-sm">
                    <a className="flex items-center text-gray-500 hover:font-bold select-none cursor-pointer" href="#">
                        <div className="">
                            <HomeIcon />
                        </div>
                        <ArrowRightIcon />
                    </a>
                </li>
                {paths.map((path, idx) => {
                    if (idx === paths.length - 1) {
                        return (
                            <li
                                className="text-sm font-semibold text-gray-800 truncate dark:text-gray-200"
                                aria-current="page"
                                key={idx}
                            >
                                {path.label}
                            </li>
                        );
                    }

                    return (
                        <li className="text-sm" key={idx}>
                            <a
                                className="flex items-center text-gray-500 hover:font-bold hover:underline select-none cursor-pointer"
                                href="#"
                            >
                                {path.label}
                                <ArrowRightIcon />
                            </a>
                        </li>
                    );
                })}
            </ol>
        </div>
    );
}
