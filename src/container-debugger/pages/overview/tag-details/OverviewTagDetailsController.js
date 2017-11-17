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

/**
 * @name OverviewTagDetailsController
 */
class OverviewTagDetailsController {
    constructor ($report, $stateParams, $container) {
        this.report = $report;
        this.stateParams = $stateParams;
        this.doNotTrackEnabled = $container.$doNotTrack.isEnabled();
    }

    /**
     * Returns tag details based on routing parameter
     *
     * @returns {TagSummary|Boolean}
     */
    get tagSummary () {
        let tagId = parseInt(this.stateParams.id);
        return this.report
            .stateSummary
            .getTagSummary(tagId);
    }
}

OverviewTagDetailsController.$inject = [
    'stg.debugger.report',
    '$stateParams',
    '$container'
];

angular
    .module('stg.debugger')
    .controller('stg.debugger.OverviewTagDetailsController', OverviewTagDetailsController);
