import { StaticImageData } from "next/image";

export interface Game {
  id: string | number;
  name: string;
  image: string | StaticImageData;
  mostUsed?: boolean;
}
