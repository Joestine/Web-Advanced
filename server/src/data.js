import Animal from "./models/Animal.js";
import User from "./models/User.js";

export const users = [];
export const animals = [];
export const regions = [];
export const groups = [];
export const auctions = [];

export function init() {
    console.log("[SYSTEM]: Initializing data...");
    users.push(new User("Testkoper", null, "Testkoper", "Teststraat", "1", "Teststad", "Testprovincie", "1234AB", "koper@test.nl", "test", "buyer", null, null));
    users.push(new User("Testseller", null, "Testseller", "Teststraat", "1", "Teststad", "Testprovincie", "1234AB", "verkoper@test.nl", "test", "seller", "Testbedrijf", "NL00TEST0000000000"));
    users.push(new User("Testadmin", null, "Testadmin", "Teststraat", "1", "Teststad", "Testprovincie", "1234AB", "admin@test.nl", "test", "admin", null, null));

    animals.push(new Animal("Ankie de Aap", "Aap", "Zoogdier", "Afrika", 5, "V", "Ankie is een aap."));
    animals.push(new Animal("Berend de Beer", "Beer", "Zoogdier", "Noord-Amerika", 12, "M", "Berend is een beer."));
    animals.push(new Animal("Cindy de Cavia", "Cavia", "Knaagdier", "Zuid-Amerika", 2, "V", "Cindy is een cavia."));
    animals.push(new Animal("Dirk de Dromedaris", "Dromedaris", "Zoogdier", "Azië", 8, "M", "Dirk is een dromedaris."));

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