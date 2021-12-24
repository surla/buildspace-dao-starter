import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xA1495eD9124d90344Ce5025BE3874fE3aaD466B0");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      name: "OnigiriDAO membership",
      description: "A DAO for fans of Onigiri",
      image: readFileSync("scripts/assets/onigiri.png"),
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata()
    );
  } catch (error) {
    console.log("Failed to deploy bundleDrop module", error);
  }
})();
