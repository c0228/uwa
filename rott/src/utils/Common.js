
 export const GetTenantBirthYears = () =>{
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 13;

    // Create array of past 80 years as objects
    return Array.from({ length: 80 }, (_, i) => {
        const year = startYear - i;
        return {
            id: `year-${year}`,
            label: `${year}`,
            value: year
        };
    });
 };