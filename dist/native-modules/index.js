// the following two imports are needed for consumer TS projects
// without them types will not be found
import "./augmentation/element";
import "./augmentation/materialize";
import "./augmentation/aurelia-typed-observable";
import { ConfigBuilder } from "./config-builder";
export function configure(frameworkConfiguration, configCallback) {
    var builder = frameworkConfiguration.container.get(ConfigBuilder);
    if (configCallback !== undefined && typeof (configCallback) === "function") {
        configCallback(builder);
    }
    if (builder.useGlobalResources) {
        frameworkConfiguration.globalResources(builder.globalResources);
    }
}
// build-index-remove start
export * from "./exports";
// build-index-remove end
function remove() {
    if (this.parentNode) {
        this.parentNode.removeChild(this);
    }
}
// polyfill remove for IE11
(function () {
    if (!Element.prototype.remove) {
        Element.prototype.remove = remove;
    }
    if (Text && !Text.prototype.remove) {
        Text.prototype.remove = remove;
    }
})();
//# sourceMappingURL=index.js.map