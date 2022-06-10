import jsonPayload from "./mockResult.json";
import { CreationType } from "./types";

export const getCreations = (): Promise<Array<CreationType>> =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      if (Array.isArray(jsonPayload)) {
        resolve(jsonPayload);
      } else {
        reject(new Error("Incorrect return data"));
      }
    }, 2000)
  );
