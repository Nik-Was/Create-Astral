(function chippedTagFix() {
  onEvent("tags.blocks", (event) => {
    const acacias = event.get("chipped:stripped_acacia_log").getObjectIds();
    const birches = event.get("chipped:stripped_birch_log").getObjectIds();
    const crimsons = event.get("chipped:stripped_crimson_stem").getObjectIds();
    const dark_oaks = event.get("chipped:stripped_dark_oak_log").getObjectIds();
    const jungles = event.get("chipped:stripped_jungle_log").getObjectIds();
    const oaks = event.get("chipped:stripped_oak_log").getObjectIds();
    const spruces = event.get("chipped:stripped_spruce_log").getObjectIds();
    acacias.forEach(log => { event.add("minecraft:mineable/axe", log); });
    birches.forEach(log => { event.add("minecraft:mineable/axe", log); });
    crimsons.forEach(log => { event.add("minecraft:mineable/axe", log); });
    dark_oaks.forEach(log => { event.add("minecraft:mineable/axe", log); });
    jungles.forEach(log => { event.add("minecraft:mineable/axe", log); });
    oaks.forEach(log => { event.add("minecraft:mineable/axe", log); });
    spruces.forEach(log => { event.add("minecraft:mineable/axe", log); });
  });
})();
