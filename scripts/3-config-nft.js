import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x266940Ae53CB4EAF4Fc8405A82f7F96d2Ba978C6"
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Gohan",
        description: "This NFT will give you access to OnigiriDAO!",
        image: readFileSync("scripts/assets/gohan.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
