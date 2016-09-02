var towers = {

    /** @param {Game} game **/
    run: function() {
        towers = Game.spawns.Factory01.room.find(FIND_MY_STRUCTURES, {
                    filter: { structureType: STRUCTURE_TOWER }
                })
        _.forEach(towers, function(tower){
            var closestDamagedStructure = tower.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: (structure) => structure.hits < structure.hitsMax
            });
            if(closestDamagedStructure) {
                tower.repair(closestDamagedStructure);
            }
            var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(closestHostile) {
                tower.attack(closestHostile);
            }
        })
	}
};

module.exports = towers;
