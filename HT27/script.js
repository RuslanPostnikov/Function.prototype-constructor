function Student(name, surname, birthday) {
    this.name = name;
    this.surname = surname;
    this.birthday = birthday;
    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear();
        }
        })
    // this.calcAge = () => Math.floor((new Date() - birthday)/3.154e+10);
    this.calcAvMark = () =>
        this.allMarks.reduce( (sum, current) =>  sum + current)/this.allMarks.length;
    this.attendance = new Array(10);
    this.allMarks = new Array(10);
    this.present = function () {
            let itemIndex = this.attendance.findIndex(item => item === undefined);
            this.attendance[itemIndex] = true
    }
    this.absent = function () {
        let itemIndex = this.attendance.findIndex(item => item === undefined);
        this.attendance[itemIndex] = false
    };
    this.mark = function (mark) {
        if (mark >= 0 && mark <= 10) {
            let itemIndex = this.allMarks.findIndex(item => item === undefined);
            this.allMarks[itemIndex] = mark
        } else {console.log('Mark must be from 0 till 10')}

    };
    this.calcAvAttendance = () =>
        this.attendance.reduce( (sum, current) =>  sum + current)/this.attendance.length;
    this.sum = function () {
        if (this.calcAvMark() > 9 && this.calcAvAttendance() > 0.9) {
            return 'Ути какой молодчинка!'
        }
        if (this.calcAvMark() > 9 || this.calcAvAttendance() > 0.9) {
            return 'Норм, но можно лучше'
        }
        else return 'Редиска!'
    }
}

let student1 = new Student('Ruslan', 'Postnikov', new Date(1992, 7,2));
    console.log(student1.age);
    student1.mark(10)
student1.mark(10)
student1.mark(10)
student1.mark(10)
student1.mark(10)
student1.mark(10)
student1.mark(10)
student1.mark(10)
student1.mark(10)
student1.mark(10)
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.present()
student1.absent()
student1.absent()

console.log(student1.sum());









