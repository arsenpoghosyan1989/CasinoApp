export const sortByName = (data, field) => {
    return data.sort((a, b) => {
        const fieldA = a[field].toUpperCase();
        const fieldB = b[field].toUpperCase();

        let comparison = 0;
        if (fieldA > fieldB) {
            comparison = 1;
        } else if (fieldA < fieldB) {
            comparison = -1;
        }
        return comparison;
    })
}