import { combineReducers } from 'redux';

const INCREMENT_ORDER = 'INCREMENT_ORDER';
const ADD_SELECTIONS = 'ADD_SELECTIONS';
const ADD_PROFIT = 'ADD_PROFIT';
const UPDATE_THIS_ROUND_RATING = 'UPDATE_THIS_ROUND_RATING';
const RESET_ROUND_RATING = 'RESET_ROUND_RATING';
const ADD_RATING = 'ADD_RATING';
const RESET_RATINGS = 'RESET_RATINGS';
const RESET_ORDER_NUM = 'RESET_ORDER_NUM';
const RESET_SELECTIONS = 'RESET_SELECTIONS';
const RESET_MONEY = 'RESET_MONEY';
const RESET_TIME_REMAINED = 'RESET_TIME_REMAINED';
// const UPDATE_TIME_REMAINED = 'UPDATE_TIME_REMAINED';

// window.localStorage.clear();

export function incrementOrder(order) {
  return {
    type: INCREMENT_ORDER,
    order
  }
}

export function resetOrderNum() {
    return {
      type: RESET_ORDER_NUM,
    }
}

export function addSelections(selection) {
    return {
        type: ADD_SELECTIONS,
        selection
    }
}

export function addProfit(profit) {
    return {
        type: ADD_PROFIT,
        profit
    }
}

export function updateThisRoundRating(changedRating) {
    return {
      type: UPDATE_THIS_ROUND_RATING,
      changedRating
    }
}

export function resetRoundRating() {
    return {
      type: RESET_ROUND_RATING,
    }
}

export function addRating(rating) {
    return {
      type: ADD_RATING,
      rating
    }
}

export function resetRatings() {
    return {
      type: RESET_RATINGS,
    }
}

export function resetSelections() {
    return {
      type: RESET_SELECTIONS,
    }
}

export function resetMoney() {
    return {
      type: RESET_MONEY,
    }
}

// export function updateTimeRemained(timeSpent) {
//     return {
//       type: UPDATE_TIME_REMAINED,
//       timeSpent
//     }
// }

export function resetTimeRemained() {
    return {
      type: RESET_TIME_REMAINED,
    }
}

const defaultState = [
    {
        orderNum: 0,
        totalMoney: 80,
        thisRoundRating: 5.0,
        ratings: [],
        selections: [],
        timeRemained: 20
    }
];

// const defaultState = 0;

function reducer(state=defaultState, action) {
    switch (action.type) {
        case INCREMENT_ORDER:
            console.log(state[0].orderNum);
            console.log("action.order" + action.order);
            const updatedStateObj = {...state[0], orderNum: action.order + 1};
            return [updatedStateObj];
        case ADD_SELECTIONS:
            console.log(action.selection);
            const newSelections = [...state[0].selections, action.selection];
            console.log(newSelections);
            const ObjWithNewSelections = {...state[0], selections: newSelections};
            console.log(ObjWithNewSelections);
            return [ObjWithNewSelections];
        case ADD_PROFIT:
            console.log("total money: " + state[0].totalMoney);
            console.log("action.profit: " + action.profit);
            const ObjWithUpdatedMoney = {...state[0], totalMoney: state[0].totalMoney + action.profit};
            console.log("total money updated: " + ObjWithUpdatedMoney.totalMoney);
            return [ObjWithUpdatedMoney];
        case UPDATE_THIS_ROUND_RATING:
            console.log("thisRoundRating" + state[0].thisRoundRating);
            console.log("action.changedRating" + action.changedRating);
            if (state[0].thisRoundRating + action.changedRating <= 5.0){
                const ObjWithUpdatedRating = {...state[0], thisRoundRating: state[0].thisRoundRating + action.changedRating};
                return [ObjWithUpdatedRating];
            }else {
                const ObjWithMaxRating = {...state[0], thisRoundRating: 5.0};
                return [ObjWithMaxRating];
            }
        case RESET_ROUND_RATING:
                const ObjWithInitialRating = {...state[0], thisRoundRating: 5.0};
                return [ObjWithInitialRating];
        case ADD_RATING:
            console.log("ratings: " + state[0].ratings);
            console.log(action.rating);
            const newRatings = [...state[0].ratings, action.rating];
            console.log(newRatings);
            const ObjWithNewRatings = {...state[0], ratings: newRatings};
            console.log(ObjWithNewRatings);
            return [ObjWithNewRatings];
        case RESET_RATINGS:
            const ObjWithNoRatings = {...state[0], ratings: []};
            return [ObjWithNoRatings];
        case RESET_ORDER_NUM:
            const ObjWithInitialOrderNum = {...state[0], orderNum: 0};
            return [ObjWithInitialOrderNum];
        case RESET_SELECTIONS:
            const ObjWithNoSelections = {...state[0], selections: []};
            return [ObjWithNoSelections];
        case RESET_MONEY:
            const ObjWithInitialMoney = {...state[0], totalMoney: 80};
            return [ObjWithInitialMoney];
        case RESET_TIME_REMAINED:
            const ObjWithInitialTime = {...state[0], timeRemained: 20};
            return [ObjWithInitialTime];
        // case UPDATE_TIME_REMAINED:
        //     console.log(state[0].timeRemained);
        //     console.log("action.changedRating" + action.timeSpent);
        //     const ObjWithUpdatedTime = {...state[0], timeRemained: state[0].timeRemained - action.timeSpent};
        //     return [ObjWithUpdatedTime];
        default:
            console.log(state[0].orderNum);
            return state;
    }
}

const manageStates = combineReducers({
    reducer
});

export default manageStates;