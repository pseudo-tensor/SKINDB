const colorOrder: Record<string, string> = {
    'Covert': "#fa5c4b",
    'Classified': "#ed34ce",
    'Restricted': "#831ee8",
    'Mil-Spec': '#3d8bf2',
    'Consumer Grade': '#d1c9c9',
  };

 export default function colorSort(rarity:string) {
    return colorOrder[rarity];
}