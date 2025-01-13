const jsPsych = initJsPsych({
  default_iti: 1000,
  on_finish: function() {
    jsPsych.data.get().localSave('csv','Matching2.csv');
  }
});

/////////////////////////////
/////// materials ///////////
/////////////////////////////

let mat_practice = [
    {
        "itemid": 991,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 2
    },
    {
        "itemid": 992,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 12
    },
    {
        "itemid": 993,
        "sm": -1,
        "lm": 1000,
        "sd": 1,
        "ld": 36
    }
]; 
let mat_attention_practice = [
    {
        "itemid": 981,
        "sm": -1,
        "lm": 50,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 982,
        "sm": -1,
        "lm": 200,
        "sd": 1,
        "ld": 1
    }
];
let mat_formal = [
    {
        "itemid": 1,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 2,
        "interval": 1
    },
    {
        "itemid": 2,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 4,
        "interval": 3
    },
    {
        "itemid": 3,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 6,
        "interval": 5
    },
    {
        "itemid": 4,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 8,
        "interval": 7
    },
    {
        "itemid": 5,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 10,
        "interval": 9
    },
    {
        "itemid": 6,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 12,
        "interval": 11
    },
    {
        "itemid": 7,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 14,
        "interval": 13
    },
    {
        "itemid": 8,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 16,
        "interval": 15
    },
    {
        "itemid": 9,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 18,
        "interval": 17
    },
    {
        "itemid": 10,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 20,
        "interval": 19
    },
    {
        "itemid": 11,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 22,
        "interval": 21
    },
    {
        "itemid": 12,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 24,
        "interval": 23
    },
    {
        "itemid": 13,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 26,
        "interval": 25
    },
    {
        "itemid": 14,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 28,
        "interval": 27
    },
    {
        "itemid": 15,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 30,
        "interval": 29
    },
    {
        "itemid": 16,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 32,
        "interval": 31
    },
    {
        "itemid": 17,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 34,
        "interval": 33
    },
    {
        "itemid": 18,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 36,
        "interval": 35
    },
    {
        "itemid": 19,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 38,
        "interval": 37
    },
    {
        "itemid": 20,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 40,
        "interval": 39
    },
    {
        "itemid": 21,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 42,
        "interval": 41
    },
    {
        "itemid": 22,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 44,
        "interval": 43
    },
    {
        "itemid": 23,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 46,
        "interval": 45
    },
    {
        "itemid": 24,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 48,
        "interval": 47
    },
    {
        "itemid": 25,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 50,
        "interval": 49
    },
    {
        "itemid": 26,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 2,
        "interval": 1
    },
    {
        "itemid": 27,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 4,
        "interval": 3
    },
    {
        "itemid": 28,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 6,
        "interval": 5
    },
    {
        "itemid": 29,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 8,
        "interval": 7
    },
    {
        "itemid": 30,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 10,
        "interval": 9
    },
    {
        "itemid": 31,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 12,
        "interval": 11
    },
    {
        "itemid": 32,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 14,
        "interval": 13
    },
    {
        "itemid": 33,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 16,
        "interval": 15
    },
    {
        "itemid": 34,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 18,
        "interval": 17
    },
    {
        "itemid": 35,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 20,
        "interval": 19
    },
    {
        "itemid": 36,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 22,
        "interval": 21
    },
    {
        "itemid": 37,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 24,
        "interval": 23
    },
    {
        "itemid": 38,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 26,
        "interval": 25
    },
    {
        "itemid": 39,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 28,
        "interval": 27
    },
    {
        "itemid": 40,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 30,
        "interval": 29
    },
    {
        "itemid": 41,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 32,
        "interval": 31
    },
    {
        "itemid": 42,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 34,
        "interval": 33
    },
    {
        "itemid": 43,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 36,
        "interval": 35
    },
    {
        "itemid": 44,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 38,
        "interval": 37
    },
    {
        "itemid": 45,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 40,
        "interval": 39
    },
    {
        "itemid": 46,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 42,
        "interval": 41
    },
    {
        "itemid": 47,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 44,
        "interval": 43
    },
    {
        "itemid": 48,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 46,
        "interval": 45
    },
    {
        "itemid": 49,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 48,
        "interval": 47
    },
    {
        "itemid": 50,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 50,
        "interval": 49
    },
    {
        "itemid": 51,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 2,
        "interval": 1
    },
    {
        "itemid": 52,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 4,
        "interval": 3
    },
    {
        "itemid": 53,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 6,
        "interval": 5
    },
    {
        "itemid": 54,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 8,
        "interval": 7
    },
    {
        "itemid": 55,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 10,
        "interval": 9
    },
    {
        "itemid": 56,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 12,
        "interval": 11
    },
    {
        "itemid": 57,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 14,
        "interval": 13
    },
    {
        "itemid": 58,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 16,
        "interval": 15
    },
    {
        "itemid": 59,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 18,
        "interval": 17
    },
    {
        "itemid": 60,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 20,
        "interval": 19
    },
    {
        "itemid": 61,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 22,
        "interval": 21
    },
    {
        "itemid": 62,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 24,
        "interval": 23
    },
    {
        "itemid": 63,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 26,
        "interval": 25
    },
    {
        "itemid": 64,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 28,
        "interval": 27
    },
    {
        "itemid": 65,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 30,
        "interval": 29
    },
    {
        "itemid": 66,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 32,
        "interval": 31
    },
    {
        "itemid": 67,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 34,
        "interval": 33
    },
    {
        "itemid": 68,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 36,
        "interval": 35
    },
    {
        "itemid": 69,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 38,
        "interval": 37
    },
    {
        "itemid": 70,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 40,
        "interval": 39
    },
    {
        "itemid": 71,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 42,
        "interval": 41
    },
    {
        "itemid": 72,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 44,
        "interval": 43
    },
    {
        "itemid": 73,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 46,
        "interval": 45
    },
    {
        "itemid": 74,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 48,
        "interval": 47
    },
    {
        "itemid": 75,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 50,
        "interval": 49
    },
    {
        "itemid": 76,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 2,
        "interval": 1
    },
    {
        "itemid": 77,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 4,
        "interval": 3
    },
    {
        "itemid": 78,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 6,
        "interval": 5
    },
    {
        "itemid": 79,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 8,
        "interval": 7
    },
    {
        "itemid": 80,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 10,
        "interval": 9
    },
    {
        "itemid": 81,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 12,
        "interval": 11
    },
    {
        "itemid": 82,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 14,
        "interval": 13
    },
    {
        "itemid": 83,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 16,
        "interval": 15
    },
    {
        "itemid": 84,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 18,
        "interval": 17
    },
    {
        "itemid": 85,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 20,
        "interval": 19
    },
    {
        "itemid": 86,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 22,
        "interval": 21
    },
    {
        "itemid": 87,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 24,
        "interval": 23
    },
    {
        "itemid": 88,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 26,
        "interval": 25
    },
    {
        "itemid": 89,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 28,
        "interval": 27
    },
    {
        "itemid": 90,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 30,
        "interval": 29
    },
    {
        "itemid": 91,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 32,
        "interval": 31
    },
    {
        "itemid": 92,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 34,
        "interval": 33
    },
    {
        "itemid": 93,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 36,
        "interval": 35
    },
    {
        "itemid": 94,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 38,
        "interval": 37
    },
    {
        "itemid": 95,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 40,
        "interval": 39
    },
    {
        "itemid": 96,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 42,
        "interval": 41
    },
    {
        "itemid": 97,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 44,
        "interval": 43
    },
    {
        "itemid": 98,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 46,
        "interval": 45
    },
    {
        "itemid": 99,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 48,
        "interval": 47
    },
    {
        "itemid": 100,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 50,
        "interval": 49
    },
    {
        "itemid": 101,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 2,
        "interval": 1
    },
    {
        "itemid": 102,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 4,
        "interval": 3
    },
    {
        "itemid": 103,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 6,
        "interval": 5
    },
    {
        "itemid": 104,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 8,
        "interval": 7
    },
    {
        "itemid": 105,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 10,
        "interval": 9
    },
    {
        "itemid": 106,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 12,
        "interval": 11
    },
    {
        "itemid": 107,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 14,
        "interval": 13
    },
    {
        "itemid": 108,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 16,
        "interval": 15
    },
    {
        "itemid": 109,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 18,
        "interval": 17
    },
    {
        "itemid": 110,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 20,
        "interval": 19
    },
    {
        "itemid": 111,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 22,
        "interval": 21
    },
    {
        "itemid": 112,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 24,
        "interval": 23
    },
    {
        "itemid": 113,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 26,
        "interval": 25
    },
    {
        "itemid": 114,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 28,
        "interval": 27
    },
    {
        "itemid": 115,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 30,
        "interval": 29
    },
    {
        "itemid": 116,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 32,
        "interval": 31
    },
    {
        "itemid": 117,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 34,
        "interval": 33
    },
    {
        "itemid": 118,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 36,
        "interval": 35
    },
    {
        "itemid": 119,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 38,
        "interval": 37
    },
    {
        "itemid": 120,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 40,
        "interval": 39
    },
    {
        "itemid": 121,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 42,
        "interval": 41
    },
    {
        "itemid": 122,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 44,
        "interval": 43
    },
    {
        "itemid": 123,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 46,
        "interval": 45
    },
    {
        "itemid": 124,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 48,
        "interval": 47
    },
    {
        "itemid": 125,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 50,
        "interval": 49
    }
]; 
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    // 生成一个随机索引，范围从0到i（包括0和i）
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
shuffleArray(mat_formal);

