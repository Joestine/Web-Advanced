import jwt from "jsonwebtoken";
import { blockList } from "../data.js";

export default function isLoggedIn(req, res, next) {
	const authHeader = req.headers.authorization;
	console.log("[SYSTEM] Verifying token...");
	if (authHeader && !blockList.includes(authHeader.split(" ")[1])) {
		const token = authHeader.split(" ")[1];
		jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
			if (err) {
				console.log("[SYSTEM] Token verification failed.");
				return res.sendStatus(403);
			}
			console.log("[SYSTEM] Token verified.");
			req.user = user;
			next();
		});
	} else {
		console.log("[SYSTEM] Token not found or blocked.");
		res.sendStatus(401);
	}
}
