<template>
	<v-form ref="form" v-model="valid">
		<div class="form-wrapper">
			<v-container>
				<h2 class="page-header">Einloggen</h2>
				<p class="page-header-subtitle">
					... und Treffen vereinbaren!
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
							v-model="password"
							label="Passwort"
							:append-icon="password ? 'mdi-eye' : 'mdi-eye-off'"
							@click:append="() => (password = !password)"
							type="password"
							:rules="passRules"
						></v-text-field>
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
							Einloggen
						</v-btn>
						<v-btn color="secondary" to="/profile?view=register" @click="changeCurrentProfileView('register')">
							Registrieren
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
import { LOGIN_USER } from '../utils/graphql';
import { mapActions } from 'vuex';
export default {
	name: 'CLoginForm',
	data() {
		return {
			valid: true,
			username: '',
			password: '',
			nameRules: [
				(v) => !!v || 'Sie müssen ein Benutzernamen angeben',
				(v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
			],
			passRules: [
				(v) => !!v || 'Sie müssen ein Passwort angeben',
				(v) => (v && v.length <= 10) || 'Name must be less than 10 characters',
			],
		};
	},
	// apollo: {},
	inject: ['changeCurrentProfileView'],
	methods: {
		...mapActions(['login', 'logout']),
		validate() {
			console.log(this.username, this.password);
			const userData = { username: this.username, password: this.password };
			this.reset();
			this.username = '';
			this.password = '';
			this.$apollo
				.mutate({
					// Query
					mutation: LOGIN_USER,
					// Parameters
					variables: {
						username: userData.username,
						password: userData.password,
					},
				})
				.then((data) => {
					// Result
					// console.log(data);
					this.login(data);
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
	},
};
</script>
