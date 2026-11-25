
if (typeof gdjs.evtsExt__PokiGamesSDKHtml__GetUser !== "undefined") {
  gdjs.evtsExt__PokiGamesSDKHtml__GetUser.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PokiGamesSDKHtml__GetUser = {};
gdjs.evtsExt__PokiGamesSDKHtml__GetUser.idToCallbackMap = new Map();


gdjs.evtsExt__PokiGamesSDKHtml__GetUser.userFunc0x8d5b5e0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
if (typeof PokiSDK === "undefined") {
    eventsFunctionContext.task.resolve();
    return;
}
const logger = new gdjs.Logger("Poki games SDK HTML");
/** @type {gdjs.Variable} */
const result = eventsFunctionContext.getArgument("Result");
result.fromJSObject({ username: "", avatarUrl: "" });
PokiSDK.getUser().then((user) => {
    const safeUser = user && typeof user === "object" ? user : {};
    result.fromJSObject({
        username: typeof safeUser.username === "string" ? safeUser.username : "",
        avatarUrl: typeof safeUser.avatarUrl === "string" ? safeUser.avatarUrl : "",
    });
}).catch((error) => {
    logger.log(`Failed to get user: ${error}`);
}).finally(() => {
    eventsFunctionContext.task.resolve();
});

};
gdjs.evtsExt__PokiGamesSDKHtml__GetUser.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PokiGamesSDKHtml__GetUser.userFunc0x8d5b5e0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PokiGamesSDKHtml__GetUser.func = function(runtimeScene, Result, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "Result") return Result;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__PokiGamesSDKHtml__GetUser.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__PokiGamesSDKHtml__GetUser.registeredGdjsCallbacks = [];