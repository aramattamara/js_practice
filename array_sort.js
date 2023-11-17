// Input
const groceryItems = [
    { type: 'meat', name: 'beef' },
    { type: 'fruit', name: 'watermelon' },
    { type: 'meat', name: 'chicken' },
    { type: 'fruit', name: 'apple' },
    { type: 'fruit', name: 'orange' },
    { type: 'fruit', name: 'pineapple' },
    { type: 'vegetable', name: 'squash' },
    { type: 'vegetable', name: 'lettuce' },
    { type: 'fruit', name: 'strawberry' },
    { type: 'vegetable', name: 'carrots' },
    { type: 'vegetable', name: 'cucumbers' },
];

const itemsPerBag = 4;

/*
 * Complete the function below
 *
 * @input groceryItems: Array<GroceryObject>
 * @input itemsPerBag: number >= 1
 * @output Array<Array<GroceryObject>>
 *
 * Additional Considerations:
 * * Do not pre-sort the list of groceryItems.
 */

function packedGroceries(groceryItems, itemsPerBag) {
    const packedBag = [];

    while (groceryItems.length > 0) {
        const currentBag = [];
        const itemType = groceryItems[0].type;

        for (let i = 0; i < groceryItems.length; i++){
            if (groceryItems[i].type === itemType){
                currentBag.push(groceryItems[i]);
                groceryItems.splice(i, 1);
                i--;
            }

            if (currentBag.length === itemsPerBag){
                break;
            }

        }
        packedBag.push(currentBag)
    }
    return packedBag
}


console.log(packedGroceries(groceryItems, itemsPerBag))

