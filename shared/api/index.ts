import jsonPayload from "./mockResult.json";
import { ICreation, IMasterClass } from "./types";

export const getCreations = (): Promise<Array<ICreation>> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Array.isArray(jsonPayload)) {
        resolve(jsonPayload);
      } else {
        reject(new Error("Incorrect return data"));
      }
    }, 2000)
  );

export const getMasterClasses = (): Promise<Array<IMasterClass>> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          image_url:
            "https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg",
          title: "Fish preparation like \n" + "a star chef",
          subtitle: "With Rolf Fliegauf",
        },
        {
          image_url:
            "https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg",
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
          subtitle: "By Someone",
        },
        {
          image_url:
            "https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg",
          title: "Maecenas dignissim consectetur laoreet",
          subtitle: "By Someone",
        },
      ]);
    }, 2000);
  });
