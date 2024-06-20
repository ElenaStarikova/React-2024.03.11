// селекторы = это чистые функции которые вытакскивают из стейта какое-либо значение, создается корневой селектор для конткретного модуля
// под модулем подразумевается слайс

export const selectRestaurantModule = (state) => state.restaurant;

//как вспомогательная функция которая будет использована во всех остальных селекторах для того чтобы переименовать если нужно в одном месте, все остальные слелкторы остаются рабочими

export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids;

//внутри селектора лучше не создавать массивы, объекты - будут крайне не оптимальны. Если нужно задать какое-то дефолтное значение то:
//const defaultArray = [];
//export const selectRestaurantIds = (state) => selectRestaurantModule(state).ids || defaultArray;


export const selectRestaurantById = (state) => selectRestaurantModule(state).entities[id];