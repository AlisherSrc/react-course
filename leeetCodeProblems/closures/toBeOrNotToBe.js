function expect(val) {

    const throwError = (errText) => {
        throw new Error(errText);
    }
    return {
        toBe: (val2) => {
            return val2 === val || throwError("Not Equal");
        },
        notToBe: (val2) => {
            return val2 !== val || throwError("Equal");
        }
    }
};
