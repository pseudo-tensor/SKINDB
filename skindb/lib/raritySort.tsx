const rarityOrder: Record<string, number> = {
    Covert: 1,
    Classified: 2,
    Restricted: 3,
    'Mil-Spec': 4,
    'Consumer Grade': 5,
  };

 export default function raritySort(rarity:string) {
    return rarityOrder[rarity];
}