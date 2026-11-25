
if (typeof gdjs.evtsExt__PokiGamesSDKHtml__URLParam !== "undefined") {
  gdjs.evtsExt__PokiGamesSDKHtml__URLParam.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PokiGamesSDKHtml__URLParam = {};
gdjs.evtsExt__PokiGamesSDKHtml__URLParam.idToCallbackMap = new Map();


gdjs.evtsExt__PokiGamesSDKHtml__URLParam.userFunc0x8d5b5e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (typeof PokiSDK === "undefined") {
    eventsFunctionContext.returnValue = "";
    return;
}
eventsFunctionContext.returnValue = PokiSDK.getURLParam(eventsFunctionContext.getArgument("Key"));

};
gdjs.evtsExt__PokiGamesSDKHtml__URLParam.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PokiGamesSDKHtml__URLParam.userFunc0x8d5b5e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PokiGamesSDKHtml__URLParam.func = function(runtimeScene, Key, parentEventsFunctionContext) {
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
if (argName === "Key") return Key;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PokiGamesSDKHtml__URLParam.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PokiGamesSDKHtml__URLParam.registeredGdjsCallbacks = [];