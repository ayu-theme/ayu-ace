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
ace.define('ace/theme/ayu-light', ['require', 'exports', 'module', 'ace/lib/dom'], function (acequire, exports, module) {
exports.isDark = false
exports.cssClass = 'ace-ayu-light'
exports.cssText = '.ace-ayu-light .ace_gutter {\
background: #FAFAFA;\
color: rgb(171,177,183)\
}\
\
.ace-ayu-light .ace_print-margin {\
width: 1px;\
background: #e8e8e8\
}\
\
.ace-ayu-light {\
background-color: #FAFAFA;\
color: #5C6773\
}\
\
.ace-ayu-light .ace_cursor {\
color: #FF6A00\
}\
\
.ace-ayu-light .ace_marker-layer .ace_selection {\
background: #F0EEE4\
}\
\
.ace-ayu-light.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #FAFAFA;\
border-radius: 2px\
}\
\
.ace-ayu-light .ace_marker-layer .ace_step {\
background: rgb(198, 219, 174)\
}\
\
.ace-ayu-light .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #FF0000\
}\
\
.ace-ayu-light .ace_marker-layer .ace_active-line {\
background: #F2F2F2\
}\
\
.ace-ayu-light .ace_gutter-active-line {\
background-color: #F2F2F2\
}\
\
.ace-ayu-light .ace_marker-layer .ace_selected-word {\
border: 1px solid #F0EEE4\
}\
\
.ace-ayu-light .ace_fold {\
background-color: #F29718;\
border-color: #5C6773\
}\
\
.ace-ayu-light .ace_keyword {\
color: #F2590C\
}\
\
.ace-ayu-light .ace_keyword.ace_other.ace_unit {\
color: #A37ACC\
}\
\
.ace-ayu-light .ace_constant.ace_language {\
color: #A37ACC\
}\
\
.ace-ayu-light .ace_constant.ace_numeric {\
color: #A37ACC\
}\
\
.ace-ayu-light .ace_constant.ace_character {\
color: #A37ACC\
}\
\
.ace-ayu-light .ace_constant.ace_character.ace_escape {\
color: #4DBF99\
}\
\
.ace-ayu-light .ace_support.ace_function {\
color: #F29718\
}\
\
.ace-ayu-light .ace_support.ace_constant {\
color: #A37ACC\
}\
\
.ace-ayu-light .ace_support.ace_class {\
color: #41A6D9\
}\
\
.ace-ayu-light .ace_support.ace_type {\
color: #41A6D9\
}\
\
.ace-ayu-light .ace_storage.ace_type {\
color: #F2590C\
}\
\
.ace-ayu-light .ace_invalid {\
color: #FF3333\
}\
\
.ace-ayu-light .ace_invalid.ace_deprecated {\
color: #FFFFFF;\
background-color: #F2590C\
}\
\
.ace-ayu-light .ace_string {\
color: #86B300\
}\
\
.ace-ayu-light .ace_string.ace_regexp {\
color: #4DBF99\
}\
\
.ace-ayu-light .ace_comment {\
font-style: italic;\
color: #ABB0B6\
}\
\
.ace-ayu-light .ace_variable {\
color: #5C6773\
}\
\
.ace-ayu-light .ace_variable.ace_language {\
font-style: italic;\
color: #41A6D9\
}\
\
.ace-ayu-light .ace_variable.ace_parameter {\
color: #A37ACC\
}\
\
.ace-ayu-light .ace_meta.ace_tag {\
color: #E7C547\
}\
\
.ace-ayu-light .ace_entity.ace_other.ace_attribute-name {\
color: #F2590C\
}\
\
.ace-ayu-light .ace_entity.ace_name.ace_function {\
color: #F29718\
}\
\
.ace-ayu-light .ace_entity.ace_name.ace_tag {\
color: #41A6D9\
}\
\
.ace-ayu-light .ace_markup.ace_heading {\
color: #86B300\
}'

var dom = acequire('../lib/dom')
dom.importCssString(exports.cssText, exports.cssClass)
})