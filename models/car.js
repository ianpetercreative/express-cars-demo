const cars = [
    {
        id: 1,
        year: 2020, 
        make: "Mercedes", 
        image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&q=80&w=2025&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isUsed: false
    },

    {
        id: 1,
        year: 2023, 
        make: "Chevy", 
        image: "https://images.unsplash.com/photo-1615769516664-ca7302760b23?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isUsed: false
    },

    {
        id: 1, 
        year: 2023,
        make: "Porche", 
        image: "https://images.unsplash.com/photo-1601679147136-22d1032399e4?auto=format&fit=crop&q=80&w=2012&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        isUsed: true
    },
]

const getAll = () => {
    return cars
}

module.exports = {
    getAll
}