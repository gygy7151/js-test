// 럭비클럽
const members = require("fs")
	.readFileSync("/dev/stdin", "utf-8")
	.toString()
	.trim()
	.split("\n");

members.slice(0, members.length - 1).forEach(member => {
	const [name, age, weight] = member.split(" ");
	if (age > 17 || weight >= 80) {
		console.log(`${name} Senior`);
	} else {
		console.log(`${name} Junior`);
	}
});
