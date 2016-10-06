//Room Detection
var configSpawn = require('config.spawn');
var configRoom = require('config.room');

var functionRoomProbe = {
    /** @param {Room} room **/
    run: function(roomCordinate,creepTarget) {
        var listlength = configSpawn.length;
        //检查每一个configSpawn下的列表中，room是否匹配参数所给的room地址
        for(var i = 0; i < configSpawn.length; i++) {
            console.log(roomCordinate);
            console.log(configSpawn[i].room);
            if(configSpawn[i].room == roomCordinate) {
                var roomCache = [i];
                console.log('已经找到目标房间，正在导向到生产配置...');
                console.log(i);
                var roomResults = new Array();
                roomResults[0] = i;
                roomResults[1] = configSpawn[i].body;
                roomResults[2] = configSpawn[i].role;
                console.log('准备好了数据。已将' + configSpawn[i].comment + '加入生产队列');
                break;
            }
            else {
                console.log(i);
                console.log('房间不存在');
                var roomCache = null;
            }
        }
    }
}
module.exports = functionRoomProbe;
