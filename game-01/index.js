var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function findMedianSortedArrays(nums1, nums2) {
    var arrayMerged = __spreadArray(__spreadArray([], nums1), nums2);
    arrayMerged.sort(function (a, b) { return a - b; });
    var len = arrayMerged.length;
    var median = len % 2 === 0
        ? (arrayMerged[len / 2] + arrayMerged[(len / 2) - 1]) / 2
        : arrayMerged[(len - 1) / 2];
    return median;
}
;
var arr1 = [1, 3, 8];
var arr2 = [12, 4, 8];
var median = findMedianSortedArrays(arr1, arr2);
console.log(median);
