import { assert } from "chai";
import { describe, it } from "mocha";
import { fileURLToPath } from 'url';
import { add } from "../utils.js";

// the absolute path of this file
const __filename = fileURLToPath(import.meta.url);

describe("dotenv", function () {
  it("should ok", async function () {
    assert.isDefined(process.env.folder);
    assert.isTrue(__filename.includes(process.env.folder));
  });
});

describe("add", function () {
  it("should ok", async function () {
    assert.equal(add(1,1), 2);
  });
});
