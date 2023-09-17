import Seller from "./models/users/Seller.js";
import Buyer from "./models/users/Buyer.js";
import Admin from "./models/users/Admin.js";
import Animal from "./models/Animal.js";

export const users = [];
export const animals = [];
export const regions = [];
export const groups = [];
export const auctions = [];

export function init() {
    console.log("[SYSTEM]: Initializing data...");
    users.push(new Buyer("Testkoper", null, "Testkoper", "Teststraat", "1", "Teststad", "Testprovincie", "1234AB", "koper@test.nl", "test"));
    users.push(new Seller("Testseller", null, "Testseller", "Teststraat", "1", "Teststad", "Testprovincie", "1234AB", "verkoper@test.nl", "test"));
    users.push(new Admin("Testadmin", null, "Testadmin", "Teststraat", "1", "Teststad", "Testprovincie", "1234AB", "admin@test.nl", "test"));

    animals.push(new Animal("Ankie de Aap", "Aap", "Zoogdier", "Afrika", 5, "V", "Ankie is een aap."));
    animals.push(new Animal("Berend de Beer", "Beer", "Zoogdier", "Noord-Amerika", 12, "M", "Berend is een beer."));
    animals.push(new Animal("Cindy de Cavia", "Cavia", "Knaagdier", "Zuid-Amerika", 2, "V", "Cindy is een cavia."));

    groups.push("Zoogdier");
    groups.push("Knaagdier");
    groups.push("Reptiel");
    groups.push("Vogel");
    groups.push("Vis");
    groups.push("Amfibie");
    groups.push("Ongewerveld");

    regions.push("Afrika");
    regions.push("Noord-Amerika");
    regions.push("Zuid-Amerika");
    regions.push("Azië");
    regions.push("Europa");
    regions.push("Oceanië");
    regions.push("Antarctica");
    regions.push("Atlantische Oceaan");
    regions.push("Indische Oceaan");
    regions.push("Stille Oceaan");
}