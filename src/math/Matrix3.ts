import {Vector2} from './Vector2';

export class Matrix3 {
    data: Float32Array;
    constructor(a?:any, b?:number, c?:number, d?:number, e?:number, f?:number, g?:number, h?:number, i?:number){
        if (a) {
            if (a.length === 9) {
                this.data = new Float32Array(a);
            } else {
                let data = new Float32Array(9);
                data[0] = a
                data[1] = b
                data[2] = c
                data[3] = d
                data[4] = e
                data[5] = f
                data[6] = g
                data[7] = h
                data[8] = i
                this.data = data;
            }
        } else {
            this.data = new Float32Array(9);
            this.setToIdentity()
        }
    }

    static get IDENTITY():Matrix3 {
        return new Matrix3();
    }

    static get ZERO(): Matrix3 {
        return new Matrix3(0,0,0,0,0,0,0,0,0);
    }

    static multiply(matrices: Array<Matrix3>): Matrix3 {
        return Matrix3.IDENTITY;
    }

    static rotate(scalar: number): Matrix3 {
        return Matrix3.IDENTITY;
    }

    static scale(vector: Vector2): Matrix3 {
        return Matrix3.IDENTITY;
    }

    static translate(vector: Vector2): Matrix3 {
        return Matrix3.IDENTITY;
    }

    clone = ():Matrix3 => {
        return new Matrix3().copy(this);
    }

    copy = (rhs: Matrix3):Matrix3 => {
        let a = this.data,
            b = rhs.data;

        a[0] = b[0];
        a[1] = b[1];
        a[2] = b[2];

        a[3] = b[3];
        a[4] = b[4];
        a[5] = b[5];

        a[6] = b[6];
        a[7] = b[7];
        a[8] = b[8];

        return this;
    }

    equals = (rhs: Matrix3):boolean => {
        let a = this.data;
        let b = rhs.data;
        return (
            (a[0] === b[0]) &&
            (a[1] === b[1]) &&
            (a[2] === b[2]) &&
            (a[3] === b[3]) &&
            (a[4] === b[4]) &&
            (a[5] === b[5]) &&
            (a[6] === b[6]) &&
            (a[7] === b[7]) &&
            (a[8] === b[8])
        )
    }

    inverse = ():Matrix3 => {
        return this;
    }

    isIdentity = (): boolean => {
        let a = this.data;
        return (
            (a[0] === 1) &&
            (a[1] === 0) &&
            (a[2] === 0) &&
            (a[3] === 0) &&
            (a[4] === 1) &&
            (a[5] === 0) &&
            (a[6] === 0) &&
            (a[7] === 0) &&
            (a[8] === 1)
        )
    }

    multiply = (value: any): Matrix3 => {
        return this;
    }

    setToIdentity = ():Matrix3 => {
        let d = this.data;
        d[0] = 1
        d[1] = 0
        d[2] = 0

        d[3] = 0
        d[4] = 1
        d[5] = 0

        d[6] = 0
        d[7] = 0
        d[8] = 1
        return this;
    }

    toString = ():string => {
        let a = this.data;
        return `[
        ${a[0]}, ${a[1]}, ${a[2]},
        ${a[3]}, ${a[4]}, ${a[5]},
        ${a[6]}, ${a[7]}, ${a[8]},
        ]`
    }

    transpose = ():Matrix3 => {
        let a = this.data;
        let tmp;

        tmp = a[1]; a[1] = a[3]; a[3] = tmp;
        tmp = a[2]; a[2] = a[6]; a[6] = tmp;
        tmp = a[5]; a[5] = a[7]; a[7] = tmp;

        return this;
    }
}
