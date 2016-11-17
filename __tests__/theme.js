import fs from 'fs'
import path from 'path'

test('themes', () => {
	const dark = fs.readFileSync(path.resolve('dark.js'), 'utf-8')
	const light = fs.readFileSync(path.resolve('light.js'), 'utf-8')
	const mirage = fs.readFileSync(path.resolve('mirage.js'), 'utf-8')

	expect(dark).toMatchSnapshot()
	expect(light).toMatchSnapshot()
	expect(mirage).toMatchSnapshot()
})
