/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
 let small = 3.00;
let medium = 4.00;
let large = 5.00;
let finalPrize = 0 ;
if (typeof size !== "string" || typeof type !== "string" || typeof extras !== "object") {
    return -1;
}
{type === 'latte' ? finalPrize=+1 :finalPrize };
{type === 'cappuccino' ? finalPrize=+1.50 :finalPrize };
{type === 'mocha' ? finalPrize=+2 :finalPrize };
const validSizes = ["small", "medium", "large"];
const validTypes = ["regular", "latte", "cappuccino", "mocha"];

if (!validSizes.includes(size) || !validTypes.includes(type)) {
    return -1;
}
 if(size == 'small') finalPrize += small 
 if(size == 'medium') finalPrize += medium 
 if(size == 'large') finalPrize += large 
  if(extras.whippedCream)finalPrize +=0.50;
  if(extras.extraShot)finalPrize +=0.75;
  const myAnswer = Math.tofixed(finalPrize)
return myAnswer
 

}
