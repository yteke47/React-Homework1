import { getData } from "./module.js";

(async () => {
    const data = await getData(1);
    console.log("Data : ", data);
})();

