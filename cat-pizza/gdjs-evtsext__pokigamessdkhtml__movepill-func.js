
if (typeof gdjs.evtsExt__PokiGamesSDKHtml__MovePill !== "undefined") {
  gdjs.evtsExt__PokiGamesSDKHtml__MovePill.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PokiGamesSDKHtml__MovePill = {};
gdjs.evtsExt__PokiGamesSDKHtml__MovePill.idToCallbackMap = new Map();


gdjs.evtsExt__PokiGamesSDKHtml__MovePill.userFunc0x8d5b5e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (typeof PokiSDK === "undefined") return;
const topPercent = Number(eventsFunctionContext.getArgument("TopPercent"));
const topPx = Number(eventsFunctionContext.getArgument("TopPx"));
PokiSDK.movePill(topPercent, topPx);

};
gdjs.evtsExt__PokiGamesSDKHtml__MovePill.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PokiGamesSDKHtml__MovePill.userFunc0x8d5b5e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PokiGamesSDKHtml__MovePill.func = function(runtimeScene, TopPercent, TopPx, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PokiGamesSDKHtml"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PokiGamesSDKHtml"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "TopPercent") return TopPercent;
if (argName === "TopPx") return TopPx;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PokiGamesSDKHtml__MovePill.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__PokiGamesSDKHtml__MovePill.registeredGdjsCallbacks = [];