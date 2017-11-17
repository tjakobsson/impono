/**
 * Impono Tag Manager
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */
'use strict';

(function(sevenTag, MODULE_NAME) {
    var VariablesHistory = function () {
        var _variables = {};

        this.push = function (contextId, variables) {
            _variables[contextId] = variables;
        };

        this.get = function(contextId, key) {
            if(_variables[contextId] !== undefined) {
                return _variables[contextId][key];
            }

            return undefined;
        };

        return this;
    };

    VariablesHistory.$inject = [];

    sevenTag.service(MODULE_NAME, VariablesHistory);
})(window.sevenTag, '$variablesHistory');
