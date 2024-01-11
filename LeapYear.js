class LeapYear {
    test_leap_year(year) {
        if (year % 4 !== 0) {
            return false;
        }
    }
};

module.exports = LeapYear;