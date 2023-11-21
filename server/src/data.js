import Animal from "./models/Animal.js";
import Bid from "./models/Bid.js";
import User from "./models/User.js";
import Auction from "./models/auction.js";

export const users = [];
export const animals = [];
export const regions = [];
export const groups = [];
export const auctions = [];
export const blockList = [];

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

	animals.push(new Animal("Ankie de Aap", "Aap", "Zoogdier", "Afrika", 5, "V", "Ankie is een aap.", users[1].id));
	animals.push(
		new Animal("Berend de Beer", "Beer", "Zoogdier", "Noord-Amerika", 12, "M", "Berend is een beer.", users[1].id)
	);
	animals.push(
		new Animal("Cindy de Cavia", "Cavia", "Knaagdier", "Zuid-Amerika", 2, "V", "Cindy is een cavia.", users[1].id)
	);
	animals.push(
		new Animal(
			"Dirk de Dromedaris",
			"Dromedaris",
			"Zoogdier",
			"Azië",
			8,
			"M",
			"Dirk is een dromedaris.",
			users[1].id
		)
	);
	animals.push(new Animal("Erik de Egel", "Egel", "Zoogdier", "Europa", 3, "M", "Erik is een egel.", users[1].id));
	animals.push(
		new Animal("Frits de Flamingo", "Flamingo", "Vogel", "Afrika", 4, "M", "Frits is een flamingo.", users[1].id)
	);

	auctions.push(new Auction(100, new Date(2000, 1, 1), new Date(3000, 1, 1), animals[0], users[1]));
	auctions.push(new Auction(200, new Date(2000, 1, 1), new Date(3000, 1, 1), animals[1], users[1]));
	auctions.push(new Auction(300, new Date(2000, 1, 1), new Date(3000, 1, 1), animals[2], users[1]));
	auctions.push(new Auction(400, new Date(2000, 1, 1), new Date(3000, 1, 1), animals[3], users[1]));

	let wonAuction = new Auction(500, new Date(2000, 1, 1), new Date(2011, 1, 1), animals[4], users[1]);
	wonAuction.addBid(new Bid(100, users[0]));
	auctions.push(wonAuction);

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
