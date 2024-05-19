export default {
	async handlePasswordCheck(inp_password, user) {
		const password = inp_password.text;

		if (password === "1") { 
			try {
				showAlert('Register Success', 'success');
			} catch (error) {
				console.error("Token creation failed:", error);
				showAlert('Token creation failed', 'error');
			}
		} else {
			showAlert('Login Inválido', 'error');
		}
	}
};

