
class Actor {
    constructor(fname, lname, birthday, img, imdb) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday; //starting with year of birth
        this.img = img;
        this.imdb = imdb;
    }
    age() {
        const currentYear = new Date().getFullYear();
        const currentAge = currentYear - this.birthday;
        return currentAge;
    }
}

export default Actor;