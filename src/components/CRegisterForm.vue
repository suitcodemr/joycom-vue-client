<template>
	<v-form ref="form" v-model="valid">
		<div class="form-wrapper">
			<v-container>
				<h2 class="page-header">Registrieren</h2>
				<p class="page-header-subtitle">
					... und mit der Community in Kontakt treten!
				</p>
				<v-row>
					<v-col cols="12" md="4">
						<v-text-field
							v-model="username"
							label="Benutzername"
							:rules="nameRules"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field
							v-model="email"
							label="Email"
							:rules="emailRules"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field
							v-model="password"
							label="Passwort"
							:append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
							@click:append="() => (password = !password)"
							type="password"
							:rules="passRules"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" md="4">
						<v-text-field
							v-model="confirmPassword"
							label="Passwort erneut eingeben..."
							:append-icon="confirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
							@click:append="() => (confirmPassword = !confirmPassword)"
							type="password"
							:rules="passRules"
							required
						></v-text-field>
					</v-col>
					<v-col cols="12" md="4">
						<v-checkbox
							v-model="checkbox"
							:label="'Bitte akzeptieren Sie unsere AGBs.'"
							:rules="[v => !!v || 'You must agree to continue!']"
							required
						></v-checkbox>
					</v-col>
				</v-row>
				<v-row>
					<v-col>
						<v-btn
							:disabled="!valid"
							color="success"
							class="mr-4"
							@click="validate"
						>
							Registrieren
						</v-btn>
						<v-btn color="secondary" to="/profile?view=login" @click="changeCurrentProfileView('login')">
							Einloggen
						</v-btn>
						<v-btn class="mt-7" color="red" @click="logoutHandler">
							Ausloggen
						</v-btn>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</v-form>
</template>

<script>
import { REGISTER_USER } from '../utils/graphql';
import { mapActions } from 'vuex';
export default {
	name: 'CRegisterForm',
	data() {
		return {
			valid: true,
			username: '',
			email: '',
			password: '',
			confirmPassword: '',
			checkbox: false,
			nameRules: [
				(v) => !!v || 'Sie müssen ein Benutzernamen angeben',
				(v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
			],
			emailRules: [
				(v) => !v || /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
			],
			passRules: [
				(v) => !!v || 'Sie müssen ein Passwort angeben',
				(v) => (v && v.length <= 10) || 'Passwort must be less than 10 characters',
			],
		};
	},
	// apollo: {},
	inject: ['changeCurrentProfileView'],
	methods: {
		...mapActions(['login', 'register', 'logout']),
		validate() {
			console.log(this.username, this.password);
			const userData = {
				username: this.username,
				email: this.email,
				password: this.password,
				confirmPassword: this.confirmPassword,
			};
			this.reset();
			this.username = '';
			this.email = '';
			this.password = '';
			this.confirmPassword = '';
			this.checkbox = false;
			this.$apollo
				.mutate({
					// Query
					mutation: REGISTER_USER,
					// Parameters
					variables: {
						username: userData.username,
						email: userData.email,
						password: userData.password,
						confirmPassword: userData.confirmPassword,
					},
				})
				.then((data) => {
					// Result
					console.log(data);
					this.register(data);
					this.$router.push('/');
				})
				.catch((error) => {
					// Error
					console.error(error);
				});
		},
		reset() {
			this.$refs.form.reset();
		},
		logoutHandler() {
			this.logout();
		},
	}
};
</script>
