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


const getItemPrice = 
  (listings, currentItem) => 
    listings.reduce(
      (priceFound, currentListing) => {
        if (currentListing.name === currentItem)
          priceFound = listedPrice(currentListing)(currentItem)
        return priceFound
      }, 0)
  

const getCartTotal =
  (listings, currentCart) => 
    currentCart.items.reduce(
      (runningTotal, currentItem) => {
        return runningTotal + getItemPrice(listings, currentItem)
      }, 0)
  

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
      return carts.reduce(
        (resultArray, currentCart) => {
          resultArray.push({
            customer: currentCart.customer,
            total:    getCartTotal(listings, currentCart)
          })
          return resultArray
        }, [])
    }

module.exports = {
  listing,
  cart,
  calculateTotals
}