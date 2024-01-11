class LeapYear {
    test_leap_year(year) {
        if (year % 4 !== 0) {
            return false;
        }
        if (year % 400 == 0) {
            return true;
        }
    }
};

module.exports = LeapYear;