let mat_attention = [
    {
        "itemid": 901,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 902,
        "sm": -1,
        "lm": 5,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 903,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 904,
        "sm": -1,
        "lm": 20,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 905,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 906,
        "sm": -1,
        "lm": 100,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 907,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 908,
        "sm": -1,
        "lm": 400,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 909,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 1
    },
    {
        "itemid": 910,
        "sm": -1,
        "lm": 2000,
        "sd": 1,
        "ld": 1
    }
]; 
shuffleArray(mat_attention);
/////////////////////////////
/////// instructions ////////
/////////////////////////////

///// demo info
let demo_info = {
    type: jsPsychSurveyText,
    button_label: "继续",
    questions: [
      { prompt: "姓名", required: true, name: "name" },
      { prompt: "年龄", required: true, name: "age" },
      { prompt: "性别", required: true, name: "gender" },
      { prompt: "联系电话", required: true, name: "phoneNumber" },
      { prompt: "身份证号码", required: true, name: "ID" },
      { prompt: "支付宝账号", required: true, name: "alipay" },
    ],
    data: {
      row_type: "demo_info",
    },
    on_finish: function (data) {
      // add ID to the data
      var name = data.response.name;
      var age = data.response.age;
      var gender = data.response.gender;
      var phone_number = data.response.phoneNumber;
      var alipay = data.response.alipay;
      var ID = data.response.ID;
    },
  };
  
  //// instructions
  const instruction1_screen = {
    type: jsPsychSurveyText,
    button_label: "继续",
    questions: [
      {
        prompt:
          "<p>欢迎参加本次实验！</p>" +
          "<p>这是一项有关金钱偏好的研究。" +
          "在每个试次中，你将看到两个涉及金钱损失的选项。你需要对其中的一个选项进行设定，使得你愿意接受这两个选项的程度相同。比如，假设你愿意接受“4星期后损失100元”和 “1星期后损失50元”的程度相同，那么当被问到你对于“1星期之后损失多少元”与“4星期后损失100元”会有相同的接受程度时，你应该回答1星期之后损失50元。一些情况下你可能愿意在较近的时刻接受更大的损失，这也是被允许的，根据你自身的想法作答即可。当然，当被问到你对于“1星期后损失200元”和“1星期后损失多少元”会有相同的接受程度这样的问题时，由于两个选项的延迟时长相同，此时你应该回答与另一选项相同的金额，即应该回答1星期后损失200元。总之，你的任务是使得你愿意接受两个选项的程度相同。</p>" 
          +"<p>在提交回答之前，你可以按退格键（BackSpace）修改；若作答无需修改，请用鼠标点击“下一题”提交答案并进入下一试次。</p>" +
          "<p>在正式实验开始之前，你需要完成5个练习试次，以便熟悉实验内容。完成实验大约需要25分钟。我们在实验中设置了一次休息，当出现休息提示时，你可以稍事休息。为了发放报酬，我们会在实验最后收集你的姓名、年龄、性别、联系电话、身份证号码和支付宝账号。若您认真完成了本实验，我们将在3个工作日内通过支付宝发放报酬。实验报酬为15元。</p>" +
          "<p>请仔细阅读以上内容，关闭电脑微信等即时通讯软件，将手机和电脑调整至免打扰模式，在安静无干扰的环境下认真完成本次实验。如有关于实验的任何问题，请联系主试澄清之后再开始作答，以免浪费你的时间，感谢你的认真和细心。" +
          "<br>&emsp;&emsp;主试QQ：1316124891" +
          "<br>&emsp;&emsp;主试邮箱：FANZhuoyi@zju.edu.cn</p>" +
          "<p>如无疑问，请在下方输入【我已知晓】开始练习。</p>",
      },
    ],
    css_classes: ["paragraph"],
    data: {
      row_type: "instructions",
    },
  };
  
  const instruction1 = {
    timeline: [instruction1_screen],
    loop_function: function (data) {
      if (data.values()[0].response.Q0 === "我已知晓") {
        return false;
      } else {
        return true;
      }
    },
  };
  
  const instruction2 = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: 
          "<p>练习阶段已结束。</p><p>&emsp;</p><p>接下来将进入正式实验阶段，操作方式与练习阶段完全一致。若您已经理解实验操作方法，您可以稍事休息后开始正式实验。正式实验中请集中精力完成任务。</p><p>&emsp;</p><p>如果你有关于实验的任何问题，请联系主试澄清之后再打开本链接继续作答，以确保顺利完成正式实验，感谢你的细心和时间。</p>"+
          "<p>主试QQ：1316124891</p>" +
          "<p>主试邮箱：FANZhuoyi@zju.edu.cn</p>" +
          "<p>&emsp;</p><p>&emsp;</p><p>如无问题，请按空格键进入正式实验阶段。</p>",
    choices: " ",
    css_classes: ["paragraph"],
    data: {
      row_type: "instructions",
    },
    on_finish: function (data) {
      delete data.stimulus;
    },
  };
  
  const rest_screen = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus:
      "<p>很好！你已经完成一半实验啦！</p><p>&emsp;</p><p>请稍事休息</p><p>&emsp;</p><p>&emsp;</p><p>休息结束后，按空格键继续实验。</p>",
    choices: " ",
    response_ends_trial: true,
    data: {
      row_type: "instructions",
    },
    on_finish: function (data) {
      delete data.stimulus;
    },
  };
  const end = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "感谢您参加本次实验，按下空格或 5 秒后自动退出",
    choices: " ",
    trial_duration: 5000,
    response_end_trial: true,
    data: {
      row_type: "instructions",
    },
    on_finish: function (data) {
      delete data.stimulus;
    }
  };
  
  ////////////////////////////
  //// frames and stimuli ////
  ////////////////////////////
  
  const set_clozeText = function (trialdata) {
    const trial_instruction = `<p>请在方框中填入一个整数，使得你愿意接受左右这两个选项的程度相同</p> <p> </p><p>&emsp;</p>`;
  
    const sd = trialdata.sd;
    const ld = trialdata.ld;
    const lm = trialdata.lm;
    const option_to_match = `${sd} 星期后损失 % ${lm} % 元`;
    const option_given = `${ld} 星期后损失 ${lm} 元`;
  
    let text = "";
    if (Math.random() > 0.5) {
      text =
        trial_instruction +
        '<p class="justify-text">' +
        option_given +
        "&emsp;&emsp;&emsp;&emsp;" +
        option_to_match +
        "</p><p>&emsp;</p>";
    } else {
      text =
        trial_instruction +
        '<p class="justify-text">' +
        option_to_match +
        "&emsp;&emsp;&emsp;&emsp;" +
        option_given +
        "</p><p>&emsp;</p>"; //
    }
  
    return text;
  };
  
  let check_if_res_unacceptable = function () {
    let curr_data = jsPsych.data.get().trials.at(-1);
    let res = curr_data.response[0];
    if (/(^[1-9]\d*|0)$/.test(res)) {
      return false;//填入非负整数
    } else if (/^-[1-9]\d*$/.test(res)) {
      alert("不可以填写负数，请重新填写");
      return true;
    } else {
      alert("请填入一个整数");
      return true;
    };
  };
  
  function check_if_inattention() {
    let curr_data = jsPsych.data.get().trials.at(-1);
    console.log(curr_data);
    let res = curr_data.response[0];
    if (res - curr_data.lm != 0) {
      alert("请认真完成任务！");
      jsPsych.finishTrial();
    }
  }
  
  let trial_screen = function (trialdata) {
    return {
      type: jsPsychCloze,
      data: {
        sd: trialdata.sd,
        lm: trialdata.lm,
        ld: trialdata.ld,
        itemid: trialdata.itemid,
        row_type: "trials",
      },
      text: set_clozeText(trialdata),
      check_answers: false,
      button_text: "下一题",
    };
  };
  
  let set_attention_practice = function (attention_practice_data) {
    return {
      type: jsPsychCloze,
      data: {
        sd: attention_practice_data.sd,
        lm: attention_practice_data.lm,
        ld: attention_practice_data.ld,
        itemid: attention_practice_data.itemid,
        row_type: "attention_practice",
      },
      text: set_clozeText(attention_practice_data),
      check_answers: true,
      allow_blanks: false,
      mistake_fn: function () {
        alert(
          "为了使你愿意接受两个损失选项的程度相同，当两个选项有相同的延迟时长时，你需要把这两个选项的金额也设为相同。请重新填写。"
        );
      },
      button_text: "下一题",
    };
  };
  
  ////////////////////////////////////////
  /////////// MAIN TIMELINE //////////////
  ////////////////////////////////////////
  let main_timeline = [instruction1];
  
  for (
    let trial_index = 0;
    trial_index < mat_practice.length;
    trial_index++
  ) {
    // PRACTICE
  
    let this_trial_screen = trial_screen(mat_practice[trial_index]);
    let this_practice_trial = {
      timeline: [this_trial_screen],
      loop_function: check_if_res_unacceptable,
    };
    main_timeline.push(this_practice_trial);
    if ((trial_index == 0) | (trial_index == 1)) {
      let attention_practice_trial = set_attention_practice(
        mat_attention_practice[trial_index]
      );
      main_timeline.push(attention_practice_trial);
    }
  };
  
  main_timeline.push(instruction2);
  
  num_blocks = mat_formal.length;
  attention_trial_index = 0;
  rest_index = [6,19,31,44,56,69,81,94,106,119];;
  for (let trial_index = 0; trial_index < num_blocks; trial_index++) {
    // FORMAL
    let this_trial_screen = trial_screen(mat_formal[trial_index]);
    let this_formal_trial = {
      timeline: [this_trial_screen],
      loop_function: check_if_res_unacceptable,
    };
    main_timeline.push(this_formal_trial);
  
    if (rest_index.includes(trial_index)) {
      // rest
      let this_attentionCheck_screen = trial_screen(
        mat_attention[attention_trial_index]
      );
      let this_attentionCheck_trial = {
        timeline: [this_attentionCheck_screen],
        on_finish: check_if_inattention,
      };
      main_timeline.push(this_attentionCheck_trial);
      attention_trial_index++;
    }
  
    if (trial_index == [Math.floor(num_blocks / 2) - 1]) {
      main_timeline.push(rest_screen);
    }
  }
  
  main_timeline.push(demo_info);
  main_timeline.push(end);
  
  jsPsych.run(main_timeline);
  