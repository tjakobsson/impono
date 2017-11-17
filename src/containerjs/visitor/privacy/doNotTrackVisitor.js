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

(function(sevenTag, MODULE_NAME, SERVICE_NAME) {
    function DoNotTrackVisitor($doNotTrack) {
        var acceptsVisitorsPrivacy = function (target) {
            return $doNotTrack.isEnabled() && target.respectVisitorsPrivacy;
        };

        this.accept = function () {
            return true;
        };

        this.visit = function (target) {
            return !acceptsVisitorsPrivacy(target);
        };

        return this;
    }

    sevenTag.provider(MODULE_NAME, function() {
        return DoNotTrackVisitor;
    });

    var DoNotTrackVisitorFactory = function(DoNotTrackVisitorClass, $doNotTrack) {
        return new DoNotTrackVisitorClass($doNotTrack);
    };

    DoNotTrackVisitorFactory.$inject = [
        'DoNotTrackVisitor',
        '$doNotTrack'
    ];

    sevenTag.service(SERVICE_NAME, DoNotTrackVisitorFactory);
})(window.sevenTag, 'DoNotTrackVisitor', '$doNotTrackVisitor');
