/*
|--------------------------------------------------------------------------
| Mutation Types
|--------------------------------------------------------------------------
*/
export const SET_TARGET = 'SET_TARGET';
export const UNSET_TARGET = 'UNSET_TARGET';

/*
|--------------------------------------------------------------------------
| Initial State
|--------------------------------------------------------------------------
*/
const state = {
	target: {
		name: null,
	}
};

/*
|--------------------------------------------------------------------------
| Mutations
|--------------------------------------------------------------------------
*/
const mutations = {
	[SET_TARGET](state, payload) {
		state.target.name = payload;
	},
	[UNSET_TARGET](state, payload) {
		state.target.name = "";
	},
};

/*
|--------------------------------------------------------------------------
| Actions
|--------------------------------------------------------------------------
*/
const actions = {
	setTarget: (context, target) => {
		console.log(target,"------")
		context.commit(SET_TARGET, {target})
	},
	unsetTarget: (context) => {
		context.commit(UNSET_TARGET)
	}
};

/*
|--------------------------------------------------------------------------
| Getters
|--------------------------------------------------------------------------
*/
const getters = {
	getTarget: (state) => {
		return (state.target.name);
	},

};

/*
|--------------------------------------------------------------------------
| Export the module
|--------------------------------------------------------------------------
*/
export default {
	state,
	mutations,
	actions,
	getters
}