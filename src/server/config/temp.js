var fs = require('fs');


var capricorn = 0,
    aquarius = 1,
    pisces = 2,
    aries = 3,
    taurus = 4,
    gemini = 5,
    cancer = 6,
    leo = 7,
    virgo = 8,
    libra = 9,
    scorpio = 10,
    sagittarius = 11;

var westernCompatibility = {
    0: [cancer, capricorn, pisces, scorpio, taurus, virgo],
    1: [aquarius, aries, gemini, leo, sagittarius],
    2: [cancer, capricorn, scorpio, virgo],
    3: [aquarius, aries, gemini, leo, libra, sagittarius ],
    4: [capricorn, sagittarius, cancer, taurus, virgo],
    5: [aquarius, gemini, aries, leo, libra],
    6: [cancer, capricorn, leo, pisces, taurus, virgo],
    7: [aquarius, aries, gemini, libra, virgo],
    8: [cancer, capricorn, gemini, pisces, scorpio, taurus, virgo],
    9: [aries, gemini, leo, libra, sagittarius ],
    10: [cancer, capricorn, pisces, scorpio, virgo],
    11: [cancer, capricorn, scorpio, taurus, virgo]
};

var monkey = 0,
    rooster = 1,
    dog = 2,
    pig = 3,
    rat = 4,
    ox = 5,
    tiger = 6,
    rabbit = 7,
    dragon = 8,
    snake = 9,
    horse = 10,
    sheep = 11;

var easternCompatibility = {
    0: [rat, dragon, snake],
    1: [ox, dragon, snake],
    2: [tiger, rabbit, horse],
    3: [sheep, rabbit, tiger],
    4: [ox, dragon, monkey],
    5: [rat, snake, rooster],
    6: [horse, dog, pig],
    7: [sheep, dog, pig],
    8: [rat, monkey, rooster],
    9: [ox, rooster, monkey],
    10: [tiger, sheep, dog],
    11: [rabbit, horse, pig]
};

fs.writeFileSync('signcompatibility.json', JSON.stringify({ westernCompatibility: westernCompatibility, easternCompatibility: easternCompatibility}));