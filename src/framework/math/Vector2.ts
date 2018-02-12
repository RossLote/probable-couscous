export class Vector2 {
    data: Float32Array;

    constructor(x?: any, y?: number) {
        if (x) {
            if (x.length === 2) {
                this.data = new Float32Array(x);
            } else {
                this.data = new Float32Array(2);
                this.data[0] = x;
                this.data[1] = y;
            }
        } else {
            this.data = new Float32Array([0,0])
        }
    }

    get x(): number {
        return this.data[0];
    }

    set x(val: number) {
        this.data[0] = val;
    }

    get y(): number {
        return this.data[1];
    }

    set y(val: number) {
        this.data[1] = val;
    }

    static get ONE():Vector2 {
        return new Vector2(1, 1);
    }

    static get RIGHT():Vector2 {
        return new Vector2(1, 0);
    }

    static get UP():Vector2 {
        return new Vector2(0, 1);
    }

    static get ZERO():Vector2 {
        return new Vector2(0, 0);
    }

    add(rhs: Vector2): Vector2{
        let a = this.data,
            b = rhs.data;
        a[0] += b[0]
        a[1] += b[1]
        return this;
    }

    static add(lhs: Vector2, rhs: Vector2): Vector2 {
        let a = lhs.data,
            b = rhs.data;
        return new Vector2(
            a[0] + b[0],
            a[1] + b[1]
        );
    }

    clone(): Vector2{
        return new Vector2().copy(this);
    }

    copy(rhs: Vector2): Vector2{
        let a = this.data,
            b = rhs.data;
        a[0] = b[0];
        a[1] = b[1];
        return this;
    }

    dot(rhs: Vector2): number{
        let a = this.data,
            b = rhs.data;
        return a[0] * b[0] + a[1] * b[1];
    }

    equals(rhs: Vector2): boolean{
        let a = this.data,
            b = rhs.data;
        return a[0] === b[0] && a[1] === b[1];
    }

    lengthSquared(): number{
        let a = this.data;
        return a[0] * a[0] + a[1] * a[1];
    }

    length(): number{
        return Math.sqrt(this.lengthSquared());
    }

    lerp(lhs: Vector2, rhs: Vector2, alpha: number): Vector2{
        let a = lhs.data,
            b = rhs.data,
            r = this.data;

        r[0] = a[0] + alpha * (b[0] - a[0]);
        r[1] = a[1] + alpha * (b[1] - a[1]);

        return this;
    }

    multiply(rhs: Vector2): Vector2{
        let a = this.data,
            b = rhs.data;

        a[0] *= b[0];
        a[1] *= b[1];

        return this;
    }

    static mul2(lhs: Vector2, rhs: Vector2): Vector2{
        let a = lhs.data,
            b = rhs.data;

        return new Vector2(
            a[0] * b[0],
            a[1] * b[1]
        );
    }

    normalize(): Vector2{
        let a = this.data;

        let lengthSquared = this.lengthSquared();
        if (lengthSquared > 0) {
            let inverseLength = 1 / Math.sqrt(lengthSquared);
            a[0] *= inverseLength;
            a[1] *= inverseLength;
        }

        return this;
    }

    scale(scalar: number): Vector2{
        let a = this.data;

        a[0] *= scalar;
        a[1] *= scalar;

        return this;
    }

    set(x: number, y: number): Vector2{
        var a = this.data;

        a[0] = x;
        a[1] = y;

        return this;
    }

    subtract(rhs: Vector2): Vector2{
        var a = this.data,
            b = rhs.data;

        a[0] -= b[0];
        a[1] -= b[1];

        return this;
    }

    static subtract(lhs: Vector2, rhs: Vector2) {
        let a = lhs.data,
            b = rhs.data;
        return new Vector2(
            a[0]-b[0],
            a[1]-b[1]
        );
    }

    toString(): string{
        return `[${this.data[0]}, ${this.data[1]}]`;
    }

    toJSON():Array<number>{
        return Array.prototype.slice.call(this.data);
    }
}
