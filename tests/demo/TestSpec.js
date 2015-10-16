/**
 * @file TestSpec.js
 * @method TestSpec
 * @desc Template for
 * @author psykoral
 * @since 10/15/15 11:02 PM
 *
 * @requires can
 * @constructs can.Control.extend.SharedProfile
 * @returns {can.Control.extend.SharedProfile}
 */
define(['can'], function (can) {
	'use strict';

	var demoObj = {},
		demoAr = [];

	describe('Testing template', function () {
		it('document and window should be a defined', function () {
			expect(demoObj).toBeDefined();
			expect(demoAr).toBeDefined();
		});

		it('document and window should return an object', function () {
			expect(typeof demoObj === 'object').toBe(true);
			expect(typeof demoAr === 'object').toBe(true);
		});
	});
});
