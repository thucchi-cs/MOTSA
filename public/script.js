import bcrypt from 'bcrypt';

async function ShowHideTest() {
	var pwd = document.getElementById("password").value;
	console.log(pwd);

	const saltRounds = 12;
	const plaintextPassword = 'tsaflc';

	// Hash the password
	const hashedPassword = await bcrypt.hash(plaintextPassword, saltRounds);
	console.log(hashedPassword);
}
