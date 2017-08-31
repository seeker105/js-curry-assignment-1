'use strict'

const listing =
  (name, price) => ({
    name,
    price
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

const listedPrice =
  listing =>
    name =>
      name === listing.name
        ? listing.price
        : 0


const findPrice = (listings) => {
  
}

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      let result = carts.reduce(
        (resultArray, currentCart) => {
          let customer = currentCart.customer
          let total = currentCart.items.reduce(
            (runningTotal, currentItem) => {
              let price = listings.reduce(
                (priceFound, currentListing) => {
                  let listingPrice = listedPrice(currentListing)(currentItem)
                  if (listingPrice > 0) 
                    priceFound = listingPrice
                  return priceFound
                }, 0)
              return runningTotal + price
            }, 0)
          let newOb = {
            customer: currentCart.customer,
            total: total
          }
          resultArray.push(newOb)
          return resultArray
        }, [])
      return result
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}
