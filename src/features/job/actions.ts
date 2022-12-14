export const handleShowActiveListing = () => {
    console.log('Showing Active listings!');
};

export const handleShowSavedListing = () => {
    console.log('Showing Saved listings!');
};

export const handleShowSentInterestListing = () => {
    console.log('Showing Sent Interest listings!');
};

export const handleShowListedByYouListing = () => {
    console.log('Showing Jobs Posted by You listings!');
};

export const handleSearch = (searchCriteria: any) => {
    console.log(`Perform Search! with search parameters ${JSON.stringify(searchCriteria)}`);
};
