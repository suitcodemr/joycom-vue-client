import gql from 'graphql-tag';

export const FETCH_EVENT_QUERY = gql`
	query getEvent($eventId: ID!) {
		getEvent(eventId: $eventId) {
			_id
			name
			location
			time
			duration
			body
			creator
			userList {
				_id
				username
			}
			maxUsers
			category
			userCount
			likes {
				username
			}
			likeCount
			comments {
				_id
				username
				createdAt
				body
			}
			commentCount
		}
	}
`;

export const FETCH_CATEGORY_QUERY = gql`
	query getCategory($category: String!) {
		getCategory(category: $category) {
			_id
		}
	}
`;

export const FETCH_CATEGORIES_QUERY = gql`
	query getCategories {
		getCategories {
			_id
			name
			events {
				_id
			}
			eventCount
		}
	}
`;

export const FETCH_CATEGORY_EVENTS_QUERY = gql`
	query getEventsCategory($categoryId: ID!) {
		getEventsCategory(categoryId: $categoryId) {
			_id
			name
			creator
			location
			time
			duration
			body
			category
			maxUsers
			userCount
			userList {
				_id
				username
			}
			likes {
				username
			}
			likeCount
			comments {
				_id
				username
				body
				createdAt
			}
			commentCount
		}
	}
`;

export const FETCH_CATEGORY_EVENTS_QUERY_CLIENT = gql`
	query getEventsCategory ($categoryId: ID!) {
		getEventsCategory (categoryId: $categoryId) @client {
			_id
			name
			creator
			location
			time
			duration
			body
			category
			maxUsers
			userCount
			userList {
				_id
				username
			}
			likes {
				username
			}
			likeCount
			comments {
				_id
				username
				body
				createdAt
			}
			commentCount
		}
	}
`;

export const LOGIN_USER = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			_id
			email
			username
			createdAt
			token
		}
	}
`;

export const REGISTER_USER = gql`
	mutation register(
		$username: String!
		$email: String!
		$password: String!
		$confirmPassword: String!
	) {
		register(
			registerInput: {
				username: $username
				email: $email
				password: $password
				confirmPassword: $confirmPassword
			}
		) {
			_id
			email
			username
			createdAt
			token
		}
	}
`;
