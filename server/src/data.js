import Animal from "./models/Animal.js";
import Bid from "./models/Bid.js";
import User from "./models/User.js";
import Auction from "./models/auction.js";

export const users = [];
export const animals = [];
export const regions = [];
export const groups = [];
export const auctions = [];

export function init() {
	console.log("[SYSTEM]: Initializing data...");
	users.push(
		new User(
			"Testuser",
			null,
			"Testuser",
			"Teststraat",
			"1",
			"Teststad",
			"Testprovincie",
			"1234AB",
			"user@test.nl",
			"test",
			"user"
		)
	);
	users.push(
		new User(
			"Testadmin",
			null,
			"Testadmin",
			"Teststraat",
			"1",
			"Teststad",
			"Testprovincie",
			"1234AB",
			"admin@test.nl",
			"test",
			"admin"
		)
	);

	animals.push(new Animal("Ankie de Aap", "Aap", "Zoogdier", "Afrika", 5, "V", "Ankie is een aap."));
	animals.push(new Animal("Berend de Beer", "Beer", "Zoogdier", "Noord-Amerika", 12, "M", "Berend is een beer."));
	animals.push(new Animal("Cindy de Cavia", "Cavia", "Knaagdier", "Zuid-Amerika", 2, "V", "Cindy is een cavia."));
	animals.push(new Animal("Dirk de Dromedaris", "Dromedaris", "Zoogdier", "Azië", 8, "M", "Dirk is een dromedaris."));

	auctions.push(new Auction(100, new Date(2000, 1, 1), new Date(3000, 1, 1), animals[0], users[1]));
	auctions.push(new Auction(200, new Date(2000, 1, 1), new Date(3000, 1, 1), animals[1], users[1]));
	auctions.push(new Auction(300, new Date(2000, 1, 1), new Date(3000, 1, 1), animals[2], users[1]));
	auctions.push(new Auction(400, new Date(2000, 1, 1), new Date(3000, 1, 1), animals[3], users[1]));

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