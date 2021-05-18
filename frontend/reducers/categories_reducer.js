export const American = (state) =>
    Object.values(state.entities.businesses).filter(
        (business) => business.category === "American"
    );

export const Japanese = (state) =>
    Object.values(state.entities.businesses).filter(
        (business) => business.category === "Japanese"
    );


export const Bars = (state) =>
    Object.values(state.entities.businesses).filter(
        (business) => business.category === "Bar"
    );

export const Healthy = (state) =>
    Object.values(state.entities.businesses).filter(
        (business) => business.category === "Healthy"
    );
