export const items = [
    {
        id: 1,
        itemName: "Bob-omb",
        itemImage: "Skyblock_items_bob_omb.png",
        itemCount: 0,
        itemMultiplier: 20,
        itemWeight: 10000
    },
    {
        id: 2,
        itemName: "Oil Barrel",
        itemImage: "Skyblock_items_oil_barrel.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 8000
    },
    {
        id: 3,
        itemName: "Prehistoric Egg",
        itemImage: "Skyblock_items_prehistoric_egg.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 5000
    },
    {
        id: 4,
        itemName: "Treasurite",
        itemImage: "Skyblock_items_treasurite.png",
        itemCount: 0,
        itemMultiplier: 5,
        itemWeight: 2000
    },
    {
        id: 5,
        itemName: "Wishing Compass",
        itemImage: "Skyblock_items_wishing_compass.png",
        itemCount: 0,
        itemMultiplier: 3,
        itemWeight: 500
    },
    {
        id: 6,
        itemName: "Diamond Essence",
        itemImage: "Skyblock_items_diamond_essence.png",
        itemCount: 0,
        itemMultiplier: 10,
        itemWeight: 750
    },
    {
        id: 7,
        itemName: "Gold Essence",
        itemImage: "Skyblock_items_gold_essence.png",
        itemCount: 0,
        itemMultiplier: 10,
        itemWeight: 750
    },
    {
        id: 8,
        itemName: "Divan Fragment",
        itemImage: "Skyblock_items_divan_fragment.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 6000
    },
    {
        id: 9,
        itemName: "Dwarven O's Gemstone Grahams",
        itemImage: "Skyblock_items_dwarven_os_gemstone_grahams.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 1450
    },
    {
        id: 10,
        itemName: "Lapidary I",
        itemImage: "Skyblock_items_enchanted_book.gif",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 4000
    },
    {
        id: 11,
        itemName: "Fortune IV",
        itemImage: "Skyblock_items_enchanted_book.gif",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 700
    },
    {
        id: 12,
        itemName: "Pickonimbus 2000",
        itemImage: "Skyblock_items_enchanted_diamond_pickaxe.gif",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 10000
    },
    {
        id: 13,
        itemName: "Gemstone Mixture",
        itemImage: "Skyblock_items_gemstone_mixture.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 700
    },
    {
        id: 14,
        itemName: "Helix Fossil",
        itemImage: "Skyblock_items_helix.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 4000
    },
    {
        id: 15,
        itemName: "Claw Fossil",
        itemImage: "Skyblock_items_claw_fossil.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 500
    },
    {
        id: 16,
        itemName: "Jaderald",
        itemImage: "Skyblock_items_jaderald.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 1450
    },
    {
        id: 17,
        itemName: "Jasper Crystal",
        itemImage: "Skyblock_items_jasper_crystal.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 2500
    },
    {
        id: 18,
        itemName: "Ruby Crystal",
        itemImage: "Skyblock_items_ruby_crystal.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 2500
    },
    {
        id: 19,
        itemName: "Precious Pearl",
        itemImage: "Skyblock_items_precious_pearl.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 500
    },
    {
        id: 20,
        itemName: "Recall Potion",
        itemImage: "Skyblock_items_recall_potion.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 250
    },
    {
        id: 21,
        itemName: "Quick Claw",
        itemImage: "Skyblock_items_pet_item_quick_claw.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 50
    },
    {
        id: 22,
        itemName: "Divan's Alloy",
        itemImage: "Skyblock_items_divan_alloy.png",
        itemCount: 0,
        itemMultiplier: 1,
        itemWeight: 17
    }
]


export function syncItems() {
    const syncedItems = items.map((step)=>{
        let savedCount = localStorage.getItem(step.itemName);
        console.log(savedCount);
        step.itemCount = parseInt(savedCount);
        return step
    });
    return syncedItems;
}