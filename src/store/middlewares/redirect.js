import browserHistory from "../../browser-history";

export const redirect =
  (_store) => (next) => (action) => {
    if (action.type === "redirectToRoute") {
      browserHistory.push(action.payload);
    }

    return next(action);
  };
