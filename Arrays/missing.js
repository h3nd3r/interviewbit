// https://www.interviewbit.com/problems/first-missing-integer/
firstMissingPositive = function(A){
  A.sort();
  var hash = {};
  for(var i=0; i<A.length; i++) {
    if (A[i] > 0 ) {
      if (hash[A[i]]) {
        hash[A[i]]++;
      } else {
        hash[A[i]] = 1;
      }
    }
  }
  for(var i=1; i<A.length; i++) {
    if (!hash[i]) {
      return i;
    }
  }
  return Object.keys(hash).length + 1;
};

console.log(firstMissingPositive([1]));

console.log(firstMissingPositive([3,4,-1,1,2]));
//[-1, 1, 2, 3, 4]

console.log(firstMissingPositive([3,4,-1,1]));

console.log(firstMissingPositive([-8, -7, -6]));

console.log(firstMissingPositive([[ 649, 212, 373, 955, 612, 297, 131, 319, 238, 287, 996, 116, 846, 615, 261, 387, 910, 813, 2, 861, 857, 241, 690, 326, 325, 330, 279, 967, 594, 568, 865, 520, 556, 754, 353, 468, 919, 347, 57, 265, 102, 869, 579, 267, 134, 529, 523, 744, 299, 501, 805, 439, 759, 845, 193, 306, 573, 88, 712, 850, 806, 882, 229, 474, 85, 170, 682, 988, 144, 665, 821, 391, 453, 760, 377, 524, 81, 618, 419, 380, 781, 388, 576, 457, 221, 341, 49, 720, 691, 948, 931, 987, 974, 809, 930, 403, 951, 513, 946, 687, 668, 303, 750, 393, 167, 742, 0, 62, 502, 398, 84, 870, 945, 483, 873, 969, 396, 203, 446, 316, 254, 548, 235, 659, 109, 455, 217, 977, 916, 740, 290, 284, 189, 887, 497, 541, 336, 71, 196, 257, 64, 569, 372, 927, 784, 448, 32, 947, 310, 133, 999, 875, 119, 676, 454, 440, 986, 164, 286, 174, 790, 825, 169, 683, 262, 611, 828, 19, 107, 228, 37, 233, 313, 348, 195, 964, 903, 808, 509, 473, 701, 994, 796, 854, 768, 764, 855, 897, -4, 656, 418, 96, 981, 477, 432, 117, 351, 504, 763, 920, 465, 14, 245, 285, 296, 142, 51, 33, 735, 839, 463, 646, 404, 822, 635, 814, 613, 970, 713, 271, 545, 522, 475, 637, 1000, 301, 252, 469, 962, 44, 466, 244, 60, 312, 40, 693, 716, 926, 200, 35, 929, 898, 625, 726, 308, 835, 583, 503, 892, 48, 159, 585, 386, 610, 332, 104, 595, 685, 864, 933, 176, 630, 818, 434, 604, 848, 562, 275, 3, 390, 460, 417, 581, 978, 367, 472, 761, 799, 991, 906, 672, 258, 77, 696, 626, 358, 45, 913, 9, 826, 725, 444, 237, 346, 423, 944, 714, 194, 350, 762, 154, 704, 39, 114, 710, 141, 700, 628, 397, 90, 923, 83, 93, 499, 510, 804, 191, 78, 515, 671, 540, 4, 355, 137, 550, 493, 494, 642, 183, 528, 531, 293, 695, 216, 836, 555, 660, 539, 960, 533, 936, 603, 608, 975, 425, 597, 607, 997, 802, 884, 106, 746, 677, 918, 74, 435, 410, 17, 211, 171, 153, 590, 538, 853, 345, 819, 146, 657, 755, 250, 54, 214, 283, 232, -2, 717, 24, 537, 359, 860, 269, 794, 162, 578, 885, 575, 727, 20, 430, -1, 370, 482, 281, 11, 644, 68, 158, 411, 124, 99, 443, 706, 175, 907, 184, -5, 69, 584, 546, 900, 264, 662, 881, 486, 777, 337, 126, 6, 480, 255, 741, 557, 236, 72, 63, 226, 519, 640, 416, 225, 389, 552, 5, 511, 25, 322, 108, 50, 549, 127, 766, 517, 925, 165, 699, 451, 95, 112, 842, 774, 567, 13, 61, 408, 829, 816, 559, 437, 26, 733, 294, 747, 219, 834, 168, 58, 218, 399, 886, 976, 431, 666, 773, 858, 758, 679, 327, 420, 820, 728, 932, 179, 669, 940, 512, 270, 488, 596, 352, 780, 675, 151, 110, 824, 684, 10, 871, 253, 719, 535, 730, 786, 879, 197, 767, 678, 135, 288, 458, 407, 394, 309, 789, 161, 530, 801, 753, 73, 79, 832, 427, 268, 724, 965, 130, 643, 849, 349, 847, 92, 138, 652, 204, 734, 320, 743, 589, 661, 272, 851, 34, 582, 983, 782, 756, 318, 891, 89, 132, 467, 697, 899, 516, 553, 498, 770, 155, 772, 331, 248, 152, 428, 505, 650, 689, 143, 866, 663, 220, 934, 922, 952, 91, 972, 563, 462, 52, 100, 307, 118, 937, 342, 295, 765, 239, 178, 201, 776, 634, 587, 41, 324, 872, 908, 379, 422, 292, 23, 495, 600, 291, 328, 737, 629, 968, 210, 476, 778, 953, 30, 334, 867, 205, 192, 75, 87, 366, 98, 616, 935, 436, 413, 489, 305, 395, 525, 534, 282, 592, 333, 421, 889, 895, 815, 145, 963, 7, 206, 705, 376, 775, 707, 698, 381, 811, 335, 993, 315, 230, 215, 902, 748, 982, 21, 586, 939, 752, 621, 123, 234, 954, 361, 609, 461, 732, 544, 863, 101, 129, 383, 844, 456, 360, 339, 149, 354, 817, 15, 66, 46, 810, 779, 369, 959, 481, 622, 247, 795, 909, 491, 883, 785, 471, 382, 424, 841, 260, 876, 280, 574, 837, 36, 673, 654, 160, 8, 803, 973, 147, 783, 617, 18, 599, 121, 447, 139, 304, 543, 561, 793, 688, 632, 365, 506, 738, 31, 172, 942, 317, 338, 856, 478, 276, 314, 577, 484, 605, 565, 957, 751, 888, 591, 113, 877, 29, 28, 558, 492, 570, 125, 664, 949, 1, 224, 496, 971, 769, 329, 580, 894, 638, 961, 256, 378, 429, 56, 479, 251, 989, 464, 490, 514, 190, 385, 601, 812, 928, 788, 442, 718, 202, 213, 277, 289, 917, 449, 371, 915, 166 ]
]));