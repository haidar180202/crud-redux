const initialState = [
    {
        id: 0,
        name: "Haidar",
        email: "test@tes.com",
        number: 1234567,
    },

    {
        id: 1,
        name: "haidr",
        email: "haidar@tes.com",
        number: 234156,
    }
];
const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_CONTACT":
            state = [...state, action.payload];

        case "UPDATE_CONTACT":
            const update = state.map(contact => contact.id === action.payload.id ? action.payload : contact)
            state = update;

        case "DELETE_CONTACT":
            const hapusContacts = state.filter((contact) => contact.id !== action.payload ? contact : null);
            return hapusContacts;

        default:
            return state;
    }
}

export default contactReducer;