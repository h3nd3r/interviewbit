// https://www.interviewbit.com/problems/all-unique-permutations/
function findCeil(A, first, l, h)
{
    var ceilIndex = l;
    for (var i = l+1; i <= h; i++) {
        if (A[i] > first && A[i] < A[ceilIndex]) {
            ceilIndex = i;
        }
    }
    return ceilIndex;
}

function permutations(A)
{
    var size = A.length;
    A.sort(function(a,b){return a-b;});
    var isFinished = false;
    var B = [];
    while (!isFinished)
    {
        var x = 1;
        B.push(A.slice(0,A.length));

        var i;
        for (i = size - 2; i >= 0; --i) {
            if (A[i] < A[i+1]) {
                break;
            }
        }

        if (i == -1) {
            isFinished = true;
        } else {
            var ceilIndex = findCeil(A, A[i], i + 1, size - 1);
            var tmp = A[i];
            A[i] = A[ceilIndex];
            A[ceilIndex] = tmp;

            var sorted = (A.slice(i+1, size)).sort(function(a,b){return a-b;});
            A = (A.slice(0,i+1)).concat(sorted);
        }
    }
    return B;
}

console.log(permutations([1,1,2]));
console.log(permutations([1,2,3,4]));
