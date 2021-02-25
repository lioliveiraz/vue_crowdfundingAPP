import auth from '../../../src/store/modules/auth';

describe("vuex store", () => {
    const { username, token } = auth.state;
    const { setToken, setUserName } = auth.mutations;
    const { isLoggedIn } = auth.getters;
    let state;

    describe("test state", () => {
        it('initial state value of null', () => {
            expect(username).toBeFalsy();
            expect(token).toBeFalsy();

        });
    });

    describe("test mutations", () => {
        it('update state.username with payload', async () => {
            state = {
                username: null,
                token: null
            };
            await setUserName(state, "username");
            expect(state.username).toEqual("username");

        });
        it('update state.username with payload', async () => {
            state = {
                username: null,
                token: null
            };
            await setUserName(state, "username");
            expect(state.username).toEqual("username");

        });
    });
    describe("testing getters", () => {
        it("should return true", async () => {
            state = {
                username: null,
                token: "token"
            };
            const result = await isLoggedIn(state);
            expect(result).toBeTruthy();
        });
        it("should return false", async () => {
            state = {
                username: null,
                token: null
            };
            const result = await isLoggedIn(state);
            expect(result).toBeFalsy();
        });
    });



});