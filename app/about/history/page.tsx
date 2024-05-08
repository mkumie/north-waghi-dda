import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import React from "react";

const History = async () => {
  try {
    // const url = `https://en.wikipedia.org/api/rest_v1/page/summary/Western_Highlands_Province`;
    const url = `https://en.wikipedia.org/api/rest_v1/page/summary/North_Waghi_District`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.text();

    return (
      <Card>
        <CardTitle className="text-center my-2">
          History of North Waghi District
        </CardTitle>
        <CardContent className="text-justify">
          {parseWikipediaHtml(data)}
        </CardContent>
        <CardFooter>
          Source:{" "}
          <Link href={"https://en.wikipedia.org/wiki/North_Waghi_District"}>
            <Button variant={"link"}> Wikipedia</Button>
          </Link>
        </CardFooter>
      </Card>
    );
  } catch (error) {
    console.error("Error fetching data from Wikipedia API: ", error);
    return null;
  }
};

export default History;

function parseWikipediaHtml(htmlContent: any) {
  // Parse the HTML content to extract desired paragraphs/headings
  // You can use libraries like 'cheerio' or native DOM APIs for this
  // For simplicity, let's assume we're using regex to extract <p> tags

  const paragraphs = htmlContent
    .match(/<p>(.*?)<\/p>/g)
    .map((p: string) => p.replace(/<[^>]*>/g, ""));

  return paragraphs;
}
