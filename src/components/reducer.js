//Here we're defining all the application level states and define actions to make the changes to the state

export const initialState = {
	basket: [],
};

//Selector boilerplate

//use to get the total amount of the basket
export const getBasketTotal = (basket) => {
    return (
        basket?.reduce((amount, item) => item.price + amount, 0)
    );
}

const reducer = (state, action) => {
	// eslint-disable-next-line default-case
	switch (action.type) {
		case "ADD_TO_BASKET":
			return {
				...state,
				basket: [...state.basket, action.item],
            };
        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            let newBasket = [...state.basket];

            if (index >= 0) {
                newBasket.splice(index, 1);

            } else {
                console.log(
                    `Can't remove product(id: ${action.id}) because its not the the basket!`
                )
            }

            return {
                ...state,
                basket: newBasket
            }
        default:
            return state;

	}
};

export default reducer;
