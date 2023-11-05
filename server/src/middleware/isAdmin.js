export default function isAdmin(req, res, next) {
	console.log("[SYSTEM] Checking if user is admin...");
	if (req.user.role === "admin") {
		console.log("[SYSTEM] User is admin");
		next();
	} else {
		console.log("[SYSTEM] User is not admin");
		res.sendStatus(403);
	}
}
