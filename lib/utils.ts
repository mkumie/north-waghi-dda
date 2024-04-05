import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toTitleCase = (inputString: string) => {
  if (!inputString) return ""; // Return an empty string if input is falsy

  return inputString
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, (match) => match.toUpperCase());
};

export const replaceSpacesWithDash = (inputString: string) => {
  // Use the replace method with a regular expression to replace spaces with dashes
  return inputString.replace(/\s+/g, "-");
};

export function constructMetadata({
  title = "North Waghi District Development Authority",
  description = "North Waghi District Website",
  image = "/thumbnail.png",
  icons = "/favicon.ico",
  noIndex = false,
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
  noIndex?: boolean;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: image,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@yhuwheidevs",
    },
    icons,
    metadataBase: new URL("https://casfrontend.vercel.app"),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}

/**
 * Receives a string and returns it in the sentence-cased form
 * @param str string
 * @returns Sentence-Cased-String
 */
export function toSentenceCase(str: string) {
  // return an empty string if str is null or empty
  if (!str) return "";
  // convert str to a string and lowercase it
  str = str.toString().toLowerCase();
  // replace the first character with its uppercase version
  return str.replace(/^[a-z]/, function (match) {
    return match.toUpperCase();
  });
}
