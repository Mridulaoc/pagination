const paginate = (data) => {
    const itemsPerPage = 9;
    const numPages = Math.ceil(data.length / itemsPerPage);

    const newFollowers = Array.from({ length: numPages }, (_, index) => {
        const start = index * itemsPerPage;
        return data.slice(start, start + itemsPerPage);
    })
    return newFollowers;
}

export default paginate
