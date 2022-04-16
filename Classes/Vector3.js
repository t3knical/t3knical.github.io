module.exports = class Vector3 {
    constructor(X = 0, Y = 0, Z = 0) {
        this.x = X;
        this.y = Y;
        this.z = Z;
    }

    Magnitude() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
    }

    Normalized() {
        var mag = this.Magnitude();
        return new Vector3(this.x / mag, this.y / mag, this.z / mag);
    }

    Distance(OtherVect = Vector3) {
        var direction = new Vector3;
        direction.x = OtherVect.x - this.x;
        direction.y = OtherVect.y - this.y;
        direction.z = OtherVect.z - this.z;
        return direction.Magnitude();
    }

    ConsoleOutput() {
        return '(' + this.x + ',' + this.y + ',' + this.z + ')';
    }

}

module.exports =  class Quaternion {
    constructor(X = 0, Y = 0, Z = 0, W = 0) {
        this.x = X;
        this.y = Y;
        this.z = Z;
        this.w = W;
    }

    Magnitude() {
        return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z) + (this.w * this.w));
    }

    Normalized() {
        var mag = this.Magnitude();
        return new Vector3(this.x / mag, this.y / mag, this.z / mag, this.w / mag);
    }

    Distance(OtherVect = Quaternion) {
        var direction = new Vector3;
        direction.x = OtherVect.x - this.x;
        direction.y = OtherVect.y - this.y;
        direction.z = OtherVect.z - this.z;
        direction.w = OtherVect.w - this.w;
        return direction.Magnitude();
    }

    ConsoleOutput() {
        return '(' + this.x + ',' + this.y + ',' + this.z + ',' + this.w + ')';
    }
}