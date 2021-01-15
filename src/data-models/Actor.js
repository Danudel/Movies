
class Actor {
    constructor(fname, lname, birthday, img, imdb) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;            // dateString - Date in string format ex: "1981/3/27"
        this.img = img;
        this.imdb = imdb;
    }

    age(dateString) {
            /**
        * Tells you the age from the birthdate
        * return integer The calculated age
        **/
        var today = new Date();
        var birthDate = new Date(this.birthday);
        var currentAge = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            currentAge--;
        }
        return currentAge;
    }
}

export default Actor;



