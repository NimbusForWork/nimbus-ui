'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = require('styled-components/native');
var styled__default = _interopDefault(styled);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Container = styled__default.Image(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n\n  ", "\n\n  ", "\n"], ["\n  width: ", ";\n  height: ", ";\n\n  ",
    "\n\n  ",
    "\n"])), function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var rounded = _a.rounded, width = _a.width, borderRadius = _a.borderRadius;
    if (rounded) {
        return styled.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        border-radius: ", ";\n      "], ["\n        border-radius: ", ";\n      "])), width / 2);
    }
    if (typeof borderRadius !== 'undefined') {
        return styled.css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        border-radius: ", ";\n      "], ["\n        border-radius: ", ";\n      "])), borderRadius);
    }
    return null;
}, function (_a) {
    var margin = _a.margin, marginTop = _a.marginTop, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight;
    if (Number(margin)) {
        return styled.css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        margin: ", "px;\n      "], ["\n        margin: ", "px;\n      "])), margin);
    }
    return styled.css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n      margin-top: ", ";\n      margin-bottom: ", ";\n      margin-left: ", ";\n      margin-right: ", ";\n    "], ["\n      margin-top: ", ";\n      margin-bottom: ", ";\n      margin-left: ", ";\n      margin-right: ", ";\n    "])), marginTop || 0, marginBottom || 0, marginLeft || 0, marginRight || 0);
});
var Image = function (_a) {
    var src = _a.src, width = _a.width, height = _a.height, rounded = _a.rounded, borderRadius = _a.borderRadius, margin = _a.margin, marginTop = _a.marginTop, marginBottom = _a.marginBottom, marginLeft = _a.marginLeft, marginRight = _a.marginRight;
    return (React.createElement(Container, { source: src, width: width, height: height, rounded: rounded, borderRadius: borderRadius, margin: margin, marginTop: marginTop, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight }));
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;

exports.Image = Image;
//# sourceMappingURL=index.js.map
