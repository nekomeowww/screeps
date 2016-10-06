//role of engineer
    var roleEngineer = {
    //创建变量roleEngineer
        /** @param {Creep} creep **/
        //@param标签
        run: function(creep) {
        //现在我们创建一个creep函数并包含以下内容，并包含在module中
    	    if(creep.memory.repairing && creep.carry.energy == 0) {
          //如果
                creep.memory.repairing = false;
                creep.say('资源不足了唔...');
    	    }
    	    if(!creep.memory.repairing && creep.carry.energy == creep.carryCapacity) {
    	        creep.memory.repairing = true;
    	        creep.say('维修www');
    	    }

    	    if(creep.memory.repairing) {
    	        var targets = creep.room.find(FIND_STRUCTURES, {
                  filter: (structure) => {
                      return (structure.structureType == STRUCTURE_WALL
              });
                if(targets.length) {
                    if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(targets[0]);
                    }
                }
    	    }
    	    else {
    	        var sources = creep.room.find(FIND_SOURCES);
                if(creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(sources[0]);
                }
    	    }
    	}
    };

module.exports = roleEngineer;
