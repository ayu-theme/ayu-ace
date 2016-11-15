import path from 'path'
import fs from 'fs'

import execa from 'execa'
import rimraf from 'rimraf'
import { stripIndents } from 'common-tags'

const template = (name, css) => {
	return stripIndents`
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
		ace.define('ace/theme/${name}', ['require', 'exports', 'module', 'ace/lib/dom'], function (acequire, exports, module) {
			exports.isDark = false
			exports.cssClass = 'ace-${name}'
			exports.cssText = '${css.replace(/\r?\n|\r/g, '\\\n')}'

			var dom = acequire('../lib/dom')
			dom.importCssString(exports.cssText, exports.cssClass)
		})
	`
}

(async () => {
	try {
		rimraf.sync('light.js')
		rimraf.sync('mirage.js')
		rimraf.sync('dark.js')

		await execa('git', ['clone', 'https://github.com/ajaxorg/ace', '--depth=1'])
		await execa('git', ['clone', 'https://github.com/dempfi/ayu', '--depth=1'])

		await execa('npm', ['install'], {
			cwd: path.resolve('ace/tool')
		})

		await execa('node', [
			'tmtheme.js',
			'ayu-light',
			path.resolve('ayu/ayu-light.tmTheme'),
			path.resolve()
		], {
			cwd: path.resolve('ace/tool')
		})

		await execa('node', [
			'tmtheme.js',
			'ayu-mirage',
			path.resolve('ayu/ayu-mirage.tmTheme'),
			path.resolve()
		], {
			cwd: path.resolve('ace/tool')
		})

		await execa('node', [
			'tmtheme.js',
			'ayu-dark',
			path.resolve('ayu/ayu-dark.tmTheme'),
			path.resolve()
		], {
			cwd: path.resolve('ace/tool')
		})

		const light = template('ayu-light', fs.readFileSync('ayu-light.css', 'utf-8'))
		const mirage = template('ayu-mirage', fs.readFileSync('ayu-mirage.css', 'utf-8'))
		const dark = template('ayu-dark', fs.readFileSync('ayu-dark.css', 'utf-8'))

		fs.writeFileSync('light.js', light, 'utf-8')
		fs.writeFileSync('mirage.js', mirage, 'utf-8')
		fs.writeFileSync('dark.js', dark, 'utf-8')

		rimraf.sync('ace')
		rimraf.sync('ayu')

		rimraf.sync('ayu-light.css')
		rimraf.sync('ayu-mirage.css')
		rimraf.sync('ayu-dark.css')
		rimraf.sync('ayu-light.js')
		rimraf.sync('ayu-mirage.js')
		rimraf.sync('ayu-dark.js')
	} catch (error) {
		console.log(error);
	}
})()
