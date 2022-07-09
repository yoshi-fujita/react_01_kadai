export const getWarikan = async (query) => {
    try {
        const a_others = Math.floor( query.total / ( query.number * 10) ) * 10;
        const a_boss = query.total - a_others * ( query.number - 1);
        const b_others = Math.floor( query.total / ( query.number * 100) ) * 100;
        const b_boss = query.total - b_others * ( query.number -1);
        const c_others = Math.floor( query.total / ( query.number * 1000) ) * 1000;
        const c_boss = query.total - c_others * ( query.number -1);

        return {
            a_boss: a_boss,
            a_others: a_others,
            b_boss: b_boss,
            b_others: b_others,
            c_boss: c_boss,
            c_others: c_others
        };
    } catch (e) {
      throw Error("Error while getting Warikan");
    }
};