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

const simpleListing = 
  listings => 
  listings.reduce((
    (listingOb, current) => {
      listingOb[current.name] = current.price
      return listingOb
    }
  ), {})

/**
 * transform carts into an array of { customer, total }
 */
const calculateTotals =
  listings =>
    carts => {
        listings = simpleListing(listings)
        return carts.reduce(
            (resultArray, currentCart) => {
                resultArray.push({
                    customer: currentCart.customer,
                    total: currentCart.items.reduce(
                        (runningTotal, currentItem) => {
                        return runningTotal + listings[currentItem]
                        }, 0)
                })
            return resultArray
            }, [])
        }   

module.exports = {
  listing,
  cart,
  calculateTotals
}
