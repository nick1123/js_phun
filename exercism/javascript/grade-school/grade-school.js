var School = function() {
    this.rosterList = {};
};

School.prototype.roster = function() {
    return this.rosterList;
};

School.prototype.grade = function(gradeLevel) {
    list = [];
    if (this.rosterList.hasOwnProperty(gradeLevel)) {
        list = this.rosterList[gradeLevel];
    }

    return list;
};

School.prototype.add = function(name, gradeLevel) {
    if (!this.rosterList.hasOwnProperty(gradeLevel)) {
        this.rosterList[gradeLevel] = [];
    }

    this.rosterList[gradeLevel].push(name);
    this.rosterList[gradeLevel] = this.rosterList[gradeLevel].sort();
};

module.exports = School;
