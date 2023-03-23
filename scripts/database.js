const database = {
    paint: [
        {id: 1, color: "Silver", price: 1000.00},
        {id: 2, color: "Midnight Blue", price: 2000.00 },
        {id: 3, color: "Firebrick Red", price: 3000.00 },
        {id: 4, color: "Spring Green", price: 4000.00 }
    ],

    interior: [
        {id: 1, type: "Beige Fabric", price: 1000.00 },
        {id: 2, type: "Charcoal Fabric", price: 1500.00 },
        {id: 3, type: "White Leather", price: 2500.00 },
        {id: 4, type: "Black Leather", price: 3000.00 }
    ],

    tech: [
        {id: 1, pkg: "Basic Package (basic sound system)", price: 1000.00 },
        {id: 2, pkg: "Navigation Package (includes integrated navigation controls)", price: 1200.00 },
        {id: 3, pkg: "Visibility Package (includes side and rear cameras)", price: 2600.00 },
        {id: 4, pkg: "Ultra Package (includes navigation and visibility packages)", price: 3500.00 }
    ],

    wheels: [
        {id: 1, style: "17-inch Pair Radial", price: 1200.00 },
        {id: 2, style: "17-inch Pair Radial Black", price: 1600.00 },
        {id: 3, style: "18-inch Pair Spoke Silver", price: 1900.00 },
        {id: 4, style: "18-inch Pair Spoke Black", price: 2100.00 }
    ],

        customOrders: [
        {id: 1, paintId: 2, interiorId: 4, techId: 4, wheelsId: 4 }
    ],
    
    orderBuilder: {},
}

export const getPaint = () => {
    return database.paint.map(paint => ({...paint}))
}

export const getInterior = () => {
    return database.interior.map(interior => ({...interior}))
}

export const getTech = () => {
    return database.tech.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(order => ({...order}))
}

export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}

export const setInterior = (id) => {
    database.orderBuilder.interiorId = id
}

export const setTech = (id) => {
    database.orderBuilder.techId = id
}
export const setWheels = (id) => {
    database.orderBuilder.wheelsId = id
}

export const addCustomOrders = () => {
    const newOrder = {...database.orderBuilder}

    const lastIndex = database.customOrders.length - 1
    newOrder.id = database.customOrders[lastIndex].id +1

    newOrder.timestamp = Date.now()

    database.customOrders.push(newOrder)
    database.orderBuilder = {}
    console.log(database.customOrders)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}