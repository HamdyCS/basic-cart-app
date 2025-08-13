import axios, { AxiosResponse } from "axios";
import config from "../config";

export async function getJsonAync(url: string) {
  try {
    const res: any = await Promise.race([axios.get(url), TimeOut()]);

    if (!(res.status >= 200)) throw new Error("Error: " + res.status);
    return res.data;
  } catch (e) {
    throw e;
  }
}

function TimeOut() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error("TimeOut"));
    }, config.API_TIMEOUT_SECOUNDS * 1000);
  });
}
