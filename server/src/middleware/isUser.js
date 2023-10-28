export default function isUser(req, res, next) {
	if (req.user.role === "user") {
		next();
	} else {
		res.sendStatus(403);
	}
}
