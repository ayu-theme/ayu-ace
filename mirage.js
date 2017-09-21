/*!
* MIT License
*
* Copyright (c) 2016 Ike Ku
*
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
*
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
ace.define('ace/theme/ayu-mirage', ['require', 'exports', 'module', 'ace/lib/dom'], function (acequire, exports, module) {
exports.isDark = false
exports.cssClass = 'ace-ayu-mirage'
exports.cssText = '.ace-ayu-mirage .ace_gutter {\
background: #212733;\
color: rgb(125,127,129)\
}\
\
.ace-ayu-mirage .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
\
.ace-ayu-mirage {\
background-color: #212733;\
color: #D9D7CE\
}\
\
.ace-ayu-mirage .ace_cursor {\
color: #FFCC66\
}\
\
.ace-ayu-mirage .ace_marker-layer .ace_selection {\
background: #343F4C\
}\
\
.ace-ayu-mirage.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #212733;\
border-radius: 2px\
}\
\
.ace-ayu-mirage .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174)\
}\
\
.ace-ayu-mirage .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #FF0000\
}\
\
.ace-ayu-mirage .ace_marker-layer .ace_active-line {\
background: #242B38\
}\
\
.ace-ayu-mirage .ace_gutter-active-line {\
background-color: #242B38\
}\
\
.ace-ayu-mirage .ace_marker-layer .ace_selected-word {\
border: 1px solid #343F4C\
}\
\
.ace-ayu-mirage .ace_fold {\
background-color: #FFD580;\
border-color: #D9D7CE\
}\
\
.ace-ayu-mirage .ace_keyword.ace_operator {\
color: #F29E74\
}\
\
.ace-ayu-mirage .ace_constant.ace_language {\
color: #D4BFFF\
}\
\
.ace-ayu-mirage .ace_constant.ace_numeric {\
color: #D4BFFF\
}\
\
.ace-ayu-mirage .ace_constant.ace_character {\
color: #D4BFFF\
}\
\
.ace-ayu-mirage .ace_constant.ace_character.ace_escape {\
color: #95E6CB\
}\
\
.ace-ayu-mirage .ace_constant.ace_other {\
color: #D4BFFF\
}\
\
.ace-ayu-mirage .ace_support.ace_function {\
color: #F28779\
}\
\
.ace-ayu-mirage .ace_support.ace_constant {\
font-style: italic;\
color: #F29E74\
}\
\
.ace-ayu-mirage .ace_support.ace_class {\
font-style: italic;\
color: #5CCFE6\
}\
\
.ace-ayu-mirage .ace_support.ace_type {\
font-style: italic;\
color: #5CCFE6\
}\
\
.ace-ayu-mirage .ace_storage {\
color: #FFA759\
}\
\
.ace-ayu-mirage .ace_storage.ace_type {\
color: #FFA759\
}\
\
.ace-ayu-mirage .ace_invalid {\
color: #FF3333\
}\
\
.ace-ayu-mirage .ace_invalid.ace_deprecated {\
color: #FFFFFF;\
background-color: #FFA759\
}\
\
.ace-ayu-mirage .ace_string {\
color: #BAE67E\
}\
\
.ace-ayu-mirage .ace_string.ace_regexp {\
color: #95E6CB\
}\
\
.ace-ayu-mirage .ace_comment {\
font-style: italic;\
color: #5C6773\
}\
\
.ace-ayu-mirage .ace_variable {\
color: #D9D7CE\
}\
\
.ace-ayu-mirage .ace_variable.ace_language {\
font-style: italic;\
color: #5CCFE6\
}\
\
.ace-ayu-mirage .ace_variable.ace_parameter {\
color: #D4BFFF\
}\
\
.ace-ayu-mirage .ace_entity.ace_other.ace_attribute-name {\
color: #FFD580\
}\
\
.ace-ayu-mirage .ace_entity.ace_name.ace_function {\
color: #FFD580\
}\
\
.ace-ayu-mirage .ace_entity.ace_name.ace_tag {\
color: #5CCFE6\
}'

var dom = acequire('../lib/dom')
dom.importCssString(exports.cssText, exports.cssClass)
